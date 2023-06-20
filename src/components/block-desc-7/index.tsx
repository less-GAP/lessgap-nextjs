import { Modal } from 'antd';
import Image from 'next/legacy/image';

import type { YouTubeProps } from 'react-youtube';
import YouTube from 'react-youtube';
import { Fade } from "react-awesome-reveal";

import { useState } from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.css';

import img1 from "./7.jpg";
import img2 from "./8.jpg";
import img3 from "./9.jpg";

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
			<section className={`${styles.index}  py-25 xl:py-[10vw]`}>
				<Fade cascade>
					<div className="container mx-auto max-w-[550px] md:max-w-[900px] xl:max-w-[1800px] mt-5 px-5">
						<div className="flex flex-col xl:flex-row mx-auto md:px-10 xl:px-25 2xl:space-x-25">
							<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-5 leading-none">
								WHY ATTEND?
							</h2>
						</div>
					</div>
					<div className="flex flex-col basics xl:w-full">
						<div className="container mx-auto max-w-[550px] md:max-w-[900px] xl:max-w-[1800px] px-5">
							<div className="flex flex-col  mx-auto md:px-10 xl:px-25 2xl:space-x-25">
								<div className="flex flex-col">
									<p className="text-xl md:text-2xl 3xl:text-4xl mb-4 lg:mb-5">Visit ROQ’s new Chicago tech center and showroom for this special grand opening event featuring special effects prints, facility tours, and great food and drink.
									</p>
									{/* <p className="text-md md:text-lg 3xl:text-2xl my-5 lg:my-10 font-normal">The Grand Opening of 1907: The Chicago Printeasy will be an event not to miss! Featuring two Special Effects prints from less[GAP]’s Brian Lessard and MultiCraft’s Jimmy Ormond, showroom and facility tours, equipment demo’s, 1907 Printeasy signature “ROQtail” drinks, and local food truck tastings, there is plenty to enjoy.
									</p> */}
								</div>
							</div>
						</div>
						<div className="w-full mx-auto my-15">
							<Fade cascade>
								<div className="w-full my-[3px] 3xl:my-[5px] flex flex-col xl:flex-row mx-auto xl:space-x-[3px] 3xl:space-x-[5px] space-y-5 xl:space-y-0 items-start">
									<div className="w-1/3 group relative">
										<div className="w-full cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-1')}>
											<Image width={500} height={500} className="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={img1.src} alt="" />
											<div className="absolute top-0 right-0 z-20 hidden group-hover:block">
												<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="bg-black text-white text-2xl w-8 h-8 p-[9px] shadow-md" />
											</div>
										</div>
										<p className="absolute bottom-0 left-0 transform w-full z-10 text-sm font-light 4xl:text-lg 5xl:text-xl 6xl:text-2xl py-2 px-3 4xl:py-4 4xl:px-5 bg-black/80 text-white">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum
										</p>
										<Modal title={false} wrapClassName={`youtubeshorts`} open={isModalOpen === 'preview-1'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
											<Image width={5000} height={5000} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={img1.src} alt="" />
										</Modal>
									</div>
									<div className="w-1/3 group relative">
										<div className="w-full cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-2')}>
											<Image width={500} height={500} className="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={img3.src} alt="" />
											<div className="absolute top-0 right-0 z-20 hidden group-hover:block">
												<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="bg-black text-white text-2xl w-8 h-8 p-[9px] shadow-md" />
											</div>
										</div>
										<p className="absolute bottom-0 left-0 transform w-full z-10 text-sm font-light 4xl:text-lg 5xl:text-xl 6xl:text-2xl py-2 px-3 4xl:py-4 4xl:px-5 bg-black/80 text-white">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum
										</p>
										<Modal title={false} wrapClassName={`youtubeshorts`} open={isModalOpen === 'preview-2'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
											<Image width={5000} height={5000} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={img3.src} alt="" />
										</Modal>
									</div>
									<div className="w-1/3 group relative">
										<div className="w-full cursor-pointer md:hidden" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-mobile')}>
											<Image width={500} height={500} className="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={img2.src} alt="" />
											<div className="absolute top-0 right-0 z-20 hidden group-hover:block">
												<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="bg-black text-white text-2xl w-8 h-8 p-[9px] shadow-md" />
											</div>
										</div>
										<Modal width={360} wrapClassName={`youtubeshorts`} title={false} open={isModalOpen === 'preview-mobile'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} maskClosable={false}>
											<YouTube videoId="uYE4EakdYZ8" opts={opts} onReady={onPlayerReady} />
										</Modal>
										<div className="w-full cursor-pointer hidden md:block" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('preview-pc')}>
											<Image width={500} height={500} className="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={img2.src} alt="" />
											<div className="absolute top-0 right-0 z-20 hidden group-hover:block">
												<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="bg-black text-white text-2xl w-8 h-8 p-[9px] shadow-md" />
											</div>
										</div>
										<Modal width={854} wrapClassName={`youtubeshorts`} title={false} open={isModalOpen === 'preview-pc'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} maskClosable={false}>
											<YouTube videoId="Ji8lf7d_CEk" opts={optsPC} onReady={onPlayerReady} />
										</Modal>
									</div>
								</div>
							</Fade>
						</div>

						<div className="container mx-auto max-w-[550px] md:max-w-[900px] xl:max-w-[1800px] px-5">
							<div className="flex flex-col mx-auto md:px-10 xl:px-25 2xl:space-x-25">
								<div className='flex flex-col'>
									{/* <h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl font-bold leading-none">
										WHAT WILL YOU LEARN?
									</h2> */}
									<div className="flex flex-col mt-3 md:mt-5">
										<p className="text-md lg:text-2xl font-light">WOW your clients as you learn to master high end simulated process and special effects printing. In this advanced workshop, we’ll help guide you to master the art of design, separations, screen making, press setup, and optimal production for high end simulated process and special effects screen printing.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Fade>
			</section>

		</>

	)
}
