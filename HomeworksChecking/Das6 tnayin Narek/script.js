// TNayin nor


// Պատասխան 1,2 

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
	// if (
	// 	arguments.length === 1 &&
	// 	typeof (arguments[0]) === "object" &&
	// 	"length" in arguments[0]
	// ) {
	// 	arr.length = arguments[0].length
	// }
	// if (
	// 	arguments.length > 1 &&
	// 	typeof (arguments[0]) === "object" &&
	// 	"length" in arguments[0] &&
	// 	typeof (arguments[1]) === "function"
	// ) {
	// for (let i = 1; i < arguments[0].length; i++) {
	// 	arr.push(arguments[1](undefined, i, arr))
	// }
	for (let i = 0; i < arguments[0].length; i++) {
		arr.push(fnForMap(arguments[0][i], i));

	}
	// }
	return arr
}


// let zangvac = CustomArray.from({
// 	length: 20
// }, (_, i) => i)

// console.log(zangvac)



// 3․ Պատասխան Map

function map(arr, callback) {
	const result = []; // xi let?
	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i], i, arr))
	}
	return result
}

// let arr2 = map((zangvac),elem => elem+1)
// console.log(arr2)



// Original methodov klini nuyny

// const map1 = zangvac.map(x => x +1);
// console.log(map1)




// 4․ Պատասխան each

function each(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr)
	}
}

// each((zangvac),elem=>console.log(elem))


// Original methodov klini nuyny
// zangvac.forEach(element => console.log(element));



// 5․ Պատասխան Concat  սա էլ ոնցոր callback չուներ դակումենտացիայում

// let auto = ["bmw","audi"]

// function concat(array,array2){
//     let result = []
// for(i=0;i<array.length;i++){
//     result.push(array[i])
// }
//     for(let j=0; j<array2.length; j++){
//         result.push(array2[j])
// }

// return result
// }

// let arr3 = concat(zangvac,auto)
// console.log(arr3)



// 6․ Պատասխան every

function every(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		// if (callback(arr[i], i, arr)) {
		// 	return true
		// } else {

		// 	return false
		// }
		// ste ete return exav apa sax elementner@ chi hascni stgui
		// petqa stugvi bolor functionneri veradardzvac arjeq@
		// ete gone mek@ falsa, petqa function@ avartvi fals-ov
		if (!callback(arr[i], i, arr)) {
			return false;
		}
	}
	return true;
}

// console.log(every((zangvac),elem=>elem>22))
// console.log(every((zangvac),elem=>elem<22))
// console.log(every((zangvac),elem=>elem%2===0))



// Original methodov klini nuyny

// const isBelowThreshold = (currentValue) => currentValue < 22;
// const isBelowThreshold2 = (currentValue) => currentValue < 22;
// const isBelowThreshold3 = (currentValue) => currentValue%2===0;
// console.log(zangvac.every(isBelowThreshold));
// console.log(zangvac.every(isBelowThreshold2));
// console.log(zangvac.every(isBelowThreshold3));


// 7․ Պատասխան some

function some(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return true;
		}
	}
	return false;
}

// console.log(some((zangvac),elem=>elem%2===0))
// console.log(some((zangvac),elem=>elem%40===0))



// Original methodov klini nuyny
// const even = (element) => element % 2 === 0;
// const even2 = (element) => element % 40 === 0;

// console.log(zangvac.some(even));
// console.log(zangvac.some(even2));






// 8․ Պատասխան՝ filter
//anun@ xiyer map?
function filter(arr, callback) {
	const result = []; // xi let?
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			result.push(arr[i])
		}
	}
	return result;
}

// let arr2 = map((zangvac),elem => elem%2===0)
// console.log(arr2)



// Original methodov klini nuyny
// const result = zangvac.filter(word => word%2===0);
// console.log(result);





// 9․ Պատասխան՝ find. Метод find()возвращает первый элемент предоставленного массива, который удовлетворяет предоставленной функции тестирования. Если никакие значения не удовлетворяют функции тестирования, undefinedвозвращается.
// 10 ic heto araji trun gtav tvec 11

