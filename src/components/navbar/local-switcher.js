"use client"
import { useLocale } from 'next-intl';
import { IoMdCheckmark } from "react-icons/io";
import { useRouter,usePathname } from 'next/navigation';
import { useState } from 'react';
import {Modal} from "components";

const LocalSwitcher = ({translation}) => {
    const router=useRouter()

    const pathname=usePathname()

    const locale=useLocale()
    
    const[modalOpened,setModalOpened]=useState(false)
    
    const switchLanguageHandler=(lang)=>{
            router.replace(`/${lang}/${pathname.split("/").splice(2).join("/")}`);
    }

    const modalContent={
        title:translation.languages,
        children:
        <div className="flex gap-2">
            <p onClick={()=>switchLanguageHandler("ar")} className={`flex items-center gap-2 p-2 duration-150 ease-out rounded-md shadow-md cursor-pointer hover:text-blue-500 ${locale==="ar"&&"text-blue-500"}`}>
                {locale==="ar"&&<IoMdCheckmark/>}
                العربية
            </p>
            <p onClick={()=>switchLanguageHandler("en")} className={`flex items-center gap-2 p-2 duration-150 ease-out rounded-md shadow-md cursor-pointer hover:text-blue-500 ${locale==="en"&&"text-blue-500"}`}>
            {locale==="en"&&<IoMdCheckmark/>}
                English
            </p>
            <p onClick={()=>switchLanguageHandler("ru")} className={`flex items-center gap-2 p-2 duration-150 ease-out rounded-md shadow-md cursor-pointer hover:text-blue-500 ${locale==="ru"&&"text-blue-500"}`}>
            {locale==="ru"&& <IoMdCheckmark/>}
                Russian
            </p>
        </div>,
        isOpened:modalOpened,
        setIsOpened:setModalOpened,
        close:translation.close
    }
    
  return(
    <>
        <div onClick={()=>setModalOpened(true)} className="flex items-center justify-center w-8 h-8 p-2 text-black uppercase bg-white border-2 border-gray-200 rounded-full cursor-pointer">
            {locale}
        </div>

        <Modal data={modalContent}/>
    </>
  )};

export default LocalSwitcher;
