// 1) Inch ktpvi tsragri ahxatanqic hetoi, bacatreq inchu

Promise.reject()
	.then(
		data => console.log('ok'),
		data => console.log('error')
	)



// Պատասխան՝ Կտպի error, բայց դա կապ չունի rejecti հետ ու ինքը չի հասկանոմ  errora թե չէ 2րդ տողում ինչ գրենք data-ի մեջ դա էլ ցույց կտա։ 



// 2) Inch ktpvi tsragri ahxatanqic hetoi, bacatreq inchu

Promise.resolve()
	.then(data => {
		throw new Error('Api Error');
		return 1;
	})
	.then(data => console.log('ok'))
	.catch(error => {
		console.log(error.message);
		return "2";
	})
	.then(data => {
		console.log(data);
	})

// Պատասխան՝  Առաջինը կտպի Api Error,որոհվետև առաջի then ով 
// պետք է ստանանք resolve -ից դրական պատասխան, բայց քանի որ throw - enq անում,
// հաջորդ քալլում cath-ով բռնումա այդ error-ը և վերադարձնում 2;
// դրանից հետո կոդը սկսում է նորմալ աշխատել ու cathi return-ի արդյունքը անցնում է վերջի then-ին



// 3) Inch ktpvi tsragri ahxatanqic hetoi, bacatreq inchu

Promise.resolve()
	.then(() => {
		throw new Error('Api Error');
	})

setTimeout(() => {
	console.log('setTimeout');
}, 1000);


// Պատասխան՝  Առաջինը Api error կտպի, իսկ դրանից հետո settimout-ը կաշխատի ու կտպի settimout-բառը:
// Քանի որ settimout-ը call steck-է ընկնում միայն ամենավերջում, դրանից առաջ եղած բոլոր գործողությունները կկատարվեն իրենից առաջ:


// 4) Inch ktpvi tsragri ahxatanqic hetoi, bacatreq inchu
Promise.resolve()
	.then(() => console.log(1))
	.catch(() => console.log(3))
	.then(() => { console.log(2); throw new Error(); })
	.then(() => console.log(4))
	.then(() => console.log(4))

Promise.resolve()
	.then(() => console.log(11))
	.then(() => { console.log(12); throw new Error(); })
	.catch(() => console.log(13))
	.catch(() => console.log(14))
	.then(() => console.log(15))


// Պատասխան՝  Sa Nayel em consolov yes sxal ei patkeracnum bayc nayeluc heto haskaca: Qani vor 
// araji u erkrord promisy kpac en irar u anum en nuyn gorcy nerqevum arajacac error@ 
// verevi cathov karox enq brnel u ktpi 1 11 12 2 13 15



// 5) Inch ktpvi tsragri ahxatanqic hetoi, bacatreq inchu

const serj = Object.create({ name: 'Serj' })  // create-ի առաջին արգումենտը որոշում է prototype
const john = Object.create(serj)

console.log(john) // Կտպի դատարկ օբեկտ, որի prototype կլինի name: 'Serj', կվերցնի serji-ի prototype-ը
console.log(john.name) // կտպի անունը, իրա prototypic կօգտվի ու կտպի 'Serj'

Object.setPrototypeOf(john, { name: 'Daron' })  //setPrototypeOf-ը փոխում է կամ դնում նոր prorotype, այս դեպքում  

console.log(john)    // prototypy -ը կփոխի կսարքի name: 'Daron'
console.log(john.name) // կտպի անունը, կվերցնի արդեն  իրա փոխված prototypic ու կտպի 'Daron'


/* 6) Grel class Container, vori instance-ner@ kunena get u set methodner (Native Map-i pes) */
/*
	6.1) set methodov petq e
	pahpanvi key - value inchvor mi dzev ayd instance-i mej, isk get-ov petq e veradardzvi trvac
	key-i tak gtvox arjeq@: Ete aydpisi key chlini, petq e Error arajana
*/


class Container {
	set(key, value) {
		this.key = key
		this.value = value
		let obj = {
			[key]: value
		}
		console.log(obj)
	}
	get(arg) {
		if (arg === this.key) {
			console.log(this.value)
		} else {
			throw new Error(`Sorry, there is no ${arg} in n`)
		}
	}

}


const container = new Container()
container.set('key', 'value')
container.get('key') // => 'value'


container.get('key2') // => 'Sorry, there is no key2 in 


/*
	6.2) (ete naxord@ stacvi, partadir pordzeq sa grel)
	ete vorpes value poxancvi object, petq e hnaravor lini nra meji arjeq@ stanal mek hramanov,
	orinak` key-i tak gtvox arjeq@: Ete aydpisi key chlini, petq e Error arajana

Անդ ջան ունիվերսալ չկարեցա սարքեմ, լրիվ պատկերացնում ես սա պիտի մի հատ ֆունկցիա անի էնքան ժամանակ քանի դեռ value-ն օբեկտա պիտի բացի,
բայց չեղավ ախպերս, սենց աշխատումՃՃ

*/




// Tarberak 1 kisat  27 stanum em bayc  Errori pahy voch mi dzev chem karum stanam 

class Container2 {
	set(keys, value) {
		this.keys = keys
		this.value = value

	}
	get(value) {
		getProp(this.value)
		function getProp(o) {
			for (let prop in o) {
				if (typeof (o[prop]) === 'object') {
					getProp(o[prop]);

				} else {
					console.log(o[prop])
				}
			}
		}
	}
}


const container2 = new Container2()
container2.set('obj', {
	user: {
		personalInfo: {
			age: 27
		}
	}
})
container2.get('obj.user.personalInfo.age') // => 27
container2.get('obj.user.WRONG_KEY.age') // => 'Sorry, there is no WRONG_KEY in here'


/*
	7) Greq class Song, vor@ kstana artisti anun@ yev ergi anun@: Ays classi ekzemplyar@ (instance) petq e unena
	setListeners method@, vor@ stanum e zangvac stringic baxkacac (lsoxneri anuner@): Ays method@ veradardznum e
	ayn mardkanc tiv@, voronq araji angam en lsum ayd erg@: Orinak`
	Անդ ջան չկարեցա չեմ ջոկում ոնց instancner-ը իրար հետ համեմամեմ։ Առաջին զանգվածը չեմ կարում ինչ-որ տեղ պահեմ որ իրա հետ համամետեմ։
*/




// class Song {
// 	constructor(name, songname) {
// 		this.name = name
// 		this.songname = songname
// 	}
// 	setListeners(array) {
//     console.log(array)

// 	}
// }




// const crawling = new Song('Crawling', 'Linkin Park');
// crawling.setListeners(['Karen', 'Hayk', 'Narek', 'Armen', 'Narine']); // => 5
// crawling.setListeners(['Armine', 'Taron', 'Hayk']); // => 2
// crawling.setListeners(['Hayk', 'Karen', 'Alla', 'Nona']) // => 2



// class Song {
// 	constructor(name,song){
// 		this.name = name
// 		this.song = song
// 		dataName = []
// 		myData = []
// 	}
// 	setListeners([]){
// 		if(this.name!=dataName){
// 			myData = this.name
// 		}
// 	}
// }
// const crawling = new Song('Crawling', 'Linkin Park')
// crawling.setListeners(['Karen', 'Hayk', 'Narek', 'Armen', 'Narine'])