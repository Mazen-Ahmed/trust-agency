import { Link } from "navigation";
import { scrollToSectionHandler } from "utils";
import Image from "next/image"

const Arrow = () => {
  return (
  <div className="absolute bottom-10 left10">

    <Link href={"/#quot"} onClick={()=>scrollToSectionHandler("quot")} scroll={false} className="flex items-center justify-center w-10 h-20 border rounded-full cursor-pointer ">
    <Image src={"/arrow.png"} width={20} height={20} alt="arrow"/>
    </Link>
  </div>
  )
};

export default Arrow;
