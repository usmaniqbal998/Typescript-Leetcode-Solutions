// bfs traversal

const directions = {
	up: [-1, 0],
	left: [0, -1],
	down: [1, 0],
	right: [0, 1],
};

export function bfstraversal(grid: number[][]) {
	const queue: [number, number][] = [];
	const visited = new Set<string>();

	queue.push([0, 0]);
	visited.add(0 + '' + 0);

	while (queue.length > 0) {
		let [row, col] = queue.shift() as [number, number];
		console.log(grid[row][col]);

		for (let dir in directions) {
			let r = row + directions[dir][0];
			let c = col + directions[dir][1];
			// console.log(r, 'row');
			// console.log(c, 'col');

			if (outOfbounds(grid, r, c) || visited.has(r + '' + c)) continue;
			else {
				visited.add(r + '' + c);
				queue.push([r, c]);
			}
		}
	}
}

export function dfsTraversal(grid: number[][]) {
	const stack: [number, number][] = [];
	const visited = new Set<string>();

	stack.push([0, 0]);
	visited.add(0 + '' + 0);

	while (stack.length > 0) {
		let [row, col] = stack.pop() as [number, number];
		console.log(grid[row][col]);

		for (let dir in directions) {
			let r = row + directions[dir][0];
			let c = col + directions[dir][1];
			// console.log(r, 'row');
			// console.log(c, 'col');

			if (outOfbounds(grid, r, c) || visited.has(r + '' + c)) continue;
			else {
				visited.add(r + '' + c);
				stack.push([r, c]);
			}
		}
	}
}

function outOfbounds(grid: number[][], row: number, col: number): boolean {
	if (row < 0 || row >= grid.length) return true;
	if (col < 0 || col >= grid[row].length) return true;
	return false;
}
