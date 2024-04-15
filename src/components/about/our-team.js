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
            role:"web developer",
            quote:"Module not found: Error: Package path ./swiper.min.css is not expoot exported from package D:\Frontend\React\movie-app\node_mswiper rted fromodules\swiper (see exports field in D:\Frontend\React\movieles\swirts field-app\node_modules\swiper\package.json)"
        },
        {
            img:"/member.png",
            name:"test",
            role:"web developer",
            quote:"Module not found: Error: Package path ./swiper.min.css is not expoot exported from package D:\Frontend\React\movie-app\node_mswiper rted fromodules\swiper (see exports field in D:\Frontend\React\movieles\swirts field-app\node_modules\swiper\package.json)"
        },
        {
            img:"/member.png",
            name:"test1",
            role:"web developer",
            quote:"Module not found: Error: Package path ./swiper.min.css is not expoot exported from package D:\Frontend\React\movie-app\node_mswiper rted fromodules\swiper (see exports field in D:\Frontend\React\movieles\swirts field-app\node_modules\swiper\package.json)"
        },
        {
            img:"/member.png",
            name:"test2",
            role:"web developer",
            quote:"Module not found: Error: Package path ./swiper.min.css is not expoot exported from package D:\Frontend\React\movie-app\node_mswiper rted fromodules\swiper (see exports field in D:\Frontend\React\movieles\swirts field-app\node_modules\swiper\package.json)"
        },
        {
            img:"/member.png",
            name:"test3",
            role:"web developer",
            quote:"Module not found: Error: Package path ./swiper.min.css is not expoot exported from package D:\Frontend\React\movie-app\node_mswiper rted fromodules\swiper (see exports field in D:\Frontend\React\movieles\swirts field-app\node_modules\swiper\package.json)"
        },
        {
            img:"/member.png",
            name:"test4",
            role:"web developer",
            quote:"dqwdwq"
        },
    ]
  return (
  <div id="ourTeam" style={{...element}} ref={ref} className="flex flex-col py-40">
    <h1  className="text-4xl font-bold md:px-10 lg:px-20" style={{color:"#fbc460"}}>
    {translation.ourTeam}
    </h1>
    <CustomCarousel slidesPerView={1} data={carouselData} />
      
    
    </div>
)
};

export default OurTeam;
