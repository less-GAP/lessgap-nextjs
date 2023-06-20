// import { Image } from 'antd';
import { useEffect } from 'react'
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade } from "react-awesome-reveal";

import { useRouter } from 'next/router';

import hero_3 from "./hero.jpg";
import styles from './index.module.css';

import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BlockHero() {

	const router = useRouter()
	useEffect(() => {
	}, [router.isReady])

	return (
		<Swiper
			spaceBetween={0}
			effect={"fade"}
			slidesPerView={1}
			modules={[Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
			keyboard={{
				enabled: true,
			}}
			speed={2000}
			autoplay={false}
			// autoplay={{
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// }}
			className={`${styles.hero}`}
			loop={true}
			pagination={{ clickable: true }}
			breakpoints={{
				0: {
					navigation: false
				},
				768: {
					navigation: true
				}
			}}
		>
			<SwiperSlide className={`${styles.slider} py-25 px-5`}>
				<Fade cascade>
					<div className={`${styles.content} flex flex-col py-20 px-5 max-w-[500px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] 8xl:max-w-[1400px]`}>
						<h1 className={`${styles.title} uppercase font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl leading-tight lg:leading-none text-white [text-shadow:_0_1px_0_var(--tw-shadow-color)] flex flex-row items-center justify-center`}><span>TRAINING</span>
							<span className="text-sm px-2"> x </span>
							<span>SUPPORT</span></h1>
					</div>
				</Fade>
			</SwiperSlide>
			<SwiperSlide className={`${styles.slider} py-25 px-5`} style={{ backgroundImage: `url(${hero_3.src})` }}>
				<Fade cascade>
					<div className={`${styles.content} flex flex-col py-20 px-5 max-w-[500px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] 8xl:max-w-[1400px]`}>
						<div className="inline-flex w-fit mx-auto items-center justify-center mb-5 md:mb-10 py-3 border-t-2 border-b-2">
							<span className="text-gray-100 font-bold text-md md:text-xl xl:text-2xl uppercase tracking-widest">fdgdfg</span>
						</div>
						<h1 className={`${styles.title} uppercase font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl leading-tight lg:leading-none text-white [text-shadow:_0_1px_0_var(--tw-shadow-color)]`}>fdgdfgdfgd</h1>
						<div className="inline-flex items-center justify-center mt-2">
							<span className="text-gray-100 font-light text-md md:text-lg xl:text-xl uppercase tracking-widest">dfgdfgfdg</span>
						</div>
					</div>
				</Fade>
			</SwiperSlide>

		</Swiper>
	)
}
