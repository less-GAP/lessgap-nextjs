import { Image } from 'antd';
import { useEffect } from 'react'
import { Fade } from "react-awesome-reveal";

import { useRouter } from 'next/router';

import herologo from "./logobot.png";
import styles from './index.module.css';

export default function BlockHero() {

	const router = useRouter()

	// getEventByID 
	useEffect(() => {

		const inlineScript = document.createElement('script');
		inlineScript.innerHTML = `
		var register = document.getElementById('register');
		var registerbar = document.getElementById('registerbar');
		var registerTOP = register.offsetTop || register.getBoundingClientRect().top;
		var screenHeight = window.innerHeight;
		registerbar.style.transition = 'transform 0.5s ease-in-out';
		registerbar.style.transform = 'translateY(100%)';
		window.addEventListener('scroll', function() {
			var scroll = this.scrollY;
			if (scroll >= 10 && (scroll + screenHeight) <= register.offsetTop) {
				registerbar.style.position = 'fixed';
				registerbar.style.bottom = '0';
				registerbar.style.left = '0';
				registerbar.style.width = '100%';
				registerbar.style.zIndex = '10000';
				registerbar.style.transform = 'translateY(0)';
			} else {
				registerbar.style.position = 'fixed';
				registerbar.style.bottom = '0';
				registerbar.style.left = '0';
				registerbar.style.width = '100%';
				registerbar.style.zIndex = '-100000';
				registerbar.style.transform = 'translateY(100%)';
			}
		});
		`;
		document.body.appendChild(inlineScript);
		return () => {
			inlineScript.remove();
		};

	}, [router.isReady])

	return (
		<section className={`${styles.hero} py-25 px-5`}>
			<Fade cascade>
				<div className={`${styles.content} flex flex-col py-20 px-5 max-w-[500px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] 8xl:max-w-[1400px]`}>
					<div className="inline-flex w-fit mx-auto items-center justify-center mb-5 md:mb-10 py-3 border-t-2 border-b-2">
						<span className="text-gray-100 font-bold tracking-wide text-md md:text-xl xl:text-2xl">WED/THU - MAR - 29 & 30 - 2023</span>
					</div>
					<h1 className={`${styles.title} font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl leading-tight lg:leading-none text-white [text-shadow:_0_1px_0_var(--tw-shadow-color)]`}>MADE TO ROQ – ADVANCED PRINTING AUTOMATION WORKSHOP</h1>
					<div className="inline-flex items-center justify-center mt-2">
						<span className="text-gray-100 font-light text-md md:text-lg xl:text-xl uppercase">Schaumburg, Illinois, IL 76666</span>
					</div>
					<div className="relative mt-15">
						<div className="presentby text-white text-sm tracking-widest">PRESENTED BY</div>
						<div className="logo mt-2">
							<Image preview={false} src={herologo.src} alt="HERO" className='max-w-[300px] xl:max-w-[500px]' />
						</div>
					</div>
				</div>
			</Fade>
		</section>
	)
}
