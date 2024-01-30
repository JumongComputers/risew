import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bookingData, { Booking } from "@/data/bookingData";
import BookingCard from "../subComponents/BookingCard";

const BookRooms: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="relative h-[340vh] lg:h-full bg-black mb-20 lg:mb-32" id='rooms'>
      <img
        src="https://res.cloudinary.com/dyijwff8m/image/upload/v1702731461/gridex/ab2_gabvo7.webp"
        alt="room image"
        className="w-full bg-black opacity-25 h-full object-cover"
      />
      {/* content */}
      <div
        className="absolute inset-0 flex flex-col px-6 md:px-[8%] gap-12 justify-center xl:gap-20 text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col gap-2 lg:justify-center lg:items-center px-8 lg:px-[8vw]  text-center">
          <h1 className="lg:text-8xl text-6xl font-bold">Our Rooms</h1>
          <p className="font-normal max-w-6xl text-lg md:text-2xl opacity-70">
            We believe in crafting more than just a temporary escape. Every corner of our hotel is designed to immerse you in a world of sophistication and comfort. Whether you&apos;re here for business or leisure, our goal is to ensure your experience exceeds expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 lg:gap-12 lg:pb-12" data-aos="fade-up" data-aos-duration="1000">
          {bookingData.map((data: Booking, index: number) => (
            <div key={index} data-aos="fade-up" data-aos-duration="1000">
              <BookingCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookRooms;
