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

		<section className={`${styles.index} py-15 px-5 lg:py-25 xl:py-[10vw]`}>
			<div className="container mx-auto max-w-[550px] md:max-w-[900px] xl:max-w-[1200px] mt-5">
				<div className="flex flex-col xl:flex-row mx-auto md:px-10 xl:px-25 2xl:space-x-25">
					<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-5 leading-none">
						ADVANCED AUTOMATION
					</h2>
				</div>
			</div>
			<div className="container mx-auto max-w-[550px] md:max-w-[900px] xl:max-w-[1200px] mt-5">
				<div className="flex flex-col xl:flex-row mx-auto md:px-10 xl:px-25 xl:space-x-15 3xl:space-x-15">
					<div className="flex flex-col basics xl:w-full mb-5">
						<div className="flex flex-col">
							<p className="text-lg md:text-xl">WOW your clients as you learn to master high end simulated process and special effects printing. In this advanced workshop, we’ll help guide you to master the art of design, separations, screen making, press setup, and optimal production for high end simulated process and special effects screen printing. Taught by print masters Brian Lessard from less[GAP] and Jimmy Ormond from Multi-Craft you’ll get to learn their years of industry experience working and dialing in these types of prints for Rutland and M&R but on the most cutting edge equipment in the market including the ROQ Next, and Laser LTS.</p>
						</div>
						<h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl font-bold leading-none mt-10 md:mt-15">
							WHAT WILL YOU LEARN?
						</h2>
						<div className="flex flex-col mt-3 md:mt-5">
							<p className="text-md lg:text-lg font-light">WOW your clients as you learn to master high end simulated process and special effects printing. In this advanced workshop, we’ll help guide you to master the art of design, separations, screen making, press setup, and optimal production for high end simulated process and special effects screen printing. Taught by print masters Brian Lessard from less[GAP] and Jimmy Ormond from Multi-Craft you’ll get to learn their years of industry experience working and dialing in these types of prints for Rutland and M&R but on the most cutting edge equipment in the market including the ROQ Next, and Laser LTS.</p>
						</div>
					</div>
					<div className="flex flex-col basics xl:w-[200px] md:flex-row xl:flex-col space-y-10 md:space-y-0 md:space-x-10 xl:space-x-0 xl:space-y-10 items-center">
						<div className="w-full">
							<div className="w-full cursor-pointer relative" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-1')}>
								<Image preview={false} className="rounded-md mx-auto" src={img1.src} alt="" />
								<div className="absolute bottom-0 right-0 transform -translate-x-[3px] -translate-y-[3px] z-10">
									<FontAwesomeIcon icon={faSearch} className="text-black text-2xl w-6 h-6 bg-white p-[5px] rounded-[4px] shadow-md" />
								</div>
							</div>
							<Modal title={false} wrapClassName={`youtubeshorts`} open={isModalOpen === 'preview-1'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
								<Image preview={false} className="mx-auto" src={img1.src} alt="" />
							</Modal>
						</div>
						<div className="w-full">
							<div className="w-full cursor-pointer relative" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-2')}>
								<Image preview={false} className="rounded-md mx-auto" src={img2.src} alt="" />
								<div className="absolute bottom-0 right-0 transform -translate-x-[3px] -translate-y-[3px] z-10">
									<FontAwesomeIcon icon={faSearch} className="text-black text-2xl w-6 h-6 bg-white p-[5px] rounded-[4px] shadow-md" />
								</div>
							</div>
							<Modal title={false} wrapClassName={`youtubeshorts`} open={isModalOpen === 'preview-2'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
								<Image preview={false} className="mx-auto" src={img2.src} alt="" />
							</Modal>
						</div>
						<div className="w-full">
							<div className="w-full cursor-pointer md:hidden" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-mobile')}>
								<Image preview={false} className="rounded-md mx-auto" src={img3.src} alt="" />
							</div>
							<Modal width={360} wrapClassName={`youtubeshorts`} title={false} open={isModalOpen === 'preview-mobile'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} maskClosable={false}>
								<YouTube videoId="uYE4EakdYZ8" opts={opts} onReady={onPlayerReady} />
							</Modal>
							<div className="w-full cursor-pointer hidden md:block" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-pc')}>
								<Image preview={false} className="rounded-md mx-auto" src={img3.src} alt="" />
							</div>
							<Modal width={854} wrapClassName={`youtubeshorts`} title={false} open={isModalOpen === 'preview-pc'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} maskClosable={false}>
								<YouTube videoId="uYE4EakdYZ8" opts={optsPC} onReady={onPlayerReady} />
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
