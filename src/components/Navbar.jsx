import React, { useState } from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Navbar() {
    const [nav,setNav] = useState(false)

    const handleNav =()=>{
        setNav(!nav)
    }




    return (
    <div className='text-white flex items-center max-w-[1240px] mx-auto px-4 pt-6'>
        <h1 className='w-full text-3xl font-bold text-white-500'>Navbar</h1>
        <ul className='md:flex hidden'>
            <li className='p-4'>HOME</li>
            <li className='p-4'>COMPANY</li>
            <li className='p-4'>RESOURCES</li>
        </ul>


        {/* MOBILE VIEW */}
        <div onClick={handleNav} className='inline md:hidden'>
            {nav?<IoMdCloseCircleOutline size={20}/>: <TiThMenuOutline size={20}/>}
        </div>
        <div className={nav?'fixed left-0 top-0 bg-gray-600 w-[60%] h-full border-y-8 border-r-8 rounded-r-2xl border-cyan-300 ease-in-out duration-500': 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-white m-6'>Navbar</h1>
            <ul className='p-6 uppercase'>
                <li className='p-4 border-b border-gray-400'>HoME</li>
                <li className='p-4 border-b border-gray-400'>COmpaNY</li>
                <li className='p-4 border-b border-gray-400'>RESOURCES</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar