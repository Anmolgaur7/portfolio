import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import mine from "../images/anmol.jpg";
import { FaGithub } from 'react-icons/fa';
function Aboutme() {
  return (
    <>
      <div className='flex justify-center p-4 mb-3 '>
        <a href="https://github.com/Anmolgaur7"><button className='rounded-3xl  bg-red-500 flex justify-center items-center text-white text-xl pt-2 pb-2 pr-4 pl-4'> <FaGithub className='mr-2'/>Github Profile</button></a>
      </div>
      <div className='flex flex-col items-center pt-4'>
        <img src={mine} className='w-[60vw] h-[40vh] rounded-full lg:w-[20vw] ' alt='image' />
        <div className=' text-white '>
          <h1 className=' text-5xl font-bold font-sans text-center mt-3'>
            Hi i am Anmol Gaur
          </h1>
          <h1 className='text-2xl font-semibold font-mono text-center mt-3'>I am a <TypeAnimation
            sequence={[
              'Web Developer',
              1000,
              'Programmer',
              1000,
              'Android Developer',
              1000
            ]}
            wrapper="span"
            speed={10}
            className='text-2xl font-semibold text-red-400 font-mono text-center'
            repeat={Infinity}
          /></h1>
          <p className='text-center text-lg pl-5 pr-5 text-green-100 mt-2'>
            Hey there, I'm a BCA student cruising through my 4th semester. My heart has taken a liking to React and the MERN stack - there's something captivating about weaving code into interactive experiences.
            As I tread the digital path, I've also dipped my toes into Android development, curious about the world of mobile apps.
            Join me in this tech journey as I blend creativity with coding, turning ideas into digital realities. Explore my portfolio and let's connect to bring innovation to life!</p>
        </div>
        <button className='rounded-md bg-red-500 text-white text-xl pr-8 pl-8 pt-2 pb-2 mt-7 mb-2s font-bold'><a href="https://docs.google.com/document/d/1aDHtLzCEkltabxforeT1qhWdZwV7BFwN/edit?usp=sharing&ouid=117289838927529336567&rtpof=true&sd=true">Check Resume</a></button>
      </div>
    </>
  )
}

export default Aboutme
