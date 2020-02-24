const $document = $(document);

function image_click () {
	console.log ("asd");
	return 0;
}

function initialize_field () {
	let random = 0;
	// Arrays to keep track of all the hidden images
	let array_first_image = [0, 0, 0, 0, 0, 0, 0, 0];
	let array_second_image = [0, 0, 0, 0, 0, 0, 0, 0];
	let exists = false;
	let image_index = 0;
	
	// Run until we populate 8 fields with our images
	while (image_index < 8) {
		// generate a random number for the place on the board
		random = Number(Math.floor(Math.random() * 16 + 1));

		// Check whether the field already has an image
		for (let j = 0; j < array_first_image.length; ++j) {
			if (array_first_image[j] == random) {
				exists = true;
				continue;
			}
		}

		// If the field does not have an image in it populate the array
		if (!exists) {
			array_first_image[image_index] = random;
			++image_index;
		}
		exists = false;
	}

	image_index = 0;
	// Run until we populate 8 fields with our images
	while (image_index < 8) {
		// generate a random number for the place on the board
		random = Number(Math.floor(Math.random() * 16 + 1));

		// Check whether the field already has an image
		for (let j = 0; j < array_first_image.length; ++j) {
			if (array_first_image[j] == random) {
				exists = true;
				continue;
			}
		}

		// Check whether the field already has an image
		for (let j = 0; j < array_second_image.length; ++j) {
			if (array_second_image[j] == random) {
				exists = true;
				continue;
			}
		}

		// If the field does not have an image in it populate the array
		if (!exists) {
			array_second_image[image_index] = random;
			++image_index;
		}
		exists = false;
	}

	console.log (array_first_image);
	console.log (array_second_image);

	// Load the images on the field
	for (let i = 0 ; i < 8; ++i) {
		const sub_field = $("#" + array_first_image[i]);
		sub_field.append(`<img alt="${array_first_image[i]}`)
	}

	//
		// const sub_field = $('#' + i);
		// console.log (i + " " + random);
		// sub_field.append(`<img alt="${random}" src="images/pairs/${random}.jpg" id="${random}" class="${random.charAt(0)}">`);
		// const sub_field_img = sub_field.find('#' + id);
		// sub_field_img.addClass('hidden NSolved');
}

function main () {
	initialize_field();
	$('.image').click(image_click);
}

$document.ready(main);