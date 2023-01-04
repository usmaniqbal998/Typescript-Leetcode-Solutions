//	https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/?envType=study-plan&id=graph-i

export const directions = {
	up: [-1, 0],
	left: [0, -1],
	down: [1, 0],
	right: [0, 1],
};

export function nearestExit(maze: string[][], entrance: number[]): number {
	let minNumberOfSteps = Infinity;
	let wall = '+';

	let queue: [number, number, number][] = [[entrance[0], entrance[1], 0]];
	maze[entrance[0]][entrance[1]] = wall;

	while (queue.length > 0) {
		let [currentRow, currentCol, currentWeight] = queue.shift() as [
			number,
			number,
			number
		];

		for (let dir in directions) {
			let r = currentRow + directions[dir][0];
			let c = currentCol + directions[dir][1];
			let w = currentWeight + 1;

			if (isOutOfBounds(maze, r, c)) continue;
			if (maze[r][c] === wall) continue;

			if (isExit(r, c, maze, entrance)) {
				minNumberOfSteps = Math.min(minNumberOfSteps, w);
				continue;
			}

			queue.push([r, c, w]);
			maze[r][c] = wall;
		}
	}

	if (minNumberOfSteps === 0 || minNumberOfSteps === Infinity) return -1;
	else return minNumberOfSteps;
}

function isExit(r: number, c: number, m: string[][], e: number[]) {
	return (
		(r === 0 || r === m.length - 1 || c === 0 || c === m[0].length - 1) &&
		(r !== e[0] || c !== e[1])
	);
}

export function isOutOfBounds(maze: string[][], r: number, c: number) {
	if (c < 0 || r < 0) return true;
	if (r >= maze.length || c >= maze[r].length) return true;

	return false;
}
