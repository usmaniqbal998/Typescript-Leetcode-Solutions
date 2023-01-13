type Graph = {
	to: number;
	w: number;
};
export function belmanford(graph: Graph[][], source: number) {
	const distance = new Array(graph.length).fill(Infinity);
	distance[source] = 0;
	let visited = new Set<number>();

	let stack: number[] = [source];
	visited.add(source);

	while (stack.length > 0) {
		let curr = stack.pop() as number;
		let currdist = distance[curr];

		for (let neighbour of graph[curr]) {
			if (visited.has(neighbour.to) && neighbour.to !== source) continue;
			if (currdist + neighbour.w < distance[neighbour.to])
				distance[neighbour.to] = currdist + neighbour.w;
			stack.push(neighbour.to);
			visited.add(neighbour.to);
		}
	}

	visited = new Set<number>();
	stack = [source];
	visited.add(source);

	while (stack.length > 0) {
		let curr = stack.pop() as number;
		let currdist = distance[curr];

		for (let neighbour of graph[curr]) {
			if (visited.has(neighbour.to) && neighbour.to !== source) continue;
			if (currdist + neighbour.w < distance[neighbour.to]) {
				distance[neighbour.to] = currdist + neighbour.w;
				return true;
			}

			stack.push(neighbour.to);
			visited.add(neighbour.to);
		}
	}

	return false;
}
