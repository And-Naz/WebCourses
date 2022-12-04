class Fighter {
	static standartStrickPower = 10;

	get Name() {
		return this._name;
	}

	toDamage(target) {
		if (this.skill > target.hp) {
			target.hp = 0;
		} else {
			target.hp -= this.skill;
		}
	}
	// someMethod

	constructor(name) {
		this._id = Date.now();
		this._name = name;
		this.hp = 100;
		this.skill = Fighter.standartStrickPower;
	}
}


class Warrior extends Fighter {
	// toDamage
	legsStrick(target) {
		let skill = 1.5 * this.skill;
		if (skill > target.hp) {
			target.hp = 0;
		} else {
			target.hp -= skill;
		}
	}

	toDamage(target) {
		if (++this.strickCount % 3 === 0) {
			this.legsStrick(target);
		} else {
			super.toDamage(target);
		}
	}

	constructor(name) {
		super(name);
		this.hp *= 1.5;
		this.skill = 2 * Fighter.standartStrickPower;
		this.strickCount = 0;
	}
}

class Wizard extends Fighter {
	// toDamage
	// toDamage
	fireBall(target) {
		let skill = 2.5 * this.skill;
		if (skill > target.hp) {
			target.hp = 0;
		} else {
			target.hp -= skill;
		}
	}

	toDamage(target) {
		if (++this.strickCount % 3 === 0) {
			this.fireBall(target);
		} else {
			super.toDamage(target);
		}
	}
	constructor(name) {
		super(name);
		this.skill = 2.5 * Fighter.standartStrickPower;
		this.strickCount = 0;
	}
}

const john = new Warrior("John");
const sam = new Wizard("Sam");

const fighters = [john, sam];

showStatistics();
console.log("----------- FIGHT -------------")

while (john.hp > 0 && sam.hp > 0) {

	fighters[0].toDamage(fighters[1]);
	fighters.reverse();

	showStatistics();
}



function showStatistics() {
	switch (true) {
		case (john.hp > 0 && sam.hp > 0):
			console.log(`${john.Name}: ${john.hp}; ${sam.Name}: ${sam.hp}`);
			break;
		case john.hp === 0:
			console.log(`${sam.Name} is win`);
			break
		case sam.hp === 0:
			console.log(`${john.Name} is win`);
			break;
		default:
			break;
	}
}
