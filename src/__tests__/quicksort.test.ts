import sort from '../quicksort';

it('Sorts your array', () => {
	expect(sort([3, 7, 5, 6, 10, 8, 0])).toEqual([0, 3, 5, 6, 7, 8, 10]);
});
