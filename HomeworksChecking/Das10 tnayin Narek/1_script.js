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

function formatDate() {
	// day ու month let-ov vorohvehetev arjeqnery kara poxvi @st if-i constov chi toxum
	let day = this.getDate()
	if (day < 10) {
		day = "0" + day
	}
	let month = this.getMonth()
	if (month < 10) {
		month = "0" + month
	}
	if (month === "00") {
		month = "12"
		// դեկտեմբերը 00 էր հասկանում դրա համար if em grel
	}
	const year = this.getFullYear()
	return `${year}-${month}-${day}`
}


const arr = Object.keys(usersData)

const usersList = arr.map(function (key) {
	const value = usersData[key]
	value.name = key[0].toUpperCase().concat(key.slice(1));
	value.age = Math.floor((new Date() - usersData[key].birthDay) / 31536000000)
	value.online = true
	const formatedstr = formatDate.call(usersData[key].birthDay)
	value.birthDay = formatedstr
	return usersData[key]


})

console.log(usersList)