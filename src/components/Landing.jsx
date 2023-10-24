import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate=useNavigate()
    const [state,Setval]=useState(null)
    const change=()=>{
    const arr=["Hello","नमस्ते","Kon'nichiwa","Hola","Bonjour","Salaam","Szia","Ciao","Hallo'"]
    let val=0
     setInterval(() => {
            if(val===8){
                navigate("/main")
            }
        Setval(arr[val++])
        },200);
    }
        useEffect(() => {
                change()
        }, []) // added mi
  return (
    <div className='flex justify-center items-center h-screen bg-black text-red-600 text-6xl font-mono font-semibold'>
      {state}
    </div>
  )
}

export default Landing
