import { Image, Modal } from 'antd';

import type { YouTubeProps } from 'react-youtube';
import YouTube from 'react-youtube';

import { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.css';

import img1 from "./1thumb.png";
import img2 from "./2.png";
import img3 from "./33.png";

export default function BlockDesc() {

	const [isModalOpen, setIsModalOpen] = useState('');
	const onPlayerReady: YouTubeProps['onReady'] = (e: any) => {
		e.target.pauseVideo();
	}
	const opts: YouTubeProps['opts'] = {
		height: '640',
		width: '360'
	};
	const optsPC: YouTubeProps['opts'] = {
		height: '480',
		width: '854'
	};

	return (
		<>
			<div className={`${styles.heading} flex flex-col xl:flex-row mx-auto md:px-10 xl:px-25 2xl:space-x-25 px-5 mt-10 xl:pt-25`}>
				<div className="container mx-auto max-w-[550px] md:max-w-[900px] xl:max-w-[1800px]">
					<div className="flex flex-col xl:flex-row md:px-10 xl:px-25 mx-auto xl:space-x-15 3xl:space-x-15">
						<h2 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl 6xl:text-11xl font-extrabold leading-none">
							ADVANCED AUTOMATION
						</h2>
					</div>
				</div>
			</div>
			<section className={`${styles.index} text-white bg-black flex flex-col xl:flex-row mx-auto md:px-10 xl:px-25 2xl:space-x-25 px-5 py-10 xl:py-15 2xl:py-[8vw] overflow-hidden`}>
				<div className="container mx-auto max-w-[550px] md:max-w-[900px] xl:max-w-[1800px]">
					<div className="flex flex-col 2xl:flex-row mx-auto md:px-10 xl:px-25 2xl:space-x-10 3xl:space-x-15">
						<div className="flex flex-col basics xl:w-full mb-5">
							<div className="flex flex-col">
								<p className="text-lg md:text-xl 2xl:text-2xl mb-5">WOW your clients as you learn to master high end simulated process and special effects printing. In this advanced workshop, we’ll help guide you to master the art of design, separations, screen making, press setup, and optimal production for high end simulated process and special effects screen printing.</p>
								<p className="text-lg md:text-xl 2xl:text-2xl">Taught by print masters Brian Lessard from less[GAP] and Jimmy Ormond from Multi-Craft you’ll get to learn their years of industry experience working and dialing in these types of prints for Rutland and M&R but on the most cutting edge equipment in the market including the ROQ Next, and Laser LTS.</p>
							</div>
						</div>
						<div className="flex flex-col basics 2xl:w-2/3 mb-5">
							<div className="2xl:bg-white 2xl:text-black 2xl:py-10 2xl:px-10">
								<h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl font-bold leading-tight mt-10 2xl:mt-0">
									WHAT WILL YOU LEARN?
								</h2>
								<div className="flex flex-col mt-3 md:mt-5">
									<p className="text-md lg:text-md font-light">WOW your clients as you learn to master high end simulated process and special effects printing. In this advanced workshop, we’ll help guide you to master the art of design, separations, screen making, press setup, and optimal production for high end simulated process and special effects screen printing. Taught by print masters Brian Lessard from less[GAP] and Jimmy Ormond from Multi-Craft you’ll get to learn their years of industry experience working and dialing in these types of prints for Rutland and M&R but on the most cutting edge equipment in the market including the ROQ Next, and Laser LTS.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="container mx-auto xl:max-w-[1400px] pt-10 my-5">
				<div className="mt-10 flex flex-col md:flex-row mx-auto space-y-5 md:space-y-0 lg:px-25 md:space-x-15 3xl:space-x-15 px-3 items-center">
					<div className="w-full">
						<div className="w-full cursor-pointer relative" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-1')}>
							<Image preview={false} className="mx-auto" src={img1.src} alt="" />
							<div className="absolute bottom-0 right-0 transform -translate-x-[5px] -translate-y-[5px] z-10">
								<FontAwesomeIcon icon={faSearch} className="text-black text-2xl w-6 h-6 bg-white p-[5px] shadow-md" />
							</div>
						</div>
						<Modal title={false} wrapClassName={`youtubeshorts`} open={isModalOpen === 'preview-1'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
							<Image preview={false} className="mx-auto" src={img1.src} alt="" />
						</Modal>
					</div>
					<div className="w-full">
						<div className="w-full cursor-pointer relative" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-2')}>
							<Image preview={false} className="mx-auto" src={img2.src} alt="" />
							<div className="absolute bottom-0 right-0 transform -translate-x-[5px] -translate-y-[5px] z-10">
								<FontAwesomeIcon icon={faSearch} className="text-black text-2xl w-6 h-6 bg-white p-[5px] shadow-md" />
							</div>
						</div>
						<Modal title={false} wrapClassName={`youtubeshorts`} open={isModalOpen === 'preview-2'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
							<Image preview={false} className="mx-auto" src={img2.src} alt="" />
						</Modal>
					</div>
					<div className="w-full">
						<div className="w-full cursor-pointer md:hidden" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-mobile')}>
							<Image preview={false} className="mx-auto" src={img3.src} alt="" />
						</div>
						<Modal width={360} wrapClassName={`youtubeshorts`} title={false} open={isModalOpen === 'preview-mobile'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} maskClosable={false}>
							<YouTube videoId="uYE4EakdYZ8" opts={opts} onReady={onPlayerReady} />
						</Modal>
						<div className="w-full cursor-pointer hidden md:block" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-pc')}>
							<Image preview={false} className="mx-auto" src={img3.src} alt="" />
						</div>
						<Modal width={854} wrapClassName={`youtubeshorts`} title={false} open={isModalOpen === 'preview-pc'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} maskClosable={false}>
							<YouTube videoId="uYE4EakdYZ8" opts={optsPC} onReady={onPlayerReady} />
						</Modal>
					</div>
				</div>
			</div>
			<div className="container mx-auto max-w-[550px] md:max-w-[650px] xl:max-w-[650px] text-center mb-25">
				<p className="text-md lg:text-lg font-light">WOW your clients as you learn to master high end simulated process and special effects printing.</p>
			</div>


		</>

	)
}
