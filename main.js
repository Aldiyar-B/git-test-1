/* function abbrevName(name) {
	let arr = name.split(" ")
	// code away

	//console.log(arr[0].slice(0, 1) + '.' + arr[1].slice(0, 1))
	console.log(arr[0].toUpperCase().slice(0, 1) + '.' + arr[1].toUpperCase().slice(0, 1))
}




abbrevName("David mendieta")
abbrevName("Sam Harris")
abbrevName("OGWXX cDiZTeMOHc")
abbrevName("patrick feeney")
abbrevName("Sam Harris") */

function XO(str) {
	let stroka = str.split('')
	let countX = 0;
	let countO = 0;
	let nothing = 0;
	for (let part of stroka) {

		if ((part == "x") || (part == "X")) {
			countX += 1;
		} else if ((part == "o") || (part == "O")) {
			countO += 1;
		} else {
			nothing += 1;
		}
	}

	if (countX == countO) {
		return (true)
	} else {
		return (false)
	}
}


console.log(XO('oox'))
console.log(XO('gdfkgdfgdfgjk'))
console.log(XO('ooom'))
console.log(XO('oxx'))
console.log(XO('oofdfxx'))
console.log(XO('oOoxX'))









