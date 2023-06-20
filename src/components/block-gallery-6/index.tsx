import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgRotate from 'lightgallery/plugins/rotate';
import { Fade } from "react-awesome-reveal";
import Image from 'next/image'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-rotate.css';

import styles from './index.module.css';

// import img1 from "./1.jpg";
// import img2 from "./2.jpg";
// import img3 from "./3.jpg";
// import img4 from "./4.jpg";
// import img5 from "./5.jpg";
// import img6 from "./6.jpg";
// import img7 from "./7.jpg";
// import img8 from "./8.jpg";
// import img9 from "./9.jpg";
// import img10 from "./10.jpg";
// import img11 from "./11.jpg";
// import img12 from "./12.jpg";
import img1_thumb from "./thumb/1.jpg";
import img2_thumb from "./thumb/2.jpg";
import img3_thumb from "./thumb/3.jpg";
import img4_thumb from "./thumb/4.jpg";
import img5_thumb from "./thumb/5.jpg";
import img6_thumb from "./thumb/6.jpg";
import img7_thumb from "./thumb/7.jpg";
import img8_thumb from "./thumb/8.jpg";
import img9_thumb from "./thumb/9.jpg";
import img10_thumb from "./thumb/10.jpg";
import img11_thumb from "./thumb/11.jpg";
import img12_thumb from "./thumb/12.jpg";

export default function BlockGallery() {

	return (

		<section className={`${styles.index}`}>
			<Fade cascade>
				<div>
					{/* <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-extrabold text-center leading-none mb-10 md:mb-20">
						GALLERY
					</h2> */}
					{/* <div className="container mx-auto max-w-[550px] md:max-w-[800px] xl:max-w-[1200px] mt-5"> */}
					<div className="mx-auto bg-white py-[4px]">
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
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="//www.youtube.com/watch?v=EIUJfXk3_3w&mute=0" data-poster="https://img.youtube.com/vi/EIUJfXk3_3w/maxresdefault.jpg">
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img1_thumb.src})` }}></div>
								<img alt="" src="https://img.youtube.com/vi/EIUJfXk3_3w/maxresdefault.jpg" />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/2.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img2_thumb.src})` }}></div>
								<Image alt="" src={img2_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/3.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img3_thumb.src})` }}></div>
								<Image alt="" src={img3_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/4.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img4_thumb.src})` }}></div>
								<Image alt="" src={img4_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/5.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img5_thumb.src})` }}></div>
								<Image alt="" src={img5_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/6.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img6_thumb.src})` }}></div>
								<Image alt="" src={img6_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/7.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img7_thumb.src})` }}></div>
								<Image alt="" src={img7_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/8.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img8_thumb.src})` }}></div>
								<Image alt="" src={img8_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/9.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img9_thumb.src})` }}></div>
								<Image alt="" src={img9_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/10.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img10_thumb.src})` }}></div>
								<Image alt="" src={img10_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/11.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img11_thumb.src})` }}></div>
								<Image alt="" src={img11_thumb} />
							</a>
							<a className={`${styles.item} group relative lazy`} data-lg-size="3840-2160" data-src="/imgs/12.jpg" >
								<div className="mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${img12_thumb.src})` }}></div>
								<Image alt="" src={img12_thumb} />
								<span>+10</span>
							</a>
						</LightGallery>
					</div>
				</div>
			</Fade>
		</section>

	)
}
