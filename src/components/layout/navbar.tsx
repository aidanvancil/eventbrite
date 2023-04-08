import Link from 'next/link';
import Image from 'next/image';
import {IoMdSearch } from 'react-icons/io';

export default function Navbar() {
  return (
    <nav className="bg-white flex text-center justify-between p-1">
        <div className='flex'>
            <Link href='/'>
                <img
                    className=' sm:w-18 md:w-24 lg:w-30 xl:w-36 w-14 ml-1 mt-1 p-5'
                    src='/logo.png'
                    alt='eventbrite'
                />
            </Link>
            <div className="ml-5 flex items-center justify-center h-12 mt-2 w-80 bg-gray-100">
                <div className='p-1 ml-2 opacity-30'><IoMdSearch/></div>
                <input type="text" placeholder="Search events" className="text-gray-300 w-full border-none p-3 bg-gray-100"></input>
            </div>
        </div>
        <div className='flex justify-between p-4'>
            <img src="" alt="" />
            <img src="" alt="" />
            <h3 className='sm:mr-0 md:mr-2 lg:mr-4'>Log In</h3>
            <h3 className='sm:mr-0 md:mr-2 lg:mr-4'>Sign Up</h3>
        </div>
    </nav>
  );
}