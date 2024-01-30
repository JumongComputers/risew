import React, { useState } from "react";

interface DeclineStatusModalProps {
  visible: boolean;
  onClose: () => void;
  id: string; // Replace with the actual type of your "id" prop
  children: React.ReactNode;
}

const DeclineStatusModal: React.FC<DeclineStatusModalProps> = ({ visible, onClose, children, id }) => {
  const [declinedData] = useState({
    vehicleId: id,
    status: "Declined",
  });

  if (!visible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  const declineStatus = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = declinedData;
    console.log(data);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-20 
   flex justify-center items-center"
      id="container"
      onClick={handleClose}
    >
      <div className="w-full max-w-lg">
        <div className="bg-white p-8 rounded-md shadow-lg">
          {children}
          <div className="flex justify-between px-12 pt-20 items-center">
            <button onClick={() => onClose()} className="bg-white border py-3 px-12 border-[#0D60D8] rounded-md">
              <span className="text-[#676869]">No</span>
            </button>
            <button onClick={declineStatus} className="bg-[#0D60D8] rounded-md py-3 px-12">
              <span className="text-white">Yes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeclineStatusModal;
