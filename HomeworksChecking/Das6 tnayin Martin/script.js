// const hayk = { name: "Hayk", age: 27, id: '44' };
// const mariam = { name: "Mariam", age: 30, id: '13' };
// const karen = { name: "Karen", age: 28, id: '23' };
// const levon = { name: "Levon", age: 28, id: '909' };


// const users = [hayk, mariam, karen, levon]


// function Get(arg){
//     return users.map(x =>x[arg])
// }
// console.log(Get("name"))

// function Get(arg){
//     let arr= []
//    if(arg.length === 1){
//     arr.length = arg[0]
//    }
//    if(arg.length>1){
//     for(let i=0;i< arg.length;i++){
//         arr.push(arg[i])
//     }
//    }
//    return arr
// }
// console.log(Get(10))


// 1. Array.from({ length })

function CustomArray() {
	const arr = []; // xi let?
	if (arguments.length === 1) {
		arr.length = arguments[0]
	}
	if (arguments.length > 1) {
		for (let i = 0; i < arguments.length; i++) {
			arr.push(arguments[i])
		}
	}
	return arr
}

CustomArray.from = function () {
	const arr = []; // xi let?
	/* miangamic avart ete arajin argument@ object chi */
	const validFirstArgument = (typeof arguments[0] === 'object') && ("length" in arguments[0]) &&
		(typeof arguments[0].length === 'number') && (!Number.isNaN(arguments[0].length));
	if (!validFirstArgument) return arr;

	const fnForMap = typeof arguments[1] === 'function' ? arguments[1] : elem => elem;

	/* es takin@ animasta arden */
	// if (arguments.length === 1 && typeof (arguments[0]) === "object" && "length" in arguments[0]) {
	// 	arr.length = arguments[0].length
	// }
	// if (arguments.length > 1 && typeof (arguments[0]) === "object" && "length" in arguments[0] && typeof (arguments[1]) === "function") {
	// 	for (let i = 0; i < arguments[0].length; i++) {
	// 		arr.push(arguments[1](undefined, i, arr))
	// 	}
	// }

	for (let i = 0; i < arguments[0].length; i++) {
		arr.push(fnForMap(arguments[0][i], i));
	}

	return arr
}

//      console.log(CustomArray.from({length: 5}, (_, i)=>i))


3. //map()
// let arr= [1,2,3,4]

// let res=arr.map(x=>x+1)
// console.log(res)
// map((element, index, array) => { })

// xi Get? map
function map(arr, calback) {
	const arrs = []; // xi let?
	for (let i = 0; i <= arr.length; i++) {
		arrs.push(
			calback(arr[i], i, arr)
		)
	}
	return arrs
}
// console.log(map([1, 1, 1, 1], elem => elem + 1))

4.//forEach
//let array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));

// let array1 = ['a', 'b', 'c'];

// xi Get? map
function forEach(arr,calback){
	// sxal popoxakan, petq chi
   //  let NewArr=[];
    for(let i =0;i<=arr.length;i++){
      //   NewArr.push(
            calback(arr[i], i, arr)
      //   )
    }
// return NewArr
}
// console.log(Get(array1,elem=>console.log(elem)))

5.//Concat

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let arr = [];
// function Get(arr1,arr2){
//   return arr=[...arr1, ...arr2]

// }
// console.log(Get(arr1,arr2))

6. // Every

// let arr = [5,2,3,4]
function every(array, callback) {
	const { length } = array;

	for (let index = 0; index < length; index += 1) {
		const value = array[index];

		if (!callback(value, index, array)) {
			return false;
		}
	}

	return true;
}

//  console.log(every(arr,elem => elem>1))

 7.//Some

//   let arr = [5,2,3,4]
function some(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return true;
		}
	}
	return false;
}
// console.log(some(arr,elem => elem>4))

8.// fill
//fill(value,start,ent)
// animast argumentner
function fill(array, value /* , startIndex = 0, endIndex = array.length */) {
	for (let i = startIndex; i <= endIndex; i += 1) {
		array[i] = value;
	}

	return array;
}
// console.log(fill([1,1,1,1,1,],50,2,4))

9.// filter

