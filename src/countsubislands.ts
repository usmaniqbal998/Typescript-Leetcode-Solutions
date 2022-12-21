//  https://leetcode.com/problems/count-sub-islands/description/

function countSubIslands(grid1: number[][], grid2: number[][]): number {
	let sumOfislands = 0;

	for (let i = 0; i < grid2.length; i++)
		for (let j = 0; j < grid2[i].length; j++)
			if (grid2[i][j] === 1 && countIsland(grid1, grid2, i, j))
				sumOfislands++;

	return sumOfislands;
}

function countIsland(
	grid1: number[][],
	grid2: number[][],
	row: number,
	col: number
): boolean {
	if (isIndexOutOfBounds(grid2, row, col)) return true;
	if (grid2[row][col] === 0) return true;
	if (grid2[row][col] !== grid1[row][col]) return false;

	grid2[row][col] = 0;
	grid1[row][col] = 0;

	const top = countIsland(grid1, grid2, row - 1, col);
	const left = countIsland(grid1, grid2, row, col - 1);
	const bottom = countIsland(grid1, grid2, row + 1, col);
	const right = countIsland(grid1, grid2, row, col + 1);

	return top && left && right && bottom;
}
export function isIndexOutOfBounds(
	grid: number[][],
	i: number,
	j: number
): boolean {
	if (i >= grid.length || i < 0) return true;
	if (j < 0 || j >= grid[i].length) return true;
	return false;
}
