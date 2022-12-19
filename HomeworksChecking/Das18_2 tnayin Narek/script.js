// // /*
// // 	2) Unenq chsortavorvac tveri array, u findIndexes function@
// // 	vor@ araji argumentov stanum e array isk erkrod argumentov inchvor number
// // 	implementel algoritm vor@ amenaarag kepov man kga number@ nonSortedArray array-i
// // 	u dran nmanatip array-i mej ayn 2 tveri index-ner@ voronc gumar@ havasar e argument numberin
// // */


// Պատասխան՝

// const nonSortedArray = [36, 40, 60, 0, 1, 13, 18, 20, 3, 4, 6, 7, 10, 11, 12, 22, 24, 25, 5, 8, 15, 9, 34, 35];
// const findIndexes = (arr, number) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === number) {
// 				console.log(i, j)
// 			}
// 		}
// 	}
// }

// findIndexes(nonSortedArray, 10)



//     /*
// 	5) Trvac e function generator, vor@ kanchel en 2-sov yev stacel en generatori object
// 	inchpes ogtagorcel ayn vor
// 		console.log variable1 tpvi 2;
// 		console.log variable2 tpvi 3 (ste sxal chem grel, 1-a petq)
// 		console.log sum 5
// */


// Պատասխան՝


// const showObj = (...args) => console.log( ...args);

// function* functionGenerator(param) {
// 	const variable1 = yield param;
// 	const variable2 = yield(variable1/variable1 * 3);
// 	const sum = variable1 + variable2;

// 	console.log("variable1: ", variable1);
// 	console.log("variable2: ", variable2);
// 	console.log("sum: ", sum);

// 	return sum;
// }


// const show = () => {
//   let done = false;
//   let lastValue = undefined;
//   while (!done) {
//     let nextElement = generator.next(lastValue)
//     done = nextElement.done;
// 	showObj(nextElement);
//     lastValue = nextElement.value;
//   }

//  };


//  let generator = functionGenerator(2)
//  show(functionGenerator);



/*
	6) Grvac e artahaytutyun vortex spread e arvac 7 tiv@,
	aystex error e linelu, dra hamar ayn trycatch-i mej e
	inchpes anel vor ekranin tpvi: 0 1 2 3 4 5 6
*/



// Պատասխան՝

// Number.prototype[Symbol.iterator] = function* (num) {
//     for (let i = 0; i < this; i++) {
//         yield i;
//     }
// };

// try {
//     console.log(...7)
// } catch (error) {
//     console.log(error);
// }