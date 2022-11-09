function countSmileys(arr) {
	let count = 0;
	for (let face of arr) {
		if ((face[0] == ';' || face[0] == ':') && ((face[1] == 'D' || face[1] == ")") || (face[2] == 'D' || face[2] == ')'))) {
			count = count + 1;
		}
	}
	console.log(count)

}

countSmileys([':D', ':~)', ';~D', ':-)', ';]'])