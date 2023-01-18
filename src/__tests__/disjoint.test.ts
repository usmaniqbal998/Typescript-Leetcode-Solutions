import { unionFind, union, find } from '../disjointsets';

it('should yield root of given node', () => {
	const arr = [-1, 0, -1];

	const results = find(arr, 2);
	const expectedResults = 2;

	expect(results).toEqual(expectedResults);
});

it('should yield union of nodes when A already has a parent', () => {
	const arr = [-1, 0, -1];
	const rank = [2, 1, 1];

	const results = union(arr, 1, 2, rank);
	const expectedResults = [-1, 0, 0];

	expect(results).toEqual(expectedResults);
});

it('should yield union of nodes when A is root and B already has parents', () => {
	const arr = [-1, 0, -1];
	const rank = [2, 1, 1];

	const results = union(arr, 2, 1, rank);
	const expectedResults = [-1, 0, 0];

	expect(results).toEqual(expectedResults);
});

it('should yield union of nodes when A and B both have parents', () => {
	const arr = [-1, 0, -1, 2];
	const rank = [2, 1, 2, 1];

	const results = union(arr, 1, 3, rank);
	const expectedResults = [2, 0, -1, 2];

	expect(results).toEqual(expectedResults);
});

it('should tell if nodes are directly or indirectly connected', () => {
	const graph: number[][] = [[], [0], [0], [1], [], [], [5], [5], [4], []];
	const connected: [number, number][] = [
		[2, 3],
		[9, 6],
		[4, 4],
	];
	const results = unionFind(graph, connected);
	const expected = [true, false, true];

	expect(results).toEqual(expected);
});
