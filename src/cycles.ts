export function cyclesUndirectedGraph(graph: number[][]): boolean {
	const visited = new Set<number>();

	for (let i = 0; i < graph.length; i++) {
		if (visited.has(i)) continue;
		if (dfs(graph, visited, i, -1)) return true;
	}

	return false;
}

function dfs(
	graph: number[][],
	visited: Set<number>,
	node: number,
	parent: number
): boolean {
	if (visited.has(node)) return true;
	visited.add(node);

	for (let neighbour of graph[node]) {
		if (neighbour !== parent && dfs(graph, visited, neighbour, node)) {
			return true;
		}
	}

	return false;
}
