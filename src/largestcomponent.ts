export type Graph = {
	[key: string]: string[];
};

const largestComponent = (graph : Graph) => {
	// todo
	let visited:Set<number> = new Set();

	let largest = 0;

	for (let key in graph) {
		if (exploregraphs(graph, key, visited)) {
			largest = Math.max(visited.size, largest);
			visited = new Set();
		}
	}

	return largest;
};

const exploregraphs = (graph:Graph, node:string, visited:Set<number>) => {
	if (visited.has(parseInt(node))) {
		return false;
	}

	visited.add(parseInt(node));

	for (let neighbour of graph[node]) {
		exploregraphs(graph, neighbour, visited);
	}

	return true;
};

module.exports = {
	largestComponent,
};
