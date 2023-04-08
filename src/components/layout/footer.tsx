import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-footer-purple text-white p-4 min-h-screen w-full">
        <div className='text-xs text-left flex grid-cols-4 gap-4'>
            <div className='w-1/2 px-4 mb-4'>
                <h3 className='text-sm font-bold mb-3'>Use Eventbrite</h3>
                <ul>
                    <li>Create Events</li>
                </ul>
            </div>
            <div className='w-1/2 px-4 mb-4'>
                <h3 className='text-sm font-bold mb-3'>Plan Events</h3>
                <ul>
                    <li>Sell Tickets Online</li>
                </ul>
            </div>
            <div className='w-1/2 px-4 mb-4'>
                <h3 className='text-sm font-bold mb-3'>Find Events</h3>
                <ul>
                    <li>Events</li>
                </ul>
            </div>
            <div className='w-1/2 px-4 mb-4'>
                <h3 className='text-sm font-bold mb-3'>Connect With Us</h3>
                <ul>
                    <li>Contact Support</li>
                </ul>
            </div>
        </div>
        <div className='text-xs text-center justify-around flex grid-cols-3 gap-4'>
            <p>© 2023 Eventbrite</p>
            <ul className='flex list-disc space-x-4'>
                <Link href='/'>
                    <li>How It Works</li>
                </Link>
                <Link href='/'>
                    <li>Pricing</li>
                </Link>
                <Link href='/'>
                    <li>Contact Support</li>
                </Link>
                <Link href='/'>
                    <li>Contact Sales</li>
                </Link>
                <Link href='/'>
                    <li>About</li>
                </Link>
                <Link href='/'>
                    <li>Blog</li>
                </Link>
                <Link href='/'>
                    <li>Help</li>
                </Link>
                <Link href='/'>
                    <li>Careers</li>
                </Link>
                <Link href='/'>
                    <li>Press</li>
                </Link>
                <Link href='/'>
                    <li>Investors</li>
                </Link>
                <Link href='/'>
                    <li>Security</li>
                </Link>
                <Link href='/'>
                    <li>Developers</li>
                </Link>
                <Link href='/'>
                    <li>Terms</li>
                </Link>
                <Link href='/'>
                    <li>Privacy</li>
                </Link>
                <Link href='/'>
                    <li>CA Privacy Notice</li>
                </Link>
                <Link href='/'>
                    <li>Accessiblity</li>
                </Link>
                <Link href='/'>
                    <li>Cookies</li>
                </Link>    
            </ul>
            <select className='appearance-none border-none bg-transparent' name="Language">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
            </select>
        </div>
    </footer>
  );
}