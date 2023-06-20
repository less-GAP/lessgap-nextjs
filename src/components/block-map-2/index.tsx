import { Modal } from 'antd';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { useState } from 'react';
import styles from './index.module.css';

export default function BlockMap() {

	const [isModalOpen, setIsModalOpen] = useState('');

	return (

		<section className={`${styles.index} bg-slate-100`}>
			<iframe className={`${styles.map} w-full h-full min-w-full !overflow-hidden border-solid border-t-2 border-b-2 border-gray-400`} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13423.633630112687!2d-97.3213356!3d32.7416227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1be8f05c3d683f50!2sMADE%20Lab!5e0!3m2!1sen!2sus!4v1674059456635!5m2!1sen!2sus" style={{ filter: 'grayscale(1) contrast(1.2)' }}></iframe>
			<div className={`${styles.content} bg-black text-white xl:max-w-[450px] 2xl:max-w-[500px] 4xl:max-w-[550px] 6xl:max-w-[600px] 2xl:p-5 4xl:p-7 6xl:p-9`}>
				<div className="container max-w-[550px] md:max-w-[650px] xl:max-w-[1000px] py-15 px-5 xl:p-10 mx-auto">
					<h2 className="text-xl md:text-2xl font-extrabold">EVENT ADDRESS</h2>
					<hr className="border-white opacity-20 my-3" />
					<Link href="https://goo.gl/maps/nNZNvoPr8RyKuc3a7" target="_blank" className="!border-0 font-light text-white text-md md:text-lg flex"> <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-2 mt-1" /><span>501 E Broadway Ave, Fort Worth, TX 76104</span></Link>
					<h2 className="text-xl md:text-2xl font-extrabold mt-15">LOOKING FOR PLACES TO STAY?</h2>
					<hr className="border-white opacity-20 my-3" />
					<p className="font-light text-md md:text-lg">If you're coming from out of town or would just prefer to stay closer to the event for a discounted rate click the link below.</p>
					<p className='mt-5'>
						<button type='button' className="group font-extrabold inline-block w-fit tracking-wide items-center bg-white !border-0 py-3 px-10 text-black shadow-lg uppercase" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('mapselect')}>
							SELECT A LOCATION (4)
						</button>
					</p>
					<Modal title={false} open={isModalOpen === 'mapselect'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
						<div className="p-3">


							<div className="flex items-center justify-between border-b-2 pb-5 border-gray-300">
								<h5 className="text-xl font-bold leading-none text-gray-900">
									Select a Location
								</h5>
							</div>
							<div className="flow-root">
								<ul role="list" className="divide-y divide-gray-300">
									<li className="py-3 sm:py-4">
										<div className="flex items-center space-x-4">
											<div className="flex-shrink-0 border bg-gray-100 border-gray-300 rounded-full w-12 h-12 flex justify-center items-center">
												<FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5" />
											</div>
											<div className="flex-1 min-w-0">
												<p className="text-xl font-extrabold uppercase text-gray-900 truncate">
													LOCATION 1
												</p>
												<p className="text-sm text-gray-500 truncate dark:text-gray-400">
													<Link href="https://goo.gl/maps/nNZNvoPr8RyKuc3a7" target="_blank" className="!border-0 !text-black font-light text-md md:text-lg flex"> <span>501 E Broadway Ave, Fort Worth, TX 76104</span></Link>
												</p>
											</div>
										</div>
									</li>
									<li className="py-3 sm:py-4">
										<div className="flex items-center space-x-4">
											<div className="flex-shrink-0 border bg-gray-100 border-gray-300 rounded-full w-12 h-12 flex justify-center items-center">
												<FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5" />
											</div>
											<div className="flex-1 min-w-0">
												<p className="text-xl font-extrabold uppercase text-gray-900 truncate">
													LOCATION 1
												</p>
												<p className="text-sm text-gray-500 truncate dark:text-gray-400">
													<Link href="https://goo.gl/maps/nNZNvoPr8RyKuc3a7" target="_blank" className="!border-0 !text-black font-light text-md md:text-lg flex"> <span>501 E Broadway Ave, Fort Worth, TX 76104</span></Link>
												</p>
											</div>
										</div>
									</li>
									<li className="py-3 sm:py-4">
										<div className="flex items-center space-x-4">
											<div className="flex-shrink-0 border bg-gray-100 border-gray-300 rounded-full w-12 h-12 flex justify-center items-center">
												<FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5" />
											</div>
											<div className="flex-1 min-w-0">
												<p className="text-xl font-extrabold uppercase text-gray-900 truncate">
													LOCATION 1
												</p>
												<p className="text-sm text-gray-500 truncate dark:text-gray-400">
													<Link href="https://goo.gl/maps/nNZNvoPr8RyKuc3a7" target="_blank" className="!border-0 !text-black font-light text-md md:text-lg flex"> <span>501 E Broadway Ave, Fort Worth, TX 76104</span></Link>
												</p>
											</div>
										</div>
									</li>
									<li className="py-3 sm:py-4">
										<div className="flex items-center space-x-4">
											<div className="flex-shrink-0 border bg-gray-100 border-gray-300 rounded-full w-12 h-12 flex justify-center items-center">
												<FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5" />
											</div>
											<div className="flex-1 min-w-0">
												<p className="text-xl font-extrabold uppercase text-gray-900 truncate">
													LOCATION 1
												</p>
												<p className="text-sm text-gray-500 truncate dark:text-gray-400">
													<Link href="https://goo.gl/maps/nNZNvoPr8RyKuc3a7" target="_blank" className="!border-0 !text-black font-light text-md md:text-lg flex"> <span>501 E Broadway Ave, Fort Worth, TX 76104</span></Link>
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</Modal>
				</div>
			</div>
		</section >

	)
}
