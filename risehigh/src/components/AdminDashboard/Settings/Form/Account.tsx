import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const Account: React.FC = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    phone: "",
  };

  const [profile, setProfile] = useState(initialState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const name = sessionStorage.getItem("name");
      const lastNames = sessionStorage.getItem("lastName");
      const phoneNum = sessionStorage.getItem("phone");

      setProfile({
        firstName: name || "",
        lastName: lastNames || "",
        phone: phoneNum || "",
      });
    }
  }, []);

  const editProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Your edit profile logic here
  };

  return (
    <div className="px-6 py-6 md:p-0">
      <div className="flex items-center md:hidden gap-2">
        <Link href="/admin">
          <MoveLeft />
        </Link>
        <span className="text-[#676869] ">Back</span>
      </div>
      <form onSubmit={editProfile} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-[#19202C] text-2xl mb-2">
            First Name
          </label>
          <input
            type="text"
            value={profile.firstName}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            className="py-4 text-xl px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full placeholder-gray-200::placeholder placeholder-opacity-75 border focus:border-[#0D60D8]"
            placeholder="John"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-[#19202C] text-2xl mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={profile.lastName}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            className="py-4 px-6 text-xl rounded-md bg-[#F2F7FF] focus:outline-none w-full placeholder-gray-200::placeholder placeholder-opacity-75 border focus:border-[#0D60D8]"
            placeholder="Edeh"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-[#19202C] text-2xl mb-2">
            Phone number
          </label>
          <input
            type="text"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="py-4 text-xl px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full placeholder-gray-200::placeholder placeholder-opacity-75 border focus:border-[#0D60D8]"
            placeholder="09084748474"
          />
        </div>
        <button
          type="submit"
          className="lg:w-full bg-[#0D60D8] py-4 text-white rounded-md font-bold text-2xl focus:outline-none w-full md:mt-12 mt-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Account;
