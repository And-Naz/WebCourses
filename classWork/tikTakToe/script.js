const game = {
	col: null,
	row: null,
	_x: "X",
	_o: "O",
	_isInited: false,
	_winCombinations: [],
	state: [],
	x(row, col) {
		if (!this._isInited) { return; }
		if (!this.state[row - 1][col - 1]) {
			this.state[row - 1][col - 1] = this._x;
		};
		this.display();
		this.calcWin();
	},
	o(row, col) {
		if (!this._isInited) { return; }
		if (!this.state[row - 1][col - 1]) {
			this.state[row - 1][col - 1] = this._o;
		};
		this.display();
		this.calcWin();
	},
	display() {
		console.clear();
		this.state.forEach((rowData) => {
			console.log(
				rowData
					.join(' ')
			);
			console.log('\n');
		});
	},
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
	},
	init(row = 3, col = 3) {
		this.row = row;
		this.col = col;
		this.state = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];
		this._isInited = true;
		this._winCombinations = [
			[
				[1, 1], [1, 2], [1, 3]
			],
			[
				[2, 1], [2, 2], [2, 3]
			],
			[
				[3, 1], [3, 2], [3, 3]
			],

			[
				[1, 1], [2, 1], [3, 1]
			],
			[
				[1, 2], [2, 2], [3, 2]
			],
			[
				[1, 3], [2, 3], [3, 3]
			],

			[
				[1, 1], [2, 2], [3, 3]
			],
			[
				[3, 3], [2, 2], [1, 1]
			],
		];


		this.display();
	}
};

game.init();
