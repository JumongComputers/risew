import React from "react";

const Nav: React.FC = () => {
  let name: any;
  if (typeof window !== "undefined") {
    name = sessionStorage.getItem("firstName");
  }

  let role: any;
  if (typeof window !== "undefined") {
    role = sessionStorage.getItem("role");
  }

  return (
    <div className="flex flex-col">
      <span className="text-xl text-[#001F1D] ">{name}</span>

      <span className="text-[#676869] font-normal text-lg">{role}</span>
    </div>
  );
};

export default Nav;
