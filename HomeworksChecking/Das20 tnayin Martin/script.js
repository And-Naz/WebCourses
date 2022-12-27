
const name1 = document.getElementById("name")
const big = document.getElementById("big")
const body = document.body
const display = document.getElementById('display')


const toUl = children => `${children}`
const toLi = user => `
	<div class="big">
		<div class="img">
			<img src="${user.img}" alt="img" />
		</div>
		<div class="user">
			<div class="userinfo">
				<div class="name">${user.name}</div>
				<div class="email">${user.email}</div>
			</div>
			<div class="post">${user.post}</div>
			<div class="coment">${user.coment}</div>
		</div>
	</div>
`


const url = "https://jsonplaceholder.typicode.com/users"
const method = "GET";
const xhr = new XMLHttpRequest();
xhr.open(method, url, true)
xhr.onload = () => {
	const usersArray = JSON.parse(xhr.responseText)
	console.log(usersArray);
	fetch("https://jsonplaceholder.typicode.com/albums")
	.then(respons=>respons.json())
	.then(data=>console.log(data))
	// usersArray.finde
	// ....
	const children = usersArray.reduce((acc, user) =>{
		return acc + toLi(user)
	},"")
	display.innerHTML += toUl(children)
	
}
xhr.send()

