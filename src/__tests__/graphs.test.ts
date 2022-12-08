import {
	Graph,
	depthfirstIterative,
	breathFirst,
	depthfirstRecursive,
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
