import React, { useState } from "react";

interface VerifyStatusModelProps {
  isVisible: boolean;
  onClose: () => void;
  id: string;
  children: React.ReactNode;
}

const VerifyStatusModal: React.FC<VerifyStatusModelProps> = ({ isVisible, onClose, children, id }) => {
  const [verifiedData] = useState({
    vehicleId: id,
    status: "Verified",
  });

  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  const verifyStatus = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = verifiedData;
    // Dispatch your action here if needed
    console.log(data);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-20 
    b flex justify-center items-center"
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
            <button onClick={verifyStatus} className="bg-[#0D60D8] rounded-md py-3 px-12">
              <span className="text-white">Yes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyStatusModal;
