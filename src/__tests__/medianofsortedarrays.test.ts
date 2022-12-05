import { findMedianSortedArrays } from '../medianofsortedarrays';

it('should return median of sorted arrays', () => {
	expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
	expect(findMedianSortedArrays([], [2, 3])).toBe(2.5);
});
