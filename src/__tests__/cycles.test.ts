import { cyclesUndirectedGraph } from '../cycles';

it('returns true if cycle detected', () => {
	let graph: number[][] = [[1, 2], [0, 2], [0, 1, 3], [2]];
	expect(cyclesUndirectedGraph(graph)).toEqual(true);
});

it('returns false if cycle not detected', () => {
	let graph: number[][] = [[1], [0]];
	expect(cyclesUndirectedGraph(graph)).toEqual(false);
});

it('returns false if cycle not detected', () => {
	let graph: number[][] = [[1], [0, 2], [3], []];
	expect(cyclesUndirectedGraph(graph)).toEqual(false);
});
