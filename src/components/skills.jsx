import React from 'react'
import { FaAndroid, FaBootstrap, FaCss3, FaHtml5, FaJava, FaJs, FaNode, FaReact } from 'react-icons/fa'
import{SiC, SiCplusplus, SiExpress, SiGit, SiGithub, SiKotlin, SiMongodb, SiMysql, SiPostman, SiPython, SiVisualstudiocode} from 'react-icons/si'

function skills() {
  return (
    <div className='bg-gray-950 mt-14 min-h-fit opacity-70 flex flex-col justify-center'>
    <div>
    <h1 className='text-4xl font-bold font-sans text-center text-white p-4'>Skills</h1>
    <p className='text-lg font-medium font-sans text-center pl-6 pr-6 text-green-100 m-3 '>Here are some skills which I developed over the last 2 years</p>
    </div>
    <div className='flex justify-center flex-wrap'>
 
    <div className='bg-gray-950 text-white border-4 w-full m-8 rounded-2xl  border-red-600 pt-3 pb-5 pr-15 pl-15 text-center'>
    <h1 className='text center text-3xl font-medium p-2 mb-3'>Frontend</h1>
    <div className=' justify-center flex-wrap flex  gap-2 '>
      <div className=' text-black border-red-600 text-lg font-medium flex items-center  bg-gray-300 p-2 rounded-2xl hover:bg-blue-400'>
      <FaReact/>
      <h1 className='ml-2'>React JS</h1>  
    </div>
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-yellow-400'>
      <FaJs/>
      <h1 className='ml-2'>Javascript</h1>  
    </div> 
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-purple-400'>
      <FaBootstrap/>
      <h1 className='ml-2'>Bootstrap</h1>  
    </div>   <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-blue-500'>
      <FaCss3/>
      <h1 className='ml-2'>Css</h1>  
    </div>   
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl '>
      <FaHtml5/>
      <h1 className='ml-2'>Html</h1>  
    </div>
    </div>
    </div>
    <div className='bg-gray-950 text-white border-4 w-full m-8 rounded-2xl  border-red-600 pt-3 pb-5 pr-15 pl-15 text-center'>
    <h1 className='text center text-3xl font-medium p-2 mb-3'>Backend</h1>
    <div className=' justify-center flex-wrap flex  gap-2 '>
      <div className=' text-black border-red-600 text-lg font-medium flex items-center  bg-gray-300 p-2 rounded-2xl hover:bg-green-400'>
      <FaNode/>
      <h1 className='ml-2'>Node JS</h1>  
    </div>
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-cyan-400'>
      <SiExpress/>
      <h1 className='ml-2'>Express JS</h1>  
    </div> 
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-green-400'>
      <SiMongodb/>
      <h1 className='ml-2'>Mongodb</h1>  
    </div>   <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-blue-300'>
      <SiMysql/>
      <h1 className='ml-2'>MySql</h1>  
    </div>   
    </div>
    </div>
    <div className='bg-gray-950 text-white border-4 w-full m-8 rounded-2xl  border-red-600 pt-3 pb-5 pr-15 pl-15 text-center'>
    <h1 className='text center text-3xl font-medium p-2 mb-3'>Lannguages</h1>
    <div className=' justify-center flex-wrap flex  gap-2 '>
      <div className=' text-black border-red-600 text-lg font-medium flex items-center  bg-gray-300 p-2 rounded-2xl hover:bg-blue-400'>
      <FaJava/>
      <h1 className='ml-2'>Java</h1>  
    </div>
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-yellow-400'>
      <FaJs/>
      <h1 className='ml-2'>Javascript</h1>  
    </div> 
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-blue-400'>
      <SiC/>
      <h1 className='ml-2'>C</h1>  
    </div>
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-blue-400'>
      <SiCplusplus/>
      <h1 className='ml-2'>C++</h1>  
    </div>   
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-blue-300'>
      <SiPython/>
      <h1 className='ml-2'>Python</h1>  
    </div>
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-purple-300'>
      <SiKotlin/>
      <h1 className='ml-2'>Kotlin</h1>  
    </div> 
    </div>
    </div>
    <div className='bg-gray-950 text-white border-4 w-full m-8 rounded-2xl  border-red-600 pt-3 pb-5 pr-15 pl-15 text-center'>
    <h1 className='text center text-3xl font-medium p-2 mb-3'>Others</h1>
    <div className=' justify-center flex-wrap flex  gap-2 '>
      <div className=' text-black border-red-600 text-lg font-medium flex items-center  bg-gray-300 p-2 rounded-2xl hover:bg-green-400'>
      <FaAndroid/>
      <h1 className='ml-2'>Android Studio</h1>  
    </div>
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-blue-400'>
      <SiVisualstudiocode/>
      <h1 className='ml-2'>Vs Code</h1>  
    </div> 
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-gray-400'>
      <SiGithub/>
      <h1 className='ml-2'>Github</h1>  
    </div>   <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-red-300'>
      <SiGit/>
      <h1 className='ml-2'>Git</h1>  
    </div>
    <div className=' text-black border-red-600 text-lg font-medium flex items-center bg-gray-300 p-2 rounded-2xl hover:bg-orange-300'>
      <SiPostman/>
      <h1 className='ml-2'>Postman</h1>  
    </div>      
    </div>
    </div>
    </div>
    </div>
  )
}
export default skills
