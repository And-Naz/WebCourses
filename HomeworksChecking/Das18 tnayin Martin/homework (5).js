// 1) Inch ktpvi tsragri ahxatanqic hetoi, bacatreq inchu

// Promise.reject()
// 	.then(
// 		data => console.log('ok'),
// 		data => console.log('errrrrrror'),
// 	)
// ktpi ekrord@ ` then@ @ndunuma 2 argument(function)` arajin@ ira resolved fn, ekrord@ rejected fn na:
// es depqum rejectov erora galis dra hamar then i mechi ekrord functiona ashxatum:


// 1.1)
// Promise.resolve()
// 	.then(
// 		data => console.log('ok'),
// 		data => console.log('errrrrrror'),
// 	)
// isk es jamanak tpuma ok@ vorovhetwv resolve ov galista drakan patasxan u ashxatuma theni mechi arajin argument@(function@)
  
// 1.2)
// Promise.resolve()
// 	.catch(
// 		data => console.log('ok'),
// 		data => console.log('errrrrrror'),
// 	)
// resolve talisa drakan patasxan ,isk catch@ stanum er rejectic arjeq@, dra hamar ban chi tpi

// 1.3)
// Promise.reject()
// 	.catch(
// 		data => console.log('ok'),
// 		data => console.log('errrrrrror'),
// 	)
// ktpi ok, vorovhetev  kgtni arajin catch um tvat function@ u ktpi




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

	// ktpi Api Error` throw ov menq qcum enq eror, erroric heto then@ chi ashxatum,
	// heto tenuma catch@ u returna anum 2, drakan patasxanic heto vekaluma ir naxordoxi ardyunq@ u tpuma 2
	// 1.Api Error 2. 2


// 3) Inch ktpvi tsragri ahxatanqic hetoi, bacatreq inchu

// Promise.resolve()
// 	.then(() => {
// 		throw new Error('Api Error');
// 	})

// setTimeout(() => {
// 	console.log('setTimeout');
// }, 1000);

// arajin@ ashxatuma promis@` tpuma trow ov qcat "Api Error@" microtackeri mejic,  heto nor "setTimeout@"


// 4) Inch ktpvi tsragri ahxatanqic hetoi, bacatreq inchu
// Promise.resolve()
// 	.then(() => console.log(1))
// 	.catch(() => console.log(3))
// 	.then(() => { console.log(2); throw new Error();})
// 	.then(() => console.log(4))
// 	.then(() => console.log(4))

	// arajin ktpi 1` drakan patasxana ekel resolveov then el ashxatuma tpuma "1"
	//catch@ chi ashxatum ,vorovhetev resolva ekel, chi tpum vochmi ban
	//hajord tena ashxatum tpuma "2", u qcum enq throw ov mer error@, beruma error
	//hajord then@ chi ashxatum vorvhetev then@ vekalum er ira naxord theni arjeq@, es depqum eroer er dra hamar chi tpum vochmi ban
	//nuy tramabanutyamb verjin@

// Promise.resolve()
// 	.then(() => console.log(11))                                        
// 	.then(() => { console.log(12); throw new Error(); })
// 	.catch(() => console.log(13))
// 	.catch(() => console.log(14))
// 	.then(() => console.log(15))

	// erkus@ irar het i depqum` aragin then@ kashxati u ktpi 1, catch@ chi ashxatum qcuma ekrord promisi mej tpuma arajinthen@ 11, ashxatuma 2 then@ `tpum 12
	//12 ic heto tenum acatch helnuma verevi promisi thena ashxatum u tpum 2, u talisa error ashxatuma taki promisi catch u tpum 13, 15 ??????  u 78 toxi eror@ ????


// 5) Inch ktpvi tsragri ahxatanqic hetoi, bacatreq inchu
// const serj = Object.create({ name: 'Serj' })
// const john = Object.create(serj)

// console.log(john)                                //obj vori mej eli obja vori mejel name: "Serj" anumov
// console.log(john.name)							// et obekti name - Serj

// Object.setPrototypeOf(john, { name: 'Daron' })

// console.log(john)                           	    //  arden nor obj john i prototayperov u "Daron "   anunov
// console.log(john.name)							//   arden "Daron anunov"


/* 6) Grel class Container, vori instance-ner@ kunena get u set methodner (Native Map-i pes) */
/*
	6.1) set methodov petq e
	pahpanvi key - value inchvor mi dzev ayd instance-i mej, isk get-ov petq e veradardzvi trvac
	key-i tak gtvox arjeq@: Ete aydpisi key chlini, petq e Error arajana
*/
	// class Container {
	// 	set(key,value){
	// 		this.key=key
	// 		this.value=value
	// 		let res= {
	// 			key:value
	// 		}
	// 	}
	// 	get(arg){
	// 		if(arg===this.key){
	// 			return true
	// 		}else{
	// 			throw new Error("ERROR")
	// 		}
	// 	}

	// }
	// container.set(a,2)


// function Container() { }
// const container = new Container()
// container.set('key', 'value')
// container.get('key') // => 'value'
// container.get('key2') // => 'Sorry, there is no key2 in 

/*
	6.2) (ete naxord@ stacvi, partadir pordzeq sa grel)
	ete vorpes value poxancvi object, petq e hnaravor lini nra meji arjeq@ stanal mek hramanov,
	orinak` key-i tak gtvox arjeq@: Ete aydpisi key chlini, petq e Error arajana
*/
// container.set('obj', {
// 	user: {
// 		personalInfo: {
// 			age: 27
// 		}
// 	}
// 	const myPromis = new Promise(res,rej){
// 		if( res ===obj)
// 	}

// })
// container.get('obj.user.personalInfo.age') // => 27
// container.get('obj.user.WRONG_KEY.age') // => 'Sorry, there is no WRONG_KEY in here'

/*
	7) Greq class Song, vor@ kstana artisti anun@ yev ergi anun@: Ays classi ekzemplyar@ (instance) petq e unena
	setListeners method@, vor@ stanum e zangvac stringic baxkacac (lsoxneri anuner@): Ays method@ veradardznum e
	ayn mardkanc tiv@, voronq araji angam en lsum ayd erg@: Orinak`
*/
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