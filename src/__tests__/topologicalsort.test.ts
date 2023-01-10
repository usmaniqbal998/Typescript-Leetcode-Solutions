import { topologicalSort } from '../topologicalsort';

it('does topological sort on a directed graph', () => {
	expect(topologicalSort([[], [], [3], [1], [0, 1], [2, 0]])).toEqual([
		5, 4, 2, 3, 1, 0,
	]);
});
