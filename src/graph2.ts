//  adjacency list traversing

export function depthfirstRecursive(
	graph: number[][],
	visited: Set<number>,
	node: number,
	res: number[]
) {
	res.push(node);

	for (let n of graph[node]) {
		if (visited.has(n)) continue;
		visited.add(n);
		depthfirstRecursive(graph, visited, n, res);
	}
	return res;
}

export function depthfirstIterative(
	graph: number[][],
	visited: Set<number>,
	node: number,
	res: number[]
) {
	const stack: number[] = [];
	stack.push(node);

	while (stack.length > 0) {
		let current = stack.pop() as number;
		res.push(current);

		for (let n of graph[current]) {
			if (visited.has(n)) continue;
			stack.push(n);
			visited.add(n);
		}
	}

	return res;
}
