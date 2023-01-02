const directions = {
	up: [-1, 0],
	right: [0, 1],
	down: [1, 0],
	left: [0, -1],
};

function numIslands(grid: string[][]): number {
	let islands = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '1') {
				islands++;
				exploreIsland(grid, i, j);
			}
		}
	}
	return islands;
}

export function exploreIsland(grid: string[][], row: number, col: number) {
	let stack = [];
	stack.push([row, col]);
	grid[row][col] = '0';

	while (stack.length > 0) {
		let [r, c] = stack.pop() as [number, number];

		for (let key in directions) {
			let neighbour_row = r + directions[key][0];
			let neighbour_col = c + directions[key][1];

			if (
				!isIndexOutOfBounds(grid, neighbour_row, neighbour_col) &&
				grid[neighbour_row][neighbour_col] === '1'
			) {
				stack.push([neighbour_row, neighbour_col]);
				grid[neighbour_row][neighbour_col] = '0';
			}
		}
	}
}

export function isIndexOutOfBounds(
	grid: string[][],
	i: number,
	j: number
): boolean {
	if (i >= grid.length || i < 0) return true;
	if (j < 0 || j >= grid[i].length) return true;
	return false;
}
