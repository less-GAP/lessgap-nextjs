import { Meta } from "@/layouts/Meta";
import { MainOnly } from "@/templates/MainOnly";
import { Carousel, Modal } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import BlockGallery from "@/components/block-gallery";

import logo from '@/img/logow.png';
import s1 from '@/public/imgs/madelab/s-1.png';
import s2 from '@/public/imgs/madelab/s-2.png';
import s3 from '@/public/imgs/madelab/s-3.png';
import s4 from '@/public/imgs/madelab/s-4.png';
import s5 from '@/public/imgs/madelab/s-5.png';
import s6 from '@/public/imgs/madelab/s-6.png';
import s7 from '@/public/imgs/madelab/s-7.png';
import roq from '@/public/imgs/madelab/roq.png';

import styles from '@/styles/training.module.css';
import Link from "next/link";
import { useState } from "react";

export default function TrainingSupport() {

	const [isModalOpen, setIsModalOpen] = useState('');

	async function openMenu(e: any) {
		e.preventDefault();
		document.getElementById("menu-toggle")?.classList.toggle("active")
		document.getElementById("menu-main")?.classList.toggle("active")
	}


	return (
		<>
			<Meta title="less[GAP] Solutions" description="lessGAP is a professional web/app design and marketing/brands company based in the United States. We provide web design and development services for small and medium businesses." />
			<MainOnly className={styles.index}>

				<div className={`${styles.animation_menutoggle} md:!top-12 md:!left-12 xl:!top-21 xl:!left-21`}>
					<div className={`${styles.animation_menutoggle_nav} !scale-50 md:!scale-85`} onClick={openMenu} id="menu-toggle">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className={`${styles.animation_menumain}`} id="menu-main">
					<div className="flex flex-row items-center justify-center">
						<div className="basis-1/2 whitespace-nowrap text-center flex justify-center xl:ml-15">
							<ul className="text-xl flex flex-col items-center space-y-3 justify-center">
								<li className="md:mx-4 mx-5 xl:mx-6 2xl:mx-7 flex items-center">
									<Link
										href="/about"
										className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
									>
										About
									</Link>
								</li>
								<li className="md:mx-4 mx-5 xl:mx-6 2xl:mx-7 flex items-center">
									<Link
										href="/facility"
										className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
									>
										Facility
									</Link>
								</li>
								<li className="md:mx-4 mx-5 xl:mx-6 2xl:mx-7 flex items-center">
									<Link
										href="/capabilities"
										className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
									>
										Capabilities
									</Link>
								</li>
								<li className="md:mx-4 mx-5 xl:mx-6 2xl:mx-7 flex items-center">
									<Link
										href="/contact"
										className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
									>
										Contact
									</Link>
								</li>
								<li className="md:mx-4 mx-5 xl:mx-6 2xl:mx-7 flex items-center">
									<Link
										href="/partners"
										className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
									>
										Partners
									</Link>
								</li>
								<li className="md:mx-4 mx-5 xl:mx-6 2xl:mx-7 flex items-center">
									<Link
										href="/ts"
										className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl flex flex-row items-center justify-center"
									>
										<span>TRAINING</span>
										<span className="text-sm px-2"> x </span>
										<span>SUPPORT</span>
									</Link>
								</li>
								<li className="md:mx-4 mx-5 xl:mx-6 2xl:mx-7 flex items-center">
									<Link
										href="/events"
										className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
									>
										Events
									</Link>
								</li>
								<li className="md:mx-4 mx-5 xl:mx-6 2xl:mx-7 flex items-center">
									<Link
										href="/blogs"
										className="border-none text-2xl font-black uppercase text-white hover:opacity-50 md:text-4xl"
									>
										Blog
									</Link>
								</li>
							</ul>
						</div>

					</div>
				</div>

				<div className="px-3 py-9 lg:py-12 h-screen items-center flex flex-col justify-center">
					<div className="container mx-auto max-w-[1100px] lg:px-10">
						<div className={`flex flex-col justify-center ${styles.animation_line_open_screen}`}>
							<h2 className={`mx-auto my-3 text-3xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-11xl font-normal max-w-[1000px] leading-none text-center flex flex-row items-center justify-center 2xl:scale-110 ${styles.animation}`}>
								<span>Training</span>
								<span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-light px-2 lg:px-3 xl:px-5"> x </span>
								<span>Support</span>
							</h2>

							<div className={`${styles.animation_logo}`}>
								<Image src={logo} alt="less[GAP]" />
							</div>

							<div className={`${styles.animation_footer}`}>
								<div className={`${styles.animation_footer_line}`}></div>
								<div className="pt-2 md:pt-3 lg:pt-4 xl:pt-5 flex justify-between items-center">
									<div className={`${styles.animation_copyright}`}>© 2023 less[GAP] Solutions</div>
									<div className={`${styles.animation_copyright_right}`}>
										<div className="flex flex-row items-center">
											<span>Training</span>
											<span className="text-sm px-2"> x </span>
											<span>Support</span>
										</div>
									</div>
								</div>
							</div>

							{/* Carousel */}
							<div className={`${styles.animation_carousel}`}>
								<Carousel arrows={true} dots={false} className="madePrevNextBtn"
									prevArrow={<div><FontAwesomeIcon icon={faArrowLeftLong} /></div>}
									nextArrow={<div><FontAwesomeIcon icon={faArrowRightLong} /></div>}
								>
									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_1}`}>
										<div className={`${styles.animation_carousel_item_text}`}>
											<div className={`${styles.animation_carousel_item_text_cnt} !my-[5rem]`}>

												<div className="text-4xl sm:text-6xl xl:text-7xl 4xl:text-8xl 5xl:text-9xl 6xl:text-10xl 9xl:text-[10rem] 12xl:text-[11rem] tracking-[0.05em] leading-[1.2]">
													We provide web design and development services for small and medium businesses.
												</div>

											</div>
										</div>
									</div>
									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_2}`}>
										<div className={`${styles.animation_carousel_item_text} xl:mb-[7rem]`}>
											<div className={`${styles.animation_carousel_item_text_cnt} lg:!w-1/2 3xl:!w-[40%] 5xl:!w-1/3 !my-[3rem] md:!my-[5rem] lg:!my-[7rem]`}>

												<div className="text-6xl md:text-7xl 4xl:text-8xl 6xl:text-10xl 9xl:text-12xl capitalize leading-1">
													less[GAP]
												</div>
												<div className="text-xl 2xl:text-2xl 6xl:text-4xl 9xl:text-4xl capitalize mt-10 tracking-[0.05em] leading-normal">
													“<strong>LessGAP</strong> là một công ty chuyên nghiệp về lập trình đa nền tảng, truyền thông xã hội, sáng tạo thuơng hiệu và khai triển hệ thống... Chúng tôi có trụ sở ở cả Hoa Kỳ lẫn Việt Nam. Với đầy đủ nội lực để cung cấp toàn diện cho mọi nhu cầu của quý vị.”
												</div>

											</div>
										</div>
									</div>
									{/* <div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_3}`}>
										<div className={`${styles.animation_carousel_item_text} !justify-end lg:mb-[5rem] xl:mb-[7rem]`}>
											<div className={`${styles.animation_carousel_item_text_cnt} !my-[2rem] sm:!my-[5rem] lg:!my-[3rem] !overflow-hidden`}>

												<div className="text-5xl sm:text-7xl lg:text-9xl 2xl:text-11xl 6xl:text-[12rem] 9xl:text-[15rem] 13xl:text-[17rem] capitalize leading-[1.1]">
													Less is<br />more
												</div>

											</div>
										</div>
									</div> */}
									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_4}`}>
										<div className={`${styles.animation_carousel_item_text} !justify-end lg:mb-[5rem] xl:mb-[7rem]`}>
											<div className={`${styles.animation_carousel_item_text_cnt} !my-[2rem] sm:!my-[5rem] lg:!my-[3rem] !overflow-hidden`}>

												<div className="text-5xl sm:text-7xl lg:text-9xl 2xl:text-11xl 6xl:text-[12rem] 9xl:text-[15rem] 13xl:text-[17rem] leading-[1.1] mb-5">
													Less the [GAP]
												</div>
												<ul className="text-lg my-2 space-y-5 md:text-3xl xl:text-5xl xl:mb-10 tracking-[0.05em]">
													<li className="items-center flex cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('less-1')}>Kinh nghiệm <FontAwesomeIcon className="ml-3 texl-lg md:text-3xl" icon={faArrowRightLong} /></li>
													<li className="items-center flex cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('less-2')}>Trình độ <FontAwesomeIcon className="ml-3 texl-lg md:text-3xl" icon={faArrowRightLong} /></li>
													<li className="items-center flex cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('less-3')}>Win x Win<FontAwesomeIcon className="ml-3 texl-lg md:text-3xl" icon={faArrowRightLong} /></li>
												</ul>

												<Modal title={false} wrapClassName="modal-fullwidth" open={isModalOpen === 'less-1'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={`100%`} maskClosable={false} closeIcon={null}>
													<div className="p-3 md:p-10 lg:p-20 xl:p-25 max-w-[1000px] mx-auto text-white">
														<h4 className="text-xl md:text-3xl mt-5 font-extrabold uppercase">Kinh nghiệm của chúng tôi</h4>
														<div className="text-xl 2xl:text-2xl 6xl:text-4xl 9xl:text-4xl capitalize mt-10 tracking-[0.05em] leading-normal">
															Hơn 20 năm kinh nghiệm trong việc thiết kế web/app và xây dựng thuơng hiệu cho Nhật, Hàn, Singapore, Việt Nam, Hoa Kỳ... chúng tôi đã tạo ra nhiều sản phẩm trải khắp mọi ngành nghề cũng như am hiểu nhiều nền văn hoá.
														</div>
														<button onClick={() => setIsModalOpen('')} className="mt-10 text-3xl">
															<FontAwesomeIcon className="mr-3" icon={faTimes} />
														</button>
													</div>
												</Modal>
												<Modal title={false} wrapClassName="modal-fullwidth" open={isModalOpen === 'less-2'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={`100%`} maskClosable={false} closeIcon={null}>
													<div className="p-3 md:p-10 lg:p-20 xl:p-25 max-w-[1000px] mx-auto text-white">
														<h4 className="text-xl md:text-3xl mt-5 font-extrabold uppercase">Trình độ của chúng tôi</h4>
														<div className="text-xl 2xl:text-2xl 6xl:text-4xl 9xl:text-4xl capitalize mt-10 tracking-[0.05em] leading-normal">
															Với thế mạnh trong việc sở hữu nhiều hệ thống giá trị cùng với các chuyên gia trình độ cao, các sản phẩm được tạo ra rất mạnh mẽ và hoàn hảo nhưng chi phí lại rất thấp.
														</div>
														<button onClick={() => setIsModalOpen('')} className="mt-10 text-3xl">
															<FontAwesomeIcon className="mr-3" icon={faTimes} />
														</button>
													</div>
												</Modal>
												<Modal title={false} wrapClassName="modal-fullwidth" open={isModalOpen === 'less-3'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={`100%`} maskClosable={false} closeIcon={null}>
													<div className="p-3 md:p-10 lg:p-20 xl:p-25 max-w-[1000px] mx-auto text-white">
														<h4 className="text-xl md:text-3xl mt-5 font-extrabold uppercase">Trả ít hơn</h4>
														<div className="text-xl 2xl:text-2xl 6xl:text-4xl 9xl:text-4xl capitalize mt-10 tracking-[0.05em] leading-normal">
															Quý vị sẽ phải trả ít đi, nhận nhiều hơn. Chúng tôi sẽ trả hoa hồng cho những người đã giúp chúng tôi nhận được dự án từ khách hàng, như một khoản thù lao giới thiệu. Đó là Win x Win cho tất cả mọi người!

														</div>
														<button onClick={() => setIsModalOpen('')} className="mt-10 text-3xl">
															<FontAwesomeIcon className="mr-3" icon={faTimes} />
														</button>
													</div>
												</Modal>

											</div>
										</div>
									</div>

									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_8}`}>
										<div className={`${styles.animation_carousel_item_text} !justify-end lg:mb-[5rem] xl:mb-[7rem]`}>
											<div className={`${styles.animation_carousel_item_text_cnt} !my-[2rem] sm:!my-[5rem] lg:!my-[3rem] !overflow-hidden`}>

												<div className="text-5xl sm:text-7xl lg:text-9xl 2xl:text-11xl 6xl:text-[12rem] 9xl:text-[15rem] 13xl:text-[17rem] capitalize leading-[1.1]">
													Ít hơn là nhiều hơn
												</div>

											</div>
										</div>
									</div>
									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_9}`}>
										<div className={`${styles.animation_carousel_item_text} xl:mb-[7rem]`}>
											<div className={`${styles.animation_carousel_item_text_cnt} lg:!w-1/2 3xl:!w-[40%] !my-[3rem] md:!my-[5rem] lg:!my-[7rem]`}>

												<div className="text-6xl md:text-7xl 4xl:text-8xl 6xl:text-10xl 9xl:text-12xl capitalize leading-1">
													Không có sản phẩm
												</div>
												<div className="text-xl 2xl:text-2xl 5xl:text-4xl 6xl:text-4xl 9xl:text-5xl capitalize mt-10 tracking-[0.05em] leading-normal">
													“Chúng tôi không tạo ra sản phẩm, mà chỉ sáng tạo ra những tác phẩm. hãy để những chuyên gia đậm chất nghệ sĩ của chúng tôi tạo ra những trang phục vừa vặn và hài hoà nhất cho quý vị.”
												</div>
												<div className="text-lg 2xl:text-xl font-normal capitalize mt-5 tracking-[0.05em] leading-normal">
													- Cuong Tran, Cheif Technology
												</div>

											</div>
										</div>
									</div>
									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_10}`}>
										<div className={`${styles.animation_carousel_item_text} xl:mb-[7rem]`}>
											<div className={`${styles.animation_carousel_item_text_cnt} lg:!w-1/2 3xl:!w-[40%] !my-[3rem] md:!my-[5rem] lg:!my-[7rem]`}>

												<div className="text-6xl md:text-7xl 4xl:text-8xl 6xl:text-10xl 9xl:text-12xl capitalize leading-1">
													Sức mạnh
												</div>
												<div className="text-xl 2xl:text-2xl 5xl:text-4xl 6xl:text-4xl 9xl:text-5xl capitalize mt-10 tracking-[0.05em] leading-normal">
													“Với việc sở hữu tờ tạp chí đặc sắc tại Hoa Kỳ cũng như vận hành một đội ngũ truyền thông xã hội đầy thực lực. Không thể không nói lên sự tự tin của chúng tôi trong việc nâng cao giá trị thuơng hiệu của quý vị.”
												</div>
												<div className="text-lg 2xl:text-xl font-normal capitalize mt-5 tracking-[0.05em] leading-normal">
													- Bang Nguyen, Project Manager
												</div>

											</div>
										</div>
									</div>

									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_12}`}>
										<div className={`${styles.animation_carousel_item_text} !justify-end lg:mb-[5rem] xl:mb-[7rem]`}>
											<div className={`${styles.animation_carousel_item_text_cnt} !my-[2rem] sm:!my-[5rem] lg:!my-[3rem] !overflow-hidden`}>

												<div className="text-5xl sm:text-7xl lg:text-9xl 2xl:text-11xl 6xl:text-[12rem] 9xl:text-[15rem] 13xl:text-[17rem] capitalize leading-[1.1]">
													Dự án và<br />Dịch vụ
												</div>

											</div>
										</div>
									</div>
									<div className={`${styles.animation_carousel_item} w-full`}>
										<div className={`${styles.animation_carousel_item_text} w-full`}>
											<div className={`${styles.animation_carousel_item_text_cnt} w-full !my-[5rem]`}>
												<div className="flex flex-col xl:flex-row w-full gap-10 items-center">
													<div className="basic w-full xl:w-[40%] 5xl:w-[30%]">
														<div className="text-2xl xl:text-3xl 8xl:text-5xl mb-4 capitalize leading-[1.1]">3-Day Training Session</div>
														<div className="text-2xl xl:text-3xl 8xl:text-5xl mb-4 capitalize leading-[1.1]">5-Day Training Session</div>
														<div className="text-2xl xl:text-3xl 8xl:text-5xl mb-4 capitalize leading-[1.1]">Custom Sessions</div>
													</div>
													<div className="basic w-full xl:w-[60%] 5xl:w-[70%]">
														<div className="w-full !gap-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
															<div className="col-span-1 5xl:col-span-1">
																<Image src={s1} alt="less[GAP]" className="w-full" />
															</div>
															<div className="col-span-1 5xl:col-span-1">
																<Image src={s2} alt="less[GAP]" className="w-full" />
															</div>
															<div className="col-span-1 5xl:col-span-1">
																<Image src={s3} alt="less[GAP]" className="w-full" />
															</div>
															<div className="col-span-1 5xl:col-span-1">
																<Image src={s4} alt="less[GAP]" className="w-full" />
															</div>
															<div className="col-span-1 5xl:col-span-1">
																<Image src={s5} alt="less[GAP]" className="w-full" />
															</div>
															<div className="col-span-1 5xl:col-span-1">
																<Image src={s6} alt="less[GAP]" className="w-full" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={`${styles.animation_carousel_item} w-full`}>
										<div className={`${styles.animation_carousel_item_text} w-full`}>
											<div className={`${styles.animation_carousel_item_text_cnt} w-full !my-[5rem]`}>
												<div className="flex flex-col xl:flex-row w-full gap-10 items-center">
													<div className="basic w-full xl:w-[50%]">

														<div className="mb-10 lg:mb-25">
															<Image src={roq} alt="less[GAP]" className="w-full max-w-[300px]" />
														</div>
														<ul className="text-2xl my-2 space-y-3 md:text-3xl xl:mb-10 leading-normal max-w-[600px]">
															<li>Our trainers are ROQ certified for competency on operation, installations, maintenance, and repairs.</li>
														</ul>
													</div>
													<div className="basic w-full xl:w-[50%]">
														<div className="w-full !gap-3 grid grid-cols-1">
															<div className="col-span-1">
																<Image src={s7} alt="less[GAP]" className="w-full" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className={`${styles.animation_carousel_item} w-full`}>
										<div className={`${styles.animation_carousel_item_text} w-full`}>
											<div className={`${styles.animation_carousel_item_text_cnt} w-full !my-[5rem]`}>
												<div className="flex flex-col w-full gap-10">
													<p>Chúng tôi đã xây dựng nhiều hệ thống lớn như: Hệ thống quản lý y tế, hệ thống quản lý kho hàng, hệ thống quản lý thương hiệu, hệ thống quản lý sự kiện, hệ thống quản lý toàn soạn... Chúng tôi luôn áp dụng những công nghệ tiên tiến, hợp thời đại, và hiểu chính xác những gì quý vị cần.
													</p>
													<BlockGallery />
													{/* <h2 className={`mx-auto my-3 text-3xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-11xl font-normal max-w-[1000px] leading-none text-center flex flex-row items-center justify-center 2xl:scale-110`}>
														<span>Training</span>
														<span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-light px-2 lg:px-3 xl:px-5"> x </span>
														<span>Support</span>
													</h2> */}
												</div>
											</div>
										</div>
									</div>
								</Carousel>
							</div>

						</div>
					</div >
				</div >

			</MainOnly >
		</>
	)
}
