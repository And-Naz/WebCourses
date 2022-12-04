// // Tag Name
// console.log("getElementsByTagName: ",
// 	document.getElementsByTagName("div")
// );

// console.log("querySelector: ",
// 	document.querySelector("div")
// );

// console.log("querySelectorAll: ",
// 	document.querySelectorAll("div")
// );

// // Class
// console.log("getElementsByClassName: ",
// 	document.getElementsByClassName("text")
// )

// console.log("querySelector: ",
// 	document.querySelector(".text")
// )

// console.log("querySelectorAll: ",
// 	document.querySelectorAll(".text")
// )

// // Id
// console.log("getElementById: ",
// 	document.getElementById("div1")
// )

// console.log("querySelector: ",
// 	document.querySelector("#div1")
// )

// // console.log("querySelectorAll: ",
// // 	document.querySelectorAll("#div1")
// // )


const h1_get = document.getElementsByTagName('h1')[0];
const h1_qs = document.querySelector('h1');

const div = document.getElementById('div2');


const strTag = `<span class="title">${10}</span>`;

// document.body.innerHTML = strTag
// div.innerText = strTag

const customSpan = document.createElement("span")
customSpan.innerText = 10;
customSpan.className="title";

const customSpan1 = document.createElement("span")
customSpan1.innerText = 10;
customSpan1.className="title";

// div.append(strTag)
// div.appendChild(strTag)

document.body.append(customSpan)
document.body.appendChild(customSpan1)

function alert1(params) {
	alert(1)
}

function alert2(params) {
	alert(2)
}

function clickFn() {
	alert1()
	alert2()
}

