import React from 'react'
import data from "../Data";

const Discover = () => {
  return (
    <div className='w-11/12 mx-auto my-10'>
        <div className='flex justify-between items-center border-gray-200 border-b-2 my-4 px-2 '>
          <div><h1 className='text-lg font-semibold'>Discover Me</h1></div>
          <div className='text-xs text-red-500'>View all</div>
        </div>
        <div className='grid grid-cols-3  justify-between items-center gap-2 mx-auto my-5'>
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
    </div>
  )
}

export default Discover