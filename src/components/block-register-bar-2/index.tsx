import Link from 'next/link';

import styles from './index.module.css';

export default function BlockRegisterBar(props: any) {

	const price = props.price ? `$${props.price}` : 'FREE';
	const url = props.url ? props.url : '#register';

	return (
		<section id="registerbar" className={`${styles.registerbar} py-5 items-center justify-center flex flex-row space-x-5`}>
			<div className="price text-white uppercase flex flex-row items-center justify-center">
				<div className="hidden sm:block sm:pr-2 text-lg sm:text-xl md:text-2xl">Price:</div>
				<div className="font-extrabold text-2xl sm:text-3xl md:text-4xl">{price}</div>
			</div>
			<Link className="group tracking-widest font-extrabold inline-block w-fit items-center bg-white !border-0 text-sm sm:text-md lg:text-lg py-2 px-5 sm:px-10 sm:py-4 md:px-15 text-black shadow-lg uppercase" href={url}>
				Register Now
			</Link>
		</section>
	)
}
