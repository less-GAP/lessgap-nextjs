import { Image } from 'antd';
import { useEffect } from 'react'

import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import herologo from "./logobot.png";
import styles from './index.module.css';

export default function BlockHero() {

	const router = useRouter()

	// getEventByID 
	useEffect(() => {

		const inlineScript = document.createElement('script');
		inlineScript.innerHTML = `
		// Windows Scroll
		var registerbar = document.getElementById('registerbar');
		var getHeader = document.querySelector('.made-lab-header');
		var registerHeight = registerbar.offsetTop;
		window.addEventListener('scroll', function() {
			var scroll = this.scrollY;
			if ((scroll - 90) >= registerHeight) {
				registerbar.style.position = 'fixed';
				registerbar.style.top = '0';
				registerbar.style.left = '0';
				registerbar.style.right = '0';
				registerbar.style.width = '100%';
				registerbar.style.zIndex = '10000';
				getHeader.style.zIndex = '0';
			} else {
				registerbar.style.position = 'relative';
				registerbar.style.top = 'unset';
				registerbar.style.left = 'unset';
				registerbar.style.right = 'unset';
				registerbar.style.width = 'unset';
				registerbar.style.zIndex = 'unset';
				getHeader.style.zIndex = '9999';
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
			<div className={`${styles.content} flex flex-col py-20 px-5 max-w-[500px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] 8xl:max-w-[1400px]`}>
				<h1 className={`${styles.title} font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl leading-tight lg:leading-none text-white [text-shadow:_0_1px_0_var(--tw-shadow-color)]`}>MADE TO ROQ – ADVANCED PRINTING AUTOMATION WORKSHOP</h1>
				<div className="inline-flex items-center justify-center mt-5 md:mt-10">
					<FontAwesomeIcon icon={faCalendarAlt} className="w-5 h-5 lg:h-6 lg:w-6 mr-2 lg:mr-3 text-gray-100" />
					<span className="text-gray-100 text-md md:text-xl xl:text-2xl">Wed/Thu - Mar - 29 & 30 - 2023</span>
				</div>
				<div className="inline-flex items-center justify-center mt-2">
					<FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 h-3 lg:h-4 lg:w-4 mr-2 lg:mr-3 text-gray-100" />
					<span className="text-gray-100 font-light text-md md:text-lg xl:text-xl">Schaumburg Illinois</span>
				</div>
				<div className="relative mt-15">
					<div className="presentby text-white text-sm tracking-widest">PRESENTED BY</div>
					<div className="logo mt-2">
						<Image preview={false} src={herologo.src} alt="HERO" className='max-w-[300px] xl:max-w-[500px]' />
					</div>
				</div>
			</div>
		</section>
	)
}
