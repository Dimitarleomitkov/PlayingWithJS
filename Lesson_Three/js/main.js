//window.onload = {<code>};

$(document).ready(function() {

	//$(SELECTOR).doSomething();

	// setTimeout -> delay execution
	// setInterval -> execute over time

	// p -> get me all paragraphs
	// #musaka -> get me all elements with an id = "musaka"
	// .musaka -> get me all elements with a class = "musaka"

	/* Section 1 */
	const paragraph_1_1 = $('#div-1 p#first');

	// paragraph_1.hide(1000);
	// paragraph_1.fadeOut(1000);
	paragraph_1_1.on ('click', function () {
		const $this = $(this);
		// TODO:
		// if ($(this).visibilityState() == "visible") {
		// 	$(this).fadeOut(400);
		// } else {
		// 	$(this).fadeIn(400);
		// }
		$this.fadeOut (400);
		setTimeout(function(){
			$this.fadeIn(400);
		}, 600);
	});

    /* END Section 1 */

	/* Section 2 */
	$('#div-2 #swap').click(function () {
		const paragraph_2_1 = $('#div-2 p#one');
		const paragraph_2_2 = $('#div-2 p#two');
		
		const value_text_one = paragraph_2_1.text();
		const value_text_two = paragraph_2_2.text();

		paragraph_2_1.text(value_text_two);
		paragraph_2_2.text(value_text_one);
	});

	/* END Section 2 */

	/* Section 3 */
	const input_1 = $('#div-3 #num-one');
	const input_2 = $('#div-3 #num-two');
	$('#div-3 #sum').click (function () {
		const input_value_1 = Number(input_1.val());
		const input_value_2 = Number(input_2.val());

		$('#div-3 #result').text('Result: ' + (input_value_1 + input_value_2));
		setTimeout(function(){
			input_1.val("");
			input_2.val("");
		}, 1000);
	});
	/* END Section 3 */

	/* Section 4 */
	$('#div-4 #fix').click (function () {
		const paragraphs = $('#div-4 p');

		paragraphs.each(function (){
			const $this = $(this);
			const color = $this.attr('class');
			$this.css('color', color);
			if (color == "yellow") {
				$this.css('background-color', 'black');
			}
			// $this.css({
			// 	'color': color,
			// 	'background-color': 'black'
			// });
		});
	});
	/* END Section 4 */

	/* Section 5 */
	$('#div-5 #before').click(function(){
		const html = '<p>I am before.</p>';
		$('#div-5 #alfa').before(html);
	});

	$('#div-5 #after').click(function(){
		const html = '<p>I am after.</p>';
		$('#div-5 #alfa').after(html);
	});
	/* END Section 5 */

	/* Section 6 */
	$('#div-6 #del').click(function(){
		const paragraphs = $('#div-6 p');
		const len = paragraphs.length;
		const random = Math.floor(Math.random() * len);

		if (len > 0) {
			paragraphs
				.eq(random)
				.remove();
		} else {
			alert ('No more victims to eradicate!');
		}
	});
	/* END Section 6 */

	/* Section 7 */
	$('#div-7 #catch').click(function(){
		$('#div-7')
			.find('#crime')
			.css('font-size', '34px');
	});
	/* END Section 7 */

	/* Section 8 */
	$('#div-8 #swap-direction').click(function(){
		
	});
	/* END Section 8 */
});