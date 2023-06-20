
import { Meta } from "@/layouts/Meta";
import { MainOnly } from "@/templates/MainOnly";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceRollingEyes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function PageError() {
	return (
		<>
			<Meta title="404" description="less[GAP] Solutions continually draws and delivers new audiences to create a global network of connected best-in-class apparel decorators, manufacturers, graphic designers, and brand influencers." />
			<MainOnly
				className="pageerror"
			>
				<div className="pageerror__content">
					<div className="container mx-auto max-w-[640px] md:max-w-[768px] xl:max-w-[1230px] px-3 py-9 lg:py-12 sm:items-center sm:flex sm:h-[100vh]">

						<div className="mx-auto max-w-6xl px-4 sm:px-6">
							<div className="items-center">
								<div className="text-center items-center justify-center flex flex-col">
									<svg x="0px" y="0px" viewBox="0 0 350.9 120.8" style={{ maxWidth: '230px' }}>
										<path d="M46.2,87.2L29.7,39.1h-0.2v48.1H9.3v-76h29.9l15.3,45.4h0.2l15.3-45.4h29.3v76H77.9V39.1h-0.2L61.3,87.2H46.2z" />
										<path d="M163.7,73h-30.4L128,87.2h-21.8l30-76.1h25.3l30.2,76.1h-22.8L163.7,73z M139.6,56.1h17.9l-8.6-23.8h-0.3L139.6,56.1z" />
										<path d="M271.1,49c0,22.9-15.2,38.1-39.6,38.1h-33.1V11.1h33.1C255.8,11.1,271.1,26.2,271.1,49z M220.2,28.2v42h11.2
									c11,0,16.8-6.6,16.8-21.1c0-14.4-5.9-20.9-16.8-20.9H220.2z"/>
										<path d="M280.5,87.2V11.1h60.2v17h-38.3v12.3h33.6v17h-33.6v12.7h39.3v17H280.5z" />
										<rect x="9.3" y="95.4" width="332.5" height="17" />
									</svg>
									<FontAwesomeIcon icon={faFaceRollingEyes} className="mt-20 text-3xl" style={{ maxWidth: '80px' }} />
									<h1 className="mt-5 mb-3 text-5xl font-extrabold uppercase leading-none md:text-6xl" data-aos="zoom-y-out">
										Error 404!
									</h1>
									<h2 className="my-2 font-bold leading-none text-xl" >Page not found!</h2>
									<p>Please check the URL or use the navigation to find what you are looking for.</p>
									{/* NavLink */}
									<div className="mt-12">
										<Link href="/" className="btn btn--primary bg-black text-white uppercase py-5 px-10 font-bold text-lg">Home Page</Link>
									</div>
									{/* List  */}
								</div>
							</div>
						</div>
					</div>
				</div>


			</MainOnly>
		</>
	)
}

