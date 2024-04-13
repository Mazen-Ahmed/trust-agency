"use client"
import Image from "next/image"
import { MdOutlineLocationOn, MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FollowIcons,Blob } from "components";
import {motion} from "framer-motion"


const ContactUs = () => {
  return (
    <motion.header initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} className="relative flex flex-col h-screen py-3 md:px-10 lg:px-20"
    style={{minHeight:600, userSelect:"auto"}}
    >
       <div className="w-full mb-16 ">
           <h1  className="flex flex-1 mx-10 text-4xl font-bold uppercase lg:mx-40 underline-word shorter">
                   Contact Us
                   <div className="absolute w-20 h-4 top-4 left-5 -z-10 " style={{ background:"#fbc460", transform:"skew(-20deg, -15deg)"}} />
           </h1>
       </div>
   <div className="flex flex-col gap-10 mx-10 mb-40 md:gap-40 md:flex-row lg:mx-36">
   <div className="flex flex-col items-center self-center justify-center justify-self-center">
        <Image  src="/logo-white.png" width={150} height={150} className="w-14 h-14 md:w-32 md:h-32 xl:w-56 xl:h-56"   alt="logo"/>
        <h1 className="text-lg tracking-widest uppercase " style={{letterSpacing:9}}>Trust Agency</h1>
      </div>

     <div className="flex flex-col items-start justify-center flex-1" >
       <p className="flex items-center justify-start h-8 gap-2 my-2 text-white break-words md xs:20 md:text-2xl">
       <MdOutlineLocationOn className="w-5 h-5"/>Cairo Office Address
       </p>
       <p className="flex items-center justify-start h-8 gap-2 my-2 text-white break-words md xs:20 md:text-2xl">
       <MdOutlineMarkEmailUnread className="w-5 h-5"/>trustagency.eg@gmail.com
       </p>
       <p className="flex items-center justify-start h-8 gap-2 my-2 text-white break-words md xs:20 md:text-2xl">
       <FaPhoneVolume className="w-5 h-5"/> +2 0111 234 5678
       </p>

       <FollowIcons/>
     </div>
   </div>
   <h1 className="absolute bottom-0 left-0 text-6xl text-transparent uppercase lg:bottom-32 md:text-8xl bg-clip-text stroke-zinc-600"  
   style={{
        WebkitTextStroke:" 1px #4D4D4D",
   }}>
    We are the creative
    </h1>
   <Blob height={300} position={{right:"40%",top:"10%"}}/>

   </motion.header>
  )
};

export default ContactUs;

export async function getStaticPaths() {
  // Define an array of possible locale values (e.g., ["en", "es"])
  const locales = ["en", "es"];

  return {
    paths: locales.map((locale) => ({ params: { locale } })),
    fallback: "blocking",  // Optional: handle missing paths (explained later)
  };
}