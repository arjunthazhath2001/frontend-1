import React from 'react'
import One from '../assets/oneman.png'
function Cards() {
  return (
    <div className='w-full bg-white p-10'>
        <div className='grid min-h-[400px] mx-auto gap-7 md:grid-cols-3'>
            <div className='md:col-span-1'>
                <img src={One} className='w-[100px] mx-auto z-10'/>
                <div className='border-black'>
                    <h1>Single User</h1>
                    <h1>$149</h1>
                    <div className='text-black font-bold'>
                        <h3 className='border-t-[1px] border-black'>500 GB Storage</h3>
                        <h3 className='border-y-[1px] border-black'>1 User Allowed</h3>
                        <h3 className='border-b-[1px] border-black'>Send up to 2GB</h3>
                    </div>
                    <button className='bg-green-400 text-xl font-bold text-black rounded-md px-5 py-3'>Start Trial</button>
                </div>
            </div>
            <div className='md:col-span-1 bg-blue-500'>CARD2</div>
            <div className='md:col-span-1 bg-green-400'>CARD3</div>
        </div>
    </div>
  )
}

export default Cards