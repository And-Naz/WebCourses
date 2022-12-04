class Address {
	constructor(country, city, street) {
		this.country = country;
		this.city = city;
		this.street = street;
	}
}

class Person {

	static population = 0;

	#id;

	get Id() {
		return this.#id;
	}

	// set Id(value) {
	// 	this.#id = value;
	// }

	constructor(id, name, age, country, city, street, money) {
		this.#id = id;
		this.name = name;
		this.age = age;
		this.address = new Address(country, city, street);
		this._money = money;


		Person.population++;
	}

	method() {
		let str = "";
		switch (this.address.country) {
			case "Armenia":
				str = "Barev dzez " + this.name + " koxmic!"
				break;
			case "USE":
				str = this.name + " sed hi!"
				break;
			case "Russia":
				str = "Privet vsem ot " + this.name
				break;
		
			default:
				break;
		}
		console.log(str)
	}
}

class Soldier extends Person {
	static zingrquyk = {};

	constructor(type, rang, id, name, age, country, city, street, money) {
		super(id, name, age, country, city, street, money)
		this.type = type;
		this.rang = rang;
	}

	has() {
		let str = "";
			switch (this.rang) {
				case "sergeant":
					str = "7"
					break;
				case "capitan":
					str = "40"
					break;
				default:
					break;
			}
			console.log(str)
	}

	action() {
		let str = "";
			switch (this.type) {
				case "tankist":
					str = "shot tank"
					break;
				case "pexot":
					str = "sniper shot"
					break;
				default:
					break;
			}
			console.log(str)
	}
}

const john = new Person(7, "John", 32, "USE", "Los Angeles", "b 12", 2000)
const tom = new Soldier("pexot", "capitan", 10, "Tom", 32, "USE", "Los Angeles", "b 12", 3000)
