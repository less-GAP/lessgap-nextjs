import { Image, Modal } from 'antd';
import { Fade } from "react-awesome-reveal";

import { useState } from 'react';
import styles from './index.module.css';

import ryan from "./62856000000013001.jpeg";
import brett from "./62856000000148184.jpeg";
import miguel from "./miguel.png";

export default function BlockSpeakers() {


	const [isModalOpen, setIsModalOpen] = useState('');

	return (

		<section className={`${styles.index} text-black py-25 px-5 lg:py-25 xl:py-[10vw] overflow-hidden`}>
			<Fade cascade>
				<div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-extrabold text-center leading-none mb-10 md:mb-20 uppercase">
						instructors
					</h2>
					<div className="container mx-auto max-w-[550px] md:max-w-[900px] xl:max-w-[1200px] mt-5">
						<Fade cascade>
							<div className="flex flex-row flex-wrap justify-center mt-4 md:mt-10 mx-[-1rem] md:mx-[-2rem] overflow-hidden">
								<div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-[1rem] md:p-[2rem]">
									<div className="w-full flex flex-col items-center justisy-center cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('brett')}>
										<div className="w-fit flex border-b-4 border-stone-900 overflow-hidden px-5">
											<Image preview={false} className="mx-auto w-full lazy" src={brett.src} alt="" />
										</div>
										<div className="text-center my-6">
											<h4 className="text-lg font-extrabold uppercase mt-2">Brett Bowden</h4>
											<p className="text-gray-600 text-md">less[GAP]</p>
											<p className="text-gray-600 mt-3 font-light text-sm">A builder of brands, capable of delivering vision to market and progressing the industry...
												<span className="text-black block">[read more]</span>
											</p>
										</div>
									</div>
									<Modal title={false} open={isModalOpen === 'brett'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
										<div className="p-3">
											<h2 className="text-xl font-extrabold uppercase">Brett Bowden</h2>
											<hr className="my-3" />
											<p className="focus:outline-none text-lg font-light mb-3">A builder of brands, capable of delivering vision to market and progressing the industry.</p>
											<p className="focus:outline-none text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus eum reiciendis expedita sint id, dolorem et laudantium perferendis, laborum cumque. Vel dolores tenetur doloribus expedita corporis libero culpa magni.</p>
										</div>
									</Modal>
								</div>


								<div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-[1rem] md:p-[2rem]">
									<div className="w-full flex flex-col items-center justisy-center cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('ryan')}>
										<div className="w-fit flex border-b-4 border-stone-900 overflow-hidden px-5">
											<Image preview={false} className="mx-auto w-full lazy" src={miguel.src} alt="" />
										</div>
										<div className="text-center my-6">
											<h4 className="text-lg font-extrabold uppercase mt-2">Ryan Moor</h4>
											<p className="text-gray-600 text-md">less[GAP]</p>
											<p className="text-gray-600 mt-3 font-light text-sm">A builder of brands, capable of delivering vision to market and progressing the industry...
												<span className="text-black block">[read more]</span>
											</p>
										</div>
									</div>
									<Modal title={false} open={isModalOpen === 'ryan'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
										<div className="p-3">
											<h2 className="text-xl font-extrabold uppercase">Ryan Moor</h2>
											<hr className="my-3" />
											<p className="focus:outline-none text-lg font-light mb-3">A builder of brands, capable of delivering vision to market and progressing the industry.</p>
											<p className="focus:outline-none text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus eum reiciendis expedita sint id, dolorem et laudantium perferendis, laborum cumque. Vel dolores tenetur doloribus expedita corporis libero culpa magni.</p>
										</div>
									</Modal>
								</div>


								<div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-[1rem] md:p-[2rem]">
									<div className="w-full flex flex-col items-center justisy-center cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('brett2')}>
										<div className="w-fit flex border-b-4 border-stone-900 overflow-hidden px-5">
											<Image preview={false} className="mx-auto w-full lazy" src={brett.src} alt="" />
										</div>
										<div className="text-center my-6">
											<h4 className="text-lg font-extrabold uppercase mt-2">Brett Bowden</h4>
											<p className="text-gray-600 text-md">less[GAP]</p>
											<p className="text-gray-600 mt-3 font-light text-sm">A builder of brands, capable of delivering vision to market and progressing the industry...
												<span className="text-black block">[read more]</span>
											</p>
										</div>
									</div>
									<Modal title={false} open={isModalOpen === 'brett2'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
										<div className="p-3">
											<h2 className="text-xl font-extrabold uppercase">Brett Bowden</h2>
											<hr className="my-3" />
											<p className="focus:outline-none text-lg font-light mb-3">A builder of brands, capable of delivering vision to market and progressing the industry.</p>
											<p className="focus:outline-none text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus eum reiciendis expedita sint id, dolorem et laudantium perferendis, laborum cumque. Vel dolores tenetur doloribus expedita corporis libero culpa magni.</p>
										</div>
									</Modal>
								</div>


								<div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-[1rem] md:p-[2rem]">
									<div className="w-full flex flex-col items-center justisy-center cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('ryan3')}>
										<div className="w-fit flex border-b-4 border-stone-900 overflow-hidden px-5">
											<Image preview={false} className="mx-auto w-full lazy" src={ryan.src} alt="" />
										</div>
										<div className="text-center my-6">
											<h4 className="text-lg font-extrabold uppercase mt-2">Ryan Moor</h4>
											<p className="text-gray-600 text-md">less[GAP]</p>
											<p className="text-gray-600 mt-3 font-light text-sm">A builder of brands, capable of delivering vision to market and progressing the industry...
												<span className="text-black block">[read more]</span>
											</p>
										</div>
									</div>
									<Modal title={false} open={isModalOpen === 'ryan3'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
										<div className="p-3">
											<h2 className="text-xl font-extrabold uppercase">Ryan Moor</h2>
											<hr className="my-3" />
											<p className="focus:outline-none text-lg font-light mb-3">A builder of brands, capable of delivering vision to market and progressing the industry.</p>
											<p className="focus:outline-none text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui necessitatibus eum reiciendis expedita sint id, dolorem et laudantium perferendis, laborum cumque. Vel dolores tenetur doloribus expedita corporis libero culpa magni.</p>
										</div>
									</Modal>
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</Fade>
		</section>

	)
}
