import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgRotate from 'lightgallery/plugins/rotate';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-rotate.css';

import styles from './index.module.css';

import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";
import img4 from "./4.jpeg";
import img5 from "./5.jpeg";
import img6 from "./6.jpeg";
import img7 from "./7.jpeg";
import img8 from "./8.jpeg";
import img9 from "./9.jpeg";
import img10 from "./10.jpeg";
import img11 from "./11.jpeg";
import img12 from "./12.jpeg";

export default function BlockGallery() {

	return (

		<>
			<div className={`${styles.heading} flex flex-col xl:flex-row mx-auto md:px-10 xl:px-25 2xl:space-x-25 px-5 mt-10`}>
				<div className="container mx-auto max-w-[550px] md:max-w-[900px] xl:max-w-[1800px]">
					<div className="flex flex-col xl:flex-row md:px-10 xl:px-25 mx-auto xl:space-x-15 3xl:space-x-15 justify-center">
						<h2 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-10xl 6xl:text-11xl font-extrabold leading-none">
							GALLERY
						</h2>
					</div>
				</div>
			</div>
			<section className={`${styles.index} py-25 px-5 lg:py-25 xl:py-[10vw] bg-black text-white`}>
				<div className="container mx-auto max-w-[550px] md:max-w-[800px] xl:max-w-[1200px]">
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
						<a className={styles.item} data-src={img1.src} style={{ backgroundImage: `url(${img1.src})` }}>
							<img alt="" src={img1.src} />
						</a>
						<a className={styles.item} data-src={img2.src} style={{ backgroundImage: `url(${img2.src})` }}>
							<img alt="" src={img2.src} />
						</a>
						<a className={styles.item} data-src={img3.src} style={{ backgroundImage: `url(${img3.src})` }}>
							<img alt="" src={img3.src} />
						</a>
						<a className={styles.item} data-src={img4.src} style={{ backgroundImage: `url(${img4.src})` }}>
							<img alt="" src={img4.src} />
							<span>+10</span>
						</a>
						<a className={`${styles.item} hidden`} data-src={img5.src} style={{ backgroundImage: `url(${img5.src})` }}>
							<img alt="" src={img5.src} />
						</a>
						<a className={`${styles.item} hidden`} data-src={img6.src} style={{ backgroundImage: `url(${img6.src})` }}>
							<img alt="" src={img6.src} />
						</a>
						<a className={`${styles.item} hidden`} data-src={img7.src} style={{ backgroundImage: `url(${img7.src})` }}>
							<img alt="" src={img7.src} />
						</a>
						<a className={`${styles.item} hidden`} data-src={img8.src} style={{ backgroundImage: `url(${img8.src})` }}>
							<img alt="" src={img8.src} />
						</a>
						<a className={`${styles.item} hidden`} data-src={img9.src} style={{ backgroundImage: `url(${img9.src})` }}>
							<img alt="" src={img9.src} />
						</a>
						<a className={`${styles.item} hidden`} data-src={img10.src} style={{ backgroundImage: `url(${img10.src})` }}>
							<img alt="" src={img10.src} />
						</a>
						<a className={`${styles.item} hidden`} data-src={img11.src} style={{ backgroundImage: `url(${img11.src})` }}>
							<img alt="" src={img11.src} />
						</a>
						<a className={`${styles.item} hidden`} data-src={img12.src} style={{ backgroundImage: `url(${img12.src})` }}>
							<img alt="" src={img12.src} />
						</a>
					</LightGallery>
				</div>
			</section>
		</>

	)
}
