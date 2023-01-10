export function topologicalSort(graph: number[][]): number[] {
	const res: number[] = [];

	let stack: number[] = [];
	const visited = new Set<number>();

	for (let i = 0; i < graph.length; i++) {
		if (visited.has(i)) continue;
		dfs(graph, i, visited, stack);
	}

	while (stack.length != 0) {
		res.push(stack.pop() as number);
	}

	return res;
}

function dfs(
	graph: number[][],
	node: number,
	visited: Set<number>,
	stack: number[]
) {
	visited.add(node);

	for (let neighbour of graph[node]) {
		if (visited.has(neighbour)) continue;
		dfs(graph, neighbour, visited, stack);
	}

	stack.push(node);
}
