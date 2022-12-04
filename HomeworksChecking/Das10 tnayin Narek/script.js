// unenq userneri data
// Tnayin 1

const usersData = {
	john: {
		id: Date.now(),
		birthDay: new Date(1990, 2, 10),
	},
	tom: {
		id: Date.now(),
		birthDay: new Date(1995, 4, 11),
	},
	bob: {
		id: Date.now(),
		birthDay: new Date(1990, 3, 3),
	},
	david: {
		id: Date.now(),
		birthDay: new Date(1985, 3, 10),
	},
	stan: {
		id: Date.now(),
		birthDay: new Date(1993, 12, 27),
	}
}

console.log("initial: ", usersData)

// ok
function formatDate() {
	let day = this.getDate()
	if (day < 10) {
		day = "0" + day
	}
	let month = this.getMonth() + 1
	if (month < 10) {
		month = "0" + month

	}
	const year = this.getFullYear()
	return `${year}-${month}-${day}`
}

function CalculateAgeByBirthDate() {
	const self = this;
	const diff = (Date.now() - self) / 1000;
	const minutes = diff / 60;
	const hours = minutes / 60;
	const days = hours / 24;
	return Math.round(days / 365.5);
}


const arr = Object.keys(usersData)

const usersList = arr.map(function (key) {
	const value = {
		...usersData[key],
		name: key[0].toUpperCase() + key.slice(1),
		online: true,
		age: CalculateAgeByBirthDate.call(usersData[key].birthDay),
		birthDay: formatDate.call(usersData[key].birthDay)
	}
	// value.name = key[0].toUpperCase().concat(key.slice(1));
	// value.age = Math.floor((new Date() - usersData[key].birthDay) / 31536000000)
	// value.online = true
	// const formatedstr = formatDate.call(usersData[key].birthDay)
	// value.birthDay = formatedstr
	return value
})

console.log("1: ", usersList)



// function get(key) {
// 	key = this.name
// 	return key
// }

// function set(key, name = "Narek", age = "29") {
// 	key  = this
// 	this.name = name
// 	this.age = age
// 	return this.name, this.age
// }




function toggleOnline() {
	return this.online = !this.online; //false
}

function getValue(key) {
	return this[key];
}

function setValue(key, value) {
	if (key === 'id' || key === 'online') {
		return;
	}
	this[key] = value;
}

const usersInfo = usersList.map(function (elems) {
	const data =  {...elems};
	return {
		data,
		toggleOnline: toggleOnline.bind(data),
		getValue: getValue.bind(data),
		setValue: setValue.bind(data)
	}

})

console.log("2: ", usersInfo)





// 2. @st ays zangvaci stanal urish zangvac vori mej objectner en, vortex data-n henc et elementnern en yev kan function-ner
// 		2.1 getValue stanume stringov key argument u veradardznum e et object-i meji et keyov arjeq@
// 		2.2 setValue stanume stringov key yev inchvor value argumentner@
// 			u et objecti meji et keyov propsi arjeq@ poxum e et value-ov (baci, id yev online proper@)
// 		2.3 toggleOnline chi stanum argument, ayn true-n sarqum e false yev hakarak@
// 			u console.log e anum te et user@ online e kam offline
// 		2.4 hashvi areq ayn vor ayd bolor methodner@ chpetq e korcnen irenc this-er@
// 			kap chuni te vonc kkanchenq irenq ashxatelu en miayn ayn data-i het vori hamar naxatesvel en
// 	[
// 		{
// 			data: (naxord arrayi element@)
// 			getValue,
// 			setValue
// 			toggleOnline
// 		}
// 		....
// 	]
// 	[															|	[
// 		{														|		{
// 			id,												|			data: (naxord arrayi element@),
// 			name: john,										|			getValue,
// 			age: (calculated by birthDay),			|			setValue
// 			birthDay: (type string)						|			toggleOnline
// 			online: true									|		},
// 		},														|		...
// 		...													|	]
// 	]															|
// */