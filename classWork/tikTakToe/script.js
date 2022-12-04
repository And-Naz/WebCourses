class TikTakToe {
	col = null;
	row = null;
	_x = "X";
	_o = "O";
	_isInited = false;
	_winCombinations = [];
	state = [];

	constructor(row, col) {
		this.col = col;
		this.row = row;
	}

	x(row, col) { this.drow(row, col, this._x /* "X" */); }
	o(row, col) { this.drow(row, col, this._o /* "O" */); }

	drow(row, col, character) {
		if (!this._isInited) { return; }
		if (!this.state[row - 1][col - 1]) {
			this.state[row - 1][col - 1] = character;
		} else {
			alert("Chikareli")
		};
		this.display();
		this.calcWin();
	}

	display() {
		console.clear();
		this.state.forEach((rowData) => {
			console.log(...rowData);
		});
	}

	_makeArray(length, mapFn = () => null) {
		return Array.from({ length }, mapFn)
	}

	calcWin() {
		if (!this._isInited) { return; }
		const retVal = [this._x, this._o]
			.find(symbol => {
				return (
					this._winCombinations
						.some(combination => {
							return (
								combination
									.every(combRowCol => {
										const [row, col] = combRowCol;
										return symbol === this.state[row - 1][col - 1];
									})
							)
						})
				)
			})
		if (retVal) {
			console.log(retVal + " is win!");
		}
	}

	init() {
		this.state = this._makeArray(this.row, () => this._makeArray(this.col, () => null));
		this._isInited = true;
		this._winCombinations = [
			...this._makeArray(this.row, (_, i) => this._makeArray(this.col, (_, j) => [i+1, j+1])),
			...this._makeArray(this.col, (_, i) => this._makeArray(this.row, (_, j) => [j+1, i+1]))
		];
		if (this.row === this.col) {
			this._winCombinations.push(
				this._makeArray(this.row, (_, z) => [z+1, z+1]) /* 1,1 - 2,2 - 3,3 */
			);

			this._winCombinations.push(
				this._makeArray(this.row, (_, z) => [z + 1, this.row - z])
			);

			/* row = 3
				1) z = 0, [ 0 + 1, 3 - 0 ] => [1, 3]
				1) z = 1, [ 1 + 1, 3 - 1 ] => [2, 2]
				1) z = 2, [ 2 + 1, 3 - 2 ] => [3, 1]
			*/
		}
		this.display();
	}
}

const game = new TikTakToe(3, 3)
game.init()