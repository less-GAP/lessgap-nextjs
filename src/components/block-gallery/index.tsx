import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgRotate from 'lightgallery/plugins/rotate';
import { Fade } from "react-awesome-reveal";
import Image from 'next/legacy/image'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-rotate.css';


import img1_thumb from "@/public/imgs/waterbasecamp/thumb/1.jpg";
import img2_thumb from "@/public/imgs/waterbasecamp/thumb/2.jpg";
import img3_thumb from "@/public/imgs/waterbasecamp/thumb/3.jpg";
import img4_thumb from "@/public/imgs/waterbasecamp/thumb/4.jpg";
import img6_thumb from "@/public/imgs/waterbasecamp/thumb/6.jpg";
import img8_thumb from "@/public/imgs/waterbasecamp/thumb/8.jpg";
import img9_thumb from "@/public/imgs/waterbasecamp/thumb/9.jpg";
import img10_thumb from "@/public/imgs/waterbasecamp/thumb/10.jpg";
import img11_thumb from "@/public/imgs/waterbasecamp/thumb/11.jpg";
import img12_thumb from "@/public/imgs/waterbasecamp/thumb/12.jpg";
import img13_thumb from "@/public/imgs/waterbasecamp/thumb/13.jpg";
import img15_thumb from "@/public/imgs/waterbasecamp/thumb/15.jpg";

import styles from './index.module.css';

export default function BlockGallery() {

	return (

		<section className={`${styles.index}`}>
			<Fade cascade>
				<div>
					<div className="mx-auto bg-black py-[4px]">
						<LightGallery
							speed={500}
							plugins={[lgZoom, lgVideo, lgRotate]}
							download={true}
							elementClassNames={`${styles.gallery}`}
							// Mobile settings
							mobileSettings={{
								controls: false,
								showCloseIcon: true,
								rotate: false,
							}}
						>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/1.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img1_thumb.src})` }}></div>
								<Image alt="" src={img1_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/2.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img2_thumb.src})` }}></div>
								<Image alt="" src={img2_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/3.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img3_thumb.src})` }}></div>
								<Image alt="" src={img3_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/4.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img4_thumb.src})` }}></div>
								<Image alt="" src={img4_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/13.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img13_thumb.src})` }}></div>
								<Image alt="" src={img13_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/6.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img6_thumb.src})` }}></div>
								<Image alt="" src={img6_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/15.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img15_thumb.src})` }}></div>
								<Image alt="" src={img15_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/8.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img8_thumb.src})` }}></div>
								<Image alt="" src={img8_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/9.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img9_thumb.src})` }}></div>
								<Image alt="" src={img9_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/10.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img10_thumb.src})` }}></div>
								<Image alt="" src={img10_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/11.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img11_thumb.src})` }}></div>
								<Image alt="" src={img11_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/12.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img12_thumb.src})` }}></div>
								<Image alt="" src={img12_thumb} />
								<span>+23</span>
							</a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/5.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/14.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/7.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/16.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/17.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/18.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/19.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/20.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/21.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/22.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/23.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/24.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/25.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/26.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/27.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/28.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/29.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/30.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/31.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/32.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/33.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/34.jpg"></a>
							<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/waterbasecamp/35.jpg"></a>

						</LightGallery>
					</div>
				</div>
			</Fade>
		</section>

	)
}
