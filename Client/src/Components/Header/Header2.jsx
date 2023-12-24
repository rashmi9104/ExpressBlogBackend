import React from 'react'
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import img from '../../Assets/unsplash_x9cXI2eQLBw.png'

const Header2 = () => {
  return (
    <div className={`header flex w-11/12 mx-auto justify-between items-center p-1`}>
        <div className={`flex justify-between items-center gap-3`}>
            <div><h1 className='text-2xl font-bold text-blue-950'>EXPRESS</h1></div>
            <div className={`flex justify-around items-center border border-black rounded-md m-1 p-1`}>
                <input placeholder='search' type='input' ></input>
                <LuSearch />
            </div>
        </div>
        <div className={`flex justify-between items-center gap-3 text-sm`}>
            <div className='hover:cursor-pointer transition-all hover:scale-x-105 hover:text-orange-700 hover:border-orange-700 hover:border-b-2'>Add</div>
            <div className='hover:cursor-pointer transition-all hover:scale-x-105 hover:text-orange-700 hover:border-orange-700 hover:border-b-2'>Premium</div>
            <div className='hover:cursor-pointer transition-all hover:scale-x-105 hover:text-orange-700 hover:border-orange-700 hover:border-b-2'>+New Blog</div>
            {/* <div className='hover:cursor-pointer transition-all hover:scale-x-105 hover:text-orange-700 hover:border-orange-700 hover:border-b-2'>Sign up</div>
            <div className='hover:cursor-pointer transition-all hover:scale-x-105 hover:text-orange-700 hover:border-orange-700 hover:border-b-2'>Sign in</div> */}
            <div><img src={img}></img></div>
        </div>
    </div>
  )
}

export default Header2