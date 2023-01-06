import {
	Graph,
	depthfirstIterative,
	breathFirst,
	depthfirstRecursive,
	depthfirstRecursive_2d,
} from '../graphs';

it('traverse graph iteratively in depth first order', () => {
	//adjacency list
	const graph: Graph = {
		a: ['b', 'c'],
		b: ['d'],
		c: ['e'],
		d: ['f'],
		e: [],
		f: [],
	};

	expect(depthfirstIterative(graph, 'a')).toBe(undefined);
});

it('traverse graph recursively in depth first order', () => {
	//adjacency list
	const graph: Graph = {
		a: ['b', 'c'],
		b: ['d'],
		c: ['e'],
		d: ['f'],
		e: [],
		f: [],
	};

	expect(depthfirstRecursive(graph, 'a')).toBe(undefined);
});

it('traverse graph iteratively in breath first order', () => {
	//adjacency list
	const graph: Graph = {
		a: ['b', 'c'],
		b: ['d'],
		c: ['e'],
		d: ['f'],
		e: [],
		f: [],
	};

	expect(breathFirst(graph, 'a')).toBe(undefined);
});

it('traverse graph recursively in depth first order', () => {
	//adjacency list
	const graph: number[][] = [[4, 3, 1], [3, 2, 4], [3], [4], []];

	expect(depthfirstRecursive_2d(graph, 0)).toBe(undefined);
});
