"use client"
import Image from "next/image"
import { useFadeElementAnimation } from "hooks";
import { useRef } from "react";

const Header = () => {
    const ref=useRef()
    
    const { element} =useFadeElementAnimation()
  return(
    <div  ref={ref} className="flex flex-col pb-20 lg:flex-row"  style={{minHeight:"100vh",backgroundPosition:"center",...element}}>
 

    <div className="relative flex flex-col justify-center order-2 px-5 pt-10 md:order-1 md:px-10 lg:px-20" style={{flex:3}}>
      
        <h1 className="relative z-10 px-5 text-5xl "  style={{color:"#fbc460"}}>
            dqwq
        </h1>
        <p className="px-5 mt-10 text-white">
dqwdw
        </p>
       
    </div>

    <div className="relative order-1 w-full overflow-hidden md:order-2"  style={{flex:2}}>
        <Image src="/mission.png" fill  alt='img' className="object-cover w-24 h-24 md:object-contain md:w-full md:h-full" />
    </div>

  </div>  
  );
};

export default Header;
