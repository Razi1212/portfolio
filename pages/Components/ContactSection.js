import React from 'react';


const ContactSection = () => {
  return (

    <div className="h-screen bg-zinc-900 px-24 py-44">
    <div className="bg-zinc-800 flex justify-between items-center p-20 rounded-2xl">
      <div className="text-gray-400 max-w-lg">
        <p className="font-semibold mb-6 text-3xl text-white">Let’s get in touch</p>
        <span className="leading-relaxed font-bold">
          I’m open to hearing about new opportunities. Feel free to reach out to me if you have a question, or just want to say hi!
        </span>
      </div>
      <div>
        <button className="bg-white text-zinc-900 px-4 py-2 rounded-full shadow hover:bg-gray-200 font-semibold">
          Start a Conversation
        </button>
      </div>
    </div>
  </div>
  
  

  );
}

export default ContactSection;