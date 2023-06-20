import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import styles from './index.module.css';

export default function BlockMap() {

	return (

		<section className={`${styles.index} bg-slate-100`}>
			<iframe className={`${styles.map} w-full h-full min-w-full !overflow-hidden border-solid border-t-2 border-b-2 border-gray-400`} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13423.633630112687!2d-97.3213356!3d32.7416227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1be8f05c3d683f50!2sMADE%20Lab!5e0!3m2!1sen!2sus!4v1674059456635!5m2!1sen!2sus" style={{ filter: 'grayscale(1) contrast(1.2)' }}></iframe>
			<div className={`${styles.content} bg-black text-white`}>
				<div className="container max-w-[550px] md:max-w-[650px] xl:max-w-[1000px] py-15 px-5 xl:p-10 mx-auto">
					<h2 className="text-xl md:text-2xl font-extrabold">EVENT ADDRESS</h2>
					<hr className="border-white opacity-20 my-3" />
					<Link href="https://goo.gl/maps/nNZNvoPr8RyKuc3a7" target="_blank" className="!border-0 font-light text-white text-md md:text-lg flex"> <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-2 mt-1" /><span>501 E Broadway Ave, Fort Worth, TX 76104</span></Link>
					<h2 className="text-xl md:text-2xl font-extrabold mt-15">LOOKING FOR PLACES TO STAY?</h2>
					<hr className="border-white opacity-20 my-3" />
					<p className="font-light text-md md:text-lg">If you're coming from out of town or would just prefer to stay closer to the event for a discounted rate click the link below.</p>
					<p className='mt-5'>
						<Link className="group font-extrabold inline-block w-fit tracking-wide items-center bg-white !border-0 py-3 px-10 text-black shadow-lg uppercase" href="#">
							SEE DISCOUNTED RATES
						</Link>
					</p>
				</div>
			</div>
		</section >

	)
}
