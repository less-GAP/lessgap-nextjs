import { Turnstile } from '@marsidev/react-turnstile'
import { Fade } from "react-awesome-reveal";

import styles from './index.module.css';

export default function BlockForm() {

	async function contactSubmitFrm(event: any) {
		event.preventDefault()
		let error = false
		const formData = new FormData(event.target)

		if (formData.get("Last Name") === "") {
			alert("Please enter your last name.");
			error = true
			return;
		}
		if (formData.get("First Name") === "") {
			alert("Please enter your first Name.");
			error = true
			return;
		}
		if (formData.get("Email") === "") {
			alert("Please enter your email address.");
			error = true
			return;
		}
		if (formData.get("Phone") === "") {
			alert("Please enter your phone number.");
			error = true
			return;
		}
		if (formData.get("Description") === "") {
			error = true
			alert("Please enter a description.");
			return;
		}

		if (!error) {
			const token = formData.get('cf-turnstile-response')
			const res = await fetch('/api/siteverify', {
				method: 'POST',
				body: JSON.stringify(
					{
						token
					}
				),
				headers: {
					'content-type': 'application/json'
				}
			})
			const data = await res.json()
			if (data.success) {
				// eslint-disable-next-line 
				event.target.xnQsjsdp.value = '2ec468bf039d84872b15425b30c08e182a540e22ad64e3675afda1b0e7b6d786'
				// eslint-disable-next-line 
				event.target.xmIwtLD.value = '04060337121a041e4f1859e6d5613b065f8b362c6e53729c2ce67a884e5d2281'
				event.target.submit()
			} else {
				alert("Please complete the captcha. Please refresh the page if you are unable to complete the captcha.");
			}
		}
	}

	return (

		<section id="register" className={`${styles.index} py-15 px-5 lg:py-25 xl:py-[10vw]`}>
			<Fade cascade>
				<div className="container mx-auto max-w-[550px] md:max-w-[650px] lg:max-w-[1000px] px-3">
					<div className="flex flex-col md:flex-row justify-between items-center mb-10">
						<h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-none">REGISTER NOW</h2>
						<div className="price uppercase flex flex-row items-center">
							<div className="hidden sm:block sm:pr-2 text-lg sm:text-xl md:text-2xl">Price:</div>
							<div className="font-extrabold text-2xl sm:text-3xl md:text-4xl">$499</div>
						</div>
					</div>
					<div id="crmWebToEntityForm" className="crmWebToEntityForm">
						<form action="https://crm.zoho.com/crm/WebToContactForm" name="WebToContacts5535012000002185001" method="POST" acceptCharset="UTF-8" onSubmit={contactSubmitFrm} id="frmWebToEntityForm">
							<input type="hidden" name="zc_gad" id="zc_gad" defaultValue=""></input>
							<input type="hidden" name="actionType" defaultValue="Q29udGFjdHM="></input>
							<input type="hidden" name="xnQsjsdp" defaultValue=""></input>
							<input type="hidden" name="xmIwtLD" defaultValue=""></input>
							<input type="hidden" name="ldeskuid"></input>
							<input type="hidden" name="LDTuvid"></input>
							<input type="hidden" name="returnURL" defaultValue={`${process.env.NEXT_PUBLIC_CONTACT_URL}`}></input>

							<div className="flex flex-col lg:flex-row">
								<div className="basics lg:max-w-[50%] w-[100%] mb-5 lg:pr-5">
									<label htmlFor="First_Name" className="block uppercase text-sm mb-2">First Name</label>
									<input type="text" id="First_Name" name="First Name" className="border border-black p-3 text-lg font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black"></input>
								</div>
								<div className="basics lg:max-w-[50%] w-[100%] mb-5 lg:pl-5">
									<label htmlFor="Last_Name" className="block uppercase text-sm mb-2">Last Name</label>
									<input type="text" id="Last_Name" name="Last Name" className="border border-black p-3 text-lg font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black"></input>
								</div>
							</div>
							<div className="flex flex-col lg:flex-row">
								<div className="basics lg:max-w-[50%] w-[100%] mb-5 lg:pr-5">
									<label htmlFor="Email" className="block uppercase text-sm mb-2">Email</label>
									<div dangerouslySetInnerHTML={{ __html: `<input type="text" ftype="email" id="Email" name="Email"  class="border border-black p-3 text-lg font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black"></input>` }} />
								</div>
								<div className="basics lg:max-w-[50%] w-[100%] mb-5 lg:pl-5">
									<label htmlFor="Phone" className="block uppercase text-sm mb-2">Phone</label>
									<input type="text" id="Phone" name="Phone" className="border border-black p-3 text-lg font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black"></input>
								</div>
							</div>


							<div className="flex flex-col lg:flex-row">

								<div className="basics lg:max-w-[50%] w-[100%] mb-5 lg:pr-5">

									<label className="block uppercase text-sm mb-2" htmlFor="CONTACTCF5">
										Primary Decoration Type
									</label>
									<div className="relative">
										<select className="appearance-none bg-white border border-black p-3 text-lg font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black" name="CONTACTCF5" id="CONTACTCF5" required>
											<option value=''>- None -</option>
											<option value='Screen&#x20;Printing'>Screen Printing</option>
											<option value='Embroidery'>Embroidery</option>
											<option value='DTG'>DTG</option>
											<option value='Heat&#x20;Transfer'>Heat Transfer</option>
											<option value='Other'>Other</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
										</div>
									</div>
								</div>
								<div className="basics lg:max-w-[50%] w-[100%] mb-5 lg:pl-5">

									<label className="block uppercase text-sm mb-2" htmlFor="CONTACTCF6">
										Primary
										Business
									</label>
									<div className="relative">
										<select className="appearance-none bg-white border border-black p-3 text-lg font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black" name="CONTACTCF6" id="CONTACTCF6" required>
											<option value='-None-'>-None-</option>
											<option value='Decorator'>Decorator</option>
											<option value='Promotional&#x20;Products'>Promotional Products</option>
											<option value='Distributor'>Distributor</option>
											<option value='Brand'>Brand</option>
											<option value='Other'>Other</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
										</div>
									</div>
								</div>

							</div>


							<div className="row mb-5">
								<label htmlFor="Description" className="block uppercase text-sm mb-2">Description</label>
								<textarea id="Description" name="Description" className="border border-black p-3 text-lg font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black"></textarea>
							</div>

							<select className='hidden' defaultValue="Customer" id='CONTACTCF1' name='CONTACTCF1'>
								<option value='-None-'>-None-</option>
								<option value='Customer'>Customer</option>
								<option value='Partner'>Partner</option>
								<option value='Potential&#x20;Partner'>Potential Partner</option>
							</select>
							<select className='hidden' defaultValue="Education" id='CONTACTCF15' name='CONTACTCF15'>
								<option value='-None-'>-None-</option>
								<option value='Training&#x20;and&#x20;Support'>Training and Support</option>
								<option value='Testing&#x20;and&#x20;Development'>Testing and Development</option>
								<option value='Education'>Education</option>
								<option value='Partnership&#x20;with&#x20;MADE&#x20;Lab'>Partnership with less[GAP]</option>
								<option value='Other'>Other</option>
							</select>



							<Turnstile
								siteKey='0x4AAAAAAAB17Dj0Ap28zBE7B'
								// autoResetOnExpire={true}
								options={{
									action: 'submit-form',
									// size: 'invisible',
									theme: 'light'
								}} />

							<div className="row mb-10">
								<button type="submit" id="formsubmit" className="formsubmit tracking-widest group font-extrabold inline-block w-fit items-center bg-black !border-0 py-3 px-10 md:py-4 md:px-15 text-white shadow-lg uppercase">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</Fade>
		</section>

	)
}
