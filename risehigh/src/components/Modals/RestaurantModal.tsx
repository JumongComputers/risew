import { X } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { createRestaurantBooking } from "@/redux/slices/restaurantSlice";
import { RestaurantTypes } from "@/types/restaurant";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addRestaurantSchema } from "@/utils/yupValidation";
import { useSelector } from "react-redux";

interface RestaurantModalProps {
  visible: boolean;
  onClose: () => void;
}

const RestaurantModal: React.FC<RestaurantModalProps> = ({ visible, onClose }) => {
  const isLoading = useSelector((state: { restaurant: { loading: string } }) => state.restaurant.loading);
  const dispatch = useDispatch();

  if (!visible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  return (
    <>
      {visible && (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
          }}
          validationSchema={addRestaurantSchema}
          onSubmit={(values: any) => {
            console.log("Form submitted with values:", values);
            dispatch(createRestaurantBooking(values as RestaurantTypes) as any);
            // onClose();
          }}
        >
          <Form>
            <div id="container" onClick={handleClose} className="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-20">
              <div className="bg-white w-full max-w-4xl rounded-md shadow-lg overflow-y-auto">
                <div className="flex justify-end pt-4 pr-4">
                  <button onClick={() => onClose()}>
                    <X />
                  </button>
                </div>
                <div className="overflow-y-auto max-h-[520px]">
                  <div className="flex flex-col px-6 items-start w-full">
                    <div className="flex flex-col items-start lg:place-items-start w-full md:py-8 ">
                      <span className="text-[#19202C] text-4xl font-bold">Book restaurant</span>
                      <div className="w-full grid gap-4 lg:gap-6 mb-6 mt-12 ">
                        <div className="flex flex-col">
                          <label htmlFor="firstname" className="text-[#19202C] text-2xl mb-2">
                            First name
                          </label>
                          <Field
                            name="firstName"
                            type="text"
                            className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                              placeholder-gray-200::placeholder placeholder-opacity-75
                              border-2 focus:border-[#0D60D8] text-xl"
                            placeholder="Enter first name"
                          />
                          <ErrorMessage name="firstName" component="div" className="text-red-600" />
                        </div>
                        <div className="flex flex-col w-full">
                          <label htmlFor="lastname" className="text-[#19202C] text-2xl mb-2">
                            Last name
                          </label>
                          <Field
                            name="lastName"
                            type="text"
                            className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                              placeholder-gray-200::placeholder placeholder-opacity-75
                              border-2 focus:border-[#0D60D8] text-xl"
                            placeholder="Enter last name"
                          />
                          <ErrorMessage name="lastName" component="div" className="text-red-600" />
                        </div>
                        <div className="flex flex-col w-full">
                          <label htmlFor="email" className="text-[#19202C] text-2xl mb-2">
                            Email
                          </label>
                          <Field
                            name="email"
                            type="text"
                            className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                              placeholder-gray-200::placeholder placeholder-opacity-75
                              border-2 focus:border-[#0D60D8] text-xl"
                            placeholder="Enter email"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-600" />
                        </div>
                        <div className="flex flex-col w-full">
                          <label htmlFor="phoneNumber" className="text-[#19202C] text-2xl mb-2">
                            Phone number
                          </label>
                          <Field
                            name="phoneNumber"
                            type="text"
                            className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                              placeholder-gray-200::placeholder placeholder-opacity-75
                              border-2 focus:border-[#0D60D8] text-xl"
                            placeholder="Enter phone number"
                          />
                          <ErrorMessage name="phoneNumber" component="div" className="text-red-600" />
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor="message" className="text-[#19202C] text-2xl mb-2">
                            Message
                          </label>
                          <Field
                            name="message"
                            as="textarea"
                            className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                              placeholder-gray-200::placeholder placeholder-opacity-75
                              border-2 focus:border-[#0D60D8] text-xl"
                            placeholder="Enter the details of your booking here"
                          />
                          <ErrorMessage name="message" component="div" className="text-red-600" />
                        </div>
                        <div className="flex justify-between items-center pt-8">
                          <button
                            onClick={() => onClose()}
                            className="border border-[#0D60D8] py-4 text-[#0D60D8] rounded-md
                              font-bold text-2xl focus:outline-none px-12 bg-white"
                          >
                            Cancel
                          </button>
                          <button type="submit" className="bg-[#0D60D8] py-4 text-white rounded-md font-bold text-2xl px-6 focus:outline-none">
                            {isLoading === "pending" ? "Loading..." : "Book Restaurant"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default RestaurantModal;
