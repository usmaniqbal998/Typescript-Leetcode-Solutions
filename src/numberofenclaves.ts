//  https://leetcode.com/problems/number-of-enclaves/description/

function numEnclaves(grid: number[][]): number {
	let sum = 0;

	for (let i = 1; i < grid.length - 1; i++) {
		for (let j = 1; j < grid[i].length - 1; j++) {
			if (grid[i][j] === 1) {
				const res = CountEnclaves(grid, i, j);
				if (res === Infinity) continue;
				else sum += res;
			}
		}
	}

	return sum;
}

function CountEnclaves(grid: number[][], row: number, col: number): number {
	if (grid[row][col] === 0) return 0;

	if (
		row === 0 ||
		row === grid.length - 1 ||
		col === 0 ||
		col === grid[row].length - 1
	)
		return Infinity;

	grid[row][col] = 0;

	let sum = 1;

	return (sum +=
		CountEnclaves(grid, row + 1, col) +
		CountEnclaves(grid, row - 1, col) +
		CountEnclaves(grid, row, col + 1) +
		CountEnclaves(grid, row, col - 1));
}
