
function calc(from, a, b) {
	let operations = {
		add: '+',
		multy: '*',
		subtract: '-',
	}
	switch (from) {
		case operations.add:
			result = a + b;
			alert('result of + is ' + result);
		case operations.multy:
			result = a * b;
			alert('result of * is ' + result);
		case operations.subtract:
			result = a - b;
			alert('result of - is ' + result);

	}
}


let a = prompt("Введите значение a")
let b = prompt("Введите значение b")
let mathValue = prompt("Введите математическую операцию  :")

calc(mathValue, a, b);

