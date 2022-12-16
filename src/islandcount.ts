// https://leetcode.com/problems/number-of-islands/description/

const direction = {
	up: [-1, 0],
	left: [0, -1],
	down: [1, 0],
	right: [0, 1],
};

function numIslands(grid: string[][]): number {
	let islandsCount = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '1') {
				islandsCount++;
				exploreGrid(grid, i, j);
			}
		}
	}
	return islandsCount;
}

function exploreGrid(grid: string[][], row: number, column: number) {
	if (!isIndexOutOfBounds(grid, row, column)) return;
	if (grid[row][column] === '0') return;

	grid[row][column] = '0';

	for (let dir in direction)
		exploreGrid(grid, row + direction[dir][0], column + direction[dir][1]);
}

function isIndexOutOfBounds(grid: string[][], i: number, j: number): boolean {
	if (i >= grid.length || i < 0) return false;
	if (j < 0 || j >= grid[i].length) return false;
	return true;
}
