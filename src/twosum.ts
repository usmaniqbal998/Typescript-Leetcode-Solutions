// with brute force O(n^2)
export function twoSum(nums: number[], target: number): number[] {
	const indices: number[] = [];
	if (nums.length < 2) return indices;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				indices.push(i);
				indices.push(j);

				return indices;
			}
		}
	}

	return indices;
}

// with optimised O(n) solution
export function twoSumOptimised(nums: number[], target: number): number[] {
	const indices: number[] = [];
	const map = new Map();

	if (nums.length < 2) return indices;

	for (let i = 0; i < nums.length; i++) {
		const complementIndex = map.get(target - nums[i]);
		if (complementIndex !== undefined && i !== complementIndex) {
			return [i, complementIndex];
		}

		map.set(nums[i], i);
	}

	return indices;
}
