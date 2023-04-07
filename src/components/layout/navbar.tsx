import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white flex text-center justify-between">
        <div className='flex sm:w-4 md:w-6 lg:w-8 xl:w-10'>
            <Link href='/'>
                <img
                    src='/logo.png'
                    alt='eventbrite'
                />
            </Link>
        </div>
        <div className='flex'>
            <img src="" alt="" />
            <img src="" alt="" />
            <h3 className='sm:mr-0 md:mr-2 lg:mr-4'>Log In</h3>
            <h3>Sign Up</h3>
        </div>
    </nav>
  );
}