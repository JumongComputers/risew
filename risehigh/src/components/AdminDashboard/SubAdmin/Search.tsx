import { Search } from "lucide-react";
import React from "react";
interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className="lg:flex hidden items-center">
      <div className="relative w-full">
        <input
          type="search"
          name="search"
          placeholder="Search booking"
          value={value}
          onChange={onChange}
          style={{ boxShadow: "0px 9px 17px rgba(0, 0, 0, 0.07)" }}
          className="bg-white text-[#19202C] border border-[#E0E0E0] h-16 px-5 pl-16 rounded-md 
            text-lg focus:outline-none w-[773px]"
        />
        <button className="absolute left-0 top-0 mt-3 ml-4">
          <Search className="text-gray-400 h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
