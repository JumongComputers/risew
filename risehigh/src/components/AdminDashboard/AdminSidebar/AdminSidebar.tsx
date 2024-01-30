import { useState } from "react";
import AdminSideItem from "./AdminSideItem";
import { LogOut, Menu } from "lucide-react";
import LogoutModel from "../Modals/LogoutModal";
import sidebarData from "@/data/adminSidebarData";

interface AdminSidebarProps {
  children: React.ReactNode;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const [showModel, setShowModel] = useState(false);

  let role: any;
  if (typeof window !== "undefined") {
    role = sessionStorage.getItem("role");
  }

  const filteredSidebarData = sidebarData.filter((item) => {
    if (role === "admin" || role === "manager") {
      // Show all sidebar items for "admin and manager"
      return true;
    } else if (role === "receptionist") {
      return item.title === "Booking" || item.title === "Restaurant";
    } else {
      return item.title !== "Staffs";
    }
  });

  // const filteredSidebarData = sidebarData;

  return (
    <div className="">
      <div
        className="
          fixed h-screen py-6  bg-[#0D60D8] 
          flex-col gap-12 z-20 md:flex hidden w-[230px]
          "
        // style={{
        //   width: isOpen ? "230px" : "60px",
        //   alignItems: isOpen ? "" : "center",
        // }}
      >
        <div className="flex items-center px-2 pb-4 ">
          <div className="flex items-center gap-2 ">
            <img src="/dash-slogo.svg" alt="" />
            <span className="text-white font-normal text-[24px] leading-[30px] ">Rise High Hotel</span>
          </div>
          {/* <div className="cursor-pointer transition-all duration-300 text-white" style={{ marginLeft: isOpen ? "40px" : "0px" }}>
            <Menu onClick={toggle} />
          </div> */}
        </div>
        {filteredSidebarData.map((item, index) => {
          return <AdminSideItem key={index} item={item} isOpen={isOpen} />;
        })}
        <button className={`flex items-center text-white gap-2 ${isOpen ? "px-6" : "px-[0px]"} `} onClick={() => setShowModel(true)}>
          <LogOut />
          <span className={`text-2xl ${isOpen ? "flex" : "hidden"}`}>Logout</span>
        </button>
      </div>
      <main
        className={`
        w-full shrink-0 overflow-auto
        ${isOpen ? "md:pl-[230px]" : "md:pl-[60px]"}
        `}
        style={{
          transition: "all .5s",
        }}
      >
        {children}
      </main>
      <LogoutModel visible={showModel} onClose={() => setShowModel(false)}>
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-between gap-12 items-center">
            <LogOut />
            <span className="text-[#19202C] font-bold text-3xl"> Logout Confirmation </span>
          </div>
          <p className="text-[#676869] font-normal text-2xl ">Are you sure you want to logout from your account?</p>
        </div>
      </LogoutModel>
    </div>
  );
};

export default AdminSidebar;
