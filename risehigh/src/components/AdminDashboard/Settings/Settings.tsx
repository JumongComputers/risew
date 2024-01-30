import React, { useState } from "react";
import Account from "./Form/Account";
import Password from "./Form/Password";
import { Lock, User } from "lucide-react";

const Settings: React.FC = () => {
  const [active, setActive] = useState<string>("A");

  return (
    <div className="px-6 py-6 hidden lg:block">
      <div className="bg-white">
        <div className="flex px-8 py-20 justify-between gap-20">
          <div className="flex-initial flex flex-col gap-8">
            <button
              onClick={() => setActive("A")}
              className={`flex items-center gap-3 ${
                active === "A" ? "bg-[#F2F7FF] shadow-md border-r-[5px] border-[#0D60D8] text-[#0D60D8] p-2 " : "text-[#676869]"
              } `}
            >
              <User className="w-8 h-8" />
              <span className="font-normal text-4xl">My Account</span>
            </button>
            <button
              onClick={() => setActive("P")}
              className={`flex items-center gap-3 ${
                active === "P" ? "bg-[#F2F7FF] shadow-md border-r-[5px] border-[#0D60D8] text-[#0D60D8] p-2 " : "text-[#676869]"
              } `}
            >
              <Lock className="w-8 h-8" />
              <span className="font-normal text-4xl">Password</span>
            </button>
          </div>
          <div className="flex-1 ">
            {active === "A" && <Account />}
            {active === "P" && <Password />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
