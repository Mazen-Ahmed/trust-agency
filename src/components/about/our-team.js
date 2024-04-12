"use client"
import { CustomCarousel } from "components";
import { useFadeElementAnimation } from "hooks";
import { useRef } from "react";
const OurTeam = ({translation}) => {
    const ref =useRef()
    
    const {element}=useFadeElementAnimation(ref)
    
    const carouselData=[
        {
            img:"/member.png",
            name:"test",
            role:"web developer"
        },
        {
            img:"/member.png",
            name:"test",
            role:"web developer"
        },
        {
            img:"/member.png",
            name:"test",
            role:"web developer"
        },
        {
            img:"/member.png",
            name:"test",
            role:"web developer"
        },
        {
            img:"/member.png",
            name:"test",
            role:"web developer"
        },
        {
            img:"/member.png",
            name:"test",
            role:"web developer"
        },
    ]
  return (
  <div style={{...element}} ref={ref} className="flex flex-col py-40">
    <h1  className="text-4xl font-bold md:px-10 lg:px-20" style={{color:"#fbc460"}}>
    {translation.ourTeam}
    </h1>
    <CustomCarousel slidesPerView={3} data={carouselData} />
      
    
    </div>
)
};

export default OurTeam;
