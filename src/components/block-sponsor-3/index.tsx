import { Image } from 'antd';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";

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

		<section className={`${styles.index} py-25 lg:py-25 xl:py-[10vw] overflow-hidden`}>
			<Fade cascade>
				<div className="container mx-auto max-w-[550px] md:max-w-[650px] lg:max-w-[1500px]">
					<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-extrabold text-center leading-none mb-10 md:mb-20">
						SPONSORS
					</h2>
					<div className="flex flex-row flex-wrap justify-center overflow-hidden">
						<div className="w-1/2 md:w-1/3 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.rileyhopkins.com/" className="flex !border-0" target="_blank">
									<Image preview={false} src={lg1.src} alt="" />
								</Link>
							</div>
						</div>
						<div className="w-1/2 md:w-1/3 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.sgreenchem.com/" className="flex !border-0" target="_blank">
									<Image preview={false} src={lg2.src} alt="" />
								</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-row flex-wrap justify-center overflow-hidden">
						<div className="w-1/3 md:w-1/5 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.rileyhopkins.com/" className="flex !border-0" target="_blank">
									<Image preview={false} src={rok.src} alt="" />
								</Link>
							</div>
						</div>
						<div className="w-1/3 md:w-1/5 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.sgreenchem.com/" className="flex !border-0" target="_blank">
									<Image preview={false} src={rok4.src} alt="" />
								</Link>
							</div>
						</div>
						<div className="w-1/3 md:w-1/5 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.fn.ink/" className="flex !border-0" target="_blank">
									<Image preview={false} src={rok2.src} alt="" />
								</Link>
							</div>
						</div>
						<div className="w-1/3 md:w-1/5 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.baselayr.com/" className="flex !border-0" target="_blank">
									<Image preview={false} src={rok3.src} alt="" />
								</Link>
							</div>
						</div>
						<div className="w-1/3 md:w-1/5 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.reecesupply.com/" className="flex !border-0" target="_blank">
									<Image preview={false} src={rok5.src} alt="" />
								</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-row flex-wrap justify-center overflow-hidden">
						<div className="w-1/3 md:w-1/6 xl:w-1/7 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.baselayr.com/" className="flex !border-0" target="_blank">
									<Image preview={false} src={rok3.src} alt="" />
								</Link>
							</div>
						</div>
						<div className="w-1/3 md:w-1/6 xl:w-1/7 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.reecesupply.com/" className="flex !border-0" target="_blank">
									<Image preview={false} src={rok5.src} alt="" />
								</Link>
							</div>
						</div>
						<div className="w-1/3 md:w-1/6 xl:w-1/7 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.rileyhopkins.com/" className="flex !border-0" target="_blank">
									<Image preview={false} src={rok.src} alt="" />
								</Link>
							</div>
						</div>
						<div className="w-1/3 md:w-1/6 xl:w-1/7 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.sgreenchem.com/" className="flex !border-0" target="_blank">
									<Image preview={false} src={rok4.src} alt="" />
								</Link>
							</div>
						</div>
						<div className="w-1/3 md:w-1/6 xl:w-1/7 md:px-[1rem]">
							<div className="w-full overflow-hidden">
								<Link href="https://www.fn.ink/" className="flex !border-0" target="_blank">
									<Image preview={false} src={rok2.src} alt="" />
								</Link>
							</div>
						</div>

					</div>

				</div>
			</Fade>
		</section>

	)
}