function find(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return arr[i];
		}
	}
}



// console.log(find((zangvac),elem=>elem>10))



// Original methodov klini nuyny
// const found = zangvac.find(element => element > 10);
// console.log(found);




// 10. Պատասխան՝ findindex

// xi func?
function findIndex(arr, callback) {
	// animast popoxakan
	// let flag = -1
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			// flag = i
			return i;
		}
	}
	// return flag
	return -1;
}

// console.log(func((zangvac),elem=>elem===5))
// console.log(func((zangvac),elem=>elem===485))



// Original methodov klini nuyny
// const isLargeNumber = (element) => element === 5;
// console.log(zangvac.findIndex(isLargeNumber));





// 11.Պատասխան՝ indexOf   սա ոնցոր callback չուներ դակումենտացիաի մեջ գրած.
// xi func, indexOf
function indexOf(array, arg) {
	// animast popoxakan
	// let flag = false
	for (let i = 0; i < array.length; i++) {
		if (array[i] === arg /* && array[i] > i */) {
			// flag = i
			return i;
		}
	}
	// return flag
	return -1;
}

// console.log(func(zangvac,18,5))
// console.log(func(zangvac,0,5))


// orginal methodov klini nuyny
// console.log(zangvac.indexOf(18, 5));






// 12․ Պատասխան՝ Join  Օգտվել եմ

//default@ '' chi ayl ',' na
function join(array, arg = ',') {
	let result = '';
	for (let i = 0; i < array.length; i++) {
		// sxala
		// if (result == '') {
		// 	result += array[i];
		// } else {
		// 	result += arg ? arg + array[i] : ' ' + array[i];
		// }
		result += array[i] + (i !== (array.length - 1) ? arg : "")
	};
	return result;
}


// console.log(join(arr,"-"))



// 13․ Պատասխան՝ includes սա ոնցոր callback չուներ դակումենտացիաի մեջ գրած
// flag em gre vor falsi vaxt undefined chta gri false

// xi func? includes
function func(array, arg) {
	// animast popoxakan
	// let flag = false
	for (let i = 0; i < array.length; i++) {
		if (array[i] === arg) {
			return true
		}
	}
	// return flag
	return false;
}

// console.log(func(zangvac,0))
// console.log(func(zangvac,15))



// orginal methodov klini nuyny
// console.log(zangvac.includes(0));
// console.log(zangvac.includes(15));


// 14. Պատասխան՝ Slice qo gracic nayac)

// ka nayev start, end minusnerov case bayc petq chi
function slice(arr = [], start = 0, end = arr.length /* aranc  - 1 */) {
	const other = []; // xi let?
	// petqa stugel
	if (start >= end) return other;
	for (let i = 0; i < arr.length; i++) {
		if (i >= start && i < end) {
			other.push(arr[i]);
		}
	}
	// animast kod
	// arr.length = 0;
	// for (let i = 0; i < other.length - 1; i++) {
	// 	arr.push(other[i])
	// }

	// sxal ban es return anum
	// return arr;
	return other;
}

// let b = slice(zangvac,5,8)
// console.log(b)



// orginal methodov klini nuyny
// console.log(zangvac.slice(5, 8));



// 15. Պատասխան՝ fill qo grac slice-ic ogtvelov grel em menaki ban cher)
// sxal argumentner en
function fill(arr = [], value /* , start = 0, end = arr.length - 1*/) {
	// animast popoxakan
	// let result = []

	// anhaskanali kod
	// for (let i = 0; i < arr.length; i++) {
	// 	if (i >= start && i <= end)
	// 		arr[i] = value
	// 	result.push(arr[i])
	// } arr.length = 0
	// for (let i = 0; i < result.length; i++) {
	// 	arr.push(result[i])
	// }
	for (let i = 0; i < arr.length; i++) {
		arr[i] = value;
	}
	return arr
}

// let b = fill(zangvac,5)
// console.log(b)

// let b = fill(zangvac,5,1)
// console.log(b)

// let b = fill(zangvac,5,3,8)
// console.log(b)




