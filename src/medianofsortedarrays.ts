//  https://leetcode.com/problems/median-of-two-sorted-arrays/

export function findMedianSortedArrays(
	nums1: number[],
	nums2: number[]
): number {
	let i = 0,
		j = 0;
	let res_sorted = [];

	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] < nums2[j]) {
			res_sorted.push(nums1[i++]);
		} else {
			res_sorted.push(nums2[j++]);
		}
	}

	res_sorted = [...res_sorted, ...nums1.slice(i), ...nums2.slice(j)];
	const midpoint = res_sorted.length / 2;

	if (midpoint % 1 === 0) {
		const floored = Math.floor(midpoint) - 1;
		return (res_sorted[floored] + res_sorted[floored + 1]) / 2;
	} else {
		return res_sorted[Math.floor(midpoint)];
	}
}
