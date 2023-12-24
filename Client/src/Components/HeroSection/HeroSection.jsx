import React from 'react'
import Img from '../../Assets/Group 1328.png';

const HeroSection = () => {
  return (
    // <div className=' flex justify-around items-center w-full mx-auto p-5 bg-gradient-to-r from-orange-400 '>
    //         <div >
    //             <p className='text-3xl my-1'>Find Blogs on any topic from millions of writers all over the world </p>
    //             <button type='button' className='my-1 border-none rounded-md px-2 py-1 bg-blue-950 text-white'>Start Reading</button>
    //         </div>
    //         <div>
    //             <img src={Img}></img>
    //         </div>
    // </div>
    <div className='md:w-full w-full mx-auto py-3 bg-gradient-to-r from-orange-400'>
        <div className='w-11/12  flex flex-col md:flex-row  justify-between items-center mx-auto my-3'>
            <div >
                <p className='text-3xl my-1'>Find Blogs on any topic from millions of writers all over the world </p>
                <button type='button' className='my-1 border-none rounded-md px-2 py-1 bg-blue-950 text-white'>Start Reading</button>
            </div>
            <div>
                <img src={Img}></img>
            </div>
        </div>
    </div>
  )
}

export default HeroSection