import { updateAdmin } from "@/redux/slices/adminSlice";
import { RootState } from "@/redux/store/store";
import { AddAdminTypes } from "@/types/admin";
import { ChevronDown, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface EditAdminModalProps {
  visible: boolean;
  onClose: () => void;
  id: string;
}

const EditAdminModal: React.FC<EditAdminModalProps> = ({ visible, onClose, id }) => {
  const dispatch = useDispatch();
  const staffs = useSelector((state: RootState) => state.admin.admins);
  const loading = useSelector((state: RootState) => state.admin.loading);
  const singleAdmin = staffs.find((item) => item._id == id);
  // const [admin, setAdmin] = useState<AddAdminTypes>(singleAdmin as AddAdminTypes);
  const [admin, setAdmin] = useState<AddAdminTypes>({
    ...singleAdmin,
    role: singleAdmin?.role || "",
    status: singleAdmin?.status || "",
  } as AddAdminTypes);

  console.log("ID:", id);

  useEffect(() => {
    setAdmin(singleAdmin as AddAdminTypes);
  }, [singleAdmin]);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setAdmin((prevAdmin) => ({ ...prevAdmin!, [name]: value }));
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({
      ...prevAdmin!,
      [name]: value,
    }));
  };

  // For the select elements, handle them separately
  const handleSelectChange = (name: string, value: string) => {
    setAdmin((prevAdmin) => ({
      ...prevAdmin!,
      [name]: value,
    }));
  };

  const options = [
    { value: "", label: "Select role" },
    { value: "admin", label: "Admin" },
    { value: "receptionist", label: "Receptionist" },
    { value: "supervisor", label: "Supervisor" },
    { value: "manager", label: "Manager" },
  ];

  const statusOptions = [
    { value: "", label: "Select status" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const editAdmin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(updateAdmin({ adminId: id, updatedAdminData: admin }) as any);

    // onClose();
  };

  if (!visible || !admin) return null;

  const handleClose = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

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
                <form
                  onSubmit={editAdmin}
                  className="
                  flex flex-col text-start w-full   
                  mb-6 lg:mb-0  pb-8
                  "
                >
                  <span className="text-[#19202C] text-3xl font-bold ">Edit Admin</span>
                  <div className="w-full grid gap-4 lg:gap-6 mb-6  mt-12 ">
                    <div className="flex flex-col w-full">
                      <label htmlFor="role" className="text-[#19202C] text-2xl mb-2">
                        Role
                      </label>
                      <div className="relative  inline-block">
                        <select
                          className="
                      py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                      block appearance-none text-xl
                      "
                          value={admin?.role}
                          onChange={(e) => handleSelectChange("role", e.target.value)}
                          name="role"
                        >
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div
                          className="
                      pointer-events-none absolute inset-y-0 right-0
                      flex items-center px-2 text-[#676869]
                      "
                        >
                          <ChevronDown className="fill-current h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="firstName" className="text-[#19202C] text-2xl mb-2">
                        First name
                      </label>
                      <input
                        value={admin?.firstName}
                        onChange={handleInputChange}
                        name="firstName"
                        type="text"
                        className="
                      py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                      placeholder-gray-200::placeholder placeholder-opacity-75 text-xl
                      "
                        placeholder="Enter first name"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="lastName" className="text-[#19202C] text-2xl mb-2">
                        Last name
                      </label>
                      <input
                        value={admin?.lastName}
                        onChange={handleInputChange}
                        name="lastName"
                        type="text"
                        className="
                          py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75 text-xl
                          "
                        placeholder="Enter last name"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="email" className="text-[#19202C] text-2xl mb-2">
                        Email
                      </label>
                      <input
                        value={admin?.email}
                        onChange={handleInputChange}
                        name="email"
                        type="text"
                        className="
                          py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                          placeholder-gray-200::placeholder placeholder-opacity-75 text-xl
                          "
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label htmlFor="status" className="text-[#19202C] text-2xl mb-2">
                        Status
                      </label>
                      <div className="relative  inline-block">
                        <select
                          className="
                      py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                      block appearance-none text-xl
                      "
                          value={admin?.status}
                          onChange={(e) => handleSelectChange("status", e.target.value)}
                          name="status"
                        >
                          {statusOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div
                          className="
                      pointer-events-none absolute inset-y-0 right-0
                      flex items-center px-2 text-[#676869]
                      "
                        >
                          <ChevronDown className="fill-current h-6 w-6" />
                        </div>
                      </div>
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
                        className="
                    bg-[#0D60D8] py-4  text-white rounded-md
                    font-bold text-2xl px-6 focus:outline-none 
                    "
                      >
                        {loading === "pending" ? "Loading..." : "Update Admin"}
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

export default EditAdminModal;
