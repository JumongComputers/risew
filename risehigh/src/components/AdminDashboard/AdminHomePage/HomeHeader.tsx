import React, { Fragment, useState } from "react";
import SetRoomPrice from "../Modals/SetRoomPrice";

const HomeHeader: React.FC = () => {
  let name: any;
  if (typeof window !== "undefined") {
    name = sessionStorage.getItem("firstName");
  }

  const [showRoomModal, setShowRoomModal] = useState(false);

  return (
    <Fragment>
      <div className="px-4 py-6">
        <div className="flex justify-between items-center">
          <h3 className="text-[#19202C] font-bold font-outfit text-6xl ">
            <span>Welcome back </span>
            <span>{name}</span>
          </h3>
          <button onClick={() => setShowRoomModal(true)} className="bg-[#0D60D8] text-white text-lg rounded-md  px-4 py-2">
            + Add Room Price
          </button>
        </div>
      </div>
      <SetRoomPrice showModal={showRoomModal} onClose={() => setShowRoomModal(false)} />
    </Fragment>
  );
};

export default HomeHeader;
