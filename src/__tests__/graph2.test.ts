import { depthfirstRecursive, depthfirstIterative } from '../graph2';

it('should traversegraph and print values', () => {
	const graph: number[][] = [
		[1, 3],
		[0, 2, 4, 6],
		[1, 6],
		[0, 5],
		[1, 5],
		[3, 4, 6],
		[1, 2, 5],
		[],
	];

	const visited = new Set<number>();
	const res: number[] = [];
	let r;

	for (let i = 0; i < graph.length; i++) {
		if (visited.has(i)) continue;
		visited.add(i);
		r = depthfirstRecursive(graph, visited, i, res);
	}

	expect(r).toEqual(res);
});

it('should traverse graph Iteratively and print values', () => {
	const graph: number[][] = [
		[1, 3],
		[0, 2, 4, 6],
		[1, 6],
		[0, 5],
		[1, 5],
		[3, 4, 6],
		[1, 2, 5],
		[],
	];

	const visited = new Set<number>();
	const res: number[] = [];
	let r;

	for (let i = 0; i < graph.length; i++) {
		if (visited.has(i)) continue;
		visited.add(i);
		r = depthfirstIterative(graph, visited, i, res);
	}

	expect(r).toEqual(res);
});
