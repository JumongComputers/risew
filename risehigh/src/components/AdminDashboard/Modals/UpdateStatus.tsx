import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateBookingStatus } from "@/redux/slices/bookingSlice";
import { ChevronDown, X } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface UpdateStatusModalProps {
  showModal: boolean;
  onClose: () => void;
  bookingId?: string;
}

// Validation schema using Yup
const validationSchema = Yup.object({
  status: Yup.string().required("Status is required"),
  roomNo: Yup.number().required("Room Number is required"),
});

const UpdateStatusModal: React.FC<UpdateStatusModalProps> = ({ showModal, onClose, bookingId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: { booking: { loading: string } }) => state.booking.loading);

  const handleUpdateStatus = async (values: any, { setSubmitting }: any) => {
    try {
      const id = bookingId || "";
      const bookingData = {
        status: values.status,
        roomNo: values.roomNo,
      };

      await dispatch(updateBookingStatus({ bookingId: id, bookingData }) as any);

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
    { value: "", label: "Select status" },
    { value: "booked", label: "Booked" },
    { value: "reserved", label: "Reserved" },
    { value: "avaialable", label: "Available" },
    { value: "unavailable", label: "Unavailble" },
    { value: "in use", label: "In Use" },
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
                    status: "",
                    roomNo: "",
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
                        <label htmlFor="status" className="text-[#19202C] text-2xl mb-2">
                          Status
                        </label>
                        <Field
                          as="select"
                          name="status"
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
                        <label htmlFor="roomNo" className="text-[#19202C] text-2xl mb-2">
                          Room Number
                        </label>
                        <Field
                          type="number"
                          name="roomNo"
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
                          {isLoading === "pending" ? "Loading..." : "Update Status"}
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

export default UpdateStatusModal;
