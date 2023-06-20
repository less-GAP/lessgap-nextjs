import { Image } from 'antd';
import Link from 'next/link';

import rok from "./1.png";
import rok2 from "./2.png";
import rok3 from "./3.png";
import styles from './index.module.css';

export default function BlockSponsor() {

	return (

		<section className={`${styles.index} py-25 lg:py-25 xl:py-[10vw] overflow-hidden`}>
			<div className="container mx-auto max-w-[550px] md:max-w-[650px] lg:max-w-[1300px]">
				<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-extrabold text-center leading-none mb-10 md:mb-20">
					SPONSORS
				</h2>

				<div className="grid grid-cols-3 lg:grid-cols-5 gap-0">
					<div className="border-r border-b border-gray-300 p-5 md:p-10 xl:p-15">
						<div className="w-full overflow-hidden">
							<Link href="https://www.rileyhopkins.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="border-r border-b border-gray-300 p-5 md:p-10 xl:p-15">
						<div className="w-full overflow-hidden">
							<Link href="https://www.fn.ink/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok2.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="border-r border-b border-gray-300 p-5 md:p-10 xl:p-15">
						<div className="w-full overflow-hidden">
							<Link href="https://www.baselayr.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok3.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="border-r border-b border-gray-300 p-5 md:p-10 xl:p-15">
						<div className="w-full overflow-hidden">
							<Link href="https://www.rileyhopkins.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="border-b border-gray-300 p-5 md:p-10 xl:p-15">
						<div className="w-full overflow-hidden">
							<Link href="https://www.fn.ink/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok2.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="border-r border-gray-300 p-5 md:p-10 xl:p-15">
						<div className="w-full overflow-hidden">
							<Link href="https://www.baselayr.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok3.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="border-r border-gray-300 p-5 md:p-10 xl:p-15">
						<div className="w-full overflow-hidden">
							<Link href="https://www.rileyhopkins.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="border-r border-gray-300 p-5 md:p-10 xl:p-15">
						<div className="w-full overflow-hidden">
							<Link href="https://www.fn.ink/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok2.src} alt="" />
							</Link>
						</div>
					</div>
					<div className="border-r border-gray-300 p-5 md:p-10 xl:p-15">
						<div className="w-full overflow-hidden">
							<Link href="https://www.baselayr.com/" className="flex !border-0" target="_blank">
								<Image preview={false} src={rok3.src} alt="" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
