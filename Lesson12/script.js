// const person0 = {
// 	id: 1,
// 	name: 'John',
// 	age: 23,
// 	address: { // new
// 		country: "Armenia" // new
// 	}
// }

// const person1 = {
// 	id: 1,
// 	name: 'Tom',
// 	age: 18,
// 	address: { // new
// 		city: "Yerevan" // new
// 	}
// }

// const person2 = {
// 	id: 1,
// 	name: 'Stan',
// 	age: 24
// 	// chka
// }

// console.log("old: ", [person0, person1, person2]);

// var objForProto = {
// 	method() {
// 		let str = "";
// 		switch (this.address.country) {
// 			case "Armenia":
// 				str = "Barev dzez " + this.name + " koxmic!"
// 				break;
// 			case "USE":
// 				str = this.name + " sed hi!"
// 				break;
// 			case "Russia":
// 				str = "Privet vsem ot " + this.name
// 				break;
		
// 			default:
// 				break;
// 		}
// 		console.log(str)
// 	}
// }

// function createPerson(id, name, age, country, city, street) {
// 	var person = {
// 		id,
// 		name,
// 		age,
// 		address: {
// 			country,
// 			city,
// 			street // new
// 		},
// 		// method() {
// 		// 	console.log(this.name + " sed hi!")
// 		// }
// 	}
// 	Object.setPrototypeOf(person, objForProto)
// 	return person;
// }

// const person3 = createPerson(3, "Valod", 24, "Armenia", "Yerevan", "15 kvartal")
// const person4 = createPerson(4, "Gegham", 22, "Russia", "MKAD", "f24")
// const person5 = createPerson(5, "Ashot", 30, "USE", "Los Angeles", "b 12")

// // person3.method = function () {
// // 	console.log("Barev dzez " + this.name + " koxmic!")
// // }

// // person4.method = function () {
// // 	console.log("Privet vsem ot " + this.name)
// // }


// console.log("factory: ", [person3, person4, person5])


// var objForSoldier = {
// 	action() {
// 		let str = "";
// 		switch (this.type) {
// 			case "tankist":
// 				str = "shot tank"
// 				break;
// 			case "pexot":
// 				str = "sniper shot"
// 				break;
// 			default:
// 				break;
// 		}
// 		console.log(str)
// 	},
// 	has() {
// 		let str = "";
// 		switch (this.rang) {
// 			case "sergeant":
// 				str = "7"
// 				break;
// 			case "capitan":
// 				str = "40"
// 				break;
// 			default:
// 				break;
// 		}
// 		console.log(str)
// 	}
// }

// function createSoldier(type, rang, id, name, age, country, city, street) {
// 	var person = createPerson(id, name, age, country, city, street)
// 	var soldierSpecific = { type, rang }
// 	var proto = {...objForSoldier};

// 	Object.setPrototypeOf(proto, person)
// 	Object.setPrototypeOf(soldierSpecific, proto)
// 	return soldierSpecific;
// }

// var soldier1 = createSoldier("tankist", "sergeant", 6, "Tom", 22, "USE", "Los Angeles", "b 12")
// var soldier2 = createSoldier("pexot", "capitan", 7, "John", 32, "USE", "Los Angeles", "b 12")

// console.log("soldier1: ", soldier1)
// console.log("soldier2: ", soldier2)

// //

// // function Person(params) {
	
// // }

// function Address(country, city, street) {
// 	this.country = country;
// 	this.city = city;
// 	this.street = street;
// }

// function Person(id, name, age, country, city, street) {
// 	this.id = id;
// 	this.name = name;
// 	this.age = age;
// 	this.address = new Address(country, city, street)

// 	/*
// 		Object.setPrototypeOf(this, Person.prototype)
// 	*/
// }

// Person.prototype.method = function () {
// 	let str = "";
// 	switch (this.address.country) {
// 		case "Armenia":
// 			str = "Barev dzez " + this.name + " koxmic!"
// 			break;
// 		case "USE":
// 			str = this.name + " sed hi!"
// 			break;
// 		case "Russia":
// 			str = "Privet vsem ot " + this.name
// 			break;
	
// 		default:
// 			break;
// 	}
// 	console.log(str)
// }

// const person1 = new Person(3, "Valod", 24, "Armenia", "Yerevan", "15 kvartal");
// const person2 = new Person(7, "John", 32, "USE", "Los Angeles", "b 12");



// function Soldier(type, rang) {
// 	this.type = type;
// 	this.rang = rang;
// }

// Soldier.prototype.action = function() {
// 	let str = "";
// 		switch (this.type) {
// 			case "tankist":
// 				str = "shot tank"
// 				break;
// 			case "pexot":
// 				str = "sniper shot"
// 				break;
// 			default:
// 				break;
// 		}
// 		console.log(str)
// }

// Soldier.prototype.has = function() {
// 	let str = "";
// 		switch (this.rang) {
// 			case "sergeant":
// 				str = "7"
// 				break;
// 			case "capitan":
// 				str = "40"
// 				break;
// 			default:
// 				break;
// 		}
// 		console.log(str)
// }

// function CreateSoldier(type, rang, id, name, age, country, city, street) {
// 	const soldier = new Soldier(type, rang)
// 	const person = new Person(id, name, age, country, city, street)

// 	const soldier_proto =  Object.getPrototypeOf(soldier)
// 	const soldier_proto_copy = Object.assign({}, soldier_proto)
// 	Object.setPrototypeOf(soldier_proto_copy, person)
// 	Object.setPrototypeOf(soldier, soldier_proto_copy)

// 	return soldier
// }

// const soldier = CreateSoldier("pexot", "capitan", 7, "John", 32, "USE", "Los Angeles", "b 12")
