// const undirectedPath = (edges, nodeA, nodeB) => {};

const createAdjacencyList = (edges: string[][]) => {
	const map = {};

	for (let edge of edges) {
		for (let node of edge) {
			if (map[node] === undefined) {
				map[node] = [];
			}

			map[node] = [...map[node]].push(node);
		}
	}

	console.log(map);
};

createAdjacencyList([
	['i', 'j'],
	['k', 'i'],
	['m', 'k'],
	['k', 'l'],
	['o', 'n'],
]);
