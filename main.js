const person = {
	nationality: 'Kazakh',
	citizen: "Russia",
	height: 173,
	weight: 60,
	name: 'Aldiyar',
	hobby: 'Football',
	friends: {
		best: "Mirlan",
		brother: "Alisher",
		highBro: "Temirlan",

	}
}

console.log(`his name is ${person.name} and he has some friends: ${person.friends?.best},${person.friends?.brother},${person.friends?.highBro}.`)