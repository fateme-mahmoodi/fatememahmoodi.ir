function calculateSettingAsThemeString({
	localStorageTheme,
	systemSettingDark,
}) {
	if (localStorageTheme !== null) {
		return localStorageTheme;
	}

	if (systemSettingDark.matches) {
		return "dark";
	}

	return "light";
}

function updateButton({ buttonEl, isDark }) {
	const newCta = isDark ? "تغییر به حالت روشن" : "تغییر به حالت تاریک";

	buttonEl.setAttribute("title", newCta);
	buttonEl.setAttribute("name", isDark ? "moon" : "sunny");
}

function updateThemeOnHtmlEl({ theme }) {
	document.querySelector("html").setAttribute("data-theme", theme);
	document.documentElement.classList.add("theme-in-transition");
	document.documentElement.setAttribute("data-theme", theme);
	window.setTimeout(function () {
		document.documentElement.classList.remove("theme-in-transition");
	}, 300);
}

const themeSwitch = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({
	localStorageTheme,
	systemSettingDark,
});

updateButton({
	buttonEl: themeSwitch,
	isDark: currentThemeSetting === "dark",
});

updateThemeOnHtmlEl({ theme: currentThemeSetting });

themeSwitch.addEventListener("click", (event) => {
	const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

	localStorage.setItem("theme", newTheme);
	updateButton({ buttonEl: themeSwitch, isDark: newTheme === "dark" });
	updateThemeOnHtmlEl({ theme: newTheme });

	currentThemeSetting = newTheme;
});
