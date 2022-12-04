// // const obj = {
// // 	id: 1,
// // 	name: 'John',
// // 	address: {
// // 		country: 'Armenia',
// // 		city: 'Yerevan',
// // 		street: 'Minsk'
// // 		// x: 1000
// // 	}
// // }

// // const { id } = obj; // obj.id = 1 => id = 1
// // let _id = obj.id; // obj.id = 1 => _id = 1
// // _id = 10; // obj.id = 1 => _id = 10
// // obj.id = 0 // obj.id = 0
// // const { id : myId } = obj; // obj.id = 0 => myId = 0

// // // obj.address
// // const { address: Poghos } = obj; // const address = obj.address;
// // const address2 = obj.address;

// // Poghos.x = 1000;

// // const { address: { city: c }, ...rest } = obj;

// // console.log(obj);

// // const array = [0, 1, { id: 1 }, function() {}];

// // const { length } = array;
// // const [ araji, erkrod, erord, ...sraMej ] = array;
// // const [ /* miban */ , /* miban */ , myVariable ] = array;

// const gameType = {
// 	football: 1,
// 	basketball: 2,
// 	tenis: 4,

// 	chess: 8,
// 	horsRacing: 16,
// 	car: 32
// 	// 64
// 	// 128
// 	// 256


// }

// function getName(type) {
// 	return (
// 		type === gameType.football
// 			? "football"
// 			: type === gameType.basketball
// 				? "basketball"
// 				: type === gameType.tenis
// 					? "tenis"
// 					: type === gameType.chess
// 						? "chess"
// 						: type === gameType.horsRacing
// 							? "horsRacing"
// 							: type === gameType.car
// 								? "car"
// 								: null
// 								/*
// 									type === gameType.car
// 										? "car"
// 										: ""
// 								*/
// 	)
// }

// function getGame () {
// 	return Math.ceil(Math.random() * Object.keys(gameType).length)
// }

// const target = {
// 	id: 1
// 	// name
// }

// const handler = {
// 	get: function(target, source, proxyObj) {
// 		if (source in target) {
// 			return target[source]
// 		}
// 		return 1000000000;
// 	}
// }


// const proxy = new Proxy(target, handler);
// // console.log(proxy['id'])
// // console.log(proxy.name)


// const gameName = new Proxy(
// 	{
// 		[gameType.football]: 'football',
// 		[gameType.basketball]: 'basketball',
// 		[gameType.tenis]: 'tenis',
// 		[gameType.chess]: 'chess',
// 		DEFAULT: 'just game'
// 	},
// 	{
// 		get: function(target, source) {
// 			if (source in target) {
// 				return target[source]
// 			}
// 			return target.DEFAULT;
// 		}
// 	}
// )

// const gamePeriod = new Proxy(
// 	{
// 		[gameType.tenis]: '5 rope',
// 		[gameType.chess]: '6 rope',
// 		DEFAULT: '2 rope'
// 	},

// 	{
// 		get: function(target, source) {
// 			if (source in target) {
// 				return target[source];
// 			}
// 			return target.DEFAULT;
// 		}
// 	}
// )


function sendMessage(user, value) {
	console.log(`${user} is ${value ? 'online' : 'offline'}`);
}

const usersOnlineList = new Proxy(
	{
		john: true,
		tom: true,
		stan: true,
		alex: true,
	},
	{
		set: function(target, source, value) {
			target[source] = value;
			sendMessage(source, value)
		}
	}
)

function Process() {
	// usersOnlineList
	//....proxy..../source/value
	usersOnlineList.tom = false

	usersOnlineList.john = false
	usersOnlineList.tom = true
}


Process()

// Object.keys(usersOnlineList)
// 	.forEach(key => sendMessage(key, usersOnlineList[key]))