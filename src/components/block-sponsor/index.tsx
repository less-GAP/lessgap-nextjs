import { Image } from 'antd';
import Link from 'next/link';

import rok from "./rok.png";
import rok2 from "./rok2.png";
import rok3 from "./rok3.png";
import rok4 from "./rok4.png";
import rok5 from "./rok5.jpeg";

import lg1 from "./lg-13-1.jpg";
import lg2 from "./lg-14-1.jpg";
import styles from './index.module.css';

export default function BlockSponsor() {

	return (

		<section className={`${styles.index} py-25 px-5 bg-gray-200`}>
			<div className="container mx-auto max-w-[550px] md:max-w-[650px] lg:max-w-[1300px] px-3">
				<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-extrabold text-center leading-none mb-10 md:mb-20">
					SPONSORS
				</h2>
				<h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-none text-center font-extrabold mt-15 sponsorby1 tracking-widest">
					<span>DIAMOND</span>
					<div className="lg:border-t-1 xl:border-t-2 border-b-2 max-w-[60px] mx-auto border-black mt-2 mb-5"></div>
				</h2>

				<div className="flex flex-row flex-wrap justify-center mx-[-.5rem] md:mx-[-1rem] overflow-hidden">
					<div className="w-1/2 md:w-1/3 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.rileyhopkins.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={lg1.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="w-1/2 md:w-1/3 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.sgreenchem.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={lg2.src} alt="" />
							</Link>
						</div>
					</div>
				</div>
				<h2 className="text-xl md:text-2xl lg:text-3xl leading-none text-center font-extrabold mt-15 sponsorby1 tracking-widest">
					<span>GOLD</span>
					<div className="lg:border-t-1 xl:border-t-2 border-b-2 max-w-[60px] mx-auto border-black mt-2 mb-5"></div>
				</h2>

				<div className="flex flex-row flex-wrap justify-center mx-[-.5rem] md:mx-[-1rem] overflow-hidden">
					<div className="w-1/2 md:w-1/3 xl:w-1/5 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.rileyhopkins.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="w-1/2 md:w-1/3 xl:w-1/5 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.sgreenchem.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok4.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="w-1/2 md:w-1/3 xl:w-1/5 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.fn.ink/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok2.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="w-1/2 md:w-1/3 xl:w-1/5 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.baselayr.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok3.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="w-1/2 md:w-1/3 xl:w-1/5 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.reecesupply.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok5.src} alt="" />
							</Link>
						</div>
					</div>
				</div>
				<h2 className="text-lg md:text-xl lg:text-2xl leading-none text-center font-extrabold mt-15 sponsorby1 tracking-widest">
					<span>SILVER</span>
					<div className="lg:border-t-1 xl:border-t-2 border-b-2 max-w-[60px] mx-auto border-black mt-2 mb-5"></div>
				</h2>

				<div className="flex flex-row flex-wrap justify-center mx-[-.5rem] md:mx-[-1rem] overflow-hidden">
					<div className="w-1/2 md:w-1/3 xl:w-1/8 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.rileyhopkins.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="w-1/2 md:w-1/3 xl:w-1/8 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.sgreenchem.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok4.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="w-1/2 md:w-1/3 xl:w-1/8 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.fn.ink/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok2.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="w-1/2 md:w-1/3 xl:w-1/8 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.baselayr.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok3.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="w-1/2 md:w-1/3 xl:w-1/8 p-[.5rem] md:p-[1rem]">
						<div className="w-full overflow-hidden border border-gray-300">
							<Link href="https://www.reecesupply.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok5.src} alt="" />
							</Link>
						</div>
					</div>
				</div>

			</div>
		</section>

	)
}
