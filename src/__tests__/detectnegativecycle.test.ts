import { belmanford } from '../detectnegativecycle';

it('detects negative cycle and show shortest path', () => {
	let g = [
		[{ to: 1, w: 1 }],
		[{ to: 2, w: -1 }],
		[{ to: 3, w: -1 }],
		[{ to: 0, w: -1 }],
	];

	expect(belmanford(g, 0)).toBe(true);
});
