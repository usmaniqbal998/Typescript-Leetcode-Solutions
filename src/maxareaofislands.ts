//  https://leetcode.com/problems/max-area-of-island/submissions/860790507/?envType=study-plan&id=graph-i

const direction = {
	up: [-1, 0],
	left: [0, -1],
	down: [1, 0],
	right: [0, 1],
};

export function maxAreaOfIsland(grid: number[][]): number {
	let maxArea = 0;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 1)
				maxArea = Math.max(maxArea, exploreGrid(grid, i, j));
		}
	}
	return maxArea;
}

function exploreGrid(grid: number[][], row: number, column: number): number {
	if (!isIndexOutOfBounds(grid, row, column)) return 0;
	if (grid[row][column] === 0) return 0;

	grid[row][column] = 0;
	let sum = 1;
	for (let dir in direction)
		sum += exploreGrid(
			grid,
			row + direction[dir][0],
			column + direction[dir][1]
		);

	return sum;
}

function isIndexOutOfBounds(grid: number[][], i: number, j: number): boolean {
	if (i >= grid.length || i < 0) return false;
	if (j < 0 || j >= grid[i].length) return false;
	return true;
}
