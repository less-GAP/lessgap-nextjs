import styles from './index.module.css';

export default function BlockAgenda() {

	return (

		<section className={`${styles.index} bg-slate-100 text-black py-25 px-5`}>
			<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-extrabold text-center leading-none">
				AGENDA
			</h2>
			<div className="container mx-auto max-w-[640px] lg:max-w-[990px] xl:max-w-[1000px] mt-5">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-10">
					<div className="w-full overflow-hidden">
						<h4 className="text-xl md:text-2xl mt-10 font-extrabold uppercase">Day 1</h4>
						<h5 className="text-md mb-10 font-extrabold uppercase">FRIDAY, JULY 29</h5>
						<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
							<p className="text-xs font-light text-gray-900 min-w-[80px] opacity-60">09:00 AM</p>
							<p className="focus:outline-none text-md font-light mt-2 sm:mt-0 sm:pl-5">Welcome and Introductions</p>
						</div>
						<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
							<p className="text-xs font-light text-gray-900 min-w-[80px] opacity-60">09:00 AM</p>
							<p className="focus:outline-none text-md font-light mt-2 sm:mt-0 sm:pl-5">Thought Process, Artwork Separation, and Screen Making</p>
						</div>
						<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
							<p className="text-xs font-light text-gray-900 min-w-[80px] opacity-60">09:00 AM</p>
							<p className="focus:outline-none text-md font-light mt-2 sm:mt-0 sm:pl-5">Lunch</p>
						</div>
						<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
							<p className="text-xs font-light text-gray-900 min-w-[80px] opacity-60">09:00 AM</p>
							<p className="focus:outline-none text-md font-light mt-2 sm:mt-0 sm:pl-5">Hands On – Press Setup and Production for Simulated Process</p>
						</div>
					</div>
					<div className="w-full overflow-hidden">
						<h4 className="text-xl md:text-2xl mt-10 font-extrabold uppercase">Day 2</h4>
						<h5 className="text-md mb-10 font-extrabold uppercase">SATURDAY, JULY 30</h5>
						<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
							<p className="text-xs font-light text-gray-900 min-w-[80px] opacity-60">09:00 AM</p>
							<p className="focus:outline-none text-md font-light mt-2 sm:mt-0 sm:pl-5">Welcome and Introductions</p>
						</div>
						<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
							<p className="text-xs font-light text-gray-900 min-w-[80px] opacity-60">09:00 AM</p>
							<p className="focus:outline-none text-md font-light mt-2 sm:mt-0 sm:pl-5">Thought Process, Artwork Separation, and Screen Making</p>
						</div>
						<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
							<p className="text-xs font-light text-gray-900 min-w-[80px] opacity-60">09:00 AM</p>
							<p className="focus:outline-none text-md font-light mt-2 sm:mt-0 sm:pl-5">Lunch</p>
						</div>
						<div className="border-b py-4 flex flex-col sm:flex-row sm:items-center border-stone-800 border-dashed">
							<p className="text-xs font-light text-gray-900 min-w-[80px] opacity-60">09:00 AM</p>
							<p className="focus:outline-none text-md font-light mt-2 sm:mt-0 sm:pl-5">Hands On – Press Setup and Production for Simulated Process</p>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
