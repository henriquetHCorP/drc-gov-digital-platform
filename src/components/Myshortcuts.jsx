import Link from 'next/link'
import React from 'react'

export default function Myshorcuts() {
  return (
    <div className="border gap-1 rounded-2xl p-2">
    <div className="flex flex-row gap-3 border hover:border-gray-400 items-center shadow-md rounded-2xl p-2 opacity-80 hover:opacity-100 hover:shadow-2xl hover:bg-gray-100">
      
      <Link href={'https://www.presidence.cd'}>
         <h1 className="font-bold text-md">Présidence RDC</h1>
         <p className="justify-self-auto font-medium justify-between text-sm">Find out more about the Head of the State activities throughout the whole country and around the world</p>
      </Link> 
      <img src="/presidence.jpeg" className="w-28 h-28 -mt-2 cursor-pointer"/>
      </div>
      <div className=" mt-10 flex flex-row gap-3 border hover:border-gray-400 items-center shadow-md rounded-2xl p-2 opacity-80 hover:opacity-100 hover:shadow-2xl hover:bg-gray-100">
      
<Link href={'https://www.primature.gouv.cd'}>
   <h1 className="font-bold text-md">Primature RDC</h1>
   <p className="justify-self-auto font-medium justify-between text-sm">Find out more about the Prime Minister activities throughout the whole country and around the world</p>
</Link> 
<img src="/gouvernement2.jpeg" className="w-28 h-28 -mt-2 cursor-pointer"/>
</div>
      
    <div className=" mt-10 flex flex-row gap-1 border hover:border-gray-400 items-center shadow-md rounded-2xl p-2 opacity-80 hover:opacity-100 hover:shadow-2xl hover:bg-gray-100">
      
      <Link href={'https://drc-gov-social-media.onrender.com'}>
         <h1 className="font-bold">Do you want some more news?</h1>
         <p className="justify-self-auto font-medium justify-between text-sm">Get  the latest developments about our country and Government members in real time while interacting with the others using the DRC Gov Social Media </p>
      </Link> 
      <img src="/favicon.ico" className="w-20 h-20 -mt-5 cursor-pointer"/>
      </div>


</div>
  )
}
