// https://leetcode.com/problems/flood-fill/description/?envType=study-plan&id=graph-i

const directions = {
	up: [-1, 0],
	right: [0, 1],
	down: [1, 0],
	left: [0, -1],
};

function floodFill(
	image: number[][],
	sr: number,
	sc: number,
	color: number
): number[][] {
	const visited = new Set<string>();
	const target = image[sr][sc];
	return exploreGraph(image, sr, sc, color, target, visited);
}

function exploreGraph(
	image: number[][],
	sr: number,
	sc: number,
	color: number,
	target: number,
	numbervisited: Set<string>
): number[][] {
	if (!indexOutOfBounds(sr, sc, image)) return image;

	if (image[sr][sc] !== target) return image;

	if (numbervisited.has('' + sr + sc)) return image;

	image[sr][sc] = color;
	numbervisited.add('' + sr + sc);

	for (let key in directions)
		exploreGraph(
			image,
			sr + directions[key][0],
			sc + directions[key][1],
			color,
			target,
			numbervisited
		);

	return image;
}

function indexOutOfBounds(i: number, j: number, image: number[][]): boolean {
	if (i < 0 || i >= image.length) return false;
	if (j < 0 || j >= image[i].length) return false;
	return true;
}
