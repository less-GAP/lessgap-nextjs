import { Turnstile } from '@marsidev/react-turnstile'
import { FloatButton, Modal } from 'antd';

import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWpforms } from '@fortawesome/free-brands-svg-icons';

import styles from './index.module.css';

export default function BlockFormAuto() {

	const [isModalOpen, setIsModalOpen] = useState('');
	const [isFloatButton, setIsFloatButton] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsModalOpen('autosubscribe')
			setIsFloatButton(true)
		}, 5000)
	}, [])

	async function contactSubmitFrm(event: any) {
		event.preventDefault()
		let error = false
		const formData = new FormData(event.target)

		if (formData.get("Last Name") === "") {
			alert("Please enter your last name.");
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
				event.target.xmIwtLD.value = '04060337121a041e4f1859e6d5613b069abc949fbd75b764890517857df315e8'
				event.target.submit()
			} else {
				alert("Please complete the captcha. Please refresh the page if you are unable to complete the captcha.");
			}
		}
	}

	return (

		<>
			{isFloatButton && <FloatButton tooltip={<div>Register Now</div>} style={{ right: 25, bottom: 25 }} onClick={() => setIsModalOpen('autosubscribe')} icon={<FontAwesomeIcon icon={faWpforms} />} />}
			<Modal title={false} wrapClassName="modal-fullscreen" open={isModalOpen === 'autosubscribe'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
				<section className={`${styles.index}`}>
					<div className="container mx-auto max-w-[550px] md:max-w-[650px] lg:max-w-[1000px]">
						<h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-none">REGISTER NOW</h2>
						<h5 className="text-lg">Get the latest updates on the event</h5>
						<hr className="my-5" />
						<div id="crmWebToEntityForm" className="crmWebToEntityForm">
							<form action="https://crm.zoho.com/crm/WebToLeadForm" name="WebToLeads5535012000000515001" method="POST" acceptCharset="UTF-8" onSubmit={contactSubmitFrm} id="frmWebToEntityForm">
								<input type="hidden" name="zc_gad" id="zc_gad" defaultValue=""></input>
								<input type="hidden" name="actionType" defaultValue="TGVhZHM="></input>
								<input type="hidden" name="xnQsjsdp" defaultValue=""></input>
								<input type="hidden" name="xmIwtLD" defaultValue=""></input>
								<input type="hidden" name="returnURL" defaultValue={`${process.env.NEXT_PUBLIC_CONTACT_URL}`}></input>

								<div className="flex flex-col">
									<div className="basics w-[100%] mb-5">
										<label htmlFor="First_Name" className="block mb-2">First Name</label>
										<input type="text" id="First_Name" name="First Name" className="border border-gray-500 py-2 px-3 text-lg font-light w-[100%]"></input>
									</div>
									<div className="basics w-[100%] mb-5">
										<label htmlFor="Last_Name" className="block mb-2">Last Name<span className="text-red">*</span></label>
										<input type="text" id="Last_Name" name="Last Name" className="border border-gray-500 py-2 px-3 text-lg font-light w-[100%]"></input>
									</div>
									<div className="basics w-[100%] mb-5">
										<label htmlFor="Email" className="block mb-2">Email</label>
										<div dangerouslySetInnerHTML={{ __html: `<input type="text" ftype="email" id="Email" name="Email"  class="border border-gray-500 py-2 px-3 text-lg font-light w-[100%]"></input>` }} />
									</div>
									<div className="basics w-[100%] mb-5">
										<label htmlFor="Phone" className="block mb-2">Phone</label>
										<input type="text" id="Phone" name="Phone" className="border border-gray-500 py-2 px-3 text-lg font-light w-[100%]"></input>
									</div>
									<div className="basics w-[100%] mb-5">
										<label htmlFor="Description" className="block mb-2">Description</label>
										<textarea id="Description" name="Description" className="border border-gray-500 py-2 px-3 text-lg font-light w-[100%]"></textarea>
									</div>
								</div>

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
				</section>
			</Modal>
		</>

	)
}
