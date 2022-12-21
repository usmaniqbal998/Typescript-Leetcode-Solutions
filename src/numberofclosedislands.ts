const direction = {
	up: [-1, 0],
	left: [0, -1],
	down: [1, 0],
	right: [0, 1],
};

function closedIsland(grid: number[][]): number {
	let sum = 0;
	const visited = new Set<string>();

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid.length; j++) {
			if (grid[i][j] === 0 && !visited.has(i + '' + j))
				if (exploreGraph(grid, i, j, visited)) {
					sum++;
				}
		}
	}

	return sum;
}

function exploreGraph(
	grid: number[][],
	i: number,
	j: number,
	visited: Set<string>
): boolean {
	if (isIndexOutOfBounds(grid, i, j)) return false;

	if (grid[i][j] === 1) return true;

	if (visited.has(i + '' + j)) return true;

	visited.add(i + '' + j);
	for (let dir in direction) {
		if (
			!exploreGraph(
				grid,
				i + direction[dir][0],
				j + direction[dir][1],
				visited
			)
		) {
			return false;
		}
	}

	return true;
}

function isIndexOutOfBounds(grid: number[][], i: number, j: number): boolean {
	if (i >= grid.length || i < 0) return true;
	if (j < 0 || j >= grid[i].length) return true;
	return false;
}
