/**
 * Determines if the element is within the viewport.
 * @param el {HTMLElement}
 */
const isElementInView = (el: HTMLElement) => {
	const rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 && rect.left >= 0
			&& rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
			&& rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

export default isElementInView;
