import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='bg-pink-400 w-full mx-auto'>
    <div className="h-screen mt-[-50px] flex flex-col bg-red-500 justify-center items-center w-full max-w-[800px] mx-auto text-amber-50">      
        <p className="font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:pt-6">
          GROW WITH DATA
        </h1>
      <div className="md:text-5xl flex sm:text-4xl text-xl font-bold py-6">
        <p className="mr-2">You can use it for</p>
        <ReactTyped
          strings={["Anything", "Anytime", "Anywhere"]}
          typeSpeed={40}
          loop
        />
      </div>
      
      <p className="md:text-2xl sm:text-xl text-lg text-center px-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iste eum
        fugiat ipsa.
      </p>
      <button className="bg-red-500 py-2 px-5 rounded-full mt-5 font-black">BUTTON</button>
    </div>
    </div>
  );
}

export default Hero;
