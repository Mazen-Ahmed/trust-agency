import { Link } from "navigation";
import { FaChevronLeft } from "react-icons/fa";
import {useLocale}from "next-intl"

const HeaderTitle = ({title}) => {
  const locale=useLocale()
  return(
        <div className="flex items-center justify-center w-full gap-5" >
            <Link href={"/"}>
            <FaChevronLeft className={`w-8 h-8 ${locale==="ar"&&"rotate-180"} `}/>
            </Link>
            <h1 className="text-2xl underline-title md:text-4xl">{title}</h1>
        </div>    
)
};

export default HeaderTitle;
