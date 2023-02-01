class User {
	constructor(first, last) {
		this.first = first;
		this.last = last;

	}

	set first(value) {
		this.firstName = value.toUpperCase();
	}
	set last(value) {
		this.lastName = value.toUpperCase();
	}
	get fullName() {
		return this.firstName + " " + this.lastName;
	}
};



let user1 = new User('Vlad', 'Kapustin')
let user2 = new User('Ivan', 'Semenov')

console.log(user1.fullName)
console.log(user2.fullName)