import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='bg-indigo-900 w-full text-white py-2 ' >
        <div className='flex justify-around items-center w-11/12 mx-auto md:mt-5'>
            <div className='max-w-xs flex flex-col gap-3'>
                <h1 className='font-bold text-lg'>EXPRESS</h1>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id ea sapiente quo aliquid consequatur alias, mollitia delectus.
                </p>
                <p>@company.com</p>
            </div>
            <div className='max-w-xs flex flex-col gap-2'>
                <h6 className='font-bold'>About us</h6>
                <ul>
                    <li>Company</li>
                    <li>Portfolio</li>
                    <li>Career</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className='max-w-xs flex flex-col gap-3'>
                <h6 className='font-bold'>Contact us</h6>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id ea sapiente quo aliquid consequatur alias, mollitia delectus.
                </p>
                <p>+900-0000-00</p>
            </div>
            <div className='flex gap-2 text-xl'>
                <div className='hover:cursor-pointer hover:scale-110 hover:text-orange-600'><CiFacebook/></div>
                <div className='hover:cursor-pointer hover:scale-110 hover:text-orange-600'><IoLogoInstagram/></div>
                <div className='hover:cursor-pointer hover:scale-110 hover:text-orange-600'><SlSocialTwitter/></div>
                <div className='hover:cursor-pointer hover:scale-110 hover:text-orange-600'><CiLinkedin/></div>
            </div>
        </div>
        <div className='border-gray-200 border-t-2 p-4 text-center my-4'>
             <p>Copyright ® 2021 Company All rights Rcerved</p>
        </div>

    </div>
  )
}

export default Footer