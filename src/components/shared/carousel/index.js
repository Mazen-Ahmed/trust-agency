"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const CustomCarousel=({slidesPerView=3,data})=>{

return(
    <section className='py-5 md:px-10 lg:px-20'>
    <div className='container'>
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
        
     {data.map((item,index)=>(
         <SwiperSlide key={index}>
         <div className='flex flex-col items-center justify-center w-full h-full'>
           <Image
             src={item.img}
             alt="member"
            width={200}
            height={200}
             className='block'
           />
           <h1 className="text-lg font-semibold">
           {item.name}
           </h1>
           <h2 className="text-sm">
           {item.role}
           </h2>
         </div>
       </SwiperSlide>
     ))}
    </Swiper>
    </div>
    </section>
)}

export default CustomCarousel