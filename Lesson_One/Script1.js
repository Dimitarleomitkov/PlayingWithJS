// alert('Hello World!');
/*alert('Helo World!');;*/
console.log ('Hello from the other side...');

let a = 10;
let b = 14;

console.log ("a, b:", a, b);

b = 7;

console.log ("a, b:", a, b);

const number = 1;
const string = "musaka";
const bool = true;

console.log (number + " => " + typeof number);
console.log (string + " => " + typeof string);
console.log (bool + " => " + typeof bool);

a = 45;
b = 6;

console.log (a + " + " + b + " = " + (a + b));
console.log (a + " - " + b + " = " + (a - b));
console.log (a + " * " + b + " = " + (a * b));
console.log (a + " / " + b + " = " + (a / b));
console.log (a + " % " + b + " = " + (a % b));

console.log(Math.PI);
console.log(Math.abs (-34));
console.log(Math.ceil (4.6));
console.log(Math.floor (4.6));
console.log(Math.round (4.6));
console.log(Math.pow (2, 10));
console.log(Math.sqrt (25));
console.log(Math.min (5, 10, -7, 1000));
console.log(Math.max (5, 10, -7, 1000));
console.log(Math.random());
console.log(Math.floor (Math.random() * 10));

const array = [5, "lasagna", true, [1, 2, 3]];
const colours = {
	red: '#FF0000',
	green: '00FF00',
	blue: '00FF00',
	pinkish: '#FAC'
};

console.log (array);
console.log (colours);

console.log (array[0]);
console.log (array[1]);
console.log (array[array.length - 1]);

array.push(1);
array.pop();
array.unshift(7);
array.shift();

console.log (colours.red);
console.log (colours['pinkish']);

// if (a === b) {}
// if (a == b) {}
// if (a > b) {}
// if (a < b) {}
// if (a >= b) {}
// if (a <= b) {}
// if (a != b) {}
// if (a !== b) {}
// if (a_bool && b_bool) {}
// if (a_bool || b_bool) {}
// if (!b_bool) {}

let number2 = 9;

if (number2 % 2 === 0) {
	console.log ("Even");
}
else {
	console.log ("Odd");
}

let k = 0;

while (k < 11) {
	console.log (k);
	++k;
}

k = 0;

do {
	console.log (k);
	++k;
} while (k < 11)

for (k = 0; k < 11; ++k) {
	console.log (k);
}

// Drawing in class
let rows = 99;
let columns = 100;
let spaces = columns;
let str = '';

let start = performance.now();

console.log (start);

for (var i = rows - 1; i >= 0; i--) {
	for (var j = columns - 1; j >= 0; j--) {
		str += "/";
	}

	for (var j = 0; j < spaces - columns; ++j) {
		str += "  ";
	}

	for (var j = columns - 1; j >= 0; j--) {
		str += "/";
	}
	str += "\n";
	--columns;
}

for (var i = 0; i < rows; ++i) {
	for (var j = 0; j < columns; ++j) {
		str += "/";
	}

	for (var j = 0; j < spaces - columns; ++j) {
		str += "  ";
	}

	for (var j = 0; j < columns; ++j) {
		str += "/";
	}
	str += "\n";
	++columns;
}
for (var i = 0; i < columns; ++i) {
		str += "//";
}
console.log (str);

console.log (performance.now() - start);

// Rock, Paper, Scissors
let exit_flag = true;
let random_play = 0;
let AI_play = "";
let my_play = "";
let my_score = 0;
let AI_score = 0;

console.log ("Let's play Rock Paper Scissors! ☺");
while (exit_flag) {
	console.log ("Score: You -> " + my_score + " | " + AI_score + " <- AI");
	my_play = prompt ("What do you play?:");
	my_play = my_play.toUpperCase();

	random_play = Math.floor (Math.random () * 3);

	switch (random_play) {
		case 0:
			AI_play = "ROCK";
			break;
		case 1:
			AI_play = "PAPER";
			break;
		case 2:
			AI_play = "SCISSORS";
			break;
		default:
			AI_play = "ERROR!";
			break;
	}

	switch (my_play) {
		case "Q":
			exit_flag = false;
			break;
		case "ROCK":
			switch (AI_play) {
				case "ROCK":
					console.log ("You -> " + my_play + " | " + AI_play + " <- AI = DRAW!");
					break;
				case "PAPER":
					console.log ("You -> " + my_play + " | " + AI_play + " <- AI = AI WINS!");
					++AI_score;
					break;
				case "SCISSORS":
					console.log ("You -> " + my_play + " | " + AI_play + " <- AI = You WIN!");
					++my_score;
					break;
				default:
					console.log ("SOMETHING WENT WRONG!");
			}
			break;
		case "PAPER":
			switch (AI_play) {
				case "ROCK":
					console.log ("You -> " + my_play + " | " + AI_play + " <- AI = You WIN!");
					++my_score;
					break;
				case "PAPER":
					console.log ("You -> " + my_play + " | " + AI_play + " <- AI = DRAW!");
					break;
				case "SCISSORS":
					console.log ("You -> " + my_play + " | " + AI_play + " <- AI = AI WINS!");
					++AI_score;
					break;
				default:
					console.log ("SOMETHING WENT WRONG!");
			}
			break;
		case "SCISSORS":
			switch (AI_play) {
				case "ROCK":
					console.log ("You -> " + my_play + " | " + AI_play + " <- AI = AI WINS!");
					++AI_score;
					break;
				case "PAPER":
					console.log ("You -> " + my_play + " | " + AI_play + " <- AI = You WIN!");
					++my_score;
					break;
				case "SCISSORS":
					console.log ("You -> " + my_play + " | " + AI_play + " <- AI = DRAW!");
					break;
				default:
					console.log ("SOMETHING WENT WRONG!");
			}
			break;
		default:
			console.log ("Invalid play. Type 'rock'/'paper'/'scissors' or 'q' to quit.");
			break;
	}
}

if (my_score > AI_score) {
	console.log ("You -> " + my_score + " | " + AI_score + " <- AI");
	console.log ("YOU WON!")
} else if (my_score == AI_score) {
	console.log ("You -> " + my_score + " | " + AI_score + " <- AI");
	console.log ("IT IS A DRAW!");
} else {
	console.log ("You -> " + my_score + " | " + AI_score + " <- AI");
	console.log ("YOU LOST!");
}

// Age program
let age = 0;

do {
	age = prompt("Enter your age:");
} while (!(!isNaN (age) && age > 0 && age < 130))
console.log ("Your age is " + age);

// Area of a circle
console.log ("Enter a radius and I will calculate the area ☺");

let radius = 0;

radius = prompt ("Enter a radius and I will calculate the area. Look at the console for the result.");

console.log ("The area of the circle is: " + (Math.PI * radius * radius));