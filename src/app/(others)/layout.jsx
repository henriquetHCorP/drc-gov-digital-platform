import localFont from "next/font/local";
import ".././globals.css";

import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs"

import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";
import Loader from "../../components/Loader";
import SessionWrapper from "../../components/SessionWrapper"; 
import CommentModal from "../../components/CommentModal"; 
import Header from "../../components/Header"; 
import Searchbar from "../../components/Searchbar"; 

 


const geistSans = localFont({
  src: ".././fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: ".././fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DRC Gov Digital Platform",
  description: "A reliable source of information pertaining to Government members",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <SessionWrapper>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkLoading>
          <Loader />
        </ClerkLoading>
        <ClerkLoaded>
        <div className="flex justify-between max-w-6xl mx-auto">
          <div className="hidden sm:inline h-screen sticky top-0">
          {/* <div className="sm:inline border-r h-screen sticky top-0"> */}
            <LeftSidebar />
          </div>
            <div className="w-2xl flex-1">
              <div className="sm:hidden inline top-0">
              <Header /> 
                <div className="pr-6 pl-44 -mt-24">
                <Searchbar/>
                </div>
              
              </div>
              {children}
              </div>
            <div className=" lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
           
         <RightSidebar /> 
         </div>
        </div>
        {/* div with no leftsidebar or rightsidebar for the login page */}
        <CommentModal /> 
        </ClerkLoaded>
      </body>

    </html>
    </SessionWrapper>
    </ClerkProvider>
  );
}
