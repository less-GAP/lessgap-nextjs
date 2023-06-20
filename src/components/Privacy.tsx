import { Modal } from 'antd';
import router from 'next/router';
import { useEffect, useState } from "react";

const Privacy = () => {

	const [isPrivacyOpen, setIsModalOpen] = useState('');
	// setModalOff
	const setModalOff = (e: string) => {
		setIsModalOpen('')
		if (localStorage.getItem('isPrivacyOpen') !== 'true') {
			localStorage.setItem('isPrivacyOpen', 'true')
		}
		if (e !== '') {
			router.push('/privacy')
		}
	}

	useEffect(() => {
		if (localStorage.getItem('isPrivacyOpen') !== 'true') {
			setTimeout(() => {
				setIsModalOpen('autosubscribe')
			}, 1)
		}
	}, [])

	return (
		<div className="privacy">


			<Modal title={false} wrapClassName="modal-fullscreen flex items-end" open={isPrivacyOpen === 'autosubscribe'} onCancel={() => setModalOff('')} footer={null} centered keyboard={false} width={`100%`} maskClosable={false}>
				<section>
					<div className="container mx-auto max-w-[550px] md:max-w-[650px] lg:max-w-[1000px]">
						<h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-none">Our website uses cookies</h2>
						<hr className="my-5" />
						<div id="crmWebToEntityForm" className="crmWebToEntityForm">
							<div className="mb-4"><div className="font-bold text-xl underline leading-none hover:text-black cursor-pointer" onClick={() => setModalOff('privacy')}>Learn more about how we use cookies and who sets cookies on our website</div></div>
							<div className="chechForm">
								<ul className="mt-2">
									<li>Necessary cookies help with the basic functionality of our website, e.g. remember if you gave consent to cookies.</li>
								</ul>
								<ul className="mt-2">
									<li>Analytical cookies make it possible to gather statistics about the use and traffic on our website, so we can make it better.</li>
								</ul>
								<ul className="mt-2">
									<li>Marketing cookies make it possible to show you more relevant social media content and advertisements on our website and other platforms.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</Modal>


		</div>
	);
};

export default Privacy;