"use client"
import { useFadeElementAnimation, } from "hooks";
import Image from "next/image"
import { useRef } from "react";
const Clients = ({translation}) => {
  const ref=useRef()
  
  const { element }=useFadeElementAnimation(ref)
  return (
<div ref={ref} className="px-5 pb-24 mt-10 mb-10" style={{ background:"url('/clients.png')"}}>
  <div className="flex flex-col justify-start gap-10 my-10 lg:items-center lg:flex-row md:px-10 lg:px-20">
    <h1 style={{...element}} className="flex flex-1 text-2xl md:mx-24 underline-word underline-offset-4">
       {translation.title}
    </h1>
    <p style={{...element}} className="flex justify-center flex-1 text-sm text-gray-500 md:text-md ">
    {translation.description}
    </p>
  </div>

  <div className="flex flex-col gap-10 md:px-10 lg:px-20 lg:flex-row">
        <div style={{...element}} className="flex items-center justify-center flex-1 ">
            <div className="relative overflow-hidden bg-white rounded-lg h-80 client">
            <Image className="image" src="/client-1.png" width={250} height={200} alt="client"/>
            <div className="absolute bottom-0 left-0 w-full px-4 overflow-hidden text-black max-h-0 coInfo" style={{background:"rgba(0,0,0,0.7)"}}>
                <h1 className="text-lg font-semibold">Co. Founder:</h1>
                <h1 className="text-2xl font-bold ">Nada Amr</h1> 
            </div>
            </div>
        </div>

        <div style={{...element}} className="flex items-center justify-center flex-1 ">
        <div className="relative overflow-hidden bg-white rounded-lg h-80 client">
            <Image className="image" src="/client-2.png" width={250} height={200} alt="client"/>
             <div className="absolute bottom-0 left-0 w-full px-4 overflow-hidden text-black max-h-0 coInfo" style={{background:"rgba(0,0,0,0.7)"}}>
                <h1 className="text-lg font-semibold">Co. Founder:</h1>
                <h1 className="text-2xl font-bold ">Reem Mohammed</h1> 
            </div>
            </div>
        </div>
  </div>
</div>
)};

export default Clients;
