import { maxAreaOfIsland } from '../maxareaofislands';

it('conts island from 2d array', () => {
	const arr = [
		[0, 1, 1],
		[0, 1, 0],
		[0, 1, 0],
		[1, 0, 0],
	];

	expect(maxAreaOfIsland(arr)).toBe(4);
});
