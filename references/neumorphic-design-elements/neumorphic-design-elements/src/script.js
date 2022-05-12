// https://jackdomleo.dev

function sliderAdjust() {
	const setValue = () => {
		const val = slider.value;
		const min = slider.min ? slider.min : 0;
		const max = slider.max ? slider.max : 100;
		const newValue = Number(((val - min) * 100) / (max - min));
		slider.style.background =
			"linear-gradient(to right, " +
			primaryColour +
			" " +
			newValue +
			"%, " +
			backgroundColour +
			" " +
			newValue +
			"%)";
		tooltip.innerHTML = val;
		tooltip.style.left = `calc(${newValue}% + (${10 - newValue * 0.2}px))`;
	};
	const slider = document.querySelector("#sliderExample input");
	const tooltip = document.querySelector("#sliderExample .tooltip__text");
	const primaryColour = getComputedStyle(
		document.documentElement
	).getPropertyValue("--primary");
	const backgroundColour = getComputedStyle(
		document.documentElement
	).getPropertyValue("--background");

	slider.addEventListener("input", () => {
		setValue(slider, tooltip);
	});
	setValue(slider, tooltip);
}

window.onload = sliderAdjust();

function setClock() {
	const today = new Date();
	const hour = today.getHours();
	const minute = today.getMinutes();
	const second = today.getSeconds();

	document.querySelector(".clock-alt__hours").innerHTML =
		hour.toString().length === 1 ? "0" + hour : hour;
	document.querySelector(".clock-alt__minutes").innerHTML =
		minute.toString().length === 1 ? "0" + minute : minute;
	document.querySelector(".clock-alt__seconds").innerHTML =
		second.toString().length === 1 ? "0" + second : second;

	// Set rotation angles angles
	const hourRotation = (hour % 12) * (360 / 12) + minute * (360 / 12 / 60); // 360deg ÷ 12hours
	const minuteRotation = minute * (360 / 60); // 360deg ÷ 60minutes
	const secondRotation = second * (360 / 60); // 360deg ÷ 60seconds
	document.querySelector(
		".clock__hand.clock__hand--hours"
	).style.transform = `rotate(${hourRotation}deg)`;
	document.querySelector(
		".clock__hand.clock__hand--minutes"
	).style.transform = `rotate(${minuteRotation}deg)`;
	document.querySelector(
		".clock__hand.clock__hand--seconds"
	).style.transform = `rotate(${secondRotation}deg)`;

	setTimeout(setClock, 1000);
}

window.onload = setClock();
