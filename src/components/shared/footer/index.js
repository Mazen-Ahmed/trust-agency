"use client"
import Image from "next/image"
import {Link, usePathname} from "navigation"
import FollowIcons from "../follow-icons";
import { scrollToSectionHandler } from "utils";

const Footer = ({translation}) => {
    const pathname=usePathname()
  return( 
  <footer className="relative bottom-0 z-40 w-full px-5 py-3 md:px-10 lg:px-20" style={{background:"#1f2023"}}>
    <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col items-center justify-center flex-1 ">
            <Image 
                src="/logo-white.png"
                alt="footer"
                width={100}
                height={100}
            />
            <h1 className="text-4xl">Trust Agency</h1>
            <p className="text-sm text-gray-500">{translation.together}</p>
            <FollowIcons 
            translation={{
                follow:translation.follow
             }}
            />
        </div>
        <div className="flex-1">
            <Image 
                src="/footer.png"
                alt="footer"
                className="hidden lg:block"
                width={550}
                height={100}
            />
        </div>
    </div>
    <div className="flex flex-col gap-10 pt-3 border-t border-white lg:flex-row">
    <div className="flex items-center justify-center flex-1 order-2 lg:order-1">
        <p className="text-sm text-gray-500">{translation.copyrights}</p>
    </div>
    <div className="flex flex-wrap items-center justify-center flex-1 order-1 gap-8 lg:order-2">
        <h1 className="text-white">{translation.links}</h1>
        <Link className="text-gray-400 " href={"/"}>
                {translation.home}
            </Link>
            <Link 
            className="text-gray-400 "
            scroll={pathname!=="/"}
            onClick={()=> pathname==="/"&&scrollToSectionHandler("services")}  
            href={"/#services"}>
                {translation.services}
            </Link>
            <Link className="text-gray-400 " href={"/about"}>
                 {translation.about}
            </Link>
            <Link className="text-gray-400 " href={"/contact"}>
                {translation.contact}
            </Link>

    </div>
    </div>
  </footer>
)};

export default Footer;
