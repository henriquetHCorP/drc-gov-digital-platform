import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { HiHome } from 'react-icons/hi';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from '@clerk/nextjs';
import MiniProfile from './MiniProfile';
export default function LeftSidebar() {
  return (
    <div className='flex flex-col p-3 justify-between h-screen items-center'>
      <div className='flex flex-col gap-4 p-3'>
        <Link href='/' className="items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"> 
          {/* <FaXTwitter className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200 ' /> */}
          <img src="/drc-gov-social-media.png" className="shadow-lg hover:shadow-md object-fit bg bg-none w-20 h-20 pb-1"/> 
        {/* <Link to="/" className="items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"> */}
            <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-blue-500 to-red-500 rounded-lg text-white">
                  DRC Gov
            </span> 
          <br/> Social Media 
        {/* </Link> */}

        </Link> 
        <Link
          href='/'
          className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'
        >
          <HiHome className='w-7 h-7' />
          <span className='font-bold hidden xl:inline'>Home</span>
        </Link>
        <button className='bg-blue-400 text-white rounded-full  hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline font-semibold'>
          <SignedIn>
            <SignOutButton /> 
          </SignedIn>
          <SignedOut>
            <SignInButton /> 
          </SignedOut>
        </button>
      </div>
      <SignedIn>
        <MiniProfile /> 
      </SignedIn>
    </div>
  );
}
