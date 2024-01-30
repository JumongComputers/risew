import React, { useState, Fragment, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight, Pencil, Search } from "lucide-react";
import AddAdminModal from "../Modals/AddAdminModal";
import EditAdminModal from "../Modals/EditAdminModal";
import DeleteUserModal from "../Modals/DeleteUserModal";
import { AddAdminTypes } from "@/types/admin";

interface StaffDetailsProps {
  staffs: AddAdminTypes[];
}

const StaffDetails: React.FC<StaffDetailsProps> = ({ staffs }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const indexOfLastUser = (currentPage + 1) * itemsPerPage;
  const indexOfFirstUser = currentPage * itemsPerPage;
  const currentItems = staffs?.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageClick = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };

  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className="px-4 py-6 font-[DM Sans] hidden lg:block">
        <div className="flex justify-between items-center ">
          <div className="flex gap-6 items-center mb-6">
            <form onSubmit={handleSubmit} className=" flex items-center">
              <div className="relative ">
                <input
                  type="search"
                  name="search"
                  placeholder="Search staff"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ boxShadow: "0px 9px 17px rgba(0, 0, 0, 0.07)" }}
                  className="bg-white text-[#19202C] h-16 px-5 pl-16 rounded-md 
              text-lg focus:outline-none w-[320px] "
                />
                <button type="submit" className="absolute left-0 top-0 mt-3 ml-4">
                  <Search className="text-gray-400 h-8 w-8" />
                </button>
              </div>
            </form>
          </div>
          <button onClick={() => setShowAddModal(true)} className="bg-[#0D60D8] text-white text-lg rounded-md px-6 py-2">
            + Add admin
          </button>
        </div>

        <div style={{ boxShadow: "2px 8px 24px rgba(12, 33, 50, 0.08)" }} className="bg-white rounded-md  ">
          <div className="p-4 w-full  overflow-x-auto pt-16 ">
            {staffs?.length === 0 ? (
              <span>-- No StaffFound ...</span>
            ) : (
              <table className="w-full  text-sm">
                <thead style={{ boxShadow: "0px 0px 54px rgba(12, 33, 50, 0.08)" }} className="text-[#0D60D8] text-xl   ">
                  <tr className="">
                    <th className="py-3">First name</th>
                    <th className="py-3">Last name</th>
                    <th className="py-3">Email</th>
                    <th className="py-3">Role</th>
                    <th className="py-3">Action</th>
                    <th className="py-3">More</th>
                  </tr>
                </thead>

                <tbody>
                  {currentItems.map((staff) => {
                    const { _id, email, firstName, lastName, role } = staff;

                    return (
                      <Fragment key={_id}>
                        <tr className="text-center border-b border-[#E0E0E0] text-xl ">
                          <td className="py-3 px-6">{firstName}</td>
                          <td className="py-3 px-6">{lastName}</td>
                          <td className="py-3 px-6">{email}</td>
                          <td className="py-3 px-6">{role}</td>
                          <td className="flex items-center py-3 justify-center gap-2 text-[#1B75BB] ">
                            <button
                              onClick={() => {
                                setSelectedAdminId(_id as string);
                                setShowEdit(true);
                              }}
                              disabled={role === "admin"}
                              className={`hover:text-[#1a183e] ${role === "admin" ? "cursor-not-allowed  opacity-50" : ""}`}
                            >
                              <Pencil />
                            </button>
                            <span className="font-normal text-xl">Edit</span>
                          </td>
                          <td className="py-3 text-[#FF0802] px-6">
                            {role !== "admin" ? (
                              <button
                                onClick={() => {
                                  setSelectedAdminId(_id as string);
                                  setShowModal(true);
                                }}
                              >
                                Delete
                              </button>
                            ) : (
                              <button disabled className="cursor-not-allowed opacity-50">
                                Delete
                              </button>
                            )}
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
                {selectedAdminId && (
                  <EditAdminModal
                    id={selectedAdminId}
                    visible={showEdit}
                    onClose={() => {
                      setSelectedAdminId("");
                      setShowEdit(false);
                    }}
                  />
                )}
                {selectedAdminId && (
                  <DeleteUserModal
                    id={selectedAdminId}
                    visible={showModal}
                    onClose={() => {
                      setSelectedAdminId("");
                      setShowModal(false);
                    }}
                  >
                    <div className="flex flex-col items-center justify-center gap-5">
                      <h1 className="text-[#FF1010] font-bold text-3xl ">Delete User</h1>
                      <p className="text-[#676869] font-normal text-2xl ">Are you sure you want to delete this user?</p>
                    </div>
                  </DeleteUserModal>
                )}
              </table>
            )}
          </div>
        </div>

        <div className="flex flex-row gap-2 justify-end w-full items-start mt-12">
          <ReactPaginate
            previousLabel={
              <span
                className={`border-solid border-[#7a7a7a] bg-white flex flex-col w-12 h-12 text-center shrink-0 items-center py-2 border rounded ${
                  currentPage === 0 ? "cursor-not-allowed opacity-50" : ""
                }`}
                onClick={() => currentPage > 0 && handlePageClick({ selected: currentPage - 1 })}
              >
                <ChevronLeft />
              </span>
            }
            nextLabel={
              <span
                className={`border-solid border-[#7a7a7a] ${
                  !currentItems ? "cursor-not-allowed opacity-50" : ""
                } bg-white flex flex-col w-12 h-12 text-center shrink-0 items-center py-2 border rounded`}
                onClick={() => currentItems && handlePageClick({ selected: currentPage + 1 })}
              >
                <ChevronRight />
              </span>
            }
            breakLabel={"..."}
            pageCount={Math.ceil(staffs?.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="flex gap-2 items-center justify-center mt-8 mb-4"
            activeClassName="bg-[#d8e4ff]"
            pageClassName="border-solid border-[#7a7a7a] bg-white flex flex-col w-12 h-12 text-center shrink-0 items-center py-1 gap-2 border rounded  font-bold leading-[20px] text-[#1a183e] text-xl font-montserrat"
          />
        </div>
      </div>
      <AddAdminModal visible={showAddModal} onClose={() => setShowAddModal(false)} />
    </Fragment>
  );
};

export default StaffDetails;
