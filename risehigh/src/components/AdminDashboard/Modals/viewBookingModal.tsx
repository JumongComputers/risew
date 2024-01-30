import { ChevronLeft } from "lucide-react";
import { FC } from "react";

interface ViewBooking {
  visible: boolean;
  onClose: () => void;
  id: string;
}

const ViewBookingModal: FC<ViewBooking> = ({ visible, onClose, id }) => {
  if (!visible) return null;

  const handleClose = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  return (
    <>
      <div id="container" onClick={handleClose} className="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
        <div className="bg-white w-full max-w-4xl  rounded-md shadow-lg overflow-y-auto">
          <div className="flex justify-end pt-4 pr-4">
            <div className="flex items-center gap-2">
              <button onClick={() => onClose()}>
                <ChevronLeft />
              </button>
              <span className="text-[#676869] text-4xl">Back</span>
            </div>
          </div>
          <div className=" overflow-y-auto max-h-[520px]">
            <div className="w-full ">
              <div className=" px-8 rounded flex flex-col justify-center ">
                <div className="flex flex-col mt-12 gap-6">
                  <div className="bg-[#F2F7FF] text-2xl flex flex-col p-3">
                    <span className="text-black font-bold">First Name</span>
                    <span className="text-[#828282]">Kelechi</span>
                  </div>
                  <div className="bg-[#F2F7FF] text-2xl flex flex-col p-3">
                    <span className="text-black font-bold">Last Name</span>
                    <span className="text-[#828282]">Chief</span>
                  </div>
                  <div className="bg-[#F2F7FF] text-2xl flex flex-col p-3">
                    <span className="text-black font-bold">Email address</span>
                    <span className="text-[#828282]">chief@gmail.com</span>
                  </div>
                  <div className="bg-[#F2F7FF] text-2xl flex flex-col p-3">
                    <span className="text-black font-bold">Room Type</span>
                    <span className="text-[#828282]">King suite bedroom</span>
                  </div>
                  <div className="bg-[#F2F7FF] text-2xl flex flex-col p-3">
                    <span className="text-black font-bold">Room Number</span>
                    <span className="text-[#828282]">45</span>
                  </div>
                  <div className="bg-[#F2F7FF] text-2xl flex flex-col p-3 mb-12">
                    <span className="text-black font-bold">Status</span>
                    <span className="text-[#828282]">booked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBookingModal;
