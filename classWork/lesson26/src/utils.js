export const deepCopy = obj => {
	const copyObj = {};
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			copyObj[key] = deepCopy(obj[key])
		} else {
			copyObj[key] = obj[key]
		}
	})
}