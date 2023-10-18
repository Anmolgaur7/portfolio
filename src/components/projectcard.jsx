import React from 'react'
import { FaGithub } from "react-icons/fa";

export default function projectcard(props) {
  return (
    <a href={`${props.plink}`}>
      <div className=' border-2 w-[70vw] h-[50vh] border-red-500 rounded-md p-2 m-2 text-white overflow-scroll md:w-[40vw] h-[50vh] overflow-x-hidden   '>
        <img src={props.pimage} className='mb-2 w-[40vw]' alt="project" />
        <h1 className='text-2xl font-bold font-sans text-white mb-2 mt-2'>{props.ptitle}</h1>
        <h1 className='text-md font-semibold font-sans text-white'>{props.pdesc}</h1>
      </div>
    </a>
  )
}
