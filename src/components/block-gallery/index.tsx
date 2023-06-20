import { Image } from 'antd';

import styles from './index.module.css';

import img1 from "./1.jpg";
import img1_thumb from "./t1.jpg";
import img2 from "./2.jpg";
import img2_thumb from "./t2.jpg";
import img3 from "./3.jpg";
import img3_thumb from "./t3.jpg";
import img4 from "./4.jpg";
import img4_thumb from "./t4.jpg";
import img5 from "./5.jpg";
import img5_thumb from "./t5.jpg";
import img6 from "./6.jpg";
import img6_thumb from "./t6.jpg";
import img7 from "./7.jpg";
import img7_thumb from "./t7.jpg";
import img8 from "./8.jpg";
import img8_thumb from "./t8.jpg";
import img9 from "./9.jpg";
import img9_thumb from "./t9.jpg";
import img10 from "./10.jpg";
import img10_thumb from "./t10.jpg";
import img11 from "./11.jpg";
import img11_thumb from "./t11.jpg";
import img12 from "./12.jpg";
import img12_thumb from "./t12.jpg";

export default function BlockGallery() {


	return (

		<section className={`${styles.index} bg-slate-100 py-25 px-5`}>
			<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-extrabold text-center leading-none mb-10 md:mb-20">
				GALLERY
			</h2>
			<div className="container mx-auto max-w-[550px] md:max-w-[650px] xl:max-w-[1000px] mt-5">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
					<Image.PreviewGroup>
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img1_thumb.src} preview={{ src: img1.src }} />
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img2_thumb.src} preview={{ src: img2.src }} />
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img3_thumb.src} preview={{ src: img3.src }} />
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img4_thumb.src} preview={{ src: img4.src }} />
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img5_thumb.src} preview={{ src: img5.src }} />
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img6_thumb.src} preview={{ src: img6.src }} />
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img7_thumb.src} preview={{ src: img7.src }} />
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img8_thumb.src} preview={{ src: img8.src }} />
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img9_thumb.src} preview={{ src: img9.src }} />
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img10_thumb.src} preview={{ src: img10.src }} />
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img11_thumb.src} preview={{ src: img11.src }} />
						<Image alt="" className='max-w-[100%] overflow-hidden border-gray-400 border' src={img12_thumb.src} preview={{ src: img12.src }} />
					</Image.PreviewGroup>
				</div>
			</div>
		</section>

	)
}
