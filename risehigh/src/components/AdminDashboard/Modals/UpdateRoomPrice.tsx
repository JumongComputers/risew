import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateBookingStatus } from "@/redux/slices/bookingSlice";
import { ChevronDown, X } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import bookingService from "@/redux/services/bookingService";

interface SetRoomPriceModalProps {
  showModal: boolean;
  onClose: () => void;
}

// Validation schema using Yup
const validationSchema = Yup.object({
  roomType: Yup.string().required("Room Type is required"),
  price: Yup.number().required("Price is required"),
});

const UpdateRoomPrice: React.FC<SetRoomPriceModalProps> = ({ showModal, onClose }) => {
  const dispatch = useDispatch();

  const handleUpdateStatus = async (values: any) => {
    try {
      const roomPriceData = {
        roomType: values.roomType,
        price: values.price,
      };

      await bookingService.updateRoomPrice(roomPriceData);

      onClose();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (!showModal) return null;

  const handleClose = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  const options = [
    { value: "", label: "Select room type" },
    { value: "deluxe", label: "Deluxe" },
    { value: "luxury", label: "Luxury" },
    { value: "king bed suite", label: "King bed suite" },
    { value: "queen bed suite", label: "Queen bed suite" },
  ];

  return (
    <>
      <div id="container" onClick={handleClose} className="fixed inset-0  flex items-center bg-black bg-opacity-50 justify-center z-20">
        <div className="bg-white w-full max-w-4xl  rounded-md shadow-lg overflow-y-auto">
          <div className="flex justify-end pt-4 pr-4">
            <button onClick={() => onClose()}>
              <X />
            </button>
          </div>
          <div className=" overflow-y-auto max-h-[520px]">
            <div className="flex flex-col px-6  items-start w-full">
              <div
                className="
                  flex flex-col items-start lg:place-items-start 
                  w-full md:py-8 
                "
              >
                {/* Formik form */}
                <Formik
                  initialValues={{
                    roomType: "",
                    price: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleUpdateStatus}
                >
                  <Form
                    className="
                      flex flex-col text-start w-full   
                      mb-6 lg:mb-0  pb-8
                    "
                  >
                    <span className="text-[#19202C] text-3xl font-bold ">Update Booking Status</span>
                    <div className="w-full grid gap-4 lg:gap-6 mb-6  mt-12 ">
                      <div className="flex flex-col w-full">
                        <label htmlFor="roomType" className="text-[#19202C] text-2xl mb-2">
                          Room Type
                        </label>
                        <Field
                          as="select"
                          name="roomType"
                          className="
                            py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                            block appearance-none text-xl
                          "
                        >
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage name="status" component="div" className="text-red-500 text-xl" />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="price" className="text-[#19202C] text-2xl mb-2">
                          Price
                        </label>
                        <Field
                          type="number"
                          name="price"
                          className="
                            py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                            placeholder-gray-200::placeholder placeholder-opacity-75 text-xl
                          "
                          placeholder="Enter Room Number"
                        />
                        <ErrorMessage name="roomNo" component="div" className="text-red-500 text-xl" />
                      </div>

                      <div className=" flex justify-between items-center pt-8 ">
                        <button
                          onClick={() => onClose()}
                          className="
                            border border-[#0D60D8] py-4  text-[#0D60D8] rounded-md
                            font-bold text-2xl focus:outline-none px-12 bg-white 
                          "
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="
                            bg-[#0D60D8] py-4  text-white rounded-md
                            font-bold text-2xl px-6 focus:outline-none 
                          "
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateRoomPrice;
