import { ChevronDown, Eye, EyeOff, X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAdmin } from "@/redux/slices/adminSlice";
import { AddAdminTypes } from "@/types/admin";
import { useFormik } from "formik";
import { adminValidationSchema } from "@/utils/yupValidation";
import { useSelector } from "react-redux";

interface AddAdminModalProps {
  visible: boolean;
  onClose: () => void;
}

const AddAdminModal: React.FC<AddAdminModalProps> = ({ visible, onClose }) => {
  const isLoading = useSelector((state: { admin: { loading: string } }) => state.admin.loading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      role: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema: adminValidationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      dispatch(addAdmin(values as AddAdminTypes) as any);
    },
  });

  // show password toggle
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const options = [
    { value: "", label: "Select role" },
    { value: "receptionist", label: "Receptionist" },
    { value: "supervisor", label: "Supervisor" },
    { value: "manager", label: "Manager" },
  ];

  if (!visible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  return (
    <>
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
                <form onSubmit={formik.handleSubmit} className="flex flex-col text-start w-full mb-6 lg:mb-0 pb-8">
                  <span className="text-[#19202C] text-4xl font-bold">Add Staff</span>
                  <div className="w-full grid gap-4 lg:gap-6 mb-6 mt-12 ">
                    <div className="flex flex-col w-full">
                      <label htmlFor="role" className="text-[#19202C] text-2xl mb-2">
                        Role
                      </label>
                      <div className="relative inline-block">
                        <select
                          className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          block appearance-none border-2 text-xl focus:border-[#0D60D8]"
                          value={formik.values.role}
                          onChange={formik.handleChange}
                          name="role"
                        >
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#676869]">
                          <ChevronDown />
                        </div>
                      </div>
                      {formik.errors.role && formik.touched.role && <div className="text-red-500">{formik.errors.role}</div>}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="firstname" className="text-[#19202C] text-2xl mb-2">
                        First name
                      </label>
                      <input
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter first name"
                      />
                      {formik.errors.firstName && formik.touched.firstName && <div className="text-red-500">{formik.errors.firstName}</div>}
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="lastname" className="text-[#19202C] text-2xl mb-2">
                        Last name
                      </label>
                      <input
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter last name"
                      />
                      {formik.errors.lastName && formik.touched.lastName && <div className="text-red-500">{formik.errors.lastName}</div>}
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="email" className="text-[#19202C] text-2xl mb-2">
                        Email
                      </label>
                      <input
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter email"
                      />
                      {formik.errors.email && formik.touched.email && <div className="text-red-500">{formik.errors.email}</div>}
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="password" className="text-[#19202C] text-2xl mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          name="password"
                          type={open === false ? "password" : "text"}
                          required
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                            placeholder-gray-200::placeholder placeholder-opacity-75
                            border-2 focus:border-[#0D60D8] text-xl"
                          placeholder="Enter your password"
                        />
                        <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
                          {open === false ? <Eye onClick={toggle} width={20} height={20} /> : <EyeOff onClick={toggle} width={20} height={20} />}
                        </div>
                      </div>
                      {formik.errors.password && formik.touched.password && <div className="text-red-500">{formik.errors.password}</div>}
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="phoneNumber" className="text-[#19202C] text-2xl mb-2">
                        Phone number
                      </label>
                      <input
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        type="text"
                        className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75
                          border-2 focus:border-[#0D60D8] text-xl"
                        placeholder="Enter phone number"
                      />
                      {formik.errors.phoneNumber && formik.touched.phoneNumber && <div className="text-red-500">{formik.errors.phoneNumber}</div>}
                    </div>
                    <div className="flex justify-between items-center pt-8 ">
                      <button
                        onClick={() => onClose()}
                        className="border border-[#0D60D8] py-4 text-[#0D60D8] rounded-md
                          font-bold text-2xl focus:outline-none px-12 bg-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#0D60D8] py-4 text-white rounded-md
                          font-bold text-2xl px-6 focus:outline-none"
                      >
                        {isLoading === "pending" ? "Loading..." : " Add Staff"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAdminModal;
