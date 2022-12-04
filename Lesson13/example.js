class Fighters {
	static StandartState = 30
	static StandartSkillValue = 1
	static Skills = {handsAttack: Fighters.StandartSkillValue}
	#status = "Alive";
	get Status() {
		return this.#status
	}
	constructor(name, healthPoints = (Fighters.StandartState * 200), damage = (Fighters.StandartState * 2)) {
		this.name = name
		this.healthPoints = healthPoints
		this.damage = damage
		this.defense = Fighters.StandartState
		this.deflect = Fighters.StandartState
		this.deflectSeverity = Fighters.StandartState
		this.criticalAvoidance = Fighters.StandartState
		this.power = Fighters.StandartState
		this.accuracy = Fighters.StandartState
		this.criticalChance = Fighters.StandartState
		this.criticalDamage = Fighters.StandartState
	}
	#calculateTotalDamage = (damage,skillCoefficient,defense,deflect,deflectSeverity,criticalAvoidance,power,accuracy,criticalChance,criticalDamage) => {
		const dmgObject = {primaryDmg: 0, isCritical: false, isDeflected: false}
		dmgObject.primaryDmg = damage*power*(100 - defense)/100
		dmgObject.primaryDmg = typeof skillCoefficient === "number" && !Number.isNaN(skillCoefficient) ? dmgObject.primaryDmg * skillCoefficient : dmgObject.primaryDmg;
		// Can target deflect the damage?
		if(deflect >= accuracy) {
			dmgObject.primaryDmg *= (100 - deflectSeverity)/100
			dmgObject.isDeflected = true
		}
		// Is it a critical hit?
		let criticalCoefficient = 100-Math.round(Math.random()*100)
		console.log(criticalCoefficient);
		if(criticalChance >= criticalCoefficient) {
			dmgObject.primaryDmg *= (100 + criticalDamage-criticalAvoidance)/100
			dmgObject.isCritical = true
		}
		return dmgObject
	}
	takeDamage(dmg, from, skillName) {
		if(dmg.primaryDmg >= this.healthPoints) {
			this.healthPoints = 0
			this.#status = "Death"
			console.log(`${this.name} as weasted!`);
		} else {
			this.healthPoints -= dmg.primaryDmg
			let additionalInfo = ""
			additionalInfo += dmg.isDeflected ? "deflected " : ""
			additionalInfo += dmg.isCritical ? additionalInfo === "" ? ",critical " : "critical " : ""

			console.log(`${from.name} has hurt ${this.name} with ${skillName} to ${additionalInfo}damage!`);
		}
	}
	toDamage(target, skillName = "handsAttack") {
		if(target.Status === "Alive") {
			const dmgObject = this.#calculateTotalDamage(
				this.damage, Fighters.Skills[skillName],
				target.defense, target.deflect, target.deflectSeverity, target.criticalAvoidance,
				this.power,this.accuracy,this.criticalChance,this.criticalDamage			
			)
			target.takeDamage(dmgObject, this, skillName)
		} else {
			console.log(`${target.name} has dead already`);
		}
	}
}
class Warriors extends Fighters {
	static Skills = {
		handsAttack: Fighters.StandartSkillValue,
		swordAttack: (Fighters.StandartSkillValue * 2.25)
	}
	constructor(name) {
		super(name, Fighters.StandartState * 300, Fighters.StandartState * 4)
		this.defense = Fighters.StandartState * 2
		this.deflect = Fighters.StandartState * 1.5
		this.deflectSeverity = Fighters.StandartState * 1.5
		this.criticalAvoidance = Fighters.StandartState * 1.5
		this.power = Fighters.StandartState
		this.accuracy = Fighters.StandartState 
		this.criticalChance = Fighters.StandartState
		this.criticalDamage = Fighters.StandartState
	}
}
class Wizards extends Fighters {
	static Skills = {
		handsAttack: Fighters.StandartSkillValue,
		fireBall: (Fighters.StandartSkillValue * 5)
	}
	constructor(name) {
		super(name, Fighters.StandartState * 125, Fighters.StandartState * 6)
		this.defense = Fighters.StandartState
		this.deflect = Fighters.StandartState * 1.5
		this.deflectSeverity = Fighters.StandartState
		this.criticalAvoidance = Fighters.StandartState
		this.power = Fighters.StandartState * 3
		this.accuracy = Fighters.StandartState * 1.5
		this.criticalChance = Fighters.StandartState * 2
		this.criticalDamage = Fighters.StandartState * 2.5
	}
}

const warrior = new Warriors("John")
const wizard = new Wizards("Sam")

const combatLog = () => console.log(`warrior ${warrior.name}: ${warrior.Status}, HP: ${warrior.healthPoints}, wizard ${wizard.name}: ${wizard.Status}, HP: ${wizard.healthPoints}`);

let flag = [0, 1]
let fighters = [warrior, wizard]
do {
	combatLog()
	fighters[flag[0]].toDamage(
		fighters[flag[1]],
		Object.keys(fighters[flag[0]].constructor.Skills)[Math.round(Math.random())]
	)
	flag = flag.reverse()
} while (fighters[0].Status === "Alive" && fighters[1].Status === "Alive");