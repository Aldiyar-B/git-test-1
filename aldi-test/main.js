
// 
/* 
function camelize(str) {
	return str
		.split('-')
		.map(
			(word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
		)
		.join('')
}
console.log(camelize("my-short-string")) */

/* function filterRange(arr, a, b) {
	return arr.filter(item => (a <= item && item <= b));


}


let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)

console.log(arr); // 5,3,8,1 (без изменений) f*/





/* function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		let val = arr[i];
		if (val < a || val > b) {
			arr.splice(i, 1);
			i--;
		}


	}

}


let arr = [5, 415, 5, 1, 2, 4, 2, 3, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1] */

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);


console.log(arr); // 8, 5, 2, 1, -10