import React, { useState, Fragment, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight, Eye, MoveLeft, Pencil, Search } from "lucide-react";
import AddAdminModal from "../Modals/AddAdminModal";
import EditAdminModal from "../Modals/EditAdminModal";
import DeleteUserModal from "../Modals/DeleteUserModal";
import { RestaurantTypes } from "@/types/restaurant";

interface StaffDetailsProps {
  restaurant: RestaurantTypes[];
}

const RestaurantDetails: React.FC<StaffDetailsProps> = ({ restaurant }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const [showForm, setShowForm] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantTypes | null>(null);

  const itemsPerPage = 5;

  const indexOfLastUser = (currentPage + 1) * itemsPerPage;
  const indexOfFirstUser = currentPage * itemsPerPage;
  const currentItems = restaurant?.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageClick = (selected: { selected: number }) => {
    setCurrentPage(selected.selected);
  };

  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState("");

  const handleViewRestaurantClick = (item: RestaurantTypes) => {
    setSelectedRestaurant(item);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      {showForm ? (
        <div className="bg-white p-8 rounded-md my-20">
          <button onClick={() => setShowForm(false)} className="mb-4 flex items-center gap-4 text-blue-500 text-4xl cursor-pointer">
            <MoveLeft /> Back
          </button>
          <h2 className="text-6xl flex items-center justify-center">Restaurant Details Form</h2>
          <div className="flex flex-col gap-4 items-center py-12 text-4xl">
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center p-3">
              <span className="text-black font-bold">First Name:</span>
              <span className="text-[#828282]">{selectedRestaurant?.firstName}</span>
            </div>
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center l p-3">
              <span className="text-black font-bold">Last Name:</span>
              <span className="text-[#828282]">{selectedRestaurant?.lastName}</span>
            </div>
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center  p-3">
              <span className="text-black font-bold">Phone Number:</span>
              <span className="text-[#828282]">{selectedRestaurant?.phoneNumber}</span>
            </div>
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center  p-3">
              <span className="text-black font-bold">Message:</span>
              <span className="text-[#828282]">{selectedRestaurant?.message}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4 py-6 font-[DM Sans]">
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

          <div style={{ boxShadow: "2px 8px 24px rgba(12, 33, 50, 0.08)" }} className="bg-white rounded-md  ">
            <div className="p-4 w-full  overflow-x-auto pt-16 ">
              {restaurant?.length === 0 ? (
                <span>-- No Restaurant Found ...</span>
              ) : (
                <table className="w-full  text-sm">
                  <thead style={{ boxShadow: "0px 0px 54px rgba(12, 33, 50, 0.08)" }} className="text-[#0D60D8] text-xl   ">
                    <tr className="">
                      <th className="py-3">First name</th>
                      <th className="py-3">Last name</th>
                      <th className="py-3">Email</th>
                      <th className="py-3">Phone Number</th>
                      <th className="py-3">Action</th>
                      <th className="py-3">More</th>
                    </tr>
                  </thead>

                  <tbody>
                    {currentItems.map((item: RestaurantTypes) => {
                      return (
                        <Fragment key={item._id}>
                          <tr className="text-center border-b border-[#E0E0E0] text-xl ">
                            <td className="py-3 px-6">{item.firstName}</td>
                            <td className="py-3 px-6">{item.lastName}</td>
                            <td className="py-3 px-6">{item.email}</td>
                            <td className="py-3 px-6">{item.phoneNumber}</td>
                            <td className="py-3 px-6 text-[#1B75BB] ">
                              <button onClick={() => handleViewRestaurantClick(item)} className="font-normal px-2 text-black">
                                <Eye />
                              </button>
                            </td>
                            <td className="py-3 text-[#FF0802] px-6">
                              <button
                                onClick={() => {
                                  setSelectedAdminId(item._id as string);
                                  setShowModal(true);
                                }}
                              >
                                Delete
                              </button>
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
              pageCount={Math.ceil(restaurant?.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="flex gap-2 items-center justify-center mt-8 mb-4"
              activeClassName="bg-[#d8e4ff]"
              pageClassName="border-solid border-[#7a7a7a] bg-white flex flex-col w-12 h-12 text-center shrink-0 items-center py-1 gap-2 border rounded  font-bold leading-[20px] text-[#1a183e] text-xl font-montserrat"
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default RestaurantDetails;
