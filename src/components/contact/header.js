"use client"
import { MdOutlineLocationOn, MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FollowIcons,Blob } from "components";
import {useLocale} from "next-intl"
import {motion} from "framer-motion"
import { useState } from "react";
import { sendMail } from "services";
const ContactHeader = ({translation}) => {
  const [values, setValues]=useState({})

  const [error, setError]=useState(false)

  const [sent, setSent]=useState(false)

  const [touched, setTouched] = useState({});

  const [loading, setLoading]=useState(false)
  
  const locale=useLocale()

  const disabled=!values.name || !values.email || !values.phone || !values.message  

  const onBlurHandler = ({ target }) => setTouched((prev) => ({ ...prev, [target.name]: true }));

  const changeFormValueHandler=(event)=>{
    console.log(event.target.name);
    setValues(()=>({
        ...values,
        [event.target.name]:event.target.value
    }))
  }

  const submitFormHandler=async(event)=>{
    event.preventDefault()
  if(!sent){
    setLoading(true)
    try {
      await sendMail(values)
      setLoading(false)
      setSent(true)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }
}

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
   <div className="flex flex-col items-start self-center justify-center flex-1 w-full justify-self-center ">
      {
        error&& <div className="w-full p-2 text-red-900 bg-red-300 rounded-sm text-md">{translation.messageNotSent}</div>
      }
      {
        sent&& <div className="w-full p-2 text-green-900 bg-green-300 rounded-sm text-md">{translation.thanks}</div>
      }
        <form className="w-full"    onSubmit={submitFormHandler}  >
          <div className="flex flex-col align-start">
        <input 
        onBlur={onBlurHandler}
        onChange={changeFormValueHandler}
        className={`w-full px-2 py-2 my-2 bg-transparent border border-gray-400 ${touched.name && !values.name&& "border-red-400"} rounded-sm outline-none`}
        type="text"
        name="name"
        placeholder={translation.name}
        />
        {touched.name && !values.name
        &&
          <span className="flex items-center mb-2 text-xs font-medium tracking-wide text-red-500 ms-1">
          {translation.invalid}
        </span>}
        </div>

        <div className="flex flex-col w-full align-start">

        <input 
        onBlur={onBlurHandler}
        onChange={changeFormValueHandler}
        className={`w-full px-2 py-2  bg-transparent border border-gray-400 ${touched.phone && !values.phone&& "border-red-400"} rounded-sm outline-none`}
        type="phone"
        name="phone"
        placeholder={translation.phone}
         />
          {touched.phone && !values.phone
        &&
          <span className="flex items-center my-2 mb-2 text-xs font-medium tracking-wide text-red-500 ms-1">
         {translation.invalid}
        </span>}
        </div>

        <div className="flex flex-col align-start">

        <input 
        onBlur={onBlurHandler}
        onChange={changeFormValueHandler}
        className={`w-full px-2 py-2 my-2 bg-transparent border border-gray-400 ${touched.email && !values.email&& "border-red-400"} rounded-sm outline-none`}
        type="email"
        name="email"
        placeholder={translation.email}
        />
           {touched.email && !values.email
        &&
          <span className="flex items-center mb-2 text-xs font-medium tracking-wide text-red-500 ms-1">
          {translation.invalid}
        </span>}
        </div>
        
        <div className="flex flex-col align-start">
        <textarea 
        onBlur={onBlurHandler}
        onChange={changeFormValueHandler}
        placeholder={translation.message} rows={5}
        name="message"
        className={`w-full px-2 py-2 my-2 bg-transparent border border-gray-400 ${touched.message && !values.message&& "border-red-400"} rounded-sm outline-none`}
        />
        {touched.message && !values.message
        &&
          <span className="flex items-center mb-2 text-xs font-medium tracking-wide text-red-500 ms-1">
         {translation.invalid}
        </span>
        }
        </div>
        
        <button  
            type="submit"
         className={`flex justify-center px-10 py-3 mt-4 ${(disabled||sent) && "cursor-not-allowed opacity-65"} text-white border border-gray-500 bg-none ${loading&&"opacity-50"}`}
            disabled={loading|| disabled ||sent }
            >
             {loading?  
             <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              :translation.sendMessage}
        </button>
        </form>
      </div>

     <div className="flex flex-col items-start justify-center flex-1" >
       <p className="flex items-center justify-start h-8 gap-5 my-4 text-white break-words md:text-md">
       <MdOutlineLocationOn className="w-6 h-6"/>45 Kambez, Nadi Al Saeed, Dokki, <br/> Giza Governorate 12311
       </p>
       <p className="flex items-center justify-start h-8 gap-5 my-4 text-white break-words md:text-lg">
       <MdOutlineMarkEmailUnread className="w-5 h-5"/>trustagency.eg@gmail.com
       </p>
       <div className="flex items-center justify-start h-8 gap-5 my-4 text-white break-words md:text-lg">
       <FaPhoneVolume className="w-5 h-5"/> 
       <div className="flex flex-col gap-2">
       <span dir="ltr">01103076238 | 0233365113</span>
       <span dir="ltr">01500299777 | 01022129888</span>
       </div>
       </div>

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
   <Blob height={300} position={{right:"40%",top:"10%",zIndex:-1}}/>

   </motion.header>    
)
};

export default ContactHeader;
