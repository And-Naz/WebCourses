let div = document.getElementById("cardDiv")
let con = 0

const serverUrl = "https://jsonplaceholder.typicode.com/users";

const method = "GET";
const xhr = new XMLHttpRequest();
xhr.open(method, serverUrl, true)

xhr.onload = () => {
	fetch("https://jsonplaceholder.typicode.com/photos").then((res) => { return res.json() })
		.then((get) => {
			fetch("https://jsonplaceholder.typicode.com/posts").then((res2) => { return res2.json() })
				.then((post) => {
					fetch("https://jsonplaceholder.typicode.com/posts").then((res2) => { return res2.json() })
						.then((comments) => {
							for (let index = 0; index < 9; index++) {
								const usersArray = JSON.parse(xhr.responseText)
								for (let i = 0; i <= usersArray.length; i++) {
									div.innerHTML += `
										<div id='bigbox'>
											<img class="card" src="${get[con].thumbnailUrl}">
											<div id="user">
												<div id="user-name-mail">
													<div id="username">${usersArray[con].name}</div>
													<div id="usermail">${usersArray[con].email}</div>
												</div>
												<div id="posts">${post[con].title}</div>
												<div id="comments">${comments[con].body}</div>
											</div>
										</div>
									`;
									con = con + 1
								}
							}
						})
				})
				.catch((error) => {
					console.log(error)
				})

		})
}



xhr.send();