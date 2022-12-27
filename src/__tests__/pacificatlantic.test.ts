import { pacificAtlantic } from '../pacificatlantic';

it('should return list of indexes where water fall in both oceans', () => {
	expect(
		pacificAtlantic([
			[1, 2, 2, 3, 5],
			[3, 2, 3, 4, 4],
			[2, 4, 5, 3, 1],
			[6, 7, 1, 4, 5],
			[5, 1, 1, 2, 4],
		])
	).toEqual([
		[0, 4],
		[1, 3],
		[2, 2],
		[3, 0],
		[3, 1],
		[4, 0],
	]);
});
