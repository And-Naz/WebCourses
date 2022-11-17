// Tnayin 1 Աշխատողա)


// xi let? const
const fn = (a) => {
	let sum = a;
	// xi let? const
	const func = (b) => {
		sum += b;
		return func;
	};

	// avelorda
	// func.toString = () => sum
	func.valueOf = () => sum

	return func;
};


let tmp = fn(1)(5)(15)(20)(50)
console.log(+tmp)
console.log(tmp - 1)
console.log(tmp + 1)

console.log(typeof tmp)
console.log(typeof tmp === 'function')



// Метод concat()используется для объединения двух или более массивов. 
// Этот метод не изменяет существующие массивы, а вместо этого возвращает новый массив

// array metod dzac 


// Tnayin 2 Աշխատողա)


let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

function concat() {
	if (!arguments.length) return [];
	let layer = 0; // esi petqa flat-i imitaciai hamar
	const copy = (to, ...otherArgs) => {
		for (let i = 0; i < otherArgs.length; i++) {
			if (!Array.isArray(otherArgs[i]) || layer > 0) {
				to.push(otherArgs[i]);
				continue;
			}
			if (Symbol.isConcatSpreadable in otherArgs[i] && !otherArgs[i][Symbol.isConcatSpreadable]) { continue; }
			layer++;
			copy(to, ...otherArgs[i]);
			layer--;
		}
	}
	
	// if (arguments.length === 1) {
	// 	if (Array.isArray(arguments[0])) return [...arguments];
	// 	return [arguments]
	// };

	// const initial = arguments[0];
	// const otherArgs = Array.prototype.slice.call(arguments, 1);

	

	let res = []
	copy(res, ...arguments)

	// let arrCopy = concat(initial);
	// for (let i = 0; i < otherArgs.length; i++) {
	// 	if (!Array.isArray(otherArgs[i])) {
	// 		arrCopy.push(otherArgs[i])
	// 		continue;
	// 	}
	// 	if (!otherArgs[i][Symbol.isConcatSpreadable]) {
	// 		arrCopy.push(otherArgs[i]);
	// 		continue;
	// 	}
	// } for (let i = 0; i < arrCopy.length; i++) {
	// 	if (!Array.isArray(arrCopy[i])) {
	// 		res.push(arrCopy[i]);
	// 	}
	// 	else {
	// 		res = res.concat(arrCopy[i]);
	// 	}
	// }
	return res
}

console.log(concat(arr1, arr2, arr3))