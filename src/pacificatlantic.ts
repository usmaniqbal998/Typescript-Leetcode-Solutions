export function pacificAtlantic(heights: number[][]): number[][] {
	const common: number[][] = [];
	const pacificQueue: number[][] = [];
	const atlanticQueue: number[][] = [];

	const visitedPacific = new Set<string>();
	const visitedAtlantic = new Set<string>();

	for (let i = 0; i < heights.length; i++) {
		if (!visitedPacific.has(i + '' + 0)) {
			pacificQueue.push([i, 0]);
			visitedPacific.add(i + '' + 0);
		}

		if (!visitedAtlantic.has(i + '' + (heights[i].length - 1))) {
			atlanticQueue.push([i, heights[i].length - 1]);
			visitedAtlantic.add(i + '' + (heights[i].length - 1));
		}
	}

	for (let i = 0; i < heights.length; i++) {
		if (!visitedPacific.has(0 + '' + i)) {
			pacificQueue.push([0, i]);
			visitedPacific.add(0 + '' + i);
		}

		if (!visitedAtlantic.has(heights[i].length - 1 + '' + i)) {
			atlanticQueue.push([heights[i].length - 1, i]);
			visitedAtlantic.add(heights[i].length - 1 + '' + i);
		}
	}

	const pacificFlow = ExploreWaterFlow(heights, pacificQueue, visitedPacific);
	const atlanticFlow = ExploreWaterFlow(
		heights,
		atlanticQueue,
		visitedAtlantic
	);

	for (let v of pacificFlow) {
		for (let j of atlanticFlow) {
			if (v[0] === j[0] && v[1] === j[1]) {
				common.push([v[0], v[1]]);
			}
		}
	}

	return common;
}

const directions = {
	up: [-1, 0],
	left: [0, -1],
	down: [1, 0],
	right: [0, 1],
};

function ExploreWaterFlow(
	heights: number[][],
	queue: number[][],
	visited: Set<string>
): number[][] {
	const res: number[][] = [];

	while (queue.length > 0) {
		let [row, col] = queue.shift() as [number, number];
		res.push([row, col]);

		for (let dir in directions) {
			let r = row + directions[dir][0];
			let c = col + directions[dir][1];

			if (isIndexOutOfBounds(heights, r, c)) continue;
			if (visited.has(r + '' + c)) continue;
			if (heights[r][c] >= heights[row][col]) {
				queue.push([r, c]);
				visited.add(r + '' + c);
			}
		}
	}

	return res;
}

function isIndexOutOfBounds(grid: number[][], i: number, j: number): boolean {
	if (i >= grid.length || i < 0) return true;
	if (j < 0 || j >= grid[i].length) return true;
	return false;
}
