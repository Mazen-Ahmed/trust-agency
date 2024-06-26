"use client"
import  NextImage from "next/image"
import {Arrow, Blob} from "components"
import { useEffect, useMemo, useState } from "react";
import {motion} from 'framer-motion'
import {useLocale} from "next-intl"
const Header = ({translation}) => {
  const locale=useLocale()

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const trustImages =useMemo(()=>(
          [
            '/text-1-bg1.png',
            '/text-1-bg2.png',
            '/text-1-bg3.png',
          ]
        ),[]) 

  const agencyImages =useMemo(()=>(
        [
          '/text-2-bg1.png',
          '/text-2-bg2.png',
          '/text-2-bg3.png',
        ]
      ),[]) 
      
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % trustImages.length);
        }, 3000 );
    
        return () => clearInterval(intervalId);
      }, [trustImages.length]);
    
      useEffect(() => {
        const preloadImages = () => {
          [...trustImages,...agencyImages].forEach((image) => {
            const img = new Image();
            img.src = image;
          });
        };
    
        preloadImages();
    
        // Cleanup function
        return () => {
        };
      }, [trustImages,  agencyImages]);
    
  return (
    <header className="relative w-4/5 h-screen py-40 mx-auto md:py-3 lg:h-32 md:px-10 lg:px-20"
     style={{height:600}}
     >
      <motion.div 
      initial={{x:200,y:1000}}
      animate={{x:"-50px",y:"20%"}}>
      <Blob height={300} width={100} position={{...locale==="ar"?{right:0}:{left:0},top:"20%"}}/>
      </motion.div>
    <div dir="ltr" className="flex justify-center leading-none md:justify-start align-start">
      <h1 className="heading trust" style={{ 
        backgroundImage:`url("${trustImages[currentIndex]}")`,
        fontFamily: "'Poppins', sans-serif !important ",
        fontWeight:600,
        fontStyle: "normal"
    }}>
        Trust-  
      </h1>
      <div dir="ltr" className="flex-col items-center self-center justify-center hidden h-full md:flex ">
        <NextImage  src="/logo-text.png" width={98} height={40}  className="object-cover mx-8"   alt="logo"/>
      </div>
    </div>
    <div dir="ltr"  className="flex flex-col justify-end leading-none align-start lg:flex-row ">
      <div className="flex items-center self-center justify-center order-2 lg:order-1 ">
        <p className="w-full h-8 my-10 font-bold text-gray-500 break-words text-md md:w-3/4 md:text-lg">
          {translation.together}
        </p>
      </div>
      <h1 className="self-center order-1 agency heading lg:order-2 " style={{
        backgroundImage:`url("${agencyImages[currentIndex]}")`,
        fontFamily: "'Poppins', sans-serif  !important",
        fontWeight:600,
        fontStyle: "normal"
        }} >
       Agency
      </h1>
    </div>
    <Arrow />
    </header>
  )
};

export default Header;
