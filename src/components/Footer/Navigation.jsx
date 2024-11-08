import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

const Navigation = () => {
  return (
    <div className='text-white font-semibold mt-8 flex-shrink-0 sm:w-[300px] lg:w-[400px]'>
      <div>
        <ul className='flex justify-between mt-4'>
          <li>About Us</li>
          <li>Events Calendar</li>
          <li>Contact Us</li>
          <li className='hidden lg:block'>Support</li>
        </ul>
      </div>

      <div className="flex justify-between items-center mt-1 lg:justify-end lg:mt-4">
        <h1 className='lg:hidden'>Support</h1>

        <div className='text-[#CCC] flex gap-3 justify-end text-[24px]'>
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  )
}

export default Navigation