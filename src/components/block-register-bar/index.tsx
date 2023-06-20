import Link from 'next/link';

import styles from './index.module.css';

export default function BlockRegisterBar() {

	return (
		<section id="registerbar" className={`${styles.registerbar} p-5 items-center flex flex-col`}>
			<Link className="group tracking-widest font-extrabold inline-block w-fit items-center bg-white !border-0 py-3 px-10 md:py-4 md:px-15 text-black shadow-lg uppercase" href="#register">
				Register Now
			</Link>
		</section>
	)
}
