import { Modal } from 'antd';
import { Turnstile } from '@marsidev/react-turnstile';

import { useState } from 'react';
import styles from './index.module.css';

export default function BlockTouchBar() {

	const [isModalOpen, setIsModalOpen] = useState('');

	async function contactSubmitFrm(event: any) {
		event.preventDefault()
		let error = false
		const formData = new FormData(event.target)

		if (formData.get("Email") === "") {
			alert("Please enter your email address.");
			error = true
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
			<section id="touchbar" className={`${styles.touchbar} bg-slate-100 p-5 md:py-10 items-center flex flex-col`}>
				<div className="container mx-auto max-w-[550px] md:max-w-[650px] xl:max-w-[1000px]">
					<div className="flex flex-col lg:flex-row justify-between lg:items-center w-full">
						<div className="flex flex-col w-full">
							<p className='text-lg font-light'>less[GAP]oratory continually draws and delivers new audiences to create a global network of connected best-in-class apparel decorators, manufacturers, graphic designers, and brand influencers.
							</p>
						</div>
						<div className="flex flex-col w-fit whitespace-nowrap pt-5 lg:pt-0 lg:pl-5">
							<button type='button' className="group tracking-widest font-extrabold inline-block w-fit items-center bg-black !border-0 py-3 px-10 md:py-4 md:px-15 text-white shadow-lg uppercase" onClick={() => isModalOpen ? setIsModalOpen('') : setIsModalOpen('subscribe')}>
								Subscribe now
							</button>
						</div>
					</div>
				</div>
			</section>
			<Modal title={false} open={isModalOpen === 'subscribe'} onCancel={() => setIsModalOpen('')} footer={null} centered keyboard={false} width={600} maskClosable={false}>
				<div className="container mx-auto max-w-[550px] md:max-w-[650px] lg:max-w-[1000px] px-3 pt-10">
					<div id="crmWebToEntityForm" className="crmWebToEntityForm">
						<form action="https://crm.zoho.com/crm/WebToLeadForm" name="WebToLeads5535012000000515001" method="POST" acceptCharset="UTF-8" onSubmit={contactSubmitFrm} id="frmWebToEntityForm">
							<input type="hidden" name="zc_gad" id="zc_gad" defaultValue=""></input>
							<input type="hidden" name="actionType" defaultValue="TGVhZHM="></input>
							<input type="hidden" name="xnQsjsdp" defaultValue=""></input>
							<input type="hidden" name="xmIwtLD" defaultValue=""></input>
							<input type="hidden" name="returnURL" defaultValue={`${process.env.NEXT_PUBLIC_CONTACT_URL}`}></input>

							<div className="flex flex-col lg:flex-row">
								<div className="basics w-[100%] mb-5">
									<label htmlFor="Email" className="block mb-2">Email</label>
									<div dangerouslySetInnerHTML={{ __html: `<input type="text" ftype="email" id="Email" name="Email"  class="border border-gray-500 p-3 text-lg font-light w-[100%]"></input>` }} />
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
								<button type="submit" id="formsubmit" className="formsubmit tracking-widest group font-extrabold inline-block w-fit items-center bg-black !border-0 py-3 px-10 md:py-4 md:px-15 text-white shadow-lg uppercase">Subscribe now</button>
							</div>
						</form>

					</div>
				</div>
			</Modal>
		</>
	)
}
