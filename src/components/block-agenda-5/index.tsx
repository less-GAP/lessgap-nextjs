import { Modal } from 'antd';
import { useState } from 'react';

import styles from './index.module.css';

export default function BlockAgenda() {

	const [isModalOpen, setIsModalOpen] = useState('');

	return (
		<>
			<div className={`${styles.heading} flex flex-col xl:flex-row mx-auto md:px-10 xl:px-25 2xl:space-x-25 px-5 mt-10`}>
				<div className="container mx-auto max-w-[550px] md:max-w-[900px] xl:max-w-[1800px]">
					<div className="flex flex-col xl:flex-row md:px-10 xl:px-25 mx-auto xl:space-x-15 3xl:space-x-15 justify-center">
						<h2 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl 6xl:text-11xl font-extrabold leading-none">
							AGENDA
						</h2>
					</div>
				</div>
			</div>
			<section className={`${styles.index} bg-black text-white py-25 px-5 xl:py-[10vw]`}>
				<div className="container mx-auto max-w-[640px] lg:max-w-[990px] xl:max-w-[1000px]">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-15 xl:gap-25">
						<div className="w-full overflow-hidden">
							<h4 className="text-xl md:text-2xl mt-10 font-extrabold uppercase">Day 1</h4>
							<h5 className="text-md mb-10 font-extrabold uppercase">FRIDAY, JULY 29</h5>
							<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
								<p className="text-xs font-light text-gray-200 min-w-[80px] opacity-60">09:00 AM</p>
								<p className="focus:outline-none text-md font-light opacity-90 mt-2 sm:mt-0 sm:pl-5">Welcome and Introductions</p>
							</div>
							<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
								<p className="text-xs font-light text-gray-200 min-w-[80px] opacity-60">09:00 AM</p>
								<p className="focus:outline-none text-md font-light opacity-90 mt-2 sm:mt-0 sm:pl-5">Thought Process, Artwork Separation, and Screen Making</p>
							</div>
							<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
								<p className="text-xs font-light text-gray-200 min-w-[80px] opacity-60">09:00 AM</p>
								<p className="focus:outline-none text-md font-light opacity-90 mt-2 sm:mt-0 sm:pl-5">Lunch</p>
							</div>
							<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
								<p className="text-xs font-light text-gray-200 min-w-[80px] opacity-60">09:00 AM</p>
								<p className="focus:outline-none text-md font-light opacity-90 mt-2 sm:mt-0 sm:pl-5">Hands On – Press Setup and Production for Simulated Process</p>
							</div>
							<p className="mt-5">
								<button className="underline" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('agenda-1')}>Details &rarr;</button>
							</p>
							<Modal title={false} wrapClassName="modal-fullscreen" open={isModalOpen === 'agenda-1'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
								<div className="p-3">
									<h4 className="text-xl md:text-2xl mt-5 font-extrabold uppercase">Day 1</h4>
									<h5 className="text-md mb-10 font-extrabold uppercase">FRIDAY, JULY 29</h5>
									<ol className="relative border-l border-gray-200">
										<li className="mb-10 ml-6">
											<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white">
												<svg aria-hidden="true" className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
											</span>
											<h3 className="flex flex-col md:flex-row md:items-center mb-1 text-lg font-normal text-gray-800">
												<span className="pr-2">Screens For Makin</span>
												<time className="block text-sm font-normal leading-none text-gray-500">01:15 PM to 02:00 PM</time>
											</h3>
											<ul className='mt-3 font-light list-disc pl-5 text-md'>
												<li>Best Screen Frame Types - Aluminum, Roller, Eco Frames</li>
												<li>Thread Selection and Mesh Counts</li>
												<li>Tension - Ideal tension and How to Measure</li>
												<li>Eco Frame Stretching Demo</li>
											</ul>
										</li>
										<li className="mb-10 ml-6">
											<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white">
												<svg aria-hidden="true" className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
											</span>
											<h3 className="flex flex-col md:flex-row md:items-center mb-1 text-lg font-normal text-gray-800">
												<span className="pr-2">Sweet Emulsion</span>
												<time className="block text-sm font-normal leading-none text-gray-500">02:00 PM to 02:40 PM</time>
											</h3>
											<ul className='mt-3 font-light list-disc pl-5 text-md'>
												<li>Emulsion Types - Photopolymer, Diazo, Dual Cure</li><li>Water Based vs Solvent vs Plastisol</li><li>Capillary Film</li><li>Thick Film</li>
											</ul>
										</li>
										<li className="mb-10 ml-6">
											<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white">
												<svg aria-hidden="true" className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
											</span>

											<h3 className="flex flex-col md:flex-row md:items-center mb-1 text-lg font-normal text-gray-800">
												<span className="pr-2">Consistent Coating</span>
												<time className="block text-sm font-normal leading-none text-gray-500">03:00 PM to 04:00 PM</time>
											</h3>

											<ul className='mt-3 font-light list-disc pl-5 text-md'>
												<li>Hand Coating vs Automatic Coating</li><li>Proper Coating Technique</li><li>Measuring EOM</li><li>Capillary film application technique</li><li>Thick film application</li></ul>
										</li>
										<li className="mb-10 ml-6">
											<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white">
												<svg aria-hidden="true" className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
											</span>

											<h3 className="flex flex-col md:flex-row md:items-center mb-1 text-lg font-normal text-gray-800">
												<span className="pr-2">Full Exposure</span>
												<time className="block text-sm font-normal leading-none text-gray-500">04:00 PM to 04:45 PM</time>
											</h3>

											<ul className='mt-3 font-light list-disc pl-5 text-md'>
												<li>Proper Exposure Time</li><li>Demonstration for exposure calculator</li><li>Demonstrate exposure and developing thick film</li></ul>
										</li>

									</ol>
								</div>
							</Modal>
						</div>
						<div className="w-full overflow-hidden">
							<h4 className="text-xl md:text-2xl mt-10 font-extrabold uppercase">Day 2</h4>
							<h5 className="text-md mb-10 font-extrabold uppercase">SATURDAY, JULY 30</h5>
							<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
								<p className="text-xs font-light text-gray-200 min-w-[80px] opacity-60">09:00 AM</p>
								<p className="focus:outline-none text-md font-light opacity-90 mt-2 sm:mt-0 sm:pl-5">Welcome and Introductions</p>
							</div>
							<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
								<p className="text-xs font-light text-gray-200 min-w-[80px] opacity-60">09:00 AM</p>
								<p className="focus:outline-none text-md font-light opacity-90 mt-2 sm:mt-0 sm:pl-5">Thought Process, Artwork Separation, and Screen Making</p>
							</div>
							<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
								<p className="text-xs font-light text-gray-200 min-w-[80px] opacity-60">09:00 AM</p>
								<p className="focus:outline-none text-md font-light opacity-90 mt-2 sm:mt-0 sm:pl-5">Lunch</p>
							</div>
							<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
								<p className="text-xs font-light text-gray-200 min-w-[80px] opacity-60">09:00 AM</p>
								<p className="focus:outline-none text-md font-light opacity-90 mt-2 sm:mt-0 sm:pl-5">Hands On – Press Setup and Production for Simulated Process</p>
							</div>
							<p className="mt-5">
								<button className="underline" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('agenda-2')}>Details &rarr;</button>
							</p>
							<Modal title={false} wrapClassName="modal-fullscreen" open={isModalOpen === 'agenda-2'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
								<div className="p-3">
									<h4 className="text-xl md:text-2xl mt-5 font-extrabold uppercase">Day 1</h4>
									<h5 className="text-md mb-10 font-extrabold uppercase">FRIDAY, JULY 29</h5>
									<ol className="relative border-l border-gray-200">
										<li className="mb-10 ml-6">
											<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white">
												<svg aria-hidden="true" className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
											</span>
											<h3 className="flex flex-col md:flex-row md:items-center mb-1 text-lg font-normal text-gray-800">
												<span className="pr-2">Screens For Makin</span>
												<time className="block text-sm font-normal leading-none text-gray-500">01:15 PM to 02:00 PM</time>
											</h3>
											<ul className='mt-3 font-light list-disc pl-5 text-md'>
												<li>Best Screen Frame Types - Aluminum, Roller, Eco Frames</li>
												<li>Thread Selection and Mesh Counts</li>
												<li>Tension - Ideal tension and How to Measure</li>
												<li>Eco Frame Stretching Demo</li>
											</ul>
										</li>
										<li className="mb-10 ml-6">
											<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white">
												<svg aria-hidden="true" className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
											</span>
											<h3 className="flex flex-col md:flex-row md:items-center mb-1 text-lg font-normal text-gray-800">
												<span className="pr-2">Sweet Emulsion</span>
												<time className="block text-sm font-normal leading-none text-gray-500">02:00 PM to 02:40 PM</time>
											</h3>
											<ul className='mt-3 font-light list-disc pl-5 text-md'>
												<li>Emulsion Types - Photopolymer, Diazo, Dual Cure</li><li>Water Based vs Solvent vs Plastisol</li><li>Capillary Film</li><li>Thick Film</li>
											</ul>
										</li>
										<li className="mb-10 ml-6">
											<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white">
												<svg aria-hidden="true" className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
											</span>

											<h3 className="flex flex-col md:flex-row md:items-center mb-1 text-lg font-normal text-gray-800">
												<span className="pr-2">Consistent Coating</span>
												<time className="block text-sm font-normal leading-none text-gray-500">03:00 PM to 04:00 PM</time>
											</h3>

											<ul className='mt-3 font-light list-disc pl-5 text-md'>
												<li>Hand Coating vs Automatic Coating</li><li>Proper Coating Technique</li><li>Measuring EOM</li><li>Capillary film application technique</li><li>Thick film application</li></ul>
										</li>
										<li className="mb-10 ml-6">
											<span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white">
												<svg aria-hidden="true" className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
											</span>

											<h3 className="flex flex-col md:flex-row md:items-center mb-1 text-lg font-normal text-gray-800">
												<span className="pr-2">Full Exposure</span>
												<time className="block text-sm font-normal leading-none text-gray-500">04:00 PM to 04:45 PM</time>
											</h3>

											<ul className='mt-3 font-light list-disc pl-5 text-md'>
												<li>Proper Exposure Time</li><li>Demonstration for exposure calculator</li><li>Demonstrate exposure and developing thick film</li></ul>
										</li>

									</ol>
								</div>
							</Modal>
						</div>
					</div>
				</div>
			</section>
		</>

	)
}
