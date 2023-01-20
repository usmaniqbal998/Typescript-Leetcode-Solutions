function validTree(n: number, edges: number[][]): boolean {
	const connections: number[] = new Array(n).fill(-1);

	for (let i = 0; i < edges.length; i++) {
		if (!union(connections, edges[i])) {
			return false;
		}
	}

	let roots = connections.reduce(
		(acc, v) => (v === -1 ? (acc += 1) : (acc += 0)),
		0
	);
	if (roots > 1) return false;

	return true;
}

function union(connections: number[], edges: number[]) {
	let [nodeA, nodeB] = edges;

	let parentA = find(nodeA, connections);
	let parentB = find(nodeB, connections);

	// Check if A and B are already in the same set.
	if (parentA == parentB) {
		return false;
	}

	connections[parentA] = parentB;
	return true;
}

function find(node: number, connections: number[]): number {
	if (connections[node] === -1) return node;
	return find(connections[node], connections);
}
