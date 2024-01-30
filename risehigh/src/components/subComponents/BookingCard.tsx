import { Booking } from "@/data/bookingData";
import BookingModal from "../Modals/BookingModal";
import { useState } from "react";
import { Camera } from "lucide-react";
import RestaurantModal from "../Modals/RestaurantModal";

interface BookingCardProps {
  data: Booking;
}

const BookingCard: React.FC<BookingCardProps> = ({ data }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleImagePreview = () => {
    window.open(data.image, "_blank");
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex text-center h-[75vh] sm:h-[75vh] md:h-[80vh] lg:h-[50vh] xl:h-[80vh] gap-8 items-center flex-col w-full px-8 py-8 bg-white">
      <div className="relative" onMouseEnter={() => setOverlayVisible(true)} onMouseLeave={() => setOverlayVisible(false)}>
        <img src={data.image} alt={data.name} />
        {isOverlayVisible && (
          <div className="absolute inset-0 flex items-center justify-center bg-black opacity-60">
            <div className="absolute top-1/2 left-1/2 transform cursor-pointer -translate-x-1/2 -translate-y-1/2">
              <Camera size={24} color="#fff" onClick={toggleImagePreview} />
            </div>
          </div>
        )}
      </div>
      <span className="text-[#282d3c] font-bold uppercase text-5xl">{data.name}</span>
      <span className="text-[#282d3c] font-normal text-xl">{data.numOfRooms}</span>
      <span className="text-[#282d3c] font-normal h-[9rem] text-xl md:text-4xl lg:text-xl">{data.text}</span>
      <div className="flex gap-1 items-center text-5xl">
        <span className="text-[#282d3c] font-bold text-5xl">₦{data.price}.00</span>
        <span className="text-[#282d3c] font-bold text-2xl text-opacity-25">/ per night</span>
      </div>

      <button onClick={openModal} className="bg-blue-400 w-[44vw] lg:w-[12vw] rounded-full p-3">
        <span className="text-white text-center font-bold text-xl px-3">Book Now</span>
      </button>

      {/* Modal */}
      <BookingModal isOpen={isModalOpen} onRequestClose={closeModal} price={Number(data.price)} roomTypeDefault={data.name} />
      
    </div>
  );
};

export default BookingCard;
