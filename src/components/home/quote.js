"use client"
import { Link } from "navigation";
import Image from 'next/image'
import {Blob} from "components"
import { useSlideElementAnimation } from "hooks";
import { useRef } from "react";
import {useLocale} from "next-intl"


const Quote = ({translation}) => {
  const locale=useLocale()

  const ref=useRef()
  
  const {
    leftElement,
    rightElement
  }=useSlideElementAnimation(ref)

  return (
  <div id="quot" ref={ref} className="relative flex flex-col pb-20 xl:gap:0 gap-28 xl:flex-row lg:min-h-screen" >

    <div 
      className="relative flex-1 w-full overflow-hidden "
      style={{ ...leftElement}}
    >
        <Image src="/quote.png" fill  alt='img' className=" w-36 h-36 md:w-3/4 md:h-3/4" />
    </div>

    <div className="relative flex-1 pt-10 pl-4 ">
        <Image src={"/quote-sym.png"} width={120} height={120} className="absolute top-0 z-0 start-5" alt="symbol"/>
       <div
       style={{...rightElement }}
       >
        
        <h1 className="relative z-10 px-3 text-3xl font-bold text-white md:text-5xl" >
        {translation.weBelieve}
        </h1>
        <div className="flex justify-end w-4/5 mt-4 " style={{color:"#fac360"}}>- {translation.author}</div>
        <p className="px-5 mt-10 text-xl text-gray-500 ">
          {translation.description}
        </p>
        <div className="flex justify-center ">
          <Link href={"/about"}>
            <button className="px-10 py-3 mt-16 text-white border border-gray-500 bg-none">
              {translation.learnMore}
            </button>
          </Link>
        </div>
       </div>
    </div>
    <Blob height={300} width={200} position={{...locale==="ar"?{left:0}:{right:0},bottom:0}}/>

  </div>
  )
};

export default Quote;
