/* Առաջադրանք 1

	1) Greq "Book" class, vori instance-ner@ kunenan "author" yev "title" property-ner, u "getTitle" u "getAuthor" method-ner@,
	voronq kveradardznen "author" yev "title" property-ner@ ays tesqov:
		geTitle => 'Title: ....'
		getAuthor => 'Author: ...':
	Orinak Harry Potter girq@ stexcenq HP anunov
	
	HP.title => "Harry Potter"
	HP.author => "J.K. Rowling"
	HP.getTitle() => "Title: Harry Potter"
	HP.getAuthor() => "Author: J.K. Rowling"
*/



// Պատասխան 1` 

class Book {

	constructor(author, title) {
		/* sranq petqa drsic dynamic stananq */
		// this.tittle = "Harry Potter"
		// this.author = "J.K. Rowling"
		this.author = author; 
		this.title = title;
	}
	getTitle() {
		return 'Title: ' + this.title
	}
	getAuthor() {
		return 'Author: ' + this.author
	}

}

// const HP = new Book("Harry Potter", "J.K. Rowling")
// console.log(HP.title) //
// console.log(HP.author)
// console.log(HP.getTitle())
// console.log(HP.getAuthor())
// console.log(HP instanceof Book)


// Կոդը չգիտեմ լավ եմ թե վատ, բայց աշխատողա)



//  Առաջարդանք 2
// 	2) գրեք SimpleCalculator կլասս, որը կունենա add, subtract, multiply ու divide մեթոդները։ Օրինակ՝

// Պատասխան 2` 
class SimpleCalculator {
	add(num1, num2) {
		return num1 + num2
	}
	subtract(num1, num2) {
		return num1 - num2
	}
	multiply(num1, num2) {
		return num1 * num2
	}
	divide(num1, num2) {
		return num1 / num2
	}

}

// const simpleCalculator = new SimpleCalculator()
// console.log(simpleCalculator.add(10, 5)); // return 15
// console.log(simpleCalculator.subtract(6, 1)); // return 5
// console.log(simpleCalculator.multiply(4, 3)); // return 12
// console.log(simpleCalculator.divide(20, 10)); // return 2

// Կոդը չգիտեմ լավ եմ թե վատ, բայց աշխատողա)



//  Առաջադրանք 3

// 	3) Greq "Calculator" class, vor@ kunena "SimpleCalculator"-i pes
// 	"add", "subtract", "multiply", "divide" methodner@ yev
// 	"result" property-n yev "clear" maqrelu method@
// 	aynpes vor class-i instance stexceluc naxnakan arjeq karox enq tanq, isk heto
// 	amen gorcoxutyunner karven dra het,
// 	resultov karox enq verjnakan arjeq@ tesnenq
// 	isk clear-ov maqrenq kam resulti arjeq@ poxenq
// 	cankacac methodic heto karox enq kanchenq urish@

// Պատասխան 3` 

	class Calculator {
		constructor(initialResult = 0) { /* ste arj iresult@ poxel initialResult-i */
			this.result = initialResult
		}
		/* amen function petqa this return ani vor hnaravor lini chaining anel@ */
		multiply(a) {
			this.result *= a;
			return this;
		}
		add(a) {
			this.result += a;
			return this;
		}
		divide(a) {
			this.result /= a;
			return this;
		}
		subtract(a) {
			this.result -= a;
			return this;
		}
		clear(initialResult = 0) { // ste el petq avelanar vor reset arver konkret value-i
			this.result = initialResult;
			return this;
		}
	}
	

	// const calculator = new Calculator(10)
	// 							.multiply(5)
	// 							.add(20)
	// 							.divide(2)
	// 							.subtract(5)
	
	// console.log(calculator.result); // 30
	// calculator.clear(0);
	// console.log(calculator.result); // 0

// Կոդը չգիտեմ լավ եմ թե վատ, բայց աշխատողա)



// Առաջադրանք 4 

// 4) Trvac e 3 object Bacatreq irenc tarberutyunner@: Inch klini ete irancinc kanchenq toString metod@, yev bacatreq te inchu

