function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

class PersianDate extends Date {
	constructor(...args) {
		super(...args);
	}

	toLocaleDateString = () => super.toLocaleDateString("fa-IR-u-nu-latn");
	getParts = () => this.toLocaleDateString().split("/");
	getDay = () => (super.getDay() === 6 ? 0 : super.getDay() + 1);
	getDate = () => this.getParts()[2];
	getMonth = () => this.getParts()[1] - 1;
	getYear = () => this.getParts()[0];
	getMonthName = () => this.toLocaleDateString("fa-IR", { month: "long" });
	getDayName = () => this.toLocaleDateString("fa-IR", { weekday: "long" });
}

const yearEl = document.querySelector(`.year`);
const currentYear = new PersianDate().getYear();
yearEl.textContent = currentYear;

const headerEl = document.querySelector(`.header`);
const btnNavEl = document.querySelector(`.btn-mobile-nav`);

btnNavEl.addEventListener(`click`, () => {
	headerEl.classList.toggle(`nav-open`);
	document.querySelector(`.section-hero`).classList.toggle("nav-open");
});

const sectionHeroEl = document.querySelector(`.section-hero`);

const obs = new IntersectionObserver(
	(entries) => {
		const ent = entries[0];
		if (!ent.isIntersecting) {
			document.body.classList.add(`sticky`);
		}
		if (ent.isIntersecting) {
			document.body.classList.remove(`sticky`);
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: `-80px`,
	}
);
obs.observe(sectionHeroEl);

document.querySelector("body").addEventListener("contextmenu", (e) => {
	e.preventDefault();
});

window.onload = () => {
	document.querySelector(".preloader").style.display = "none";
	document.querySelector("header").style.display = "flex";
};