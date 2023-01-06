//  https://leetcode.com/problems/number-of-operations-to-make-network-connected/description/?envType=study-plan&id=graph-i

function makeConnected(n: number, connections: number[][]): number {
	if (connections.length < n - 1) return -1;
	let connectionsRequired = 0;
	const graph = {};
	buildGraphFromConnections(connections, graph);

	const visited = new Set<string>();

	for (let key in graph) {
		if (visited.has(key)) continue;

		visited.add(key);

		connectionsRequired += dfs(graph, key, visited);
	}

	return n - connectionsRequired;
}

function dfs(graph: object, node: string, visited: Set<string>): number {
	let sum = 1;

	for (let neighbour of graph[node]) {
		if (visited.has(neighbour.toString())) continue;
		visited.add(neighbour.toString());
		sum += dfs(graph, neighbour.toString(), visited);
	}

	return sum;
}

function buildGraphFromConnections(connections: number[][], graph: object) {
	for (let i = 0; i < connections.length; i++) {
		let [a, b] = connections[i];

		if (graph[a]) graph[a] = [...graph[a], b];
		else graph[a] = [b];

		if (graph[b]) graph[b] = [...graph[b], a];
		else graph[b] = [a];
	}
}
