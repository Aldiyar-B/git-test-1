class Person {

	/* birthday() {
		console.log(this.name, 'отпраздновал', this.age);
	}

	eat() {
		console.log(this.age, 'идет поесть')
	}

	sleep() {
		console.log(this.name, 'идет Поспать')
	} */
	constructor(name, age, sex) {
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	welcome() {
		console.log('Hello', this.name)
		console.log('your age is', this.age)
		console.log('Your sex is', this.sex)
	}
}

class Student extends Person {
	constructor(name, age, sex, gpa) {
		super(name, age, sex);
		this.gpa = gpa;
	}
	hello() {
		super.welcome();
		console.log('Your gpa is ', this.gpa)
	}
}

class Teacher extends Person {
	constructor(name, age, sex, classSize) {
		super(name, age, sex);
		this.classSize = classSize;
	}
	hello() {
		super.welcome();
		console.log('Your class size if', this.classSize)
	}
}

let person = new Person('Aldi', 19, 'man');

let person2 = new Person('Erke', 17, 'woman');


let student = new Student('Moka', 18, 'man', 5.0);

let teacher = new Teacher('Marya Ivanovna', 45, 'woman', 23)


student.hello()
console.log('    ')
teacher.hello()
