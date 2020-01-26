// Declaring functions:
function sum1 (a, b/*:number = 0*/)
{
	return a + b;
}

const sum2 = function (a, b)
{
	return a + b;
}

// Lambda function
const sum3 = (a, b) =>
{
	return a + b;
};
// Short notations for lambda functions
// If only return:
const sum4 = (a, b) => a + b;

// Code:
const c = sum1 (3, 5);
// console.log (c);

// Lambda function for power
const pow2 = number => number ** 2;

// console.log (pow2 (25));

const sort = array_param =>
{
	array_param.sort();
}

const array_var = [23, 1, 4, -6, 0];
sort(array_var);
// console.log (array_var);

/* array_1 = array_2 is literally the same array.
 They point to the same memory. Same object.*/

let x = 5;
if (true) {
	let x = 5;
	// console.log (x);
	x = 10;
}

// console.log (x);


for (let i = 0; i < 10; ++i) {
	// console.log (i);
}
// console.log (i);

let j;
for (j = 0; j < 10; ++j) {
	// console.log (j);
}
// console.log (j);

const person = {
	fName: 'John',
	lName: 'Doe',
	age: 34,
	call: function () {
		// ` gives the ability to write on multiple lines and insert variables in the string.
		// console.log (`Hi my name is ${this.fName} ${this.lName}. I am ${this.age} years old.`);
	}
};

person.call();

const fibonacci = (n, arr = [1, 1], i = 2) => {
	if (n < 1) {
		return;
	}

	switch (n) {
		case 1:
			return [1];
			break;	
		case 2:
			return [1, 1]
			break;
		default:
			break;
	}

	arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	++i;

	if (i === n) {
		return arr;
	}

	return fibonacci (n, arr, i);
};

const result = fibonacci (10);
// console.log (result);
	

// Food for thought V
/*function fibonachi (count)
{
	if (n < 1) {
		return;
	}

	let n1 = 0;
	let n2 = 1;
	let next_n = n1 + n2;
	--count;
	if (count > 0) {
		return fibonachi (count);
	} else {
		return next_n;
	}
}*/

// Exercises

// Exercise 7
console.log ("Exercise 7:");
let print_str = "";
for (let i = 1; i <= 100; ++i) {
	if (i % 3 == 0 && i % 5 == 0) {
		print_str += "FizzBuzz, ";
	} else if (i % 3 == 0) {
		print_str += "Fizz, ";
	} else if (i % 5 == 0) {
		print_str += "Buzz, ";
	} else {
		print_str += i.toString() + ", ";
	}
}
console.log (print_str);
// Exercise 8
console.log ("Exercise 8:");
let number;
do {
	number = prompt("Enter a positive integer number for Fibonacci:");
} while (!(!isNaN (number) && number > 0))

let number1 = 1;
let number2 = 1;
let new_number_fb = 1;
let i = 3;

function fibonachi (n, i)
{
	number1 = number2;
	number2 = new_number_fb;
	new_number_fb = number1 + number2;
	if (i < n) {
		return fibonachi (n, i + 1)
	} else {
		return new_number_fb;
	}
}

console.log ("The fibonacci number at " + number + " is " + fibonachi (number, i));

// Exercise 1
console.log ("Exercise 1:");
let fact = 1;
function factorial (n)
{
	if (n > 1) {
		fact *= n;
	} else {
		return fact;
	}

	return factorial (n - 1);
}

do {
	number = prompt("Enter a positive integer number for a factorial:");
} while (!(!isNaN (number) && number > 0))

console.log ("The factorial of " + number + " is " + factorial(number));

// Exercise 2
console.log ("Exercise 2:");
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let key = [];
let value = [];
let arr2 = {key, value};


arr2.key.push(arr1[0]);
arr2.value.push(0);
for (let i = 0; i < arr1.length; ++i) {
	let new_symbol = false;
	let j = 0;
	for ( j; j < arr2.key.length; ++j) {
		if (arr1[i] == arr2.key[j]) {
			new_symbol = false;
			break;
		} else {
			new_symbol = true;
		}
	}
	if (new_symbol) {
		arr2.key.push(arr1[i]);
		arr2.value.push(1);
	} else {
		++arr2.value[j];
	}
}
console.log (arr1);
console.log (arr2.key);
console.log (arr2.value);
console.log (arr2.value.sort()[arr2.value.length - 1]);

// Exercise 3
console.log ("Exercise 3:");

do {
	number = prompt("Enter a positive integer number for an Armstrong number:");
} while (!(!isNaN (number) && number > 0))

let answer = 0;
let new_number = number;
do {
	answer += Math.pow ((new_number % 10), 3);
	new_number = Math.floor (new_number / 10);
} while (new_number != 0);

console.log ("The Armstrong number of " + number + " is " + answer);

// Exercise 4
console.log ("Exercise 4:");
let length;
do {
	length = prompt("Enter a positive integer number for a triangle:");
} while (!(!isNaN (length) && length > 0))

print_str = "";
for (let i = 1; i <= length; ++i) {
	for (let j = 1; j <= i; ++j) {
		print_str += "*";
	}
	print_str += "\n";
}
console.log (print_str);	