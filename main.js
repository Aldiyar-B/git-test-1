function getAverage(marks) {
	//TODO : calculate the downward rounded average of the marks array

	console.log(marks)
	let test = 0;
	for (value of marks) {
		test += value
	}
	console.log(Math.floor(test / marks.length))
}







getAverage([2, 2, 2, 2]);



