"use client"
import Image from "next/image"
import {Arrow, Blob} from "components"
import { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import {useLocale} from "next-intl"
const Header = ({translation}) => {
  const locale=useLocale()

  const images = [
        '/text-bg1.png',
        '/text-bg2.png',
        '/text-bg3.png',
        '/text-bg4.png',
      ];
        
      const [currentIndex, setCurrentIndex] = useState(0);
  
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
    
        return () => clearInterval(intervalId);
      }, [images.length]);
    
    
  return (
    <header className="relative h-screen py-40 md:py-3 lg:h-32 md:px-10 lg:px-20"
     style={{height:600}}
     >
      <motion.div 
      initial={{x:200,y:1000}}
      animate={{x:"-50px",y:"20%"}}>
      <Blob height={300} width={100} position={{...locale==="ar"?{right:0}:{left:0},top:"20%"}}/>
      </motion.div>
    <div dir="ltr" className="flex justify-center leading-none align-start">
      <h1 className="heading" style={{"backgroundImage":`url("${images[currentIndex]}")`}}>
        Trust-  
      </h1>
      <div dir="ltr" className="flex-col items-center self-center justify-center hidden md:flex ">
        <Image  src="/logo-white.png" width={150} height={150} className="w-14 h-14 md:w-32 md:h-32 xl:w-56 xl:h-56"   alt="logo"/>
        <h1 className="text-xs tracking-widest uppercase md:text-sm">Trust Agency</h1>
      </div>
    </div>
    <div  className="flex flex-col justify-center leading-none align-start md:flex-row ">
      <div className="flex items-center self-center justify-center order-2 md:order-1 ">
        <p className="w-full h-8 my-10 font-bold text-gray-500 break-words text-md md:w-32 xs:20 md:text-lg">
          {translation.together}
        </p>
      </div>
      <h1 className="self-center order-1 heading md:order-2" style={{"backgroundImage":`url("${images[currentIndex]}")`}} >
       Agency
      </h1>
    </div>
    <Arrow/>
    </header>
  )
};

export default Header;
