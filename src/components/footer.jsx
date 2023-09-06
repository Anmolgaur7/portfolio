import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function footer() {
  return (
    <div className=' bg-black justify-center flex-col items-center flex p-12 md:p-20 '>
     <h1 className='text-4xl text-white font-bold font-sans md:text-5xl'>Anmol Gaur</h1>

     <div className='p-4  text-white flex  text-2xl mt-4 justify- flex-wrap'>
    <a href="https://www.instagram.com/anmol____gaur/"><FaInstagram className=' m-2  hover:text-red-400 md:m-4 text-3xl'/></a>
    <a href="https://www.linkedin.com/in/anmol-gaur-79963222b/"><FaLinkedin className=' m-2 hover:text-red-400 md:m-4 text-3xl'/></a>
    <a href="https://twitter.com/AnmolGaur26"><FaTwitter className=' m-2 hover:text-red-400 md:m-4 text-3xl'/></a>
     </div>
    </div>
  )
}

export default footer
