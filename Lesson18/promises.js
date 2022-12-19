// const user = {
// 	"id": 1,
// 	"name": "Leanne Graham",
// 	"username": "Bret",
// 	"email": "Sincere@april.biz",
// 	"address": {
// 		"street": "Kulas Light",
// 		"suite": "Apt. 556",
// 		"city": "Gwenborough",
// 		"zipcode": "92998-3874",
// 		"geo": {
// 			"lat": "-37.3159",
// 			"lng": "81.1496"
// 		}
// 	},
// 	"phone": "1-770-736-8031 x56442",
// 	"website": "hildegard.org",
// 	"company": {
// 		"name": "Romaguera-Crona",
// 		"catchPhrase": "Multi-layered client-server neural-net",
// 		"bs": "harness real-time e-markets"
// 	}
// }

// function cleanUserObj(user, callback) {

	

// 	callback(user)
// }

// function doSomething(callback) {
// 	callback()
// }

// // res => resolve // success promise
// // rej => reject // failor promise
// const prom = new Promise((res, rej) => {
// 		setTimeout(() => {
// 			rej({ ...user })
// 		}, 1000)
// 	}).then(newUser => {
// 		const [firstName, lastName] = newUser.name.split(' ');
// 		newUser.firstName = firstName;
// 		newUser.lastName = lastName;
// 		delete newUser.name;
// 		return newUser
// 	}).then(otherNewUser => {
// 		const info = {}
// 		info.email = otherNewUser.email;
// 		info.phone = otherNewUser.phone;
// 		delete otherNewUser.email;
// 		delete otherNewUser.phone;
// 		otherNewUser.info = info
// 		return otherNewUser;
// 	}).then(result => {
// 		delete result.website;
// 		delete result.address;
// 		delete result.company;
// 		return result;
// 	});

// console.log(prom)


// const promise = new Promise((res, rej) => {
// 		// rej => throw
// 		setTimeout(() => {
// 			res(5)
// 			// res(5)
// 		}, 1000)
// 	})
// 	.then(
// 		result => {
// 			console.log("then 1: ", result)
// 			throw 1
// 			// return result + 1
// 		},
// 		err => {
// 			console.log("THEN ERROR: ", err);
// 			return err
// 		}
// 	)
// 	.catch(err => {
// 		console.log("CATCH: ", err)
// 		return err
// 	})
// 	.then(result => {
// 		console.log("then 2: ", result)
// 	}).finally(() => console.log("PRCAV"))

const delayResolve = (ms, ...args) => {
	return new Promise((res, rej) => {
		console.log("delayResolve: ", ms)
		setTimeout(res, ms, ...args)
	})
}

const delayReject = (ms, ...args) => {
	return new Promise((res, rej) => {
		console.log("delayReject: ", ms)
		setTimeout(rej, ms, ...args)
	})
}

// delayResolve(2000, { id: 1 })
// 	.then(obj => {
// 		delayResolve(3000, { ...obj, workPlace: "Isakov" })
// 			.then((userObj) => {
// 				console.log(userObj)
// 			})
// 	})

const myAsync = async () => {
	try {
		const obj = await delayResolve(2000, {id: 1})
		const obj1 = await delayReject(30, "error")
		return obj1
	} catch (error) {
		console.log(error)
	}
}

myAsync()