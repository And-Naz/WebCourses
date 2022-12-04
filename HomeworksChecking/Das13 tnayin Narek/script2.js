
// xi Player, Fighter er
class Fighter {
	constructor(Fighter) {
		this.Fighter = Fighter
	}
}


class Warrior extends Fighter {
	constructor(Fighter, healthPoints, damage, fatality) {
		super(Fighter)
		this.healthPoints = healthPoints,
			this.damage = damage
		this.fatality = fatality
	}
	attack1() {
		// xi implementation chka
	}
	pasthpanvel1() {
		// xi implementation chka
	}
}

class Wizard extends Fighter {
	static point = 0
	constructor(Fighter, healthPoints, damage, mana) {
		super(Fighter)
		this.healthPoints = healthPoints
		this.damage = damage
		this.mana = mana
	}
	attack2() {
		// xi implementation chka
	}
	pasthpanvel2() {
		// xi implementation chka
	}
}



const Fighter1 = new Warrior("Narek", 20, 0, 0)
console.log(Fighter1)

const Fighter2 = new Wizard("Gor Vardanyan", 20, 0, 0)
console.log(Fighter2)
