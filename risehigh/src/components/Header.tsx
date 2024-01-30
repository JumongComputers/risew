import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";
import WhatsAppChat from "./Whatsapp/Whatsapp";
import RestaurantModal from "./Modals/RestaurantModal";

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="mx-auto py-2 bg-white text-blue-900 flex justify-between text-lg lg:text-2xl">
        <div className="flex justify-around w-full">
          <div className="flex gap-2 items-center">
            <i className="fa-regular fa-envelope "></i>
            <p>receptionist@risehighhotel.com</p>
          </div>
          <div className="flex gap-1 items-center">
            <i className="fa-solid fa-phone py-1"></i>
            <span className="md:after:content-[]">09050000770 </span> 
            <span className="hidden md:block md:ml-4">09050000775</span>
          </div>

          <div className="  hidden md:flex gap-3 lg:flex">
            <div className="flex  gap-3 text-3xl">
              <Link href="#">
                <i className="fa-brands fa-square-facebook text-2xl md:text-3xl"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-square-twitter text-2xl md:text-3xl"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-square-instagram text-2xl md:text-3xl"></i>
              </Link>
              <Link href="#">
                <i className="fa-regular fa-envelope text-2xl md:text-3xl"></i>
              </Link>
              <div className=" ">
                <WhatsAppChat />
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-[#2c2c2c] opacity-90 top-0 left-0 sticky lg:relative z-10 flex items-center px-[8vw] py-8 justify-between gap-4">
        <Link href="/">
          <img src="/rise-high-hotel-logo white.svg" alt="Logo" className="lg:h-[80px] h-[40px] rounded-md" />
        </Link>
        <ul className={`lg:flex text-white gap-8 font-medium text-3xl ${isSidebarOpen ? "hidden" : "hidden md:flex"}`}>
          <li className={`hover:text-blue-400 ${router.pathname === "/" ? "text-blue-400" : ""}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`hover:text-blue-400 ${router.pathname === "/about" ? "text-blue-400" : ""}`}>
            <Link href="#about">About Us</Link>
          </li>
          <li className={`hover:text-blue-400 ${router.pathname === "/rooms" ? "text-blue-400" : ""}`}>
            <Link href="#rooms">Rooms</Link>
          </li>
          <li className={`hover:text-blue-400 ${router.pathname === "/contact" ? "text-blue-400" : ""}`}>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className={`hover:text-blue-400`}>
            <button onClick={openModal}>Book Restaurant</button>
          </li>
        </ul>
        <div className="md:hidden" onClick={toggleSidebar}>
          <Menu size={24} color="white" />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50" onClick={closeSidebar}>
          <div className="bg-white fixed inset-y-0 right-0 w-[70vw] p-4 flex flex-col items-center">
            <div className="mb-12">
              <X size={32} color="black" onClick={closeSidebar} />
            </div>
            <ul className="text-black font-light text-4xl flex flex-col gap-6 items-center">
              <li className={`hover:text-blue-400 ${router.pathname === "/" ? "text-blue-400" : ""}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`hover:text-blue-400 ${router.pathname === "/about" ? "text-blue-400" : ""}`}>
                <Link href="#about">About Us</Link>
              </li>
              <li className={`hover:text-blue-400 ${router.pathname === "/rooms" ? "text-blue-400" : ""}`}>
                <Link href="#rooms">Rooms</Link>
              </li>
              <li className={`hover:text-blue-400 ${router.pathname === "/contact" ? "text-blue-400" : ""}`}>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className={`hover:text-blue-400`}>
                <button onClick={openModal}>Book Restaurant</button>
              </li>
            </ul>
          </div>
        </div>
      )}
      <RestaurantModal visible={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
