import React from 'react'
import { TiThMenuOutline } from "react-icons/ti";

function Navbar() {
  return (
    <div className='text-white bg-amber-300 flex items-center max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-red-500'>Navbar</h1>
        <ul className='flex hidden'>
            <li className='p-4'>HOME</li>
            <li className='p-4'>COMPANY</li>
            <li className='p-4'>RESOURCES</li>
        </ul>
        <div>
            <TiThMenuOutline size={20}/>
        </div>
        <div className='fixed left-0 top-0 bg-gray-600 w-[60%] h-full border-y-8 border-r-8 rounded-r-2xl border-cyan-300'>
        <h1 className='w-full text-3xl font-bold text-red-500 m-6'>Navbar</h1>
            <ul className='p-6 uppercase'>
                <li className='p-4'>HoME</li>
                <li className='p-4'>COmpaNY</li>
                <li className='p-4'>RESOURCES</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar