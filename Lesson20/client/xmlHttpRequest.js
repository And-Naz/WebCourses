// const siteApi = "http://localhost:8000/"


// function sendXHR(method = 'GET', callback = console.log, body) {
// 	const xhr = new XMLHttpRequest()
// 	xhr.open(method, siteApi + "?timestamp=" + Date.now(), true)
// 	if (method === "POST") {
// 		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// 	}
// 	xhr.addEventListener('load', () => callback(xhr.responseText))
// 	xhr.send(body)
// }

// const fn = response => { console.log(JSON.parse(response)) }

// sendXHR('GET', response => {
// 	console.log(JSON.parse(response))
// 	sendXHR(
// 		'POST',
// 		response => {
// 			console.log(JSON.parse(response));
// 			sendXHR('GET', fn);
// 		},
// 		JSON.stringify({id: 1000, name: 'Harry'})
// 	)
// });

// function sendPromiseXHR() {
// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest()
// 		xhr.open('GET', siteApi + "?timestamp=" + Date.now(), true)
// 		xhr.addEventListener('load', () => {
// 			resolve(xhr.responseText)
// 		})
// 		xhr.addEventListener('error', () => {
// 			reject(xhr.responseText)
// 		})
// 		xhr.send()
// 	});
// }