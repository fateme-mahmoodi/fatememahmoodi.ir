const smoothScroll = (element) =>
	element.scrollIntoView({ behavior: "smooth" });

const scrollToTop = () => window.scrollTo({ top: 0, behavior: `smooth` });

const allLinks = document.querySelectorAll(`a:link`);
allLinks.forEach(function (link) {
	link.addEventListener(`click`, (e) => {
		e.preventDefault();
		const href = link.getAttribute(`href`);

		if (href === `#`) {
			scrollToTop();
		}

		if (href !== `#` && href.startsWith(`#`)) {
			const sectionEl = document.querySelector(href);
			smoothScroll(sectionEl);
		}
		if (link.classList.contains(`main-nav-link`)) {
			headerEl.classList.remove(`nav-open`);
		}
		if (href !== `#` && !href.includes(`#`)) {
			window.location = href;
		}
	});
});

const backToTopBtn = document.querySelector(".backToTop");

window.addEventListener("scroll", () => {
	if (
		document.body.scrollTop > 160 ||
		document.documentElement.scrollTop > 160
	) {
		backToTopBtn.style.opacity = 1;
	} else {
		backToTopBtn.style.opacity = 0;
	}
});

backToTopBtn.addEventListener("click", scrollToTop);
