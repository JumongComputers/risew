import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const StaffHead: React.FC = () => {
  let name: any;
  if (typeof window !== "undefined") {
    name = sessionStorage.getItem("firstName");
  }

  let role: any;
  if (typeof window !== "undefined") {
    role = sessionStorage.getItem("role");
  }

  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link href="/admin">
              <MoveLeft />
            </Link>
            <span className="text-[#676869] ">Back</span>
          </div>
          <span className="text-[#19202C] text-6xl font-bold ">All Staffs</span>
        </div>
        <div className="flex gap-4  items-center">
          <img src="/profile-avatar.png" alt="" className="rounded-full" />
          <div className="flex flex-col">
            <div className="flex gap-1">
              <span className="text-2xl text-[#001F1D] ">{name}</span>
            </div>
            <span className="text-[#676869] font-normal text-xl">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffHead;
