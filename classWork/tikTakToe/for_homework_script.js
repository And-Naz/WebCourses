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
	console.clear();
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
		[ [1,1], [1,2], [1,3] ],
		[ [2,1], [2,2], [2,3] ],
		[ [3,1], [3,2], [3,3] ],

		[ [1,1], [2,1], [3,1] ],
		[ [1,2], [2,2], [3,2] ],
		[ [1,3], [2,3], [3,3] ],
	];
	if (this.row === col) {
		this._winCombinations.push(
			[ [1,1], [2,2], [3,3] ]
		);
		this._winCombinations.push(
			[ [3,3], [2,2], [1,1] ]
		)
	}
	this.display();
}

function _makeArray(length, mapFn = () => null) {
	return Array.from({ length }, mapFn)
}