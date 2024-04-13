"use client"
import Image from "next/image"
import {Blob} from "components"
import {motion} from "framer-motion"
import {useLocale} from "next-intl"
const AboutHeader = ({translation}) => {
  const locale=useLocale()
    
  return (
    <motion.header initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} className="relative flex flex-col min-h-screen py-3 lg:h-32 md:px-10 lg:px-20"
     style={{minHeight:600,}}
     >
            <Blob height={300} position={{right:"40%",top:"20%"}}/>

        <div className="w-full mb-16 ">
            <h1  className="flex flex-1 mx-10 text-4xl font-bold uppercase lg:mx-40 underline-word shorter">
                    {translation.title}
                    <div className={`absolute w-20 h-4 top-4 ${locale==="ar"?"right-5":"left-5"} -z-10 `} style={{ background:"#fbc460", transform:"skew(-20deg, -15deg)"}} />
            </h1>
        </div>
    <div className="flex flex-col gap-10 mx-10 mb-40 lg:gap-20 md:flex-row lg:mx-36">
      <div className="flex flex-col items-center self-center justify-center justify-self-center">
        <Image  src="/logo-white.png" width={150} height={150} className="relative "   alt="logo"/>
        <h1 className="text-lg tracking-widest uppercase " style={{letterSpacing:9}}>Trust Agency</h1>
      </div>
      <div className="flex flex-col items-start justify-center" >
      <h1 className="relative z-10 text-xl font-bold uppercase lg:text-3xl" >
        {translation.we}
        </h1>
        <p className="h-8 my-4 mb-6 text-lg text-gray-500 break-words xs:20 md:text-xl">
        {translation.description}
        </p>
        <p className="h-8 my-2 text-lg text-gray-500 break-words xs:20 md:text-xl">
        {translation.journey}
        </p>
        <p className="h-8 my-2 text-lg text-gray-500 break-words xs:20 md:text-xl">
        {translation.goal}
        </p>

        <h1  className="relative mt-10 text-xl font-bold lg:text-2xl ">
        {translation.ourTeam}

            <div className={`absolute w-10 h-3 top-2 lg:top-3 lg: lg:h-4 ${locale==="ar"?"left-5":"left-10"} -z-10 `} style={{ background:"#fbc460", transform:"skew(-20deg, -15deg)"}} />
        </h1>
      </div>
    </div>
   <h1 className="absolute bottom-0 left-0 text-6xl text-transparent uppercase md:text-8xl bg-clip-text stroke-zinc-600"  
   style={{
        WebkitTextStroke:" 1px #4D4D4D",
   }}>
    We are the creative
    </h1>

    </motion.header>
  )
};

export default AboutHeader;