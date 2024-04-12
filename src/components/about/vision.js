"use client"
import { useSlideElementAnimation } from "hooks";
import Image from "next/image"
import { useRef } from "react";

const Vision = ({translation}) => {
  const ref=useRef()
  
  const {
    leftElement,
    rightElement
  }=useSlideElementAnimation(ref)
  return (
    <div ref={ref}  className="flex flex-col pb-20 lg:flex-row"  style={{minHeight:"100vh",backgroundPosition:"center"}}>
    <div  className="relative flex-1 w-full overflow-hidden"  style={{flex:2 ,...leftElement}} >
        <Image src="/vision.png" fill  alt='img' className="object-cover w-24 h-24 md:object-contain md:w-full md:h-full" />
    </div>

    <div  className="relative flex flex-col justify-center flex-1 pt-10 pl-4 " style={{flex:3,...rightElement}}>
      
        <h1 className="relative z-10 px-5 text-5xl "  style={{color:"#fbc460"}}>
            {translation.ourVision}
        </h1>
        <p className="px-5 mt-10 text-white">
        {translation.vision}
        </p>
       
    </div>

  </div>  
)};

export default Vision;
