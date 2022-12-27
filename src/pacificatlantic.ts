export function pacificAtlantic(heights: number[][]): number[][] {
	const res: number[][] = [];
	let visited = new Set<string>();

	for (let i = 0; i < heights.length; i++) {
		for (let j = 0; j < heights[i].length; j++) {
			let pac = isPacific(heights, i, j, visited);
			visited = new Set();
			let atla = isAtlantic(heights, i, j, visited);

			if (pac && atla) {
				res.push([i, j]);
			}
		}
	}

	return res;
}

function isPacific(
	grid: number[][],
	row: number,
	col: number,
	visited: Set<string>
): boolean {
	if (col === 0 || row === 0) return true;
	if (visited.has(row + '' + col)) return false;

	visited.add(row + '' + col);

	if (grid[row][col] >= grid[row - 1][col]) {
		if (isPacific(grid, row - 1, col, visited)) return true;
	}

	if (grid[row][col] >= grid[row][col - 1]) {
		if (isPacific(grid, row, col - 1, visited)) return true;
	}

	return false;
}

function isAtlantic(
	grid: number[][],
	row: number,
	col: number,
	visited: Set<string>
): boolean {
	if (row >= grid.length - 1 || col >= grid[row].length - 1) return true;
	if (visited.has(row + '' + col)) return false;

	visited.add(row + '' + col);

	if (grid[row][col] >= grid[row][col + 1]) {
		if (isAtlantic(grid, row, col + 1, visited)) return true;
	}

	if (grid[row][col] >= grid[row + 1][col]) {
		if (isAtlantic(grid, row + 1, col, visited)) return true;
	}

	return false;
}
