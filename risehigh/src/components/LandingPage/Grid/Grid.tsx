import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NextPage } from 'next';
import { motion } from "framer-motion"
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
// import { Camera } from "lucide-react";

type Resource = {
  asset_id: string;
  name: string;
  description: string;
  url: string;
  bytes: number;
  // ...other fields
};

type GridProps = {
  data: Resource[] | null;
};



const Grid: NextPage<GridProps> = ({ data }) => {

  const mobileImages = data?.slice(0, 4)
  // const fourImages = data?.filter((item, idx) => idx < 4)
  
const isMobile = useMediaQuery({query:'(max-width: 768px)'})

    const toggleImagePreview = (url: string) => {
    window.open(url, "_blank");
  };
  if (!data) {
    return <div>Error fetching data...</div>;
  }

  return (
    <SectionWrapper css='mb-24'>
      <div className='my-2 mx-auto '>
      <h1 className=' font-jost text-center  font-semibold text-9xl  text-indigo-700'>Gallery</h1>
      <h4 className=' font-jost text-center font-medium text-gray-400 uppercase text-4xl md:text-6xl my-5'>Discover Rise High Hotel</h4>
      <div className='flex flex-row items-center justify-center gap-4 mb-16'  >
         <hr className='h-2 w-16 bg-orange-800 my-5 rounded-t-3xl' />
        <hr className='h-4 w-24  bg-orange-800 my-5 rounded-es-3xl rounded-se-3xl rounded-ee-3xl'  />
          <hr className='h-2 w-16 bg-orange-800 my-5 rounded-t-3xl' />
      </div>
 


  <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
    {/* data.slice(0, 5).map((item) */}
       { 
       
       isMobile && mobileImages?.map((item)   => 
     (
        
        <motion.div  initial={{scale: 0}} whileInView={{ scale: 1 }} transition={{type:'tween',duration:.5, delay: .1 }} key={item.asset_id} className="group relative w-full">
           <Image  width={500}
      height={500} loading="lazy"  src={item.url} alt="rise high hotel" className='group-hover:scale-110 duration-500' />
             <motion.div  animate={{x:0}} initial={{x:70}}
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
            <a className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#rooms">Book Now</a>
        </motion.div>
        </motion.div>
      )) }
       { 
       
       !isMobile && data?.map((item)   => 
     (
        
        <motion.div  initial={{scale: 0}} whileInView={{ scale: 1 }} transition={{type:'tween',duration:.5, delay: .1 }} key={item.asset_id} className="group relative w-full">
           <Image  width={500}
      height={500} loading="lazy"  src={item.url} alt="rise high hotel" className='group-hover:scale-110 duration-500' />
             <motion.div  animate={{x:0}} initial={{x:70}}
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
            <a className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#rooms">Book Now</a>
        </motion.div>
        </motion.div>
      )) }
     </div>


    </div>
    </SectionWrapper>
  );
};

export default Grid;
