"use client"
import Image from "next/image"
import { Blob} from "components"
import { useRef } from "react";
import { useSlideElementAnimation } from "hooks";

const Services = ({translation}) => {
    const ref=useRef()
  
    const {
      leftElement,
      rightElement
    }=useSlideElementAnimation(ref)
  return (
    <div id="services" ref={ref} className="relative flex flex-col my-20 md:px-10 lg:px-20">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm text-gray-500 uppercase"> {translation.title}</h1>
            <h2 className="relative z-10 px-5 my-3 text-xl font-bold text-center md:text-2xl lg:text-5xl" >
             {translation.description}
            </h2>
            <h3 className="w-full text-center text-gray-500 uppercase text-md lg:w-1/2">
             {translation.description2}
            </h3>
        </div>

        <div style={{...leftElement}} className="grid grid-cols-1 gap-4 pt-10 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-3 text-center"> 
                <Image  src={"/DMS.png"} width={70} height={70} alt="digital marketing" />
                <h1 className="text-lg font-bold">{translation.digitalMarketing}</h1>
                <p className="w-3/4 text-sm font-light text-gray-500"> {translation.digitalMarketingDescription}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-center"> 
                <Image  src={"/SWS.png"} width={70} height={70} alt="digital marketing" />
                <h1 className="text-lg font-bold">{translation.softwareDevelopment}</h1>
                <p className="w-4/5 text-sm font-light text-gray-500">{translation.softwareDevelopmentDescription}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-center"> 
                <Image  src={"/IS.png"} width={70} height={70} alt="digital marketing" />
                <h1 className="text-lg font-bold">{translation.investment}</h1>
                <p className="w-3/4 text-sm font-light text-gray-500">{translation.investmentDescription}</p>
            </div>
        </div>
        <div style={{...rightElement}} className="grid grid-cols-1 gap-4 pb-10 mt-10 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-3 text-center"> 
                <Image  src={"/LS.png"} width={70} height={70} alt="digital marketing" />
                <h1 className="text-lg font-bold">{translation.legal}</h1>
                <p className="w-3/4 text-sm font-light text-gray-500">{translation.legalDescription}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 text-center"> 
                <Image  src={"/ECMS.png"} width={70} height={70} alt="digital marketing" />
                <h1 className="text-lg font-bold">{translation.ecommerce}</h1>
                <p className="w-3/4 text-sm font-light text-gray-500">{translation.ecommerceDescription}</p>
            </div>
        </div>
        <Blob height={300} position={{left:-20,bottom:0}}/>

    </div>
)};

export default Services;
