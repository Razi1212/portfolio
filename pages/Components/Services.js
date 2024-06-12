import React from 'react';
import { SiCodingninjas } from "react-icons/si";

const Services = () => {
  return (
    <>
   <div className="min-h-screen bg-zinc-900 p-8 md:p-16 lg:p-32">
  <h1 className="text-white text-4xl font-bold text-center bg-zinc-900 p-4 rounded mb-8">Services</h1>
  
  <div className='flex'>
  <div className='bg-zinc-800 text-gray-400 mx-4 my-8 p-4 rounded-lg h-96 hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out w-2/3'>
      <p className='text-center m-8 w-full'><SiCodingninjas size={48} /></p>
      <h1 className='text-lg text-center font-semibold mb-5 '>Web Design And Development</h1>
      <p className='text-base m-4'>Do you want to develop your own highly customizable website? You do not have to look anywhere else. Depending on your needs, we can create a website that is tailored to your needs with or without code!</p>
    </div>

    <div className='bg-zinc-800 text-gray-400 mx-4 my-8 p-4 rounded-lg  h-96  hover:bg-sky-700 hover:text-white w-2/3'>
      <p className='text-center m-8'><SiCodingninjas size={48} /></p>
      <h1 className='text-lg text-center font-semibold mb-5'>Social Media Marketing & SEO</h1>
      <p className='text-base m-4'>Use the power of the social media to grow your business. We can help you to get your brand out there, by suggesting you ways you can put out your business via social media and through targeted ad campaigns.</p>
    </div>

    <div className='bg-zinc-800 text-gray-400 mx-4 my-8 p-4 rounded-lg  h-96  hover:bg-sky-700 hover:text-white w-2/3'>
      <p className='text-center m-8'><SiCodingninjas size={48} /></p>
      <h1 className='text-lg text-center font-semibold mb-5'>Content Writing</h1>
      <p className='text-base m-4'>Whether you’re a small business, SaaS company or entrepreneur, our custom content can catapult your online visibility and give you that boost to attract new leads.</p>
    </div>
    </div>
</div>

  </>

  );
}

export default Services;
