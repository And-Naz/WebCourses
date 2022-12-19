const user = {
	"id": 1,
	"name": "Leanne Graham",
	"username": "Bret",
	"email": "Sincere@april.biz",
	"address": {
		"street": "Kulas Light",
		"suite": "Apt. 556",
		"city": "Gwenborough",
		"zipcode": "92998-3874",
		"geo": {
			"lat": "-37.3159",
			"lng": "81.1496"
		}
	},
	"phone": "1-770-736-8031 x56442",
	"website": "hildegard.org",
	"company": {
		"name": "Romaguera-Crona",
		"catchPhrase": "Multi-layered client-server neural-net",
		"bs": "harness real-time e-markets"
	}
}


function getUser(callback1 = console.log) {
	// Request
	setTimeout(callback1, 1000, { ...user })
}

function splitName(user, callback2 = console.log) {
	// split user long name to first/last names
	const [firstName, lastName] = user.name.split(' ');
	// asign first/last names
	user.firstName = firstName;
	user.lastName = lastName;
	// delete unnesessary fields
	delete user.name;

	callback2(user)
}

function mutateObject(user, callback3 = console.log) {
	const info = {}
	info.email = user.email;
	info.phone = user.phone;
	delete user.email;
	delete user.phone;
	user.info = info
	callback3(user)
}

function cleanUserObj(user, callback) {

	delete user.website;
	delete user.address;
	delete user.company;

	callback(user)
}

function doSomething(callback) {
	callback()
}

getUser(user => {
	splitName(user, obj => {
		mutateObject(obj, mutated => {
			cleanUserObj(mutated, () => {
				doSomething(() => {
					doSomething(() => {
						doSomething(() => {
							doSomething(() => {
								doSomething(() => {
									doSomething(() => {
										doSomething(() => {
											doSomething(() => {
												document.write(mutated.username)
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
	})
})