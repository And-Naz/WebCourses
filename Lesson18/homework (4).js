/*
	1) Unenq achman kargov sortavorvac tveri array, u findFromSorted function@
	vor@ araji argumentov stanum e array isk erkrod argumentov inchvor number
	implementel algoritm vor@ amenaarag kepov man kga number@ sortedArray array-i
	u dran nmanatip array-i mej yev kveradardzni true ete lement@ ka arrayum yev false ete chka
*/
const sortedArray = [0, 1, 3, 4, 5, 7, 10, 11, 12, 13, 18, 20, 22, 24, 25, 26, 29, 30, 32, 33, 34, 35, 36, 40, 60];
const findFromSorted = (arr, number) => {
	// Need to implement
}

/*
	2) Unenq chsortavorvac tveri array, u findIndexes function@
	vor@ araji argumentov stanum e array isk erkrod argumentov inchvor number
	implementel algoritm vor@ amenaarag kepov man kga number@ nonSortedArray array-i
	u dran nmanatip array-i mej ayn 2 tveri index-ner@ voronc gumar@ havasar e argument numberin
*/
const nonSortedArray = [36, 40, 60, 0, 1, 13, 18, 20, 3, 4, 6, 7, 10, 11, 12, 22, 24, 25, 5, 8, 15, 9, 34, 35];
const findIndexes = (arr, number) => {
	// Need to implement
}

/*
	3) Grel function vor@ recursion keprov khashvi n-erord fibonacci-i tiv@ yev kveradardzni
*/

/*
	3.1) Grel function@ asynchron
*/

/*
	3.2) hashvel aveli arag kerpov, (porcel stexcel xeshavorman mexanism)
*/

/*
	3.1) Grel algoritm-i bun hashvark@ arandzin thread-ov,
	aynpes uxarkvi tiv hashvelu hamar yev spasvi vor veradardzvi ayn
*/

/*
	4) Unenq hetyevyal artahaytutyun@ promisnerov, inch ktpvi yev inchu
*/

const promise = new Promise(res => setTimeout(res, 500, "errror"));
promise
	.then(
		data => data + " first then resolve",
		data => data + " first then reject",
	)
	.then(data => { throw data; })

promise.then(data => {
	console.log(data);
	return data
})
	.catch(err => {
		console.log("Err: ", err);
		return err
	})
	.finally(data => {
		console.log(data);
	})

/*
	5) Trvac e function generator, vor@ kanchel en 2-sov yev stacel en generatori object
	inchpes ogtagorcel ayn vor
		console.log variable1 tpvi 2;
		console.log variable2 tpvi 3 (ste sxal chem grel, 1-a petq)
		console.log sum 5
*/

function* functionGenerator(param) {
	const variable1 = yield param;
	const variable2 = yield (variable1 * 3);
	const sum = variable1 + variable2;

	console.log("variable1: ", variable1);
	console.log("variable2: ", variable2);
	console.log("sum: ", sum);

	return sum;
}

const generator = functionGenerator(2);

/*
	6) Grvac e artahaytutyun vortex spread e arvac 7 tiv@,
	aystex error e linelu, dra hamar ayn trycatch-i mej e
	inchpes anel vor ekranin tpvi: 0 1 2 3 4 5 6
*/

try {
	console.log(...7)
} catch (error) {
	console.log(error);
}
