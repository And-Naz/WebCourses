

function fibonacci(num) {
	if (num < 2) return num;
	// else {
		return fibonacci(num - 1) + fibonacci(num - 2);
	// }
}

console.log(fibonacci(8))

const fibonacci1 = num => num < 2 ? num : fibonacci1(num - 1) + fibonacci1(num - 2);