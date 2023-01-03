//	https://leetcode.com/problems/shortest-bridge/description/?envType=study-plan&id=graph-i

const directions = {
	up: [-1, 0],
	right: [0, 1],
	down: [1, 0],
	left: [0, -1],
};

function shortestBridge(grid: number[][]): number {
	//  perform dfs to distinguish islands from one another

	let min = Infinity;
	let firstIsland: [number, number, number][] = [];

	let foundIsland = false;
	for (let i = 0; i < grid.length; i++) {
		if (!foundIsland) {
			for (let j = 0; j < grid[i].length; j++) {
				if (grid[i][j] === 1) {
					firstIsland = distinguishIslands(grid, i, j);
					foundIsland = true;
					break;
				}
			}
		}
	}

	// bfs from all nodes of islands to finds the minimum distance
	while (firstIsland.length > 0) {
		let [r, c, w] = firstIsland.shift() as [number, number, number];

		for (let dir in directions) {
			let row = r + directions[dir][0];
			let col = c + directions[dir][1];
			let weight = w + 1;
			if (outOfbounds(grid, row, col)) continue;
			if (grid[row][col] === 2) continue;
			if (grid[row][col] === 1) {
				min = Math.min(min, weight - 1);
				continue;
			}

			firstIsland.push([row, col, weight]);
			grid[row][col] = 2;
		}
	}

	return min;
}

function distinguishIslands(
	grid: number[][],
	row: number,
	col: number
): [number, number, number][] {
	const stack: [number, number][] = [];
	stack.push([row, col]);
	grid[row][col] = 2;

	let queue: [number, number, number][] = [];

	while (stack.length > 0) {
		const [currentRow, currentCol] = stack.pop() as [number, number];
		queue.push([currentRow, currentCol, 0]); //	for later doing bfs with weights
		for (let dir in directions) {
			let r = currentRow + directions[dir][0];
			let c = currentCol + directions[dir][1];
			if (outOfbounds(grid, r, c)) continue;
			if (grid[r][c] === 0 || grid[r][c] === 2) continue;

			stack.push([r, c]);
			grid[r][c] = 2;
		}
	}

	return queue;
}

function outOfbounds(grid: number[][], row: number, col: number): boolean {
	if (row < 0 || row >= grid.length) return true;
	if (col < 0 || col >= grid[row].length) return true;
	return false;
}
