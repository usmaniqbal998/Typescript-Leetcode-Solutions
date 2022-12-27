// https://leetcode.com/problems/shortest-path-in-binary-matrix/description/

type indexDist = [number, number, number];

export const directions = {
	upperLeftDiagnol: [-1, -1],
	bottomLeftDiagnol: [1, -1],
	upperRightDiagnol: [-1, 1],
	bottomRightDiagnol: [1, 1],
	right: [0, 1],
	bottom: [1, 0],
	up: [-1, 0],
	left: [0, -1],
};

export default function shortestPathBinaryMatrix(grid: number[][]): number {
	if (grid[0][0] === 1) return -1;

	const source: indexDist = [0, 0, 0];
	const dest: [number, number] = [
		grid.length - 1,
		grid[grid.length - 1].length - 1,
	];
	const queue: indexDist[] = [];

	queue.push(source);

	while (queue.length > 0) {
		const current: indexDist = queue.shift() as indexDist;

		if (current[0] === dest[0] && current[1] === dest[1])
			return current[2] + 1;

		for (let dir in directions) {
			let r = current[0] + directions[dir][0];
			let c = current[1] + directions[dir][1];
			let distance = current[2] + 1;

			if (isIndexOutOfBounds(grid, r, c)) continue;
			if (grid[r][c] === 1) continue;

			queue.push([r, c, distance]);
			grid[r][c] = 1;
		}
	}

	return -1;
}

function isIndexOutOfBounds(grid: number[][], row: number, col: number) {
	if (row < 0 || row > grid.length - 1) return true;
	if (col < 0 || col > grid[row].length - 1) return true;

	return false;
}
