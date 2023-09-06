import React from 'react'
import {FaGithub} from "react-icons/fa";

export default function projectcard(props) 
{
  return (
    <div className=' border-2 w-[70vw] h-[50vh] border-red-500 rounded-md p-2 m-2 text-white overflow-scroll md:w-[40vw] h-[50vh] overflow-x-hidden   '>
     <div className='flex justify-center items-center'>
     <a href={props.plink}><FaGithub className='text-4xl text-center  hover:text-red-400'/></a>    
    </div>   
    <img src={props.pimage} className='mb-2 w-auto' alt="project"/>
    <h1 className='text-2xl font-bold font-sans text-white '>{props.ptitle}</h1>
    <h1 className='text-md font-semibold font-sans text-white'>{props.pdesc}</h1> 
    </div>
  )
}
