// types Declaration and Expresson


// console.log(Func1.toString());
// console.log(Func2);
// console.log(fn);


// Declaration
// function Func1(arg, a1, a2) {console.log(arg)}

// Expresson
// var Func2 = function fn(arg) {console.log(arg)}


// console.log(Func1(1));
// console.log(Func2(2));

// const arrow = (...args) => {
// 	args[0]
// }
// arrow(1)
// console.dir(arrow)


// const obj = {
// 	id: 1,
	
// 	arrowFunc: () => {
// 		console.log(this);
// 	},
	
// 	functionExpression: function() {
// 		console.log(this);
// 	},

// 	/* function */functionDeclaration() {
// 		console.log(this);
// 	}
// }

// obj.arrowFunc(); // error

// obj.functionExpression(); // obj

// obj.functionDeclaration(); // obj

// var func1 = obj.arrowFunc;
// var func2 = obj.functionExpression;
// var func3 = obj.functionDeclaration;


// func1();
// func2();
// func3();
// console.log('\n')
/*
	Non-arrow functions

	1) new => taza this
	2) bind, call, apply => ogtagordzvac this (2 angam el chi poxvum)
	3) execution context referance (inchic e kanchvum function eti e, ketic dzax)
	4) window || undefined (use strickt)
*/


// const tmpObj = {
// 	name: "Functional Scope",
// 	func() {

// 		const arrow2 = () => console.log(this)

// 		arrow2();

// 	}
// }

// tmpObj.func()

// var otherFn = tmpObj.func

// otherFn()

/*
	Non-arrow functions

	1) new => taza this
	2) bind, call, apply => ogtagordzvac this (2 angam el chi poxvum)
	3) execution context referance (inchic e kanchvum function eti e this@, ketic dzax)
	4) window || undefined (use strickt)
*/

/*
	Arrow functions

	1) this-@ stanuma haytararman pahin
*/


let length = 10;
const arrow1 = () => console.log(this.length);
function declaration () { console.log(this.length); }
const obj = {
	length: 20,
	arrowObj: arrow1,
	declarationObj: declaration,
	func1: () => {
		console.log(this.length)
	},
	func2 () {
		console.log(this.length)
	},
	func3 (fn) {
		fn(); // declaration()
	},
	func4 () {
		// console.log(arguments);

		// const innerObj = {0: 0, length: 1, declaration }

		// innerObj.declaration();
		
		arguments[0](); // arguments.0(); arguments.funcName()
	}
}

arrow1();							// undefined || error , 0
declaration();						// 10 , 10
obj.arrowObj();					// 10 , 10
obj.declarationObj();			// 10 , 20
obj.func1();						// undefined || error , 0
obj.func2();						// 10 , 20
obj.func3(declaration, null);	// 10 , 10
obj.func4(declaration,  5000 /*,  10, null, undefined*/);	// 10 , undefined