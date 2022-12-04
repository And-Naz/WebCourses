// // function NEW(Constr, ...args) {
// // 	var thisValue = Object.create(Constr.prototype, {});
// // 	var result = Constr.apply(thisValue, args);
// // 	if (typeof result === 'object' && result !== null) {
// // 		return result;
// // 	}
// // 	return thisValue;
// // }

// // function CLASS1(arg1, arg2) {
// // 	this.name = "Class 1"
// // 	this.arg1 = arg1
// // 	this.arg2 = arg2
// // }

// // class CLASS2 {
// // 	constructor(arg1, arg2) {
// // 		this.name = "Class 2"
// // 		this.arg1 = arg1
// // 		this.arg2 = arg2
// // 	}
// // }

// // console.log(NEW(CLASS1, 1, 2));
// // console.log(NEW(CLASS2, 3, 4));


// // let x = { name: 'x' }			// 0x0000001
// // let y = { name: 'y' }			// 0x0000002
// // let z = {name: 'z', ref: x }	// 0x0000003, ref: 0x0000001


// // console.log(x);
// // console.log(y);
// // console.log(z);

// // console.log("--------------------------------")

// // y = null // y = null, (anhasaneliya 0x0000002)

// // console.log("y: ", y);

// // console.log("--------------------------------")

// // x = null; // x = null, (anhasaneliya 0x0000001)

// // console.log("x: ", x);

// // console.log(z);

// // function f() {
// // 	const o = { name: 'O' }
// // 	//sljdfghsdhfglshdhfg
// // 	console.log(o)
// // 	// o = null
// // 	return o
// // }

// // // let obj;
// // const tmp = { ref: null }

// // function f1() {
// // 	const o = { name: 'O' } /* ??? */
// // 	console.log(o)
// // 	// obj = o
// // 	tmp.ref = o
// // }

// // f1()
// //sajsjlfgsldfk
// //sajsjlfgsldfk
// //sajsjlfgsldfk
// // TODO: garbage collector
// //? is o deletet?
// //sajsjlfgsldfk
// //sajsjlfgsldfk
// //sajsjlfgsldfk
// //sajsjlfgsldfk

// console.log("Iterables");

// function* numbersGeneratorLessThen3() {
// 	yield 0;
// 	yield 1;
// 	yield 2;
// 	return "prc"
// }

// function* numbersGeneratorLessThen(count) {
// 	while (count > 0) {
// 		yield --count;
// 	}
// }

// function generator(count) {
// 	let _counter = count;
// 	return {
// 		next() {
// 			if (_counter > 0) {
// 				return { value: --_counter, done: false }
// 			}
// 			return { value: undefined, done: true }
// 		}
// 	}
// }

// var obj1 = {
// 	count: 10,
// 	*[Symbol.iterator]() {
// 		while (this.count > 0) {
// 			yield --this.count;
// 		}
// 	}
// }

// // var obj2 = {
// // 	[Symbol.iterator]() {
// // 		return {
// // 			count: 10,
// // 			next() {
// // 				if (this.count > 0) {
// // 					return { value: --this.count, done: false }
// // 				}
// // 				return { value: undefined, done: true }
// // 			}
// // 		}
// // 	},
	
// // }

// // for (let elem of obj1) {
// // 	console.log(elem)
// // }

// // for (let elem of obj2) {
// // 	console.log(elem)
// // }

// // function forOf(iteracvoxMiBan) {
// // 	const generator = iteracvoxMiBan[Symbol.iterator]();
// // 	let result = generator.next();
// // 	while (!result.done) {
// // 		console.log(result.value)
// // 		result = generator.next();
// // 	}
// // }

// // forOf(obj1)

// class ColorGenerator {
// 	constructor(limit = 100, defaultExistingColors = null) {
// 			this.limit = limit;
// 			this.index = 0;
// 			this.existingColors = defaultExistingColors ? defaultExistingColors.map(color => color.toLowerCase()) : (this.getDefaultExistingColors() || []);
// 			this.startRandomFrom = this.existingColors.length;
// 	}

// 	[Symbol.iterator]() { return this; }

// 	next() {
// 			if (this.index === this.limit) { return { value: undefined, done: true }; }
// 			if (this.index < this.startRandomFrom) {
// 				return { done: false, value: this.existingColors[this.index++] };
// 			}
// 			let isUnic = false;
// 			let randColor = null;
// 			while (!isUnic) {
// 				randColor = this.getRandomColor();
// 				isUnic = !this.existingColors.includes(randColor);
// 			}
// 			this.index++;
// 			this.existingColors.push(randColor);
// 			return { done: false, value: randColor };
// 	}

// 	getDefaultExistingColors() {
// 			return [
// 				"#ca8a04", "#2dd4c0", "#0891b3", "#e879f9", "#831844",
// 				"#ec8610", "#10b982", "#165e76", "#9a7ad2", "#fb7286",
// 				"#92400e", "#176535", "#4438ca", "#701a75", "#0c4a6f",
// 				"#f572b6", "#d87706", "#4d7d0f", "#a755f7", "#be195e",
// 				"#ea580b", "#1d7771", "#6366f1", "#a21caf", "#be113c",
// 				"#4d1d95", "#793510", "#064d3b", "#7c0000", "#312d81",
// 			];
// 	}
// 	getRandomColor() { return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);}
// }

// function Builder(id) {
// 	this.id = id;
// }
// Builder.staticField = 1;

class Builder {
	static tools = "shpakli";

	constructor(id) {
		this.id = id
	}
}

class HouseBuilder extends Builder {
	constructor(id, name) {
		super(id)
		this.name = name;

		console.log(Builder.tools)
		console.log(HouseBuilder.tools)
	}
}

function Other_Builder(id) {
	this.id = id;
}

function Other_HouseBuilder(name) {
	this.name = name
}
// new

Object.setPrototypeOf(Other_HouseBuilder, Other_Builder)

var o = {}
Other_Builder.call(o, 1)
Other_HouseBuilder.call(o, "A")

Object.setPrototypeOf(Other_HouseBuilder.prototype, Other_Builder.prototype)

Object.setPrototypeOf(o, Other_HouseBuilder.prototype)
