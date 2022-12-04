function calcWin() {
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

function init(row = 3, col = 3) {
	this.row = row;
	this.col = col;
	this.state = this._makeArray(this.row, () => this._makeArray(this.col, () => null));
	this._isInited = true;
	this._winCombinations = [
		...this._makeArray(this.row, (_, i) => this._makeArray(this.col, (_, j) => [i+1, j+1])),
		...this._makeArray(this.col, (_, i) => this._makeArray(this.row, (_, j) => [j+1, i+1]))
	];
	if (this.row === col) {
		for (let i = 0; i < this.row; i++) {
			this._winCombinations.push(
				this._makeArray(this.row, (_, z) => [z+1, z+1])
			);
		}
	}
	this.display();
}