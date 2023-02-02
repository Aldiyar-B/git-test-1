/* function sayHi() {
	console.log(this.name)
}


let user = {
	name: 'Hola'
}
let user2 = {
	name: 'Figo'
}

sayHi.call(user)
sayHi.call(user2) */


// ---------------

function sayHi(age, sex) {
	console.log(`Hi ${this.name}, your age is ${age} and you is  ${sex}`)
}

let userInfo = {
	name: 'John'
}

sayHi.call(userInfo, 14, 'male')