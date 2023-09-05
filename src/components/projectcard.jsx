import React from 'react'
import {FaGithub} from "react-icons/fa";

export default function projectcard(props) 
{
  return (
    <div className='container  border-2 border-red-500 rounded-md flex-col p-2 mb-2 text-white'>
     <div className='flex justify-center items-center'>
     <a href={props.plink}><FaGithub className='text-4xl text-center hover:text-red-400'/></a>    
    </div>   
    <img src={props.pimage} className='w-[30rem] h-[12rem] mb-2' alt="project"/>
    <h1 className='text-2xl font-bold font-sans text-white '>{props.ptitle}</h1>
    <h1 className='text-md font-semibold font-sans text-white'>{props.pdesc}</h1> 
    </div>
  )
}
