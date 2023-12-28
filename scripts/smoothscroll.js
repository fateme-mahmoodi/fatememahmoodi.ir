const allLinks = document.querySelectorAll(`a:link`);
allLinks.forEach(function (link) {
	link.addEventListener(`click`, (e) => {
		e.preventDefault();
		const href = link.getAttribute(`href`);

		if (href === `#`) {
			window.scrollTo({
				top: 0,
				behavior: `smooth`,
			});
		}

		if (href !== `#` && href.startsWith(`#`)) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: `smooth` });
		}
		if (link.classList.contains(`main-nav-link`)) {
			headerEl.classList.remove(`nav-open`);
		}
		if (href !== `#` && !href.includes(`#`)) {
			window.location = href;
		}
	});
});
