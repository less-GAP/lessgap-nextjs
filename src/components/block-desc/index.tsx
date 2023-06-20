import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './index.module.css';

export default function BlockDesc() {

	return (

		<section className={`${styles.index} py-25 px-5`}>
			<div className="container mx-auto max-w-[550px] md:max-w-[650px] xl:max-w-[1000px]">
				<div className="flex flex-col">
					<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-extrabold leading-none">
						ADVANCED AUTOMATION
					</h2>
					<div className="flex flex-col mt-5 md:mt-10">
						<p className="text-lg md:text-xl xl:text-2xl">WOW your clients as you learn to master high end simulated process and special effects printing. In this advanced workshop, we’ll help guide you to master the art of design, separations, screen making, press setup, and optimal production for high end simulated process and special effects screen printing. Taught by print masters Brian Lessard from less[GAP] and Jimmy Ormond from Multi-Craft you’ll get to learn their years of industry experience working and dialing in these types of prints for Rutland and M&R but on the most cutting edge equipment in the market including the ROQ Next, and Laser LTS.</p>
					</div>
					<h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl font-extrabold leading-none mt-10 md:mt-15">
						WHAT WILL YOU LEARN?
					</h2>
					<div className="flex flex-col mt-3 md:mt-5">
						<p className="text-md md:text-lg">WOW your clients as you learn to master high end simulated process and special effects printing. In this advanced workshop, we’ll help guide you to master the art of design, separations, screen making, press setup, and optimal production for high end simulated process and special effects screen printing. Taught by print masters Brian Lessard from less[GAP] and Jimmy Ormond from Multi-Craft you’ll get to learn their years of industry experience working and dialing in these types of prints for Rutland and M&R but on the most cutting edge equipment in the market including the ROQ Next, and Laser LTS.</p>
					</div>
					<h2 className="text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl font-extrabold leading-none mt-10 md:mt-15">
						WHO'S MADE TO ROQ FOR?
					</h2>
					<div className="flex flex-col mt-3 md:mt-5">
						<div className="flex w-full items-start mb-6">
							<div className="flex justify-center">
								<FontAwesomeIcon icon={faCheckCircle} className="flex-shrink-0 w-6 h-6 mt-1 md:mt-1" />
							</div>
							<h3 className="flex flex-col md:flex-row md:items-center mb-1 text-lg font-normal pl-3">
								<span>The business owner growing an automated shop to offer their customers something unique and special.
								</span>
							</h3>
						</div>
						<div className="flex w-full items-start mb-6">
							<div className="flex justify-center">
								<FontAwesomeIcon icon={faCheckCircle} className="flex-shrink-0 w-6 h-6 mt-1 md:mt-1" />
							</div>
							<h3 className="flex flex-col md:flex-row md:items-center mb-1 text-lg font-normal pl-3">
								<span>The production manager looking for advanced process training in screen making and specialty printing.
								</span>
							</h3>
						</div>
						<div className="flex w-full items-start">
							<div className="flex justify-center">
								<FontAwesomeIcon icon={faCheckCircle} className="flex-shrink-0 w-6 h-6 mt-1 md:mt-1" />
							</div>
							<h3 className="flex flex-col md:flex-row md:items-center mb-1 text-lg font-normal pl-3">
								<span>The experienced press operator looking to new skills or expanding their knowledge to take their print skills to the next level.
								</span>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
