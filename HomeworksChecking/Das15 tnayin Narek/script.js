// 1. poxel enpes vor class-nerov new anenq u nor xaxanq
// 2. win combinationner@ hardcode-ov mxac en, anel generic
// 3. anel aynpes vor karoxananq 6x6-i, 9x9-i vra game create anenq u xaxanq


class Game1 {

	constructor(col, row) {
		this.col = col
		this.row = row
		this._x = "X";
		this._o = "O";
		this._isInited = false;
		this._winCombinations = [];
		this.state = this._makeArray(this.row, () => this._makeArray(this.col, () => null));
		if (this.col === 3 && this.row === 3) {
			this._isInited = true;
			this._winCombinations = [
				[[1, 1], [1, 2], [1, 3]],
				[[2, 1], [2, 2], [2, 3]],
				[[3, 1], [3, 2], [3, 3]],

				[[1, 1], [2, 1], [3, 1]],
				[[1, 2], [2, 2], [3, 2]],
				[[1, 3], [2, 3], [3, 3]],

			];
			if (this.row === col) {
				this._winCombinations.push(
					[[1, 1], [2, 2], [3, 3]]
				);
				this._winCombinations.push(
					[[3, 3], [2, 2], [1, 1]]
				)

			}
		} else if (this.col === 6 && this.row === 6) {
			this._isInited = true;
			this._winCombinations = [
				[[1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6]],
				[[2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6]],
				[[3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6]],
				[[4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6]],
				[[5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6]],
				[[6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6]],

				[[1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1]],
				[[1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2]],
				[[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3]],
				[[1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4]],
				[[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5]],
				[[1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6]],

			];
			if (this.row === col) {
				this._winCombinations.push(
					[[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]]
				);
				this._winCombinations.push(
					[[6, 6], [5, 5], [4, 4], [3, 3], [2, 2], [1, 1]]
				)

			}
		} else if (this.col === 9 && this.row === 9) {
			this._isInited = true;
			this._winCombinations = [
				[[1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9]], ,
				[[2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9]],
				[[3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9]],
				[[4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9]],
				[[5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9]],
				[[6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9]],
				[[7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9]],
				[[8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9]],
				[[9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9]],

				[[1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1]],
				[[1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2]],
				[[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3]],
				[[1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4]],
				[[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5]],
				[[1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6]],
				[[1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7]],
				[[1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8]],
				[[1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9]],
			];

			if (this.row === col) {
				this._winCombinations.push(
					[[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9]]
				);
				this._winCombinations.push(
					[[9, 9], [8, 8], [7, 7], [6, 6], [5, 5], [4, 4], [3, 3], [2, 2], [1, 1]]
				)
			}

			this.display();
		}


	}

	drow(row, col, symbol) {
		if (!this._isInited) {
			return;
		}
		if (!this.state[row - 1][col - 1]) {
			this.state[row - 1][col - 1] = symbol;
		};
		this.display();
		this.calcWin();
	}

	display() {
		this.state.forEach((rowData) => {
			console.log(...rowData);
		});
	}
	calcWin() {
		if (!this._isInited) {
			return;
		}
		const symbolArray = [this._x, this._o];

		for (let i = 0; i < symbolArray.length; i++) {

			for (let j = 0; j < this._winCombinations.length; j++) {

				const combination = this._winCombinations[j];
				for (let z = 0; z < combination.length; z++) {

					if (combination.every(([x, y]) => symbolArray[i] === this.state[x - 1][y - 1])) {
						return console.log(symbolArray[i] + " is win!");
					}
				}

			}


		}
	}

	_makeArray(length, mapFn = () => null) {
		return Array.from({
			length
		}, mapFn)
	}
}


let ereqiVra = new Game1(3, 3)
console.log(ereqiVra)



// let veciVra = new Game1(6,6)
// console.log(veciVra)


// let inniVra = new Game1(9,9)
// console.log(inniVra)






// Original kod




const game = {
	col: null,
	row: null,
	_x: "X",
	_o: "O",
	_isInited: false,
	_winCombinations: [],
	state: [],
};

Object.setPrototypeOf(game, { drow, x, o, display, calcWin, init, _makeArray })


game.init();

console.log(game)


function drow(row, col, symbol) {
	if (!this._isInited) { return; }
	if (!this.state[row - 1][col - 1]) {
		this.state[row - 1][col - 1] = symbol;
	};
	this.display();
	this.calcWin();
}

function x(row, col) {
	this.drow(row, col, this._x);
}

function o(row, col) {
	this.drow(row, col, this._o);
}

function display() {
	this.state.forEach((rowData) => {
		console.log(...rowData);
	});
}

function calcWin() {
	if (!this._isInited) { return; }
	const symbolArray = [this._x, this._o];

	for (let i = 0; i < symbolArray.length; i++) {

		for (let j = 0; j < this._winCombinations.length; j++) {

			const combination = this._winCombinations[j];
			for (let z = 0; z < combination.length; z++) {

				if (combination.every(([x, y]) => symbolArray[i] === this.state[x - 1][y - 1])) {
					return console.log(symbolArray[i] + " is win!");
				}
			}

		}


	}
}

function init(row = 3, col = 3) {
	this.row = row;
	this.col = col;
	this.state = this._makeArray(this.row, () => this._makeArray(this.col, () => null));
	this._isInited = true;
	this._winCombinations = [
		[[1, 1], [1, 2], [1, 3]],
		[[2, 1], [2, 2], [2, 3]],
		[[3, 1], [3, 2], [3, 3]],

		[[1, 1], [2, 1], [3, 1]],
		[[1, 2], [2, 2], [3, 2]],
		[[1, 3], [2, 3], [3, 3]],
	];
	if (this.row === col) {
		this._winCombinations.push(
			[[1, 1], [2, 2], [3, 3]]
		);
		this._winCombinations.push(
			[[3, 3], [2, 2], [1, 1]]
		)
	}
	this.display();
}

function _makeArray(length, mapFn = () => null) {
	return Array.from({ length }, mapFn)
}