// original methodi het klini nuyny 3 parametrerov stugac chotki ashxatec)

// console.log(zangvac.fill(5))
// console.log(zangvac.fill(5, 1))
// console.log(zangvac.fill(5,3,8));






// 16. Պատասխան Flat

// let zangvac2 =[0,1,2, [3,4,5, [6,7,8, [9,10,11]]]]
// arrayi flat@ 1 hat argument er @ndunum vor@ ste chka, default 1
function flat(array, arg = 1) {
	const res = []; // xi let?
	let innerSize = 1;
	(function (innerArray) {
		for (let i = 0; i < innerArray.length; i++) {
			if (!Array.isArray(innerArray[i])) {
				res.push(innerArray[i]);
			}
			else if (innerSize <= arg) {
				innerSize++;
				arguments.callee(innerArray[i]);
				innerSize--;
			} else {
				res.push(innerArray[i]);
			}
		}
	})(array);
	// sxala
	// for (let i = 0; i < array.length; i++) {
	// 	if (!Array.isArray(array[i])) {
	// 		res.push(array[i]);
	// 	}
	// 	else {
	// 		res = res.concat(flat(array[i]));
	// 	}
	// }
	return res
}
// console.log(flat(zangvac2));



// originali het nuynna
// console.log(zangvac2.flat(4));





// 17. Պատասխան Splice mer dasi jamanak gracy slice metodner im gracy motavora ashxatum


// function splice(arr = [], start = 0, end, value) {
// let result = []
// for (let i = 0; i < arr.length; i++) {
// 	if (i >= start && i <= end)
// 		arr[i] = value
// 	result.push(arr[i])
// }
// arr.length = 0
// for (let i = 0; i < result.length; i++) {
// 	arr.push(result[i])
// }

// return arr
// }

function splice() {
	if (!arguments.length || !Array.isArray(arguments[0]) || !arguments[0].length) return [];

	// array for splice
	const data = arguments[0];
	// start position for pslice
	const start = arguments[1] || 0;
	// count for splice
	const deleteCount = arguments[2] || (data.length - start);
	// additional items for insert spliced place
	const items = slice(arguments, 3);

	// parts of array for saving
	const arrForSave1 = slice(data, 0, start);
	const arrForSave2 = slice(data, start + deleteCount);

	// parts ro splice and return
	const splicePart = slice(data, start, start + deleteCount);

	// make empty array
	data.length = 0;

	// function for copy one array to another
	function copy(source, destination) {
		for (let i = 0; i < source.length; i++) {
			destination.push(source[i]);
		}
	}

	// copy arrForSave1 to data;
	copy(arrForSave1, data);
	// copy items to data;
	copy(items, data);
	// copy arrForSave2 to data;
	copy(arrForSave2, data);

	// return spliced part
	return splicePart;
}

const a = CustomArray.from({ length: 10 }, (_, i) => i);
const a1 = [...a];
const a2 = [...a];

console.log("a1: ", a1);
console.log(
	"a1.splice(8): ", a1.splice(8)
);

console.log("a1: ", a1);
console.log(
	"a1.splice(4,3): ", a1.splice(4, 3)
);

console.log("a1: ", a1);
console.log(
	"a1.splice(3, 1, null, NaN): ", a1.splice(3, 1, null, NaN)
);

console.log("a1: ", a1);

console.log("\n");

console.log("a2: ", a2);
console.log(
	"splice(a2, 8): ", splice(a2, 8)
);

console.log("a2: ", a2);
console.log(
	"splice(a2, 4,3): ", splice(a2, 4, 3)
);

console.log("a2: ", a2);
console.log(
	"splice(a2, 3, 1, null, NaN): ", splice(a2, 3, 1, null, NaN)
);

console.log("a2: ", a2);

// splice(zangvac,1, 3,"mercedes")
// console.log(zangvac)


// original methodov klini sxal ashxatuma bayc 3yachiky piti ktri hani chi hanum
// zangvac.splice(1, 3, 'Mercedes');
// console.log(zangvac);


