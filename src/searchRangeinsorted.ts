//  https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

function searchRange(nums: number[], target: number): number[] {
	return [findBound(nums, target, true), findBound(nums, target, false)];
}

function findBound(nums: number[], target: number, isFirst: boolean): number {
	let low = 0;
	let hi = nums.length - 1;

	while (low <= hi) {
		const mid = Math.floor(low + (hi - low) / 2);
		const val = nums[mid];

		if (isFirst && val === target) {
			if (mid === low || nums[mid - 1] !== target) return mid;
			else hi = mid - 1;
		}

		if (!isFirst && val === target) {
			if (mid === hi || nums[mid + 1] !== target) return mid;
			else low = mid + 1;
		}

		if (val > target) hi = mid - 1;
		if (val < target) low = mid + 1;
	}

	return -1;
}
