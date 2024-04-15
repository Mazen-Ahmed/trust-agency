import { Link } from "navigation";
import Image from "next/image"
import { FaFacebookF,FaInstagram,   } from "react-icons/fa";
import { FaXTwitter,FaLinkedinIn, FaYoutube, FaTiktok    } from "react-icons/fa6";

const FollowIcons = ({translation}) => {

  return (
    <div className="flex flex-col items-center justify-center mt-5">
    <h1>{translation.follow}</h1>
    <div className="flex gap-4">
        <Link
         href="https://www.facebook.com/profile.php?id=61556979881747&mibextid=eQY6cl"
         target="_blank"
         className="box-border p-1 m-0 bg-white rounded-sm">
        <FaFacebookF className="w-5 h-5 p-0 text-blue-700"/>
        </Link>
        <Link 
        href="https://www.instagram.com/officialtrustagency?igsh=cndyNWhmc2V2OW9l"
        target="_blank"
        className="box-border p-1 m-0 bg-white rounded-sm">
        <Image src="/instagram.png" width={20} height={20} alt="instagram"/>
        </Link>
        <Link
         href="https://twitter.com/trustagency24"
         target="_blank"
        className="box-border p-1 m-0 bg-white rounded-sm">
        <FaXTwitter className="w-5 h-5 bg-black rounded-sm"/>
        </Link>
        <Link
        target="_blank"
        href="https://www.linkedin.com/in/trustagency24/"
         className="box-border p-1 m-0 bg-white rounded-sm">
          <Image src="/linkedIn.png" width={20} height={20} alt="instagram"/>
        </Link>
        <Link
        target="_blank"
        href="https://www.youtube.com/@TrustAgency24"
         className="box-border p-1 m-0 bg-white rounded-sm">
        <FaYoutube  className="w-5 h-5 p-1 bg-red-600 rounded-sm"/>
        </Link>
        <Link
        target="_blank"
        href="https://www.tiktok.com/@officialtrustagency?_t=8l5caYvsAsf&_r=1"
         className="box-border p-1 m-0 bg-white rounded-sm">
        <FaTiktok  className="w-5 h-5 text-black"/>
        </Link>
      
    </div>
</div>  
)
};

export default FollowIcons;
