import { twoSumOptimised } from '../twosum';

it('should return empty array for nums less then 2 length', () => {
	expect(twoSumOptimised([1], 1)).toEqual([]);
});

it('should return indices of elements with target sum', () => {
	expect(twoSumOptimised([2, 7, 11, 15], 9)).toEqual([1, 0]);
});

it('should return indices of elements with target in case of same elements', () => {
	expect(twoSumOptimised([3, 3], 6)).toEqual([1, 0]);
});
