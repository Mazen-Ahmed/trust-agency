import { Link } from "navigation";
import { FaFacebookF,FaInstagram,   } from "react-icons/fa";
import { FaXTwitter,FaLinkedinIn, FaYoutube, FaTiktok    } from "react-icons/fa6";

const FollowIcons = ({translation}) => {

  return (
    <div className="flex flex-col items-center justify-center mt-5">
    <h1>{translation.follow}</h1>
    <div className="flex gap-4">
        <Link href="#" className="box-border p-1 m-0 bg-white rounded-md">
        <FaFacebookF className="w-5 h-5 p-0 text-blue-700"/>
        </Link>
        <Link href="#" className="box-border p-1 m-0 bg-white rounded-md">
        <FaInstagram className="w-5 h-5 rounded-md bg-gradient-to-r from-orange-500 via-orange-700 to-red-500"/>
        </Link>
        <Link href="#" className="box-border p-1 m-0 bg-white rounded-md">
        <FaXTwitter className="w-5 h-5 bg-black rounded-md"/>
        </Link>
        <Link href="#" className="box-border p-1 m-0 bg-white rounded-md">
        <FaLinkedinIn className="w-5 h-5 p-1 bg-blue-600 rounded-md"/>
        </Link>
        <Link href="#" className="box-border p-1 m-0 bg-white rounded-md">
        <FaYoutube  className="w-5 h-5 p-1 bg-red-600 rounded-md"/>
        </Link>
        <Link href="#" className="box-border p-1 m-0 bg-white rounded-md">
        <FaTiktok  className="w-5 h-5 text-black"/>
        </Link>
      
    </div>
</div>  
)
};

export default FollowIcons;
