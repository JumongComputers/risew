import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, MoveLeft } from "lucide-react";

interface PasswordState {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const initialState: PasswordState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const Password: React.FC = () => {
  const [password, setPassword] = useState<PasswordState>(initialState);
  const { oldPassword, newPassword, confirmPassword } = password;

  // show password toggle
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [nowOpen, setNowOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const change = () => {
    setIsOpen(!isOpen);
  };
  const now = () => {
    setNowOpen(!nowOpen);
  };

  const passwordChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!oldPassword || !newPassword) {
      //   return toast.error('All fields are required');
      return console.log("All fields are required");
    }
    if (newPassword !== confirmPassword) {
      //   return toast.error('Passwords do not match');
      return console.log("Passwords do not match");
    }
  };

  return (
    <div className="px-6 py-6 md:p-0">
      <div className="flex items-center md:hidden gap-2">
        <Link href="/admin">
          <MoveLeft />
        </Link>
        <span className="text-[#676869] ">Back</span>
      </div>
      <form onSubmit={passwordChange} className="flex flex-col gap-4 font-outfit">
        <div className="flex flex-col w-full">
          <label htmlFor="oldPassword" className="text-[#19202C] text-2xl mb-2">
            Old Password
          </label>
          <div className="relative">
            <input
              type={open === false ? "password" : "text"}
              value={oldPassword}
              onChange={(e) => setPassword({ ...password, oldPassword: e.target.value })}
              className="py-4 text-xl px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full placeholder-gray-200::placeholder placeholder-opacity-75 border focus:border-[#0D60D8]"
              placeholder="Enter Old Password"
            />
            <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
              {open === false ? <Eye onClick={toggle} width={20} height={20} /> : <EyeOff onClick={toggle} width={20} height={20} />}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="newPassword" className="text-[#19202C] text-2xl mb-2">
            New Password
          </label>
          <div className="relative">
            <input
              type={isOpen === false ? "password" : "text"}
              value={newPassword}
              onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
              className="py-4 px-6 text-xl rounded-md bg-[#F2F7FF] focus:outline-none w-full placeholder-gray-200::placeholder placeholder-opacity-75 border focus:border-[#0D60D8]"
              placeholder="Enter New Password"
            />
            <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
              {isOpen === false ? <Eye onClick={toggle} width={20} height={20} /> : <EyeOff onClick={toggle} width={20} height={20} />}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="confirmPassword" className="text-[#19202C] text-2xl mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={nowOpen === false ? "password" : "text"}
              value={confirmPassword}
              onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
              className="py-4 px-6 text-xl rounded-md bg-[#F2F7FF] focus:outline-none w-full placeholder-gray-200::placeholder placeholder-opacity-75 border focus:border-[#0D60D8]"
              placeholder="Confirm Password"
            />
            <div className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 text-[#828282]">
              {nowOpen === false ? <Eye onClick={toggle} width={20} height={20} /> : <EyeOff onClick={toggle} width={20} height={20} />}
            </div>
          </div>
        </div>
        <button
          disabled={false}
          type="submit"
          className="lg:w-full bg-[#0D60D8] py-4 text-white rounded-md font-bold text-2xl focus:outline-none w-full md:mt-12 mt-8"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default Password;
