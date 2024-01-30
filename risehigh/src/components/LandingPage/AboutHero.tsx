import { motion ,AnimatePresence} from "framer-motion"
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

const AboutHero: React.FC = () => {
  return (
 <SectionWrapper>
     <div className="lg:flex-row flex-col flex w-full max-w-full justify-between mb-20 lg:mb-16 gap-8 items-center py-8" id='about'>
      
      
    <div className="lg:flex-row flex-col flex w-full max-w-full justify-center lg:justify-between mb-20 lg:mb-32 gap-8 items-center  py-8">
      {/* first content */}
      <div className="flex flex-col lg:items-start gap-4 text-center">
        <span className="text-[#758585] font-bold text-2xl md:text-6xl">
          Welcome to
        </span>
        <h1 className=" uppercase font-bold  font-jost text-4xl md:text-9xl text-blue-800">
          Rise High Hotel
        </h1>
        <div className="border border-opacity-25 border-blue-400 w-20 mt-6" />
        <p className="text-[#758585] font-normal mt-4 text-2xl text-justify">
          At Rise High Hotel, we redefine hospitality by offering an experience that goes beyond a mere stay. Nestled in the heart of Abeokuta, Ogun State, Nigeria, our hotel stands as a testament to comfort, luxury, and impeccable service.
          We offer accommodation with a restaurant serving the finest local and international cuisines, free private parking, a fitness centre and a dedicated bar. Hospitality is not just a service but a promise we uphold diligently. We look forward to welcoming you and creating lasting memories together.</p>
        
        <button className="bg-blue-800 rounded-md mt-4  px-6 py-4 text-white text-2xl" type="button">
          <Link href='#rooms'><span>Room Info</span></Link>
        </button>
      </div>
      {/* second: image content */}
       <AnimatePresence>
      <motion.img   whileHover={{ scale: 0.9 }}
    whileTap={{ scale: 0.9 }}
    exit={{ opacity: 0 }}
        src="https://res.cloudinary.com/dyijwff8m/image/upload/v1702733039/gridex/OVI__at_10.45.56_qky7ae.webp"
        alt="hotel building"
        className="lg:w-[50%] md:h-[50%] w-full h-full rounded-2xl"
      />
      </AnimatePresence>
    </div>
    </div>
 </SectionWrapper>
  );
};

export default AboutHero;
