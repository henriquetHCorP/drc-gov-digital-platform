import React from 'react'
import Input from '../../components/Input'; 
import Feed from '../../components/Feed'; 

export default async function Home() {
  let data = null 
  try {
   const result = await fetch(process.env.URL + '/api/post/all', {
    method: 'POST',
    // above here, there's post instead of get because we wanna update post constinuously, there's gonna be function like like post, this will prevent errors
    cache: 'no-store',
    //no store: because we always wanna get the new data; 
   }); 
   data = await result.json(); 
  //  console.log("Posts:", data); 
  } catch(error) {
    console.log("Error fetching posts:", error); 
  }
  return (
    <div className="min-h-screen max-w-xl mx-auto border-r border-l">
      <div className="py-2 px-3 sticky top-0 z-50 bg-white borer-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
      </div>
      {/* {user.isAdmin && <Input />  } */}
      
      <Input /> 
      <Feed data={data}/>
    </div>
  )
}


 