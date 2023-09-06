import React from 'react'
import projectdata from "../assets/project.json"
import  Projectcard  from "../components/projectcard";

export default function project() {
  return (
    <div className='bg-gray-900  mt-14 min-h-fit w-screen opacity-70 flex flex-col p-4 justify-center'>
        <h1 className='text-4xl font-bold font-sans text-center text-white p-4'>Projects</h1>
        <p className='text-lg font-medium font-sans text-center pl-6 pr-6 text-green-100 m-3 '>Here are some projects of mine.</p>
        <div className='flex flex-col justify-center items-center md:flex-row flex-wrap'>
         {
          projectdata.map(proj=>(
          <Projectcard pimage={proj.pimage} ptitle={proj.ptitle} pdesc={proj.pdesc} plink={proj.plink}/>  
          ))
         }
        </div>
      
    </div>
  )
}
