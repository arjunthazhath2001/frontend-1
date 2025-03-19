import React from 'react'

function Navbar() {
  return (
    <div className='text-white flex items-center px-4'>
        <h1 className='w-full text-3xl font-bold text-red-500'>Navbar</h1>
        <ul className='flex'>
            <li className='p-4'>HOME</li>
            <li className='p-4'>COMPANY</li>
            <li className='p-4'>RESOURCES</li>
        </ul>
    </div>
  )
}

export default Navbar