// // // Observer
// class CustomEvent {
// 	constructor(type, payload) {
// 		this.type = type;
// 		this.payload = payload;
// 	}
// }

// class CustomObserver {

// 	eventsList = {}

// 	addEventListener(eventType, callback) {
// 		if (!Array.isArray(this.eventsList[eventType])) {
// 			this.eventsList[eventType] = []
// 		}
// 		this.eventsList[eventType].push(callback)
// 	}

// 	dispatchEvent(event) {
// 		if (!Array.isArray(this.eventsList[event.type])) { return; }

// 		this.eventsList[event.type].forEach(callback => {
// 			callback(event);
// 		});
// 	}
// }


document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById("1")
	btn.addEventListener("click", (e) => console.log(e))
	btn.addEventListener("click", () => console.log('2'))
	btn.addEventListener("click", () => console.log('3'))
	btn.addEventListener("click", () => console.log('4'))
	btn.addEventListener("mouseover", () => console.log('mouseover'))
})