// let arr=[1,2,3,4,5]
// /////console.log(arr.filter(elem=>elem>3))
// let arr=[1,2,3,4,5]
// xi get? 
function filter(arr, callback) {
	const res = []; // xi let?
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i]; // xi let?
		if (callback(value, i, arr)) {
			res.push(value)
		}
	}
	return res
}
// console.log(get(arr,value=>value>2))

.10 //find
// xi get? find
function find(arr, calback) {
	for (let i = 0; i < arr.length; i++) {
		if (calback(arr[i], i, arr)) {
			return arr[i]
		}
	}
}
// console.log(get([1,2,3,4,5],elem=>elem>2))

.11//findIndex
// xi get? findIndex
function findIndex(arr, calback) {
	for (let i = 0; i < arr.length; i++) {
		if (calback(arr[i], i, arr)) {
			return i
		}
	}
	// esi petqa ete chi qtel sa uxarki
	return -1;
}
// console.log(get([1,2,3,4,5],elem=>elem>3))

.12//flat

// depth de default 1 e, isk concat anunov function@ @ndhanrapes chka
function flat(arr, depth = 1) {
	// if (depth < 1) {
	// 	return arr;
	// }
	// return reduce(
	// 	arr,
	// 	(result, current) => {
	// 		return concat(result, flat(current, depth - 1))
	// 	},
	// 	[],
	// );
	const res = []; // xi let?
	let innerSize = 1;
	(function (innerArray) {
		for (let i = 0; i < innerArray.length; i++) {
			if (!Array.isArray(innerArray[i])) {
				res.push(innerArray[i]);
			}
			else if (innerSize <= depth) {
				innerSize++;
				arguments.callee(innerArray[i]);
				innerSize--;
			} else {
				res.push(innerArray[i]);
			}
		}
	})(arr);
	return res;
}
// console.log('flat',[1,2,3,4,[5,6,[7]]],arr=>flat(arr,2))

.14//flatmap

function flatMap(array, callback) {
	return flat(map(array, callback), 1);
}

//    console.log(('flatMap', [1, 2, 3], array => flatMap(array, number => [number, number])));

.15//includes
// [1,2,3,4].includes(3) ----true

// let arr = [5,2,3,4]
// callback chka ste, value
function includes(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		// if (callback(arr[i], i, arr)) {
		// 	return true;
		// }
		if (arr[i] === value) {
			return true;
		}
	}
	return false;
}
// console.log(includes(arr,elem => elem===4))

.16//join
// let array= [1,2,3,4]
// // debugger
//default@ '' chi ayl ',' na
function join(arr, sep = ',') {
	let res = '';
	for (let i = 0; i < array.length - 1; i++) {
		res += array[i];
		res += sep

	}
	res += arr[arr.length - 1]
	return res
}
// console.log(join())

.17//reduce

function reduce(array, callback, initValue) {
	// im karciqov ste arji mianqamic @ndhatel function@
	if (!Array.isArray(array) || array.length) return array;

	const { length } = array;

	let acc = initValue;
	let startAtIndex = 0;

	if (initValue === undefined) {
		acc = array[0];
		startAtIndex = 1;
	}

	for (let index = startAtIndex; index < length; index += 1) {
		const value = array[index];
		acc = callback(acc, value, index, array);
	}

	return acc;
}

//    console.log(reduce([1,1,1,1],(sum,number)=>sum+number,0))

.18// slice
// let array=[1,2,3,4,5]
function slice(array, startIndex = 0, endIndex = array.length) {
	const result = [];

	// petqa stugel
	if (startIndex >= endIndex) return result;

	// normala, uxaki bag ka, erb start@ bacasakana isk end@ che,
	// u lyuboi bacasakan tiv array.length-ic poqra mer mot undefinedner en linelu
	// for (let index = startIndex; index < endIndex; index++) {
	// 	const value = array[index];

	// 	if (index < array.length) {
	// 		result.push(value);
	// 	}
	// }

	for (let i = 0; i < array.length; i++) {
		if (i >= startIndex && i < endIndex) {
			result.push(arr[i]);
		}
	}

	return result;
}
// console.log(slice(array,2,3))
