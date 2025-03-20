import React from 'react'
import Image from '../assets/img1.png'
function Analytics() {
  return (
    <div className='bg-white w-full min-h-screen mx-auto'>
        <div className='bg-white max-w-[1240px] grid md:grid-cols-2 gap-8 mx-auto md:p-20'>
            <div className='p-5'>
                <img className='mx-auto' src={Image}></img>
            </div>

            <div className='bg-white text-black p-10'>
                <h3 className='md:text-xl text-lg text-green-400 font-black'>DATA ANALYTICS DASHBOARD</h3>
                <h1 className='text-4xl font-black'>Manage Data Analytics Centrally</h1>
                <p className='pt-3 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora beatae hic expedita aut provident inventore animi earum qui pariatur aperiam quas atque voluptatum, culpa iste blanditiis, quisquam iure explicabo ex.</p>
                <button className='bg-black font-bold text-lg rounded-xl py-3 text-green-400 px-5 cursor-pointer'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics