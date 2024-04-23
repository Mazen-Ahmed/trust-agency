"use client";

import Image from "next/image";
import {useLocale} from "next-intl"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const CustomCarousel = ({ slidesPerView = 3, data }) => {
	const swiper = useSwiper(); 
	
	const locale=useLocale()

	return (
		<section className="py-2 md:px-10 lg:px-20 ">
			<div
				className="container flex flex-col justify-center px-5 py-2 rounded-md min-h-96 "
       			style={{backgroundImage:"  linear-gradient(to bottom right,rgba(47, 54, 64,1.0),rgba(47, 54, 64,0.5))"  }}>

				<div className="relative z-0">
					<Swiper
						modules={[Navigation]}
						navigation={{
							nextEl: ".arrow-right",
							prevEl: ".arrow-left",
						}}
						slidesPerView={slidesPerView}
						spaceBetween={30}
						loop
						pagination={{
							clickable: true,
						}}
						className="mySwiper">
						{data.map((item, index) => (
							<SwiperSlide key={index}>
								<div className="flex flex-col items-center justify-center w-full h-full gap-5 md:px-48">
									<div className="text-center">
										{item.quote}
									</div>

								<div className="h-44 w-44">
									<Image
										src={item.img}
										alt="member"
										width={150}
										height={150}
										className="block object-cover object-top w-full h-full rounded-full"
										/>
								</div>
									<h1 className= "font-semibold text-md md:text-lg">
										{item.name}
									</h1>
									<h2 className="text-sm">{item.role}</h2>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					<button
						disabled={swiper && swiper.isBeginning}
						className={`absolute ${locale==="ar"?"end-2 md:end-10":"start-2  md:start-10"}  top-1/2 z-10 arrow-left`}>
						<AiOutlineArrowLeft className="w-8 h-8" />
					</button>
					<button
						disabled={swiper && swiper.isEnd}
						className={`absolute ${locale==="ar"?"start-2  md:start-10":"end-2 md:end-10"} top-1/2 z-10 arrow-right`}>
						<AiOutlineArrowRight className="w-8 h-8" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default CustomCarousel;
