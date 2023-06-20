import { Image, Modal } from 'antd';

import type { YouTubeProps } from 'react-youtube';
import YouTube from 'react-youtube';

import { useState } from 'react';
import styles from './index.module.css';

import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./33.png";

export default function BlockDesc() {

	const [isModalOpen, setIsModalOpen] = useState('');
	const onPlayerReady: YouTubeProps['onReady'] = (e: any) => {
		e.target.pauseVideo();
	}
	const opts: YouTubeProps['opts'] = {
		height: '640',
		width: '360',
		// playerVars: {
		// 	// https://developers.google.com/youtube/player_parameters
		// 	autoplay: 1,
		// },
	};


	return (

		<section className={`${styles.index} py-25 px-5`}>
			<div className="container mx-auto max-w-[550px] md:max-w-[650px] xl:max-w-[1000px]">
				<div className="flex flex-col">
					<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-extrabold leading-none">
						ADVANCED AUTOMATION
						<div className="lg:border-t-1 xl:border-t-2 border-b-4 max-w-[100px] border-black mt-2"></div>
					</h2>
					<div className="flex flex-col mt-5 md:mt-10">
						<p className="text-lg md:text-xl xl:text-2xl">WOW your clients as you learn to master high end simulated process and special effects printing. In this advanced workshop, we’ll help guide you to master the art of design, separations, screen making, press setup, and optimal production for high end simulated process and special effects screen printing. Taught by print masters Brian Lessard from less[GAP] and Jimmy Ormond from Multi-Craft you’ll get to learn their years of industry experience working and dialing in these types of prints for Rutland and M&R but on the most cutting edge equipment in the market including the ROQ Next, and Laser LTS.</p>
					</div>
					<h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl font-extrabold leading-none mt-10 md:mt-15">
						WHAT WILL YOU LEARN?
					</h2>
					<div className="flex flex-col mt-3 md:mt-5">
						<p className="text-md md:text-lg">WOW your clients as you learn to master high end simulated process and special effects printing. In this advanced workshop, we’ll help guide you to master the art of design, separations, screen making, press setup, and optimal production for high end simulated process and special effects screen printing. Taught by print masters Brian Lessard from less[GAP] and Jimmy Ormond from Multi-Craft you’ll get to learn their years of industry experience working and dialing in these types of prints for Rutland and M&R but on the most cutting edge equipment in the market including the ROQ Next, and Laser LTS.</p>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-10 mt-10 items-center">
					<div className="w-full">
						<div className="w-full cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-1')}>
							<Image preview={false} className="mx-auto" src={img1.src} alt="" />
							<div className="text-sm text-center">Click to view</div>
						</div>
						<Modal title={false} open={isModalOpen === 'preview-1'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
							<div className="p-3">
								<Image preview={false} className="mx-auto" src={img1.src} alt="" />
							</div>
						</Modal>
					</div>
					<div className="w-full">
						<div className="w-full cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-2')}>
							<Image preview={false} className="mx-auto" src={img2.src} alt="" />
							<div className="text-sm text-center">Click to view</div>
						</div>
						<Modal title={false} open={isModalOpen === 'preview-2'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
							<div className="p-3">
								<Image preview={false} className="mx-auto" src={img2.src} alt="" />
							</div>
						</Modal>
					</div>
					<div className="w-full">
						<div className="w-full cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-3')}>
							<Image preview={false} className="mx-auto" src={img3.src} alt="" />
							<div className="text-sm text-center">Click to view</div>
						</div>
						<Modal width={360} wrapClassName={`youtubeshorts`} title={false} open={isModalOpen === 'preview-3'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} maskClosable={false}>
							<YouTube videoId="uYE4EakdYZ8" opts={opts} onReady={onPlayerReady} />
						</Modal>
					</div>
				</div>
			</div>
		</section>

	)
}
