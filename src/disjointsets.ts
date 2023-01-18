import { arrayBuffer } from 'stream/consumers';

export function unionFind(
	graph: number[][],
	connected: [number, number][]
): boolean[] {
	let sets: number[] = new Array(graph.length).fill(-1);
	let rank: number[] = new Array(graph.length).fill(1);

	for (let i = 0; i < graph.length - 1; i++) {
		for (let neighbour of graph[i]) {
			union(sets, neighbour, i, rank);
		}
	}

	const res: boolean[] = [];
	for (let [src, dest] of connected) {
		res.push(find(sets, src) === find(sets, dest));
	}

	return res;
}

export function union(
	arr: number[],
	nodeA: number,
	nodeB: number,
	rank: number[]
): number[] {
	let parentNodeB = find(arr, nodeB);
	let parentNodeA = find(arr, nodeA);

	if (parentNodeA !== parentNodeB) {
		if (rank[parentNodeA] > rank[parentNodeB]) {
			arr[parentNodeB] = parentNodeA;
		} else if (rank[parentNodeA] < rank[parentNodeB]) {
			arr[parentNodeA] = parentNodeB;
		} else {
			arr[parentNodeA] = parentNodeB;
			rank[parentNodeA] += 1;
		}
	}

	return arr;
}

export function find(arr: number[], node: number): number {
	if (arr[node] === -1) return node;
	return (arr[node] = find(arr, arr[node]));
}
