/*
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
// Harc: proprtiner@ chkan u ashxatum en ??
class Book {
	constructor(author, title) {
		/* sranq petqa drsic dynamic stananq */
		// this.author = "J.K. Rowling"; 
		// this.title = "Harry Potter";

		this.author = author; 
		this.title = title;
	}
	getTitle() {
		return "Tille: " + this.title; /* : er@ moracel eir */
	}
	getAuthor() {
		return "Auter: " + this.author; /* : er@ moracel eir */
	}
}
// const HP = new Book("J.K. Rowling", "Harry Potter")
// console.log(HP.getAuthor());
// console.log(HP.title); 


/*
	2) գրեք SimpleCalculator կլասս, որը կունենա add, subtract, multiply ու divide մեթոդները։ Օրինակ՝

	class SimpleCalculator {
		

	}

	const simpleCalculator = new SimpleCalculator()
	simpleCalculator.add(10, 5); // return 15
	simpleCalculator.subtract(6, 1); // return 5
	simpleCalculator.multiply(4, 3); // return 12
	simpleCalculator.divide(20, 10); // return 2

*/

// harc: ste mots NaN a talis ?
// karoxa constructor@ kancheluc parametr ches tvel, pahanjum etenc er
// isk ete chtas this.a u this.b undefined en linum, isk undefined-i
// het matematikakan lyuboi gorcoxutyun NaN-a talis
/*
	ete esenc es kanchel urem chishta vor NaN-a
	const tmpSimpleCalculator = new SimpleCalculator()
	console.log(tmpSimpleCalculator.add())
*/
// class SimpleCalculator {
// 	constructor(a,b){
// 		this.a = a
// 		this.b = b
// 	}
// 	add(){
// 		return this.a + this.b
// 	}
// }

class SimpleCalculator {
	add(a,b){
		return a+b
	}
	subtract(a,b){
		return a-b
	}
	multiply(a,b){
		return a*b
	}
	divide(a,b){
		return a/b
	}
}
// const simpleCalculator = new SimpleCalculator()
// console.log(simpleCalculator.add(10, 5));
// console.log(simpleCalculator.subtract(6, 1)); 
// console.log(simpleCalculator.multiply(4, 3)); 
// console.log(simpleCalculator.divide(20, 10));

/*

	3) Greq "Calculator" class, vor@ kunena "SimpleCalculator"-i pes
	"add", "subtract", "multiply", "divide" methodner@ yev
	"result" property-n yev "clear" maqrelu method@
	aynpes vor class-i instance stexceluc naxnakan arjeq karox enq tanq, isk heto
	amen gorcoxutyunner karven dra het,
	resultov karox enq verjnakan arjeq@ tesnenq
	isk clear-ov maqrenq kam resulti arjeq@ poxenq
	cankacac methodic heto karox enq kanchenq urish@

	class Calculator {
		// ձեր կոդը
	}
	
	const calculator = new Calculator(10)
	calculator
		.multiply(5)
		.add(20)
		.divide(2)
		.subtract(5)
	
	console.log(calculator.result); // 30
	calculator.clear(0);
	console.log(calculator.result); // 0
*/

	class Calculator {

		/* ste xi es "calculator" anvanel, constructor peta liner */
		constructor(initialResult = 0){
			this.result = initialResult /* xi res? result */
		}
		clear(initialResult = 0){
			this.result = initialResult /* tex peta karenar reset aner u inchvor urish value hishver */
			return this
		}
		/* amen function petqa this return ani vor hnaravor lini chaining anel@ */
		add(a){
			this.result += a;
			return this;
		}
		subtract(a){
			this.result -= a;
			return this;
		}
		multiply(a){
			this.result *= a;
			return this;
		}
		divide(a){
			this.result /= a;
			return this;
		}
	}

	// const calculator = new Calculator(10);
	// calculator.add(5);
	// console.log(calculator.result);
	// console.log(calculator.clear(0))



	// 4) Trvac e 3 object Bacatreq irenc tarberutyunner@: Inch klini ete irancinc kanchenq toString metod@, yev bacatreq te inchu

	const obj1 = Object.create(Object.prototype);
	//console.log(obj1);
	//sarquma nor obekt obekti prototayperov
	// esi sovorakan objectna {} erb vor grum einq
	
	const obj2 = Object.create({}); // ira prototaypy beruma datark obekt bayc sran@ arden beruma obecti prototayper@
	//console.log(obj2); // sarquma datark object vori proton ira pes datark objecta baic ira proto-n Object.prototype-na 

	const obj3 = Object.create(null); // beruma datark null i patcharov
	//console.log(obj3); // sarquma datark object vor@ proto chuni



try {

	obj1.toString(); // tpuma ira type // inq@ chuni toString baic ira proto-n uni u tpuma dra hashvin
	obj2.toString(); // tpuma ira taype // inq@ chuni, ira proto-n el chuni baic ay proto-i proton uni toString u tpuma dra hashvin
	obj3.toString(); // inq@ function chi haskanum // inq@ chuni toString proto-el chuni usti chka etenc method dra hamar errora talis

} catch (error) { }




/*
	5) Inch ktpvi konoslum kodi ashxateluc heto yev inchu
*/

// console.log({}.prototype === Object.getPrototypeOf({}));

// function Builder() { }
// console.log(Builder.prototype === Object.getPrototypeOf(Builder))

// function Worker() { }
// console.log(Builder.prototype === Worker.prototype)

// const age = 27
// console.log(age.prototype === Number.prototype)
// console.log(Object.getPrototypeOf(age) === Number.prototype)

// const man = new Builder()
// console.log(Object.getPrototypeOf(man) === Builder.prototype)

// class HouseBuilder extends Builder { }
// const otherMan = new HouseBuilder()
// console.log(Object.getPrototypeOf(otherMan) === Builder)
// console.log(otherMan.constructor === Builder)
// console.log(otherMan.constructor === HouseBuilder)

// console.log(Object.getPrototypeOf(HouseBuilder))

/*

	6) Greq 2 class "Warrior" u "Wizard", voronq kjarangen 1 class-ic "Fighter":
	"Warrior" u "Wizard" classnerum petq e linen nmanatip yev tarbervox property- ner voroqn ktrven instance-nerin:
	healthPoints, damage, stamina, mana, ...(sahmanapakvum e dzer fantazyayov : D):
	Nayev petq e linen tarber methodner 2 class-nerum harvacner hascnelu hamar,
	kyanqer verakangnelu yev pashpanvelu hamar: Arajadranq@ azat vochi mej e,
	amen inch kaxvac e dzer realizaciayic,
	sahmanapakumner chkan, aystex stugvelu e dzer "Abstraction"-@ :))

*/

