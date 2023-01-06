function allPathsSourceTarget(graph: number[][]): number[][] {
	const results: number[][] = [];
	const dest = graph.length - 1;
	const source = 0;
	const path = [source];

	backtrack(graph, results, dest, source, path);

	return results;
}

function backtrack(
	graph: number[][],
	results: number[][],
	dest: number,
	node: number,
	path: number[]
) {
	if (node === dest) {
		results.push([...path]);
		return;
	}

	for (let neighbour of graph[node]) {
		path.push(neighbour);
		backtrack(graph, results, dest, neighbour, path);
		path.pop();
	}
}
