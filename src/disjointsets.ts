import { arrayBuffer } from 'stream/consumers';

export function unionFind(
	graph: number[][],
	connected: [number, number][]
): boolean[] {
	let sets: number[] = new Array(graph.length).fill(-1);

	for (let i = 0; i < graph.length - 1; i++) {
		for (let neighbour of graph[i]) {
			union(sets, neighbour, i);
		}
	}

	const res: boolean[] = [];
	for (let [src, dest] of connected) {
		res.push(find(sets, src) === find(sets, dest));
	}

	return res;
}

export function union(arr: number[], nodeA: number, nodeB: number): number[] {
	if (arr[nodeB] === nodeA) return arr;
	let parentNodeB = find(arr, nodeB);
	arr[parentNodeB] = nodeA;

	return arr;
}

export function find(arr: number[], node: number): number {
	if (arr[node] === -1) return node;
	return find(arr, arr[node]);
}
