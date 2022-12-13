declare type GraphEdge = { to: number; weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];

export default function dijkstra_list(
	source: number,
	sink: number,
	arr: WeightedAdjacencyList
): number[] {
	let seen = new Array(arr.length).fill(false);
	let prev = new Array(arr.length).fill(-1);
	const dists = new Array(arr.length).fill(Infinity);
	dists[source] = 0; // because you start from the source so distance from source is equal to 0

	while (hasUnvisited(seen, dists)) {
		let current = getLowestUnvisited(seen, dists);

		if (current === sink) {
			break;
		}
		console.log(current);
		seen[current] = true;

		const adjs = arr[current]; // adjacent nodes to current node

		for (let edge of adjs) {
			if (seen[edge.to]) {
				continue;
			}

			const edgeWeight = dists[current] + edge.weight;
			if (edgeWeight < dists[edge.to]) {
				dists[edge.to] = edgeWeight;
				prev[edge.to] = current;
			}
		}
	}

	// walk back from dest to source to draw path

	let dest = sink;
	const path = [];

	while (prev[dest] !== -1) {
		path.push(dest);
		dest = prev[dest];
	}

	path.push(source);

	return path.reverse();
}

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
	return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
	let index = -1;
	let lowestDistance = Infinity;
	for (let i = 0; i < dists.length; i++) {
		if (dists[i] < lowestDistance && !seen[i]) {
			lowestDistance = dists[i];
			index = i;
		}
	}
	return index;
}

// [
//     [
//         { to: 1, weight: 3 },
//         { to: 2, weight: 1 },
//     ],
//     [
//         { to: 0, weight: 3 },
//         { to: 2, weight: 4 },
//         { to: 4, weight: 1 },
//     ],
//     [
//         { to: 1, weight: 4 },
//         { to: 3, weight: 7 },
//         { to: 0, weight: 1 },
//     ],
//     [
//         { to: 2, weight: 7 },
//         { to: 4, weight: 5 },
//         { to: 6, weight: 1 },
//     ],
//     [
//         { to: 1, weight: 1 },
//         { to: 3, weight: 5 },
//         { to: 5, weight: 2 },
//     ],
//     [
//         { to: 6, weight: 1 },
//         { to: 4, weight: 2 },
//         { to: 2, weight: 18 },
//     ],
//     [
//         { to: 3, weight: 1 },
//         { to: 5, weight: 1 },
//     ],
//];
