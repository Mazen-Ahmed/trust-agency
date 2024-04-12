import Image from "next/image"
import {Link,} from "navigation"
import FollowIcons from "../follow-icons";

const Footer = () => {
  return( 
  <footer className="bottom-0 w-full px-5 py-3 md:px-10 lg:px-20" style={{background:"#1f2023"}}>
    <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col items-center justify-center flex-1 ">
            <Image 
                src="/logo-white.png"
                alt="footer"
                width={100}
                height={100}
            />
            <h1 className="text-4xl">Trust Agency</h1>
            <p className="text-sm text-gray-500">together we create the future</p>
            <FollowIcons/>
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
        <p className="text-sm text-gray-500">Copyright @2024 | All rights reserved</p>
    </div>
    <div className="flex flex-wrap items-center justify-center flex-1 order-1 gap-8 lg:order-2">
        <h1 className="text-white">Links:</h1>
        <Link className="text-gray-400 " href={"/"}>
                Home
            </Link>
            <Link className="text-gray-400 " href={"/#services"}>
                Services
            </Link>
            <Link className="text-gray-400 " href={"/about"}>
                 About us
            </Link>
            <Link className="text-gray-400 " href={"/contact"}>
                Contact us
            </Link>

    </div>
    </div>
  </footer>
)};

export default Footer;
