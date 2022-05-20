$('#parallax').parallax({
	invertX: true,
	invertY: true,
	scalarX: 10,
	 frictionY: .1
});


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Neumorphic Design --> Start 

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
