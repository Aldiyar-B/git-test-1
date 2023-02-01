/* const person = new Object({
	name: 'Mikhail',
	age: 18,
	hobby: 'sport',
	hi: function () {
		console.log('hiii!')
	}
})

Object.prototype.sayGoodBye = function () {
	console.log('Good bye!')
}

Object.prototype.sayGoodBye = function () {
	console.log('poka')
}

const Aldi = Object.create(person)

Aldi.name = 'Aldik';

const dog = 'I am a dog' */


//Значение this
/* const animal = {
	walk() {
		if (!this.isSleeping) {
			console.log('I walk')
		}
	},

	sleep() {
		this.isSleeping = true;
		console.log('I sleep')
	}
};

let rabbit = {
	name: "Bags Bonny",
	__proto__: animal,

}

let penguin = {
	name: 'Rico',
	__proto__: animal,

} */

// Цикл For..in


const animal = {
	walk() {
		if (!this.isSleeping) {
			console.log('I walk')
		}
	},

	sleep() {
		this.isSleeping = true;
		console.log('I sleep')
	}
};

let rabbit = {
	name: "Bags Bonny",
	__proto__: animal,

}

let penguin = {
	name: 'Rico',
	__proto__: animal,

}

console.log(Object.keys(penguin))

for (let key in penguin) {

	console.log(key);
}