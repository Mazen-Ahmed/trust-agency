"use client"
import { CustomCarousel } from "components";
import { useFadeElementAnimation } from "hooks";
import { useRef } from "react";
const OurTeam = ({translation}) => {
    const ref =useRef()
    
    const {element}=useFadeElementAnimation(ref)

    const {
        ourTeam,
        name1,
        role1,
        description1,
        name2,
        role2,
        description2,
        name3,
        role3,
        description3,
        name4,
        role4,
        description4,
        name5,
        role5,
        description5,
        name6,
        role6,
        description6,
        name7,
        role7,
        description7,
        name8,
        role8,
        description8,
        name9,
        role9,
        description9,
        name10,
        role10,
        description10,
        name11,
        role11,
        description11,
        name12,
        role12,
        description12,
    }=translation
    
    const carouselData=[
        {
            img:"/Mahmoud Hegazy.jpg",
            name:name1,
            role:role1,
            quote:description1
        },
        {
            img:"/Asmaa Farid.jpg",
            name:name2,
            role:role2,
            quote:description2
        },
        {
            img:"/Asmaa Ashraf.jpg",
            name:name3,
            role:role3,
            quote:description3
        },
        {
            img:"/Nayera Shrief .jpg",
            name:name4,
            role:role4,
            quote:description4
        },
        {
            img:"/Toqa Medhat.jpg",
            name:name5,
            role:role5,
            quote:description5
        },
        {
            img:"/Nada Amr .jpg",
            name:name6,
            role:role6,
            quote:description6
        },
        {
            img:"/Nour Elnems .jpg",
            name:name7,
            role:role7,
            quote:description7
        },
        {
            img:"/Helana.webp",
            name:name8,
            role:role8,
            quote:description8
        },
        {
            img:"/Mohammed Amr .jpg",
            name:name9,
            role:role9,
            quote:description9
        },
        {
            img:"/Osama Abdelmoez.png",
            name:name10,
            role:role10,
            quote:description10
        },
        {
            img:"/Marwan.jpeg",
            name:name11,
            role:role11,
            quote:description11
        },
        {
            img:"/Mohammed Kamel.jpg",
            name:name12,
            role:role12,
            quote:description12
        },
       
    ]
  return (
  <div id="ourTeam" style={{...element}} ref={ref} className="flex flex-col py-40">
    <h1  className="text-4xl font-bold md:px-10 lg:px-20" style={{color:"#fbc460"}}>
    {ourTeam}
    </h1>
    <CustomCarousel slidesPerView={1} data={carouselData} />
    </div>
)
};

export default OurTeam;
