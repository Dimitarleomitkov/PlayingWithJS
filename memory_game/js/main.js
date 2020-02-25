const $document = $(document);

function image_click (array_fields, field) {
	let id = array_fields[Number(field.id) - 1];
	let current_field = $(field);

	// Load image
	current_field.append(`<img src='images/pairs/${id}.jpg' id='${id}' class='picture' />`);
	// Remove the back
	current_field.find(".back").remove();

	// Return the image id
	return array_fields[Number(field.id) - 1];
}

function unload_image (field) {
	let id = field.id;
	let current_field = $(field);

	// Load the back
	current_field.append(`<img src='images/back/${id}.jpeg' id='${id}' class='back' />`);
	// Remove the image
	current_field.find(".picture").remove();

	// Return empty
	return 0;
}

function reset () {
	// Reload the page
	location.reload();
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
	let first_field = 0;
	let second_field = 0;
	let can_click_flag = true;

	$(".box").click(function () {
		// Block insane people with their clicks everywhere
		if (!can_click_flag) {
			return;
		}
		can_click_flag = false;

		if (first_field == 0) {
			// Populate the first field
			first_field = this;
			// Show the picture
			first_image = image_click(array_fields, first_field);
			can_click_flag = true;
		} else {
			// Populate the second field
			second_field = this;
		}

		// Is the same field clicked again?
		if (second_field == first_field) {
			// Reset the field
			first_image = unload_image(first_field);
			first_field = 0;
			second_field = 0;
			can_click_flag = true;
		} else if (second_field != 0){
			// Show the picture
			second_image = image_click(array_fields, second_field);
			if (second_image == first_image) {
				// Matching pictures stay visible and they cannot be clicked anymore
				$(first_field).off("click");
				$(second_field).off("click");
				// Reset the parameters so the player can continue
				first_field = 0;
				first_image = 0;
				second_field = 0;
				second_image = 0;
				can_click_flag = true;
			} else {
				// The pictures do not match. Reset the fields after one second
				setTimeout(function() {
					second_image = unload_image(second_field);
					first_image = unload_image(first_field);
					first_field = 0;
					second_field = 0;
					can_click_flag = true;
				}, 1000);
			}
		}
	});

	// Reset button
	$("#reset-game").click(function() {
		reset();
	});
}

$document.ready(main);