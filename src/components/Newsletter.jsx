import React from 'react'

function Newsletter() {
  return (
    <div className='w-full bg-black p-20'>
        <div className='max-w-[1240px] mx-auto gap-5 grid md:grid-cols-3'>
            <div className='md:col-span-2 p-5'>
                <h1 className='font-bold text-3xl text-white md:text-4xl'>Want tips & tricks to optimize your flow?</h1>
                <p className='text-white pt-3'>Signup for newsletter and stay upto date</p>
            </div>
            <div className='md:col-span-1 text-white flex flex-col justify-center'>
                <div className='flex flex-col sm:flex-row justify-center w-full gap-5'>
                    <input className="bg-white p-3 text-black rounded-xl w-full" placeholder='Enter your email'></input>
                    <button className='bg-green-400 px-5 py-3 text-black rounded-xl cursor-pointer font-bold'>SIGNUP</button>
                </div>
                <p className='text-center md:text-left p-2'>Read Our <a href='https://www.youtube.com/watch?v=ZU-drSVodBw&t=3069s' className='text-green-400 underline' target='_blank' rel="noopener noreferrer">Privacy Policy</a></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter