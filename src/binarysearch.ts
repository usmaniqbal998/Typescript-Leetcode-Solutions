function search(nums: number[], target: number): number {
	return findNum(nums, target, 0, nums.length - 1);
}

function findNum(
	nums: number[],
	target: number,
	low: number,
	hi: number
): number {
	if (hi < 0 || low > hi) return -1;

	const midpoint = Math.floor((low + hi) / 2);

	if (target === nums[midpoint]) return midpoint;

	if (target < nums[midpoint]) {
		return findNum(nums, target, low, midpoint - 1);
	} else {
		return findNum(nums, target, midpoint + 1, hi);
	}
}
