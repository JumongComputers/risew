import React from 'react'
import WhatsAppChat from '../Whatsapp/Whatsapp'
import Link from "next/link";
import SectionWrapper from '../SectionWrapper';

const Footer: React.FC = () => {
  return (
    
   <div className='bg-[#2c2c2c] text-white py-10'>
    <SectionWrapper css=''>
       <nav className='flex md:flex-row flex-wrap gap-4 justify-between px-4 py-10 text-xl'>

       <div className='lg:max-w-md flex flex-col gap-2'>
         <h4 className=' text-2xl lg:text-3xl my-8 text-orange-200'>Rise High Hotel</h4>
         <div className='w-full'>
          <p className='text-left text-3xl'>Whether you&apos;re seeking a lavish getaway, a seamless business trip, or a memorable event venue, Rise High Hotel is ready to exceed your expectations.</p>
         </div>
       </div>

         <div className="flex flex-col gap-2 text-3xl">
            <h4 className='text-2xl lg:text-3xl my-8 text-orange-200'>Contact</h4>
                <div className="flex items-center gap-4">
                    <i className="fa-solid fa-location"></i>
                    <p>Unique Community, 1 Alakaloko Community, <br />off Sekoni Street, Olomore, Abeokuta, Ogun State</p>
                </div>

                

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-phone"></i>
                <p>09050000770, 09050000775</p>
                </div>

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-box"></i>
                <p>
                  receptionist@risehighhotel.com</p>
                </div>

                 <div className='flex flex-col my-4'>

            {/* <h4 className='text-2xl lg:text-3xl my-8 text-orange-200'>Connect with us</h4> */}
            <div className="flex  gap-3 text-3xl">
            <Link href="#"><i className="fa-brands fa-square-facebook text-2xl md:text-3xl"></i></Link>
            <Link href="#"><i className="fa-brands fa-square-twitter text-2xl md:text-3xl"></i></Link>
            <Link href="#"><i className="fa-brands fa-square-instagram text-2xl md:text-3xl"></i></Link>
            <Link href="#"><i className="fa-regular fa-envelope text-2xl md:text-3xl"></i></Link>
            <div className=" ">
            <WhatsAppChat/>
            </div>

            </div>
            </div>
                
               
                
            </div>
            <div className="flex flex-col gap-2 text-3xl">
            <h4 className='text-2xl lg:text-3xl my-8 text-orange-200'>Facilities</h4>
                

                

                <div className="flex  gap-4">
                <i className="fa-solid fa-utensils"></i>
                <h6>Restaurant & Bar</h6>
                </div>

 <div className="flex items-center gap-4">
                <i className="fa-solid fa-utensils"></i>
                <h6>High-Speed Wi-Fi:</h6>
                </div>

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-utensils"></i>
                <h6>Luxurious Bedding</h6>
                </div>

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-utensils"></i>
                <h6>Room Service</h6>
                </div>

                <div className="flex items-center gap-4">
                <i className="fa-solid fa-medal"></i>
                <h5>Games</h5>
                </div>
                <div className="flex items-center gap-4">
                <i className="fa-solid fa-hotel"></i>
                <h6>State of the Art Rooms</h6>
                </div>
               
                
            </div>


       

    </nav>
    <p className='text-center pt-10 text-2xl'>&copy; 2023 | All rights Reserved</p>
    </SectionWrapper>
   </div>
    
  )
}

export default Footer
