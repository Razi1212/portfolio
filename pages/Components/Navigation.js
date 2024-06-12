import React from 'react'
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai';
import {useState} from 'react'

const Navigation = () => {

    const [menuopen, setmenuopen] = useState(false)

  const handlenav=()=>{
        setmenuopen(!menuopen);
  }
  return (
       <nav className='w-full h-14 bg-zinc-900 text-white'>
            <div className='flex h-full w-full justify-between p-3'>  
            <div className='flex text-xl font-extrabold'>
            <span class="text-Indigo-800">Web</span>
            <span class="text-white-500">Dev</span>
         </div>
                <div className='hidden sm:flex'>
                    <ul className='hidden sm:flex'>     
                        <Link href='/ ' >
                           <li className='ml-10  hover:border-b text-xl'>Home</li>
                        </Link>

                        {/* <Link href='/About'>
                           <li className='ml-10 hover:border-b text-xl'>About</li>
                        </Link> */}
                  
                        <Link href='/Project'>
                           <li className='ml-10  hover:border-b text-xl'>Project</li>
                        </Link>

                        <Link href='/Contact'>
                           <li className='mx-10 hover:border-b text-xl'>Contact</li>
                        </Link>

                        <Link href='/Blog'>
                           <li className='mx-10 hover:border-b text-xl'>Blog</li>
                        </Link>
                    </ul>    
                </div>

                <div onClick={handlenav} className='sm:hidden cursor-pointer pl-24'> 
                    <AiOutlineMenu size={25}/>
               </div>
            </div>
        </nav>
  )
}

export default Navigation