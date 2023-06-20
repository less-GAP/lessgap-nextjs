import { Image } from 'antd';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";

import rok from "./rok.png";
import rok2 from "./rok2.png";
import rok3 from "./rok3.png";
import rok4 from "./rok4.png";
import rok5 from "./rok5.jpeg";
import styles from './index.module.css';

export default function BlockProduct() {

	return (

		<section className={`${styles.index} py-25 px-5 overflow-hidden`}>
			<Fade cascade>
				<div className="container mx-auto max-w-[550px] md:max-w-[650px] lg:max-w-[1300px] px-3">
					<h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl text-center font-extrabold">SPONSORS</h2>
					<Fade cascade>
						<div className="flex flex-row flex-wrap justify-center mt-4 md:mt-5 mx-[-.5rem] md:mx-[-1rem] overflow-hidden">
							<div className="w-1/2 md:w-1/3 xl:w-1/5 p-[.5rem] md:p-[1rem]">
								<div className="w-full overflow-hidden">
									<Link href="https://www.rileyhopkins.com/" className="flex !border-0" target="_blank">
										<Image preview={false} src={rok.src} alt="" />
									</Link>
								</div>
							</div>
							<div className="w-1/2 md:w-1/3 xl:w-1/5 p-[.5rem] md:p-[1rem]">
								<div className="w-full overflow-hidden">
									<Link href="https://www.sgreenchem.com/" className="flex !border-0" target="_blank">
										<Image preview={false} src={rok4.src} alt="" />
									</Link>
								</div>
							</div>
							<div className="w-1/2 md:w-1/3 xl:w-1/5 p-[.5rem] md:p-[1rem]">
								<div className="w-full overflow-hidden">
									<Link href="https://www.fn.ink/" className="flex !border-0" target="_blank">
										<Image preview={false} src={rok2.src} alt="" />
									</Link>
								</div>
							</div>
							<div className="w-1/2 md:w-1/3 xl:w-1/5 p-[.5rem] md:p-[1rem]">
								<div className="w-full overflow-hidden">
									<Link href="https://www.baselayr.com/" className="flex !border-0" target="_blank">
										<Image preview={false} src={rok3.src} alt="" />
									</Link>
								</div>
							</div>
							<div className="w-1/2 md:w-1/3 xl:w-1/5 p-[.5rem] md:p-[1rem]">
								<div className="w-full overflow-hidden">
									<Link href="https://www.reecesupply.com/" className="flex !border-0" target="_blank">
										<Image preview={false} src={rok5.src} alt="" />
									</Link>
								</div>
							</div>
						</div>
					</Fade>
				</div>
			</Fade>
		</section>

	)
}
