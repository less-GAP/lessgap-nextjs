import { Image, Modal } from 'antd';

import { useState } from 'react';
import styles from './index.module.css';

import ryan from "./62856000000013001.jpeg";
import brett from "./62856000000148184.jpeg";

export default function BlockSpeakers() {


	const [isModalOpen, setIsModalOpen] = useState('');

	return (

		<section className={`${styles.index} text-black py-25 px-5 overflow-hidden`}>
			<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-extrabold text-center leading-none mb-10 md:mb-20">
				SPEAKERS
			</h2>
			<div className="container mx-auto max-w-[550px] md:max-w-[650px] xl:max-w-[1000px] mt-5">
				<div className="flex flex-row flex-wrap justify-center mt-4 md:mt-10 mx-[-1rem] md:mx-[-2rem] overflow-hidden">
					<div className="w-full sm:w-1/2 lg:w-1/3 p-[1rem] md:p-[2rem]">
						<div className="w-full flex flex-col items-center justisy-center cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('brett')}>
							<div className="w-fit flex border-b-4 border-stone-900 overflow-hidden px-5">
								<Image preview={false} className="mx-auto w-full" src={brett.src} alt="" />
							</div>
							<div className="text-center my-6">
								<h4 className="text-lg font-extrabold uppercase mt-2">Brett Bowden</h4>
								<p className="text-gray-600 text-md">less[GAP]</p>
								<p className="text-gray-600 mt-3 font-light text-sm">A builder of brands, capable of delivering vision to market and progressing the industry...
									<span className="text-black">[read more]</span>
								</p>
							</div>
						</div>
						<Modal title={false} open={isModalOpen === 'brett'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
							<div className="p-3">
								<h2 className="text-xl font-extrabold uppercase">Brett Bowden</h2>
								<hr className="my-3" />
								<p className="focus:outline-none text-lg font-light">A builder of brands, capable of delivering vision to market and progressing the industry.</p>
							</div>
						</Modal>
					</div>
					<div className="w-full sm:w-1/2 lg:w-1/3 p-[1rem] md:p-[2rem]">
						<div className="w-full flex flex-col items-center justisy-center cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('ryan')}>
							<div className="w-fit flex border-b-4 border-stone-900 overflow-hidden px-5">
								<Image preview={false} className="mx-auto w-full" src={ryan.src} alt="" />
							</div>
							<div className="text-center my-6">
								<h4 className="text-lg font-extrabold uppercase mt-2">Ryan Moor</h4>
								<p className="text-gray-600 text-md">less[GAP]</p>
								<p className="text-gray-600 mt-3 font-light text-sm">A builder of brands, capable of delivering vision to market and progressing the industry...
									<span className="text-black">[read more]</span>
								</p>
							</div>
						</div>
						<Modal title={false} open={isModalOpen === 'ryan'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
							<div className="p-3">
								<h2 className="text-xl font-extrabold uppercase">Ryan Moor</h2>
								<hr className="my-3" />
								<p className="focus:outline-none text-lg font-light">A builder of brands, capable of delivering vision to market and progressing the industry.</p>
							</div>
						</Modal>
					</div>
				</div>
			</div>
		</section>

	)
}
