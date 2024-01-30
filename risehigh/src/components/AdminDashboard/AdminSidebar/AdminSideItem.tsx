import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface AdminSideItemProps {
  item: {
    title: string;
    path: string;
    icon?: React.ReactNode;
    childrens?: { title: string; path: string }[];
  };
  isOpen: boolean;
}

const AdminSideItem: React.FC<AdminSideItemProps> = ({ item, isOpen }) => {
  const router = useRouter();

  const [expandMenu, setExpandMenu] = useState(false);

  const toggleClass = () => {
    setExpandMenu(!expandMenu);
  };

  return (
    <Link href={item.path}>
      <div className="block">
        <div onClick={toggleClass} className="flex justify-between items-center">
          <span
            className={`flex gap-2 text-2xl items-center text-white 
                ${isOpen ? "w-full" : "w-[60px]"}
                ${router.pathname === item.path ? "text-white border-l-4 border-white px-6 py-4 bg-black bg-opacity-10" : "text-white px-6"}
              `}
          >
            {item.icon && <div className="flex-shrink-0">{item.icon}</div>}
            {isOpen && <div>{item.title}</div>}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AdminSideItem;
