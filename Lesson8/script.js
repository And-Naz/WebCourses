// Objects vs primitives

/*
	object			|	primitives
	---------------|------------
	mutable			|	immutable
	referance		|	value
	copy referance	|	copy value
	heap				|	stack
*/
// Primitive wrapper object

// const number = 1;
// const string = 'string';
// const boolean = true;
// const varNull = null;
// const varUndefined = undefined;

// console.log(number.toString())
// console.log(string.toString())
// console.log(boolean.toString())

// try {
// 	console.log(varNull.toString())
// } catch (error) {
// 	console.log(error)
// }

// try {
// 	console.log(varUndefined.toString())
// } catch (error) {
// 	console.log(error)
// }


// const justNumber = 1;
// const functionNumber = Number(1);
// const classNumber = new Number(1);

// @ndhanracum
// bolor tiper@ baci null-ic u undefined-ic karan irenc pahen objecti pes

// Objects to primitives

const obj = {
	id: 1,
	name: 'my object',
	[Symbol.toPrimitive](type) {
		console.log(type)
		switch (type) {
			case 'number':
				return this.id;
			case 'string':
				return this.name;
			default:
				break;
		}
		return true;
	}
}