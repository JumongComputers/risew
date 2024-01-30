import slides from "@/data/heroSlide";
import { ArrowDownWideNarrow, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FirstBorderAnimation = () => (
  <div className="flex flex-col gap-2">
    <div className="border border-opacity-25 border-white w-full" />
    <div className="border-2 border-blue-400 w-full" />
  </div>
);

const SecondBorderAnimation = () => (
  <div className="flex flex-col gap-2">
    <div className="border-2 border-blue-400 w-full" />
    <div className="border border-opacity-25 border-white w-full" />
  </div>
);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Slider>(null);
  const [animationKey, setAnimationKey] = useState<number>(0);

  const scrollToNextSection = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: handleBeforeChange,
  };

  return (
    <div
      ref={heroRef}
      className="relative md:static max-w-full overflow-hidden"
    >
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative bg-black h-96 md:h-[558px] w-full mb-20 lg:mb-32"
          >
            <img
              src={slide.imageUrl}
              alt={`Slide ${index + 1}`}
              className="w-full bg-black opacity-40 h-full object-cover"
            />
            <div className="absolute space-y-4 text-white md:space-y-12 text-center top-[50%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              {/* first borders */}
              <FirstBorderAnimation />
              <motion.h1
                key={animationKey}
                className="text-4xl md:text-7xl lg:text-9xl font-sarabun font-bold"
                initial={slide.initial}
                animate={slide.animate}
                transition={slide.transition}
              >
                {slide.heading}
              </motion.h1>

              {/* second borders */}
              <SecondBorderAnimation />

              <motion.div
                className="flex flex-col gap-6 justify-center items-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <span className="font-medium text-xs md:text-xl font-sarabun">
                  SCROLL FOR MORE
                </span>
                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ y: 5 }}
                  className="text-white cursor-pointer w-4"
                  onClick={scrollToNextSection}
                >
                  <ArrowDownWideNarrow />
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Manual navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute text-white top-[40%] md:top-1/2 left-2 lg:left-8 transform -translate-y-1/2"
      >
        <ChevronLeft size={60} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-[40%] md:top-1/2 right-2 text-white lg:right-8 transform -translate-y-1/2"
      >
        <ChevronRight size={60} />
      </button>
    </div>
  );
};

export default Hero;