// const obj1 = Object.create(Object.prototype);
// const obj2 = Object.create({});
// const obj3 = Object.create(null);

// obj1.toString();
// obj2.toString();
// obj3.toString();


// Պատասխան 4՝

// Առաջին դեպք
// const obj1 = Object.create(Object.prototype);
// obj1.toString();

// Սարքում է նոր օբյեկտ, որի մեջ կլինեն այն բոլոր prototype-րը, որոնք հատուկ են սովորական օբյեկտին,
// բայց երբ obj1.toString()-ը կանչենք չի կարա string անի ու կտպի տվյալ օբեկտի տիպը stringi տեսքով
// [object object] Google եմ արել էս օրինակը լռիվ հասկացել

//sarquma nor obekt obekti prototayperov
// esi sovorakan objectna {} erb vor grum einq
// inq@ chuni toString baic ira proto-n uni u tpuma dra hashvin

// Երկրորդ դեպք
// const obj2 = Object.create({});
// obj2.toString()

// Այս դեպքում մենք օբեկտին անմիջապես prototype չենք տալիս ինքը իրա prototype ի մեջ չի գտնի, բայց հիմնական օբեկտից ժառանգած կլինի բոլոր հատկությունները ու կտա էլի օբեկտի տիպը stringi տեսքով  [object object] 

// sarquma datark object vori proton ira pes datark objecta baic ira proto-n Object.prototype-na 
// inq@ chuni, ira proto-n el chuni baic ay proto-i proton uni toString u tpuma dra hashvin


//  Երրորդ դեպք
// const obj3 = Object.create(null);
// console.log(obj3.toString())

// Այս դեպքում կտպի որ նման ֆունկցիա չկա, որովհետև object Create() առաջին պառապետրով որոշում ենք prototype,
// ու եթե գրում ենք null հետևեաբար կհասկանա prototype չունի ու կասի որ նման (մեթոդ) ֆունկցիա չկա:

// sarquma datark object vor@ proto chuni
// inq@ chuni toString proto-el chuni usti chka etenc method dra hamar errora talis






// 5) Inch ktpvi konoslum kodi ashxateluc heto yev inchu


// Google եմ արել video նայել, բայց մի հատ երեի դոև էլ բացատրես Անդ ջան))





// console.log({}.prototype === Object.getPrototypeOf({}));
// Պատասխան՝ false: Օբեկտները prototype չունեն դրա համար կտա undefined, իսկ proto օբեկտը ունի
// Object.getPrototypeOf({}) դա __proto__-ի նոր գրելաձևնա: Proto-ն հղումնա դեպի prototype-ի օբյեկտ

// function Builder() {}
// console.log(Builder.prototype === Object.getPrototypeOf(Builder))
// Պատասխան՝ false: 2 prototip իրար հավասր չեն կարող լինել
// xi?


// function Worker() {}
// console.log(Builder.prototype === Worker.prototype)
// Պատասխան՝ false: Քանի որ յուրաքանչյուր ֆունկցիա ունի իրա առանձնահատուկ prototype-ը։
// Իրանց prorotype-երը լռիվ առանձին օբեկտներ են



// const age = 27
// console.log(age.prototype === Number.prototype)
// Կտպի false քանի որ երբ պարզ տիպի վրայա ման գալիս prototype չկա

// baic ste object wrapinga linum

// console.log(Object.getPrototypeOf(age) === Number.prototype)
// Կտպի true։ Էս դեպքում age -ին դիմումա որպես օբյեկտ հետևեաբար, age-ը օբեկտա դառնում New Number-ի միջոցով
// դրա համար կտա true

// const man = new Builder()
// console.log(Object.getPrototypeOf(man) === Builder.prototype)
// Կտպի true: Ոնց որ ասի հղում ունեմ դեպի էն  օբեկտ որից ծնվելա։ 


// class HouseBuilder extends Builder {}
// const otherMan = new HouseBuilder()
// console.log(Object.getPrototypeOf(otherMan) === Builder)
// console.log(otherMan.constructor === Builder)
// console.log(otherMan.constructor === HouseBuilder)

// console.log(Object.getPrototypeOf(HouseBuilder))

