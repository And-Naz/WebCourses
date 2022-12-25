const btn = document.getElementById('btn')

// GET // stanas
// POST // stexces
// DELETE // jnjes
// PATCH // update anes
// PUT // tex@ urish ban dnes

btn.addEventListener('click', () => {
	const display = document.getElementById('display')
	const toUl = children => `<ul>${children}</ul>`;
	const toLi = user => `<li>${user.id}) ${user.name}</li>`

	const serverUrl = "https://jsonplaceholder.typicode.com/users";
	const method = "GET";
	const xhr = new XMLHttpRequest();
	xhr.open(method, serverUrl, true)
	xhr.onload = () => {
		const usersArray = JSON.parse(xhr.responseText)
		const children = usersArray.reduce((acc, user) => {
			return acc + toLi(user);
		}, "")
		display.innerHTML += toUl(children)
	}

	// xhr.onreadystatechange = () => {
	// 	if (xhr.readyState === XMLHttpRequest.DONE) {
	// 		console.log(xhr.response)
	// 	}
	// }
	xhr.send();
})