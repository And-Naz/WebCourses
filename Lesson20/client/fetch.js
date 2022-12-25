const siteApi = "http://localhost:8000/";

let users = [];

async function getAll() {
	return fetch(siteApi)
		.then(res => res.json())
		.then(data => {
			users = data;
		})
}

async function getById(id) {
	return fetch(siteApi + "?id=" + id)
		.then(res => res.json())
		.then(data => {
			if (!users.find(u => u.id === data.id)) {
				users.push(data)
			}
			return data
		})
}

async function createUser(name) {
	const newUser = { name };
	return fetch(
			siteApi,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newUser)
			}
		)
		.then(res => res.json())
		.then(data => {
			return data
		})
}

async function deleteUser(id) {
	return fetch(
			siteApi + "?id=" + id,
			{
				method: 'DELETE'
			}
		)
		.then(() => {
			users = users.filter(user => user.id !== id)
			console.log(`User with id: ${id} hase been deleted!`)
		})
		.catch(() => `Invalid id: ${id}`)
}

async function updateUser(objForUpdate) {
	return fetch(
		siteApi,
		{
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(objForUpdate)
		}
	)
	.then(res => {
		const updatedUser =  res.json();
		const index = users.findIndex(user => user.id === updatedUser.id)
		if (index !== -1) {
			users[index] = updatedUser;
		}
	})
	.catch(error => console.log(`Can't update user, becouse ${error}`))
}

async function replaceUser(objForUpdate) {
	return fetch(
		siteApi,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(objForUpdate)
		}
	)
	.then(res => {
		const replacedUser =  res.json();
		const index = users.findIndex(user => user.id === replacedUser.id)
		if (index !== -1) {
			users[index] = replacedUser;
		}
	})
	.catch(error => console.log(`Can't replace user, becouse ${error}`))
}