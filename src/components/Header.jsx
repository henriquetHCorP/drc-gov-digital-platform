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
export default function Header() {
  return (
    <div className='flex flex-row p-3 justify-between items-center'>
      <div className='flex flex-row gap-4 p-3'>
        <Link href='/' className="items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"> 
          {/* <FaXTwitter className='w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200 ' /> */}
          <div className="px-7">
          <img src="/drc-gov-social-media.png" className="shadow-lg hover:shadow-md object-fit bg bg-none w-20 h-20 pb-1"/> 
        {/* <Link to="/" className="items-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"> */}
            <span className="px-2 bg-gradient-to-r from-blue-500 via-blue-500 to-red-500 rounded-lg text-white">
                  DRC Gov
            </span> 
          </div>
          <br/> 
          <div className="-mt-6 px-3 text-sm">
          Digital Platform 
          </div>
          
        {/* </Link> */}

        </Link> 
        <Link
          href='/'
          className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'
        >
          <HiHome className='w-7 h-7 -mt-20' />
          <span className='font-bold hidden xl:inline'>Home</span>
        </Link>
        <button className='bg-blue-400 text-white text-xs rounded-2xl hover:brightness-95 transition-all duration-200 w-16 h-9 shadow-md xl:inline font-semibold'>
          <SignedIn>
            <SignOutButton /> 
          </SignedIn>
          <SignedOut>
            <SignInButton /> 
          </SignedOut>
        </button>
      </div>
      <SignedIn>
        <div className="-mt-20">
        <MiniProfile />
          </div> 
      </SignedIn>
    </div>
  );
}
