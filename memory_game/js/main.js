const $document = $(document);

function image_click (array_fields, field) {
	// Load image
	let id = array_fields[Number(field.id)];
	field.append(`<img src="images/back/10.jpeg" />`);
	// field.remove($("img"));

	return array_fields[Number(field.id) - 1];
}

function initialize_field () {
	let random = 0;
	// Array to keep track of all the hidden images
	let array_fields = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	let exists = 0;
	let field_index = 0;
	
	// Run until we populate all the fields with our images
	while (field_index < 16) {
		// generate a random number for the image ID
		random = Number(Math.floor(Math.random() * 8 + 1));

		// Check whether the image is already in the field array
		for (let j = 0; j < array_fields.length; ++j) {
			if (array_fields[j] == random) {
				++exists;
			}
		}

		// If the field does not have an image in it populate the array
		if (exists < 2) {
			array_fields[field_index] = random;
			++field_index;
		}
		exists = 0;
	}

	return array_fields;
}

function main () {
	let array_fields;

	array_fields = initialize_field();

	let first_image = 0;
	let second_image = 0;

	$('.image').click(function () {
		if (first_image != 0) {

		}

		if (first_image == 0) {
			first_image = image_click (array_fields, this);
		} else {
			second_image = image_click (array_fields, this);
			if (first_image != second_image) {
				// Delay 1 sec
				// Unload images
				first_image = 0;
				second_image = 0;
			}
		}

	});
}

$document.ready(main);