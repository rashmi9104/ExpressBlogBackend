import React from 'react'
import { FaPlus } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import data from '../Data';
import SideBar from '../SideBar/SideBar';


const Body2 = () => {
  return (
    <div>
        <div>
            <ul  className='flex justify-between items-center mx-auto w-11/12 md:my-6 my-3 text-md font-semibold'>
                <li><FaPlus /></li>
                <li>Health & Wellness</li>
                <li>Technology</li>
                <li>Music</li>
                <li>Movies & Cinema</li>
                <li>Fitness</li>
                <li>Sustainability</li>
                <li>Feminism</li>
                <li>Decor</li>
                <li className='text-lg'><MdKeyboardArrowRight /></li>
            </ul>
        </div>
        <div className='flex flex-row justify-between items-start w-11/12 mx-auto'>
            <div className='grid grid-cols-1 justify-between  items-start mx-auto'>
                {
                    data().map((items,index)=>(
                        <div>
                            <div><img src={items.picture3}></img></div>
                            <div>
                                <h6 className='text-xs text-blue-200'>{items.hashTag}</h6>
                                <h4 className=''>{items.description}</h4>
                                <div><p className='max-w-s'>{items.details}</p></div>
                            </div>
                            <div>
                                <div>Read More</div>
                                <div className='flex justify-start items-center gap-2'>
                                    <span className='text-xs text-gray-400'>{items.date}</span><span className='text-xs text-gray-400'>{items.clock}</span><span className='text-xs text-gray-400'>{items.time}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div classname='flex flex-col mx-auto justify-items-start flex-col-3 '>
                <div className='w-96 mx-auto'>
                    <div className='flex justify-start items-center'>
                        <h2 className='font-semibold text-lg'>Check out more topics</h2>
                        <h2 className='font-semibold text-2xl'><MdKeyboardArrowRight/></h2>
                    </div>
                    <div className='grid grid-cols-2 text-center'>
                        <span className='border rounded-md border-black m-2' >Health & Wellness</span>
                        <span className='border rounded-md border-black m-2'>Technology</span>
                        <span className='border rounded-md border-black m-2'>Music</span>
                        <span className='border rounded-md border-black m-2'>Movies & Cinemas</span>
                        <span className='border rounded-md border-black m-2'>Fitness</span>
                        <span className='border rounded-md border-black m-2'>Sustainabitlity</span>
                        <span className='border rounded-md border-black m-2'>Feminism</span>
                        <span className='border rounded-md border-black m-2'>Decor</span>

                    </div>
                </div>
                <div className='grid grid-cols-1  justify-start items-start gap-2 mx-auto my-5'>
                {
                    data().map((items,index)=>(
                        <div className='flex flex-col justify-start items-start mx-auto gap-2 my-3'>
                            <div className='flex justify-start items-center gap-2'>
                                <span><img className='h-5' src={items.userPicture}></img></span><span><p className='text-sm text-gray-800'>{items.username}</p></span>
                            </div>
                            <div className='mx-auto'><img className='h-48 ' src={items.picture2}></img></div>
                            <div className='flex flex-col justify-start items-start max-w-xs mx-auto'>
                                <div><h6 className='text-xs text-blue-200'>{items.hashTag}</h6></div>
                                <div><h4 className=''>{items.description}</h4></div>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <span className='text-xs text-gray-400'>{items.date}</span><span className='text-xs text-gray-400'>{items.clock}</span><span className='text-xs text-gray-400'>{items.time}</span>
                            </div>
                        </div>
                    ))

                }
                </div>
                <div></div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Body2

