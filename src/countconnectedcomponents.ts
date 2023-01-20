export function countComponents(n: number, edges: number[][]): number {
	const connections: number[] = new Array(n).fill(-1);
	const rank: number[] = new Array(n).fill(0);

	let count = n;

	for (let i = 0; i < edges.length; i++) {
		let [nodeA, nodeB] = edges[i];
		count -= union(connections, rank, nodeA, nodeB);
	}

	return count;
}

export function union(
	connections: number[],
	rank: number[],
	nodeA: number,
	nodeB: number
): number {
	const parentA = find(connections, nodeA);
	const parentB = find(connections, nodeB);

	if (parentA !== parentB) {
		if (rank[parentA] > rank[parentB]) connections[parentB] = parentA;
		else if (rank[parentB] > rank[parentA]) connections[parentA] = parentB;
		else {
			connections[parentB] = parentA;
			rank[parentA] += 1;
		}

		return 1;
	}

	return 0;
}

export function find(connections: number[], node: number): number {
	if (connections[node] === -1) return node;
	return (connections[node] = find(connections, connections[node]));
}
