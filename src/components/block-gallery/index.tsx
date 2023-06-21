import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgRotate from 'lightgallery/plugins/rotate';
import Image from 'next/legacy/image'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-rotate.css';


import img1_thumb from "@/public/imgs/project/41.png";
import img2_thumb from "@/public/imgs/project/40.png";
import img3_thumb from "@/public/imgs/project/37.png";
import img4_thumb from "@/public/imgs/project/35.jpg";
import img5_thumb from "@/public/imgs/project/29.jpg";
import img6_thumb from "@/public/imgs/project/16.jpg";
import img7_thumb from "@/public/imgs/project/27.png";
import img8_thumb from "@/public/imgs/project/23.png";
import img9_thumb from "@/public/imgs/project/6.png";
import img10_thumb from "@/public/imgs/project/24.jpg";
import img11_thumb from "@/public/imgs/project/13.jpeg";
import img12_thumb from "@/public/imgs/project/26.png";

import styles from './index.module.css';

export default function BlockGallery() {

	return (

		<section className={`${styles.index}`}>
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
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/41.png" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img1_thumb.src})` }}></div>
							<Image alt="" src={img1_thumb} />
						</a>
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/40.png" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img2_thumb.src})` }}></div>
							<Image alt="" src={img2_thumb} />
						</a>
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/37.png" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img3_thumb.src})` }}></div>
							<Image alt="" src={img3_thumb} />
						</a>
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/35.jpg" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img4_thumb.src})` }}></div>
							<Image alt="" src={img4_thumb} />
						</a>
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/29.jpg" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img5_thumb.src})` }}></div>
							<Image alt="" src={img5_thumb} />
						</a>
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/16.jpg" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img6_thumb.src})` }}></div>
							<Image alt="" src={img6_thumb} />
						</a>
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/27.png" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img7_thumb.src})` }}></div>
							<Image alt="" src={img7_thumb} />
						</a>
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/23.png" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img8_thumb.src})` }}></div>
							<Image alt="" src={img8_thumb} />
						</a>
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/6.png" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img9_thumb.src})` }}></div>
							<Image alt="" src={img9_thumb} />
						</a>
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/24.jpg" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img10_thumb.src})` }}></div>
							<Image alt="" src={img10_thumb} />
						</a>
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/13.jpeg" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img11_thumb.src})` }}></div>
							<Image alt="" src={img11_thumb} />
						</a>
						<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/project/26.png" >
							<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img12_thumb.src})` }}></div>
							<Image alt="" src={img12_thumb} />
							<span>+23</span>
						</a>
						{/* <a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/10.png"></a> */}
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/14.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/15.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/16.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/17.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/18.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/19.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/20.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/21.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/22.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/23.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/24.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/25.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/26.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/27.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/28.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/29.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/30.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/31.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/32.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/33.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/34.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/35.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/36.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/37.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/38.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/39.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/40.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/39.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/42.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/1.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/2.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/3.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/4.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/5.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/6.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/7.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/8.jpg"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/9.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/10.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/11.png"></a>
						<a className={`${styles.item} group relative lazy hidden`} data-lg-size="3840-2160" data-src="/imgs/project/12.jpg"></a>

					</LightGallery>
				</div>
			</div>
		</section>

	)
}
