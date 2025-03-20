import React from 'react'
import One from '../assets/oneman.png'
function Cards() {
  return (
    <div className='w-full bg-white p-20'>
        <div className='grid min-h-[400px] mx-auto gap-7 md:grid-cols-3 pt-10'>
            <div className='md:col-span-1 shadow-xl flex flex-col rounded-2xl hover:scale-105 duration-300 my-8 md:my-0'>
                <img src={One} className='w-[60px] bg-white mx-auto mt-[-3rem]'/>
                    <h1 className='font-bold text-center text-2xl py-8'>Single User</h1>
                    <h1  className='font-bold  text-center text-4xl'>$149</h1>

                    <div className='text-center font-medium'>
                        <h3 className='border-t-[1px] border-black p-2 mt-8 mx-8'>500 GB Storage</h3>
                        <h3 className='border-y-[1px] p-2 border-black mx-8'>1 User Allowed</h3>
                        <h3 className='border-b-[1px] p-2 border-black mx-8'>Send up to 2GB</h3>
                    </div>
                    <button className='bg-green-400 mx-auto text-xl font-bold text-black rounded-md px-3 w-[200px] py-2 my-6'>Start Trial</button>
            </div>
            <div className='md:col-span-1 my-8 md:my-0 shadow-xl flex flex-col rounded-2xl hover:scale-105 duration-300 bg-gray-200'>
                <img src={One} className='w-[60px] mx-auto mt-[-3rem]'/>
                    <h1 className='font-bold text-center text-2xl py-8'>Single User</h1>
                    <h1  className='font-bold  text-center text-4xl'>$149</h1>

                    <div className='text-center font-medium'>
                        <h3 className='border-t-[1px] border-black p-2 mt-8 mx-8'>500 GB Storage</h3>
                        <h3 className='border-y-[1px] p-2 border-black mx-8'>1 User Allowed</h3>
                        <h3 className='border-b-[1px] p-2 border-black mx-8'>Send up to 2GB</h3>
                    </div>
                    <button className='bg-green-400 mx-auto text-xl font-bold text-black rounded-md px-3 w-[200px] py-2 my-6'>Start Trial</button>
            </div>
            <div className='md:col-span-1 shadow-xl my-8 md:my-0 flex flex-col rounded-2xl hover:scale-105 duration-300'>
                <img src={One} className='w-[60px] bg-white mx-auto mt-[-3rem]'/>
                    <h1 className='font-bold text-center text-2xl py-8'>Single User</h1>
                    <h1  className='font-bold  text-center text-4xl'>$149</h1>

                    <div className='text-center font-medium'>
                        <h3 className='border-t-[1px] border-black p-2 mt-8 mx-8'>500 GB Storage</h3>
                        <h3 className='border-y-[1px] p-2 border-black mx-8'>1 User Allowed</h3>
                        <h3 className='border-b-[1px] p-2 border-black mx-8'>Send up to 2GB</h3>
                    </div>
                    <button className='bg-green-400 mx-auto text-xl font-bold text-black rounded-md px-3 w-[200px] py-2 my-6'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards