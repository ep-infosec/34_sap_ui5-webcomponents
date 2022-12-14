const whenDOMReady = () => {
	return new Promise<void>(resolve => {
		if (document.body) {
			resolve();
		} else {
			document.addEventListener("DOMContentLoaded", () => {
				resolve();
			});
		}
	});
};

export default whenDOMReady;
