//  breath first and depthfirst graphs traversal

export type Graph = {
	[key: string]: string[];
};

//  depth first iterative approach
export function depthfirstIterative(graphs: Graph, source: string) {
	let stack = [source];

	while (stack.length > 0) {
		const current: string = stack.pop() as string;
		console.log(current);

		const neighbours = graphs[current];
		stack.push(...neighbours);
	}
}

//	depth first recursive

export function depthfirstRecursive(graphs: Graph, source: string) {
	console.log(source);
	for (let neighbour of graphs[source]) {
		depthfirstRecursive(graphs, neighbour);
	}
}

export function breathFirst(graphs: Graph, source: string) {
	let queue = [source];

	while (queue.length > 0) {
		const current: string = queue.shift() as string;
		console.log(current);

		const neighbours = graphs[current];
		queue.push(...neighbours);
	}
}

//	adjacency list 2d

export function depthfirstRecursive_2d(graphs: number[][], source: number) {
	for (let node of graphs[source]) {
		console.log(node);
		depthfirstRecursive_2d(graphs, node);
	}
}
