import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import HomeHeader from "./HomeHeader";
import Overview from "./Overview";
import Nav from "./Nav";
import SearchInput from "../SubAdmin/Search";
import { ChevronLeft, ChevronRight, Eye, MoveLeft } from "lucide-react";
import ViewBookingModal from "../Modals/viewBookingModal";
import { BookingTypes } from "@/types/booking";
import axios from "axios";
import { baseApi } from "@/redux/services/authService";
import DeleteBookingModal from "../Modals/DeleteBooking";
import UpdateStatusModal from "../Modals/UpdateStatus";
import SetRoomPrice from "../Modals/SetRoomPrice";
import UpdateRoomPrice from "../Modals/UpdateRoomPrice";

interface BookingTableProps {
  bookings: BookingTypes[];
  overviews: any;
}

const AdminList: React.FC<BookingTableProps> = ({ bookings, overviews }) => {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(0);

  const [bookingPage, setBookingPage] = useState<BookingTypes[]>(bookings);

  const [showForm, setShowForm] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<BookingTypes | null>(null);

  console.log("page bookings:", bookingPage);

  // Calculate pagination
  const indexOfLastBooking = currentPage + 1;
  const indexOfFirstBooking = currentPage;
  // const currentItems = bookings?.slice(indexOfFirstBooking, indexOfLastBooking);

  const currentItems = bookingPage.length > 0 ? bookingPage : [];

  // Determine if there are more pages
  const hasMorePages = indexOfLastBooking < bookings?.length;

  const fetchDataForPage = async (pageNumber: number) => {
    try {
      const response = await axios.get(`${baseApi}/booking?page=${pageNumber}`);
      console.log("pageData:", response);
      // const data = await response.data;

      setBookingPage(response.data.data.data.booking);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetchDataForPage(currentPage + 1);
  }, [currentPage, bookings]);

  // Handle pagination change
  const handlePageClick = async (selected: { selected: number }) => {
    setCurrentPage(selected.selected);

    // Fetch data for the new page from the backend
    await fetchDataForPage(selected.selected + 1);
  };

  const handleViewBookingClick = (item: BookingTypes) => {
    setSelectedBooking(item);
    setShowForm(true);
  };

  const [showModal, setShowModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showUpdateStatusModal, setShowUpdateStatusModal] = useState(false);
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [showUpdateRoomModal, setShowUpdateRoomModal] = useState(false);

  const handleUpdateStatusClick = () => {
    setShowUpdateStatusModal(true);
  };

  const handleUpdateRoomClick = () => {
    setShowUpdateRoomModal(true);
  };

  const [selectedBookingId, setSelectedBookingId] = useState("");

  return (
    <div className="px-6">
      {showForm ? (
        <div className="bg-white p-8 rounded-md my-20">
          <button onClick={() => setShowForm(false)} className="mb-4 flex items-center gap-4 text-blue-500 text-4xl cursor-pointer">
            <MoveLeft /> Back
          </button>
          <h2 className="text-6xl flex items-center justify-center">Booking Details Form</h2>
          <div className="flex flex-col gap-4 items-center py-12 text-4xl">
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center p-3">
              <span className="text-black font-bold">First Name:</span>
              <span className="text-[#828282]">{selectedBooking?.firstName}</span>
            </div>
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center l p-3">
              <span className="text-black font-bold">Last Name:</span>
              <span className="text-[#828282]">{selectedBooking?.lastName}</span>
            </div>
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center  p-3">
              <span className="text-black font-bold">Room Type:</span>
              <span className="text-[#828282]">{selectedBooking?.roomType}</span>
            </div>
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center  p-3">
              <span className="text-black font-bold">Status:</span>
              <span className="text-[#828282]">{selectedBooking?.status}</span>
            </div>
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center  p-3">
              <span className="text-black font-bold">Check In:</span>
              <span className="text-[#828282]">{selectedBooking?.checkIn}</span>
            </div>
            <div className="bg-[#F2F7FF] text-2xl w-[60vw] px-8 flex justify-between items-center  p-3">
              <span className="text-black font-bold">Check Out:</span>
              <span className="text-[#828282]">{selectedBooking?.checkOut}</span>
            </div>
            <div className="bg-[#F2F7FF] w-[60vw] flex px-8 justify-between items-center  p-3">
              <span className="text-black font-bold">Payment Status:</span>
              <span className="text-[#828282]">{selectedBooking?.paymentStatus}</span>
            </div>
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center  p-3">
              <span className="text-black font-bold">Payment Ref:</span>
              <span className="text-[#828282]">{selectedBooking?.paymentRef}</span>
            </div>
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center  p-3">
              <span className="text-black font-bold">Transaction Id:</span>
              <span className="text-[#828282]">{selectedBooking?.tranxId}</span>
            </div>
            <div className="bg-[#F2F7FF] w-[60vw] px-8 flex justify-between items-center  p-3">
              <span className="text-black font-bold">Room Number:</span>
              <span className="text-[#828282]">{selectedBooking?.roomNo || null}</span>
            </div>
          </div>

          <button
            className="bg-blue-500 flex items-center justify-center text-white w-1/2 text-4xl py-2 px-4 mx-auto rounded-md my-12"
            onClick={handleUpdateStatusClick}
          >
            Update Status
          </button>

          {/* <button
              className="bg-blue-500 flex items-center justify-center text-white w-1/2 text-4xl py-2 px-4 mx-auto rounded-md my-12"
              onClick={handleUpdateRoomClick}
            >
              Update Room Price
            </button> */}

          <UpdateStatusModal showModal={showUpdateStatusModal} bookingId={selectedBooking?._id} onClose={() => setShowUpdateStatusModal(false)} />
          <UpdateRoomPrice showModal={showUpdateRoomModal} onClose={() => setShowUpdateRoomModal(false)} />
        </div>
      ) : (
        <div>
          <div className="font-dm w-full md:bg-transparent">
            <div className="flex justify-between items-center px-4 py-6 ">
              <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
              <Nav />
            </div>
          </div>
          <HomeHeader />
          <Overview overviews={overviews} />
          <div className="px-4 py-6 font-[DM Sans] hidden lg:block ">
            <div style={{ boxShadow: "2px 8px 24px rgba(12, 33, 50, 0.08)" }} className="bg-white rounded-md  ">
              <div className="p-4 w-full  overflow-x-auto ">
                <div className="text-black text-3xl font-bold py-4 w-full pb-5 border-b border-[#E0E0E0]">
                  <h3>Recent Bookings</h3>
                </div>

                <div>
                  {bookings?.length === 0 ? (
                    <span>-- No Booking Found...</span>
                  ) : (
                    <table className="w-full">
                      <thead style={{ boxShadow: "0px 0px 54px rgba(12, 33, 50, 0.08)" }} className="text-[#0D60D8] text-xl ">
                        <tr className="">
                          <th className="py-3">First name</th>
                          <th className="py-3">Last name</th>
                          <th className="py-3">Email</th>
                          <th className="py-3">Room type</th>
                          <th className="py-3">Status</th>
                          <th className="py-3">Action</th>
                          <th className="py-3">More</th>
                        </tr>
                      </thead>

                      <tbody>
                        {bookingPage &&
                          currentItems.map((item: BookingTypes) => {
                            return (
                              <tr key={item?._id} className="text-xl text-center border-b border-[#E0E0E0] ">
                                <td className="py-3 px-12">{item?.firstName}</td>
                                <td className="py-3 px-12">{item?.lastName}</td>
                                <td className="py-3 px-12">{item?.email}</td>
                                <td className="py-3 px-12">{item?.roomType}</td>

                                <td className="py-4">
                                  {item?.status === "pending" && (
                                    <button className="text-[#F2994A] bg-[#F3EEDE] rounded-2xl font-bold py-3 px-12 text-xl">{item.status}</button>
                                  )}
                                  {item?.status === "booked" && (
                                    <button className="text-[#0D60D8] bg-[#F5F5F5] rounded-2xl font-bold py-3 px-12 text-xl">{item.status}</button>
                                  )}
                                  {item?.status === "avaialable" && (
                                    <button className="text-[#00FF00] bg-[#00FF00] bg-opacity-10 rounded-2xl font-bold py-3 px-12 text-xl">
                                      {item?.status}
                                    </button>
                                  )}
                                  {item?.status === "unavailable" && (
                                    <button className="text-[#FF0000] bg-[#FF0000] bg-opacity-10 rounded-2xl font-bold py-3 px-12 text-xl">
                                      {item?.status}
                                    </button>
                                  )}
                                  {item?.status === "in use" && (
                                    <button className="text-[#000000] bg-[#000000] bg-opacity-10 rounded-2xl font-bold py-3 px-12 text-xl">
                                      {item?.status}
                                    </button>
                                  )}
                                  {item?.status === "reserved" && (
                                    <button className="text-[#8A2BE2] bg-[#8A2BE2] bg-opacity-10 rounded-2xl font-bold py-3 px-12 text-xl">
                                      {item?.status}
                                    </button>
                                  )}
                                  {/* {item.status === "pending" ? <StatusMenu id={item._id as string} /> : null} */}
                                </td>

                                <td className="py-3 px-12 ">
                                  <button onClick={() => handleViewBookingClick(item)} className="font-normal px-2 text-black">
                                    <Eye />
                                  </button>
                                </td>
                                <td className="py-3 text-[#FF0802] px-12">
                                  <button
                                    onClick={() => {
                                      setSelectedBookingId(item._id as string);
                                      setOpenModal(true);
                                    }}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                      {selectedBookingId && (
                        <ViewBookingModal
                          id={selectedBookingId ? selectedBookingId.toString() : ""}
                          visible={showModal}
                          onClose={() => {
                            setSelectedBookingId("");
                            setShowModal(false);
                          }}
                        />
                      )}
                      {selectedBookingId && (
                        <DeleteBookingModal
                          id={selectedBookingId}
                          visible={openModal}
                          onClose={() => {
                            setSelectedBookingId("");
                            setShowModal(false);
                          }}
                        >
                          <div className="flex flex-col items-center justify-center gap-5">
                            <h1 className="text-[#FF1010] font-bold text-3xl ">Delete Booking</h1>
                            <p className="text-[#676869] font-normal text-2xl ">Are you sure you want to delete this booking?</p>
                          </div>
                        </DeleteBookingModal>
                      )}
                    </table>
                  )}
                </div>
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
                      !hasMorePages ? "cursor-not-allowed opacity-50" : ""
                    } bg-white flex flex-col w-12 h-12 text-center shrink-0 items-center py-2 border rounded`}
                    onClick={() => hasMorePages && handlePageClick({ selected: currentPage + 1 })}
                  >
                    <ChevronRight />
                  </span>
                }
                breakLabel={"..."}
                // breakClassName={"break-me"}
                pageCount={Math.ceil(bookings?.length)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="flex gap-2 items-center justify-center mt-8 mb-4"
                activeClassName="bg-[#d8e4ff]"
                pageClassName="border-solid border-[#7a7a7a] bg-white flex flex-col w-12 h-12 text-center shrink-0 items-center py-1 gap-2 border rounded  font-bold leading-[20px] text-[#1a183e] text-xl font-montserrat"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminList;
