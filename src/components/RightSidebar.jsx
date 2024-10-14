"use client"; 

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import News from './News';

export default function RightSidebar() {
  const [input, setInput] = useState('')
  const router = useRouter(); 
  const handleSubmit = (e) => {
    e.preventDefault(); 
    router.push(`/search/${input}`)

    if(!input.trim()) return 
    // above here if there's space in our form return according to the record ...

  }
  return (
    <>
    <div className="sticky top-0 bg-white py-2">
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Search"
           value={input}
           onChange={(e) => setInput(e.target.value)} 
           className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2"
         />
      </form>
    </div>
    <News /> 
    </>
  )
}
