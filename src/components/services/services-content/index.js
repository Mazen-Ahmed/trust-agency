"use client"
import { useFadeElementAnimation, useSlideElementAnimation } from "hooks";
import Image from "next/image"
import { lazy, useRef } from "react";

const Container = ({
    imageSrc,
    background,
    children,
    divOrder,
    imageOrder,
    fade,
}) => {
    const ref=useRef()
    
    const { element} =useFadeElementAnimation(ref)
    
    const { leftElement, rightElement} =useSlideElementAnimation(ref)   


    return(
    <div ref={ref}  className="flex flex-col min-h-screen gap-10 my-12 md:flex-row animated" style={{background:background&&background, ...fade&&element}}>
        <div
         className={`relative flex-1 ${imageOrder===2?"justify-end":"justify-start"} flex items-center ${imageOrder===2 && "md:order-2"}`} 
        style={{
            ...(!fade)&&(imageOrder===2?rightElement:leftElement),
        }}
      >
            <div 
            className="flex items-center self-center w-3/4 h-4/5 "
            style={{background:"url('/services-bg.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}
            >
                <Image
                 unoptimized={true}
                   loading={"lazy"}
                    src={imageSrc}
                    width={100}
                    height={10}
                    alt='img'
                    className={`relative object-contain w-4/5 rounded-md h-4/5 ${imageOrder===2?"-start-32":"-end-44"} `} />
            </div>
        </div>
        <div
         className={` px-5 flex-1  md:px-10 lg:px-20 flex justify-start ${divOrder===1&&"md:order-1"}`}
         style={{
            ...(!fade)&&(imageOrder===2?leftElement:rightElement),
        }}
         >
            {children}
        </div>
    </div>
)};

export default Container;
