import { Meta } from "@/layouts/Meta";
import { MainOnly } from "@/templates/MainOnly";
import { Carousel, Modal } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import BlockGallery from "@/components/block-gallery";

import logo from '@/img/logo.png';
import logo2 from '@/img/logow.png';
import qrcode from '@/img/qrcode.svg';
// import s1 from '@/public/imgs/madelab/s-1.png';
// import s2 from '@/public/imgs/madelab/s-2.png';
// import s3 from '@/public/imgs/madelab/s-3.png';
// import s4 from '@/public/imgs/madelab/s-4.png';
// import s5 from '@/public/imgs/madelab/s-5.png';
// import s6 from '@/public/imgs/madelab/s-6.png';

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
			<Meta
				title="less[GAP] Solutions"
				image="https://lessgap.com/imgs/banner.png"
				description="lessGAP is a professional web/app design and marketing/brands company based in the United States. We provide web design and development services for small and medium businesses." />
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
										href="mailto:hello@lessGAP.com"
										className="border-none text-2xl font-black text-white hover:opacity-50 md:text-4xl"
									>
										hello@lessGAP.com
									</Link>
								</li>
								<li className="md:mx-4 mx-5 xl:mx-6 2xl:mx-7 flex items-center">
									<Image src={qrcode} alt="less[GAP]" className="w-full max-w-[250px]" />
								</li>
								{/* <li className="md:mx-4 mx-5 xl:mx-6 2xl:mx-7 flex items-center">
									<Link
										href="/vi"
										className="!my-4 !text-lg border-none font-black text-white hover:opacity-50 md:text-4xl"
									>
										Tiếng Việt
									</Link>
								</li> */}

							</ul>
						</div>
					</div>
					<div className="absolute top-0 left-0 z-[-1] h-full w-full object-cover" dangerouslySetInnerHTML={{
						__html: `
						<video
							loop
							muted
							autoplay
							playsinline
							src="/data/video.mp4"
							class="w-full h-full object-cover"
						/>
					` }} />
				</div>

				<div className="px-3 py-9 lg:py-12 h-screen items-center flex flex-col justify-center">
					<div className="container mx-auto max-w-[1100px] lg:px-10">
						<div className={`flex flex-col justify-center ${styles.animation_line_open_screen}`}>
							<h2 className={`mx-auto my-3 text-3xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-11xl font-normal max-w-[1000px] leading-none text-center flex flex-row items-center justify-center 2xl:scale-110 ${styles.animation}`}>
								<Image src={logo2} alt="less[GAP]" className="w-full max-w-[250px] md:max-w-[350px]" />
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
											<span>Less</span>
											<span className="text-sm px-2"> x </span>
											<span>More</span>
										</div>
									</div>
								</div>
							</div>

							<div className="absolute top-0 left-0 z-[-1] h-full w-full object-cover" dangerouslySetInnerHTML={{
								__html: `
								<video
									loop
									muted
									autoplay
									playsinline
									src="/data/video2.mp4"
									class="w-full h-full object-cover"
								/>
							` }} />

							{/* Carousel */}
							<div className={`${styles.animation_carousel}`}>
								<Carousel arrows={true} dots={false} className="madePrevNextBtn"
									prevArrow={<div><FontAwesomeIcon icon={faArrowLeftLong} /></div>}
									nextArrow={<div><FontAwesomeIcon icon={faArrowRightLong} /></div>}
								>
									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_1}`}>
										<div className={`${styles.animation_carousel_item_text}`}>
											<div className={`${styles.animation_carousel_item_text_cnt} !my-[5rem]`}>

												<div className="text-4xl sm:text-5xl xl:text-6xl 4xl:text-7xl 5xl:text-7xl 6xl:text-8xl 9xl:text-[8rem] 12xl:text-[9rem] tracking-[0.05em] leading-[1.2]">
													We provide web design and development services for small and medium businesses.
												</div>

											</div>
										</div>

									</div>
									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_2}`}>
										<div className={`${styles.animation_carousel_item_text} xl:mb-[7rem]`}>
											<div className={`${styles.animation_carousel_item_text_cnt} !my-[3rem] md:!my-[5rem] lg:!my-[7rem]`}>

												<div className="text-5xl md:text-6xl 4xl:text-7xl 6xl:text-9xl 9xl:text-11xl capitalize leading-1">
													less [GAP]
												</div>
												<div className="text-xl 2xl:text-2xl 6xl:text-4xl 9xl:text-4xl capitalize mt-10 tracking-[0.05em] leading-normal">
													“<strong>LessGAP</strong> is a professional agency specializing in creating cross-platform programming, building and launching social media contents, strategizing for brand innovation, and customizing system development, etcetera. With our offices being in both North America and Vietnam, our team of capable experts in the industry are at hand to fully provide solutions for all of your needs.”
												</div>

											</div>
										</div>

									</div>
									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_4}`}>
										<div className={`${styles.animation_carousel_item_text} !justify-end lg:mb-[5rem] xl:mb-[7rem]`}>
											<div className={`${styles.animation_carousel_item_text_cnt} !my-[2rem] sm:!my-[5rem] lg:!my-[3rem] !overflow-hidden`}>

												<div className="text-4xl sm:text-6xl lg:text-8xl 2xl:text-10xl 6xl:text-[11rem] 9xl:text-[13rem] 13xl:text-[15rem] leading-[1.1] mb-15">
													Less the [GAP]
												</div>
												<ul className="text-lg my-2 space-y-5 md:text-3xl xl:text-5xl xl:mb-10 tracking-[0.05em]">
													<li className="items-center flex cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('less-1')}>Experience <FontAwesomeIcon className="ml-3 texl-lg md:text-3xl" icon={faArrowRightLong} /></li>
													<li className="items-center flex cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('less-2')}>Highly skills <FontAwesomeIcon className="ml-3 texl-lg md:text-3xl" icon={faArrowRightLong} /></li>
													<li className="items-center flex cursor-pointer" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('less-3')}>Win x Win<FontAwesomeIcon className="ml-3 texl-lg md:text-3xl" icon={faArrowRightLong} /></li>
												</ul>

												<Modal title={false} wrapClassName="modal-fullwidth" open={isModalOpen === 'less-1'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={`100%`} maskClosable={false} closeIcon={null}>
													<div className="p-3 md:p-10 lg:p-20 xl:p-25 max-w-[1000px] mx-auto text-white">
														<h4 className="text-xl md:text-3xl mt-5 font-extrabold uppercase">Our Experience</h4>
														<div className="text-xl 2xl:text-2xl 6xl:text-4xl 9xl:text-4xl capitalize mt-10 tracking-[0.05em] leading-normal">
															With over 20 years of experience in the business of creating and launching anything social media related, such as web, app design and brand building; LessGap team have partnered and successfully assisted many businesses from across the globe to launch and grow their brands in Japan, South Korea, Singapore, Vietnam, and the United States.
														</div>
														<button onClick={() => setIsModalOpen('')} className="mt-10 text-3xl">
															<FontAwesomeIcon className="mr-3" icon={faTimes} />
														</button>
													</div>
												</Modal>
												<Modal title={false} wrapClassName="modal-fullwidth" open={isModalOpen === 'less-2'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={`100%`} maskClosable={false} closeIcon={null}>
													<div className="p-3 md:p-10 lg:p-20 xl:p-25 max-w-[1000px] mx-auto text-white">
														<h4 className="text-xl md:text-3xl mt-5 font-extrabold uppercase">Our Skills</h4>
														<div className="text-xl 2xl:text-2xl 6xl:text-4xl 9xl:text-4xl capitalize mt-10 tracking-[0.05em] leading-normal">
															With our main competitive advantage being the independent agency who owns many valuable customized-systems and a team of highly skilled experts in the industry. The products we create are promised to be powerful and efficient, yet cost-effective.
														</div>
														<button onClick={() => setIsModalOpen('')} className="mt-10 text-3xl">
															<FontAwesomeIcon className="mr-3" icon={faTimes} />
														</button>
													</div>
												</Modal>
												<Modal title={false} wrapClassName="modal-fullwidth" open={isModalOpen === 'less-3'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={`100%`} maskClosable={false} closeIcon={null}>
													<div className="p-3 md:p-10 lg:p-20 xl:p-25 max-w-[1000px] mx-auto text-white">
														<h4 className="text-xl md:text-3xl mt-5 font-extrabold uppercase">Pay for less</h4>
														<div className="text-xl 2xl:text-2xl 6xl:text-4xl 9xl:text-4xl capitalize mt-10 tracking-[0.05em] leading-normal">
															You will pay less for the value you receive when partnering with LessGap. We'll give a commission to those who helped us get the project from clients, as referral compensation. It is a Win x Win for everyone!

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
													Less is more
												</div>

											</div>
										</div>
									</div>
									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_9}`}>
										<div className={`${styles.animation_carousel_item_text} xl:mb-[7rem]`}>
											<div className={`${styles.animation_carousel_item_text_cnt} !my-[3rem] md:!my-[5rem] lg:!my-[7rem]`}>

												<div className="text-5xl md:text-6xl 4xl:text-7xl 6xl:text-9xl 9xl:text-11xl capitalize leading-1">
													No products
												</div>
												<div className="text-xl 2xl:text-2xl 5xl:text-4xl 6xl:text-4xl 9xl:text-5xl capitalize mt-10 tracking-[0.05em] leading-normal">
													“We do not create products, we create works of art. Let our team of artistic experts create the most fitting and harmonious designs for your brands.”
												</div>
												<div className="text-lg 2xl:text-xl font-normal capitalize mt-5 tracking-[0.05em] leading-normal">
													- Cuong Tran, Cheif Technology
												</div>

											</div>
										</div>
									</div>
									<div className={`${styles.animation_carousel_item} ${styles.animation_carousel_item_slider_10}`}>
										<div className={`${styles.animation_carousel_item_text} xl:mb-[7rem]`}>
											<div className={`${styles.animation_carousel_item_text_cnt} !my-[3rem] md:!my-[5rem] lg:!my-[7rem]`}>

												<div className="text-5xl md:text-6xl 4xl:text-7xl 6xl:text-9xl 9xl:text-11xl capitalize leading-1">
													Powerful
												</div>
												<div className="text-xl 2xl:text-2xl 5xl:text-4xl 6xl:text-4xl 9xl:text-5xl capitalize mt-10 tracking-[0.05em] leading-normal">
													“With the ownership of a distinguished magazine in North America and a team of competent social media operators, we are confident in enhancing the value of your brand.”
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
													Works and<br />Services
												</div>

											</div>
										</div>
									</div>
									<div className={`${styles.animation_carousel_item} w-full`}>
										<div className={`${styles.animation_carousel_item_text} w-full`}>
											<div className={`${styles.animation_carousel_item_text_cnt} w-full !my-[5rem]`}>
												<div className="flex flex-col xl:flex-row w-full gap-10 items-center">
													<div className="basic w-full xl:w-[40%] 5xl:w-[30%] space-y-5 lg:space-y-10">
														<div className="text-2xl xl:text-3xl 8xl:text-5xl mb-4 capitalize leading-[1.1]">
															Website Development
														</div>
														<div className="text-2xl xl:text-3xl 8xl:text-5xl mb-4 capitalize leading-[1.1]">
															Soical Media Management
														</div>
														<div className="text-2xl xl:text-3xl 8xl:text-5xl mb-4 capitalize leading-[1.1]">
															Brand Identity
														</div>
													</div>
													<div className="basic w-full xl:w-[60%] 5xl:w-[70%]">
														<div className="w-full !gap-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
															<div className="text-xl 2xl:text-2xl 6xl:text-4xl 9xl:text-4xl capitalize mt-10 tracking-[0.05em] leading-normal">

																less[GAP] Solutions [USA]
																Address: 4905 S Hulen Street Fort Worth, TX 76132
																Phone: +1 (817) 564-5168

															</div>
															<div className="text-xl 2xl:text-2xl 6xl:text-4xl 9xl:text-4xl capitalize mt-10 tracking-[0.05em] leading-normal">

																less[GAP] Solutions [VN]
																Address: 123 HiTech Town, District 1, Ho Chi Minh City
																Phone: +84 (28) 7108 8888

															</div>
															{/* <div className="col-span-1 5xl:col-span-1">
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
															</div> */}
															{/* <div className="col-span-1 5xl:col-span-1">
																<Image src={s6} alt="less[GAP]" className="w-full" />
															</div> */}
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
													<div className="basic w-full xl:w-[50%] mx-auto">
														<div className="w-full !gap-3 grid grid-cols-1">
															<div className="col-span-1">
																<Image src={logo2} alt="less[GAP]" className="w-full" />
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
													<div className="text-xl 2xl:text-2xl 6xl:text-4xl 9xl:text-4xl capitalize mt-10 tracking-[0.05em] leading-normal">We have built many customized large-scale systems such as healthcare management systems, inventory management systems, brand management systems, event management systems, automation systems, etcetera. We strive to apply the most advanced and newest technologies to the making of any projects with a precise understanding of what your brand needs.</div>
													<BlockGallery />
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
