const css = {
	left_0: {left: "0%"},
	left_100: {left: "100%"},
	left__100: {left: "-100%"}
};

const time = 5000;
let animate = false;
let interval;

const move_left = (slides) => {
	animate = true;
	const active_element = slides.filter(".active");
	const length = slides.length;
	const active_id = Number(active_element.attr("id").split("_")[1]);
	
	let next_id;

	if (active_id + 1 < length) {
		next_id = active_id + 1;
	} else {
		next_id = 0;
	}

	const next_element = slides.filter ("#slide_" + next_id);
	
	active_element.css(css.left_0);
	next_element.css(css.left_100);

	next_element.animate(css.left_0, time / 2);
	active_element.animate(css.left__100, time / 2, function () {
		slides.removeClass("active");
		next_element.addClass("active");
		animate = false;
	});
};

const move_right = (slides) => {
	animate = true;
	const active_element = slides.filter(".active");
	const length = slides.length;
	const active_id = Number(active_element.attr("id").split("_")[1]);
	
	let next_id;

	if (active_id - 1 >= 0) {
		next_id = active_id - 1;
	} else {
		next_id = length - 1;
	}

	const next_element = slides.filter ("#slide_" + next_id);
	
	next_element.css(css.left__100);
	active_element.css(css.left_0);

	next_element.animate(css.left_0, time / 2);
	active_element.animate(css.left_100, time / 2, function () {
		slides.removeClass("active");
		next_element.addClass("active");
		animate = false;
	});
};

const init = () => {
	const slides = $(".container--slides--slide");
	interval = setInterval (move_left, 3000, slides);
	$(document).on("keyup", function (e) {
		if (!animate) {
			if (Number(e.keyCode) == 37) {
				clearInterval(interval);
				move_right(slides);
				interval = setInterval (move_left, 3000, slides);
			} else if (Number(e.keyCode) == 39) {
				clearInterval(interval);
				move_left(slides);
				interval = setInterval (move_left, 3000, slides);
			}
		}
	});
};

window.onload = init();