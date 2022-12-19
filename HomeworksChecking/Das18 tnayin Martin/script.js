// console.log("Methods of Array");
// console.log(Array.prototype);

// Create empty array with length
// const tmpArr1 = new Array(10)
// console.log(tmpArr1);

// Create array with elements
// const tmpArr2 = new Array(10, 20)
// console.log(tmpArr2);

// Create array with undefineds
// const length = 8;
// const tmpArr3 = Array.from({ length })
// console.log(tmpArr3);

// Create array and asign elements
// const arr = Array.from({ length }, (/* like map method */) => Math.round(Math.random() * length))
// const arr = Array.from({ length }, (_, i) => ({id: i}))
// const arr = Array.from({ length }, (_, i) => i + 10)
// console.log(arr);

// fruma sax elementneri vra inchvor gorca anum u stanuma nor zangvac

// const mapFn = (
// 	element, /* element of array on each iteration */
// 	index, /* index of element of array on each iteration */
// 	array, /* referance of current array */
// ) => {
// 	const newElem = {...element}
// 	newElem.pow = newElem.id * newElem.id
// 	return newElem;
// }
// const mapResult = arr.map(mapFn);

// console.log("mapResult: ", mapResult);
// console.log(arr === mapResult);
// console.log(arr[0] === mapResult[0]);

// cicla frum
// arr.forEach(function(elem, index, array) {
// 	return elem.name = elem.id + 1
// })

// concat all
// var justArr = []

// justArr[Symbol.isConcatSpreadable] = false
// const concated = arr.concat(["asdfsad", {}], 1000, justArr)

// delete justArr[Symbol.isConcatSpreadable]

// console.log(
// 	concated
// );

// find need element
// console.log(arr.at(-1));

// check all elements by function condition for all
// console.log(arr.every(elem => elem < 30));
// check all elements by function condition for one
// console.log(arr.some(elem => elem === 15));

// fill some value in our array
// console.log(arr.fill({} /*, 3, 4*/));

// filter by function condition
// console.log(
// 	arr.filter((elem) => {
// 		return elem % 3 === 0
// 	})
// );

// find our element or undefind
// console.log(
// 	arr.find((elem, index, array) => {
// 		return false
// 	})
// );

// find index our element or -1
// console.log(
// 	arr.findIndex((elem, index, array) => {
// 		return elem === 15
// 	})
// );

// find index our element or -1
// console.log(
// 	arr.indexOf(5)
// );

// mechi zangvacner@ sax bacuma u irara kpcnum
// console.log([0,1,2, [3,4,5, [6,7,8, [9,10,11]]]].flat(Infinity))


// flat Map (map + flat)
// console.log(arr.map(elem => [elem]).flat());
// console.log(arr.flatMap(elem => [elem]));

// just checking
// console.log(arr.includes(15));

// concat like string
// console.log(arr.join(""));


// do everithing
// console.log(
// 	arr
// 		.filter(elem => elem % 2 === 0)
// 		.map(elem => `<li>${elem}</li>`)
// );

// function FnForReduce(accumulator, elem, index, arr) {
// 	if (elem % 2 === 0) {
// 		accumulator.push(`<li>${elem}</li>`)
// 	}
// 	return accumulator
// }

// console.log(
// 	arr.reduce(FnForReduce, [] /* <= accumulator */)
// );

// cut array and get new
// console.log(arr.slice(3, 4));

// cut array and get new
// console.log(arr.splice(3, 4));

// var someArr = [10, -8, 0, 20, 44, -1];
// console.log(someArr);
// // sort
// console.log(
// 	[...someArr].sort((next, prev) => {
// 		console.log(next, prev)
// 		return next < prev ? -1 : 1;
// 	})
// );


// function getUser(callback = console.log) {
//     const obj = new XMLHttpRequest();
//     obj.open('GET', 'https://jsonplaceholder.typicode.com/users/1',true);
//     obj.onload = function() {
//         const response = JSON.parse(obj.responseText);
//         console.log(response);
//     }
//     obj.send()
// }
// // console.log("getUser()")

// Promise.reject()
// 	.then(
// 		data => console.log('ok'),
// 		data => console.log('error')
// 	)