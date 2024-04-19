"use client"
import Image from "next/image"
import { MdOutlineLocationOn, MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FollowIcons,Blob } from "components";
import {useLocale} from "next-intl"
import {motion} from "framer-motion"
const ContactHeader = ({translation}) => {
  const locale=useLocale()

  return(
    <motion.header initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} className="relative flex flex-col min-h-screen py-3 md:px-10 lg:px-20"
    style={{minHeight:600, userSelect:"auto"}}
    >
       <div className="w-full mb-16 ">
           <h1  className="flex flex-1 mx-10 text-4xl font-bold uppercase lg:mx-40 underline-word shorter">
                 {translation.contact}
                 <div className={`absolute w-20 h-4 top-4 ${locale==="ar"?"right-5":"left-5"} -z-10 `} style={{ background:"#fbc460", transform:"skew(-20deg, -15deg)"}} />
           </h1>
       </div>
   <div className="flex flex-col items-start justify-center gap-10 mx-10 mb-40 min-h-48 md:flex-row lg:mx-24">
   <div className="flex flex-col items-start self-center justify-center flex-1 justify-self-center ">
        <form>
        <input 
        className="w-full px-2 py-2 my-2 bg-transparent border border-gray-400 rounded-sm outline-none"
        type="text"
        placeholder={translation.name}/>
        <input 
        className="w-full px-2 py-2 my-2 bg-transparent border border-gray-400 rounded-sm outline-none"
        type="phone"
        placeholder={translation.phone} />
        <input 
        className="w-full px-2 py-2 my-2 bg-transparent border border-gray-400 rounded-sm outline-none"
        type="email"
        placeholder={translation.email}/>
        <textarea   placeholder={translation.message} rows={5} className="w-full p-2 bg-transparent border border-gray-400 rounded-sm outline-none"/>
        <button type="submit" className="px-10 py-3 mt-4 text-white border border-gray-500 bg-none">
             {translation.sendMessage}
        </button>
        </form>
      </div>

     <div className="flex flex-col items-start justify-center flex-1" >
       <p className="flex items-center justify-start h-8 gap-2 my-2 text-white break-words md:text-md">
       <MdOutlineLocationOn className="w-6 h-6"/>45 Kambez, Nadi Al Saeed, Dokki, <br/> Giza Governorate 12311
       </p>
       <p className="flex items-center justify-start h-8 gap-2 my-2 text-white break-words md:text-lg">
       <MdOutlineMarkEmailUnread className="w-5 h-5"/>trustagency.eg@gmail.com
       </p>
       <p className="flex items-center justify-start h-8 gap-2 my-2 text-white break-words md:text-lg">
       <FaPhoneVolume className="w-5 h-5"/> 
       <span dir="ltr">01103076238 | 0233365113</span>
       </p>

       <FollowIcons
        translation={{
          follow:translation.follow
       }}
       />
     </div>
   </div>
   <h1 className="absolute bottom-0 left-0 text-6xl text-transparent uppercase md:text-8xl bg-clip-text stroke-zinc-600"  
   style={{
        WebkitTextStroke:" 1px #4D4D4D",
   }}>
    We are the creative
    </h1>
   <Blob height={300} position={{right:"40%",top:"10%"}}/>

   </motion.header>    
)
};

export default ContactHeader;
