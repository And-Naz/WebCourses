
const requestURL = "https://jsonplaceholder.typicode.com/users"

const xhr = new XMLHttpRequest()

xhr.open("GET", requestURL)
xhr.responseType = "json"
xhr.onload = () => {
	let users = xhr.response
	console.log(users)
	console.log(users)

	function createCard() {
		const requestURLforIMG = "https://jsonplaceholder.typicode.com/photos";

		const photos = fetch("https://jsonplaceholder.typicode.com/photos").then(data => data.json())
			.then((data) => {
				for (let i = 0; i < users.length; i++) {
					document.body.innerHTML += `
						<div class = "card">
							<div class="picture">
								<img src="${data[i].url}" alt="">
							</div>
							<div class="username">
								${users[i].name}
							</div>
							<div class="email">
								${users[i].email}
							</div>
							<div class="post">Possssst</div>
							<div class="comments">Hi , My name is Harutyun</div>
						</div>
					`


				}
			})
		// for (let i = 0; i < users.length; i++){
		//     document.body.innerHTML += `
		//     <div class = "card">
		//     <div class="picture"><img src="" alt=""></div>
		//     <div class="username">${users[i].name}</div>
		//     <div class="email">${users[i].email}</div>
		//     <div class="post">Possssst</div>
		//     <div class="comments">Hi , My name is Harutyun</div>
		//     </card>`


		// }
	}

	createCard()
}
xhr.send()


