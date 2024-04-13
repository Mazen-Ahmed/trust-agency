"use client"
import {Link, usePathname,} from "navigation"
import { BiHome } from "react-icons/bi";
import { FaCircleInfo } from "react-icons/fa6";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { useState } from "react";
import {LocalSwitcher} from "components"
import { scrollToSectionHandler } from "utils";

const Navbar = ({translation}) => {
    const[opened,setOpened]=useState()

    const pathname=usePathname()

    const isActive=(link)=>!!(pathname===link)

    const toggleOpenedHandler=()=>{
        setOpened(prev=>!prev)
    }

  return (
  <nav style={{background:opened?"#000":"#17181c"}} className="shadow-none sm:bg-black lg:bg-transparent">
    <div className="flex items-center justify-between h-16 px-5 lg:h-32 md:px-10 lg:px-20">  
    <Link
    href={"/"}
     className="text-lg tracking-widest uppercase md:text-xl line-clamp-6" 
    style={{letterSpacing:5}}
    >Trust Agency</Link>
    <div className="items-center justify-between hidden gap-10 lg:flex ">
            <Link  
            className={`flex items-center justify-center gap-2 text-lg ${!isActive("/")&& "hover:text-yellow-400"}`}
            style={{textShadow:isActive("/")&&"1px 2px 2px #fff"}}
            href={"/"}
            >
              <BiHome className="w-5 h-5"/>
                {translation.home}
            </Link>
            
            <Link  
            className={`flex items-center justify-center gap-2 text-lg ${!isActive("/#services")&& "hover:text-yellow-400"}`}
            scroll={pathname==="/"&&false} onClick={()=> pathname==="/"&&scrollToSectionHandler("services")}  
            style={{textShadow:isActive("/#services")&&"1px 2px 2px #fff"}}
            href={"/#services"}
            >
                <MdOutlineHomeRepairService className="w-5 h-5"/>
                {translation.services}
            </Link>
            
            <Link  
            className={`flex items-center justify-center gap-2 text-lg ${!isActive("/about")&& "hover:text-yellow-400"}`}
            style={{textShadow: isActive("/about")&&"1px 2px 2px #fff"}}
            href={"/about"}
            >
                <FaCircleInfo className="w-5 h-5"/>
                {translation.about}
            </Link>
            <Link  
            className={`flex items-center justify-center gap-2 text-lg ${!isActive("/contact")&& "hover:text-yellow-400"}`}
            style={{textShadow:isActive("/contact")&&"1px 2px 2px #fff"}}
            href={"/contact"}
            >
                <RiContactsBookLine className="w-5 h-5"/>
                {translation.contact}
            </Link>
         
         <LocalSwitcher translation={{languages:translation.languages,close:translation.close}}/>
                  
    </div>

    <button onClick={toggleOpenedHandler} className="flex flex-col gap-1 cursor-pointer lg:hidden">
        <div className={`w-8 h-0.5 ease-in-out duration-100 bg-white ${opened&& "rotate-45 translate-y-1.5"} `}/>
        <div className={`w-8 h-0.5 ease-in-out duration-100 bg-white ${opened&& "opacity-0"}`}/>
        <div className={`w-8 h-0.5 ease-in-out duration-100 bg-white ${opened&& "-rotate-45 -translate-y-1.5"}`}/>
    </button> 
    </div>
    <div className={`flex lg:hidden flex-col items-start justify-start ease-out duration-100 gap-10 px-5  ${opened?"max-h-96 py-4 border-t border-white":"overflow-hidden max-h-0"}    md:px-10 lg:px-20`}>
            <Link className="flex items-center justify-center gap-2 text-lg" href={"/"}>
              <BiHome className="w-5 h-5"/>
                Home
            </Link>
            <Link className="flex items-center justify-center gap-2 text-lg" scroll={false} onClick={()=>scrollToSectionHandler("services")}  href={"/#services"}>
                <MdOutlineHomeRepairService className="w-5 h-5"/>
                {translation.services}
            </Link>
            <Link className="flex items-center justify-center gap-2 text-lg"  href={"/about"}>
                <FaCircleInfo className="w-5 h-5"/>
                 About us
            </Link>
            <Link className="flex items-center justify-center gap-2 text-lg" href={"/contact"}>
                <RiContactsBookLine className="w-5 h-5"/>
                Contact us
            </Link>
            <LocalSwitcher translation={{languages:translation.languages,close:translation.close}}/>
    </div>
  </nav>
  )};

export default Navbar;
