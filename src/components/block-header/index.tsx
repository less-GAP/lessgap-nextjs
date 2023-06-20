
import styles from './index.module.css';

export default function BlockHeader() {

	return (
		<section id="headerbar" className={`${styles.headerbar} bg-gray-50 text-black px-5 py-2 items-center flex flex-col uppercase font-extrabold text-xl leading-tight sm:py-5 sm:text-2xl xl:py-3 xl:text-4xl`}>
			Save the Date
		</section>
	)
}
