const LoadingScreen = () => {
	return (
		<div className="loading-screen">
			{/* <div className="loading-ball">
				<div className="ball one"></div>
				<div className="ball two"></div>
				<div className="ball three"></div>
			</div> */}
			<svg id="madeloading" x="0px" y="0px" viewBox="0 0 350.9 120.8">
				<path d="M46.2,87.2L29.7,39.1h-0.2v48.1H9.3v-76h29.9l15.3,45.4h0.2l15.3-45.4h29.3v76H77.9V39.1h-0.2L61.3,87.2H46.2z" />
				<path d="M163.7,73h-30.4L128,87.2h-21.8l30-76.1h25.3l30.2,76.1h-22.8L163.7,73z M139.6,56.1h17.9l-8.6-23.8h-0.3L139.6,56.1z" />
				<path d="M271.1,49c0,22.9-15.2,38.1-39.6,38.1h-33.1V11.1h33.1C255.8,11.1,271.1,26.2,271.1,49z M220.2,28.2v42h11.2
	c11,0,16.8-6.6,16.8-21.1c0-14.4-5.9-20.9-16.8-20.9H220.2z"/>
				<path d="M280.5,87.2V11.1h60.2v17h-38.3v12.3h33.6v17h-33.6v12.7h39.3v17H280.5z" />
				<rect x="9.3" y="95.4" width="332.5" height="17" />
			</svg>

		</div>
	);
};

export default LoadingScreen;