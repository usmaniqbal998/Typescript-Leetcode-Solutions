//  https://leetcode.com/problems/longest-substring-without-repeating-characters/

export function lengthOfLongestSubstring(s: string): number {
	if (s.length === 0) return 0;

	let left = 0;
	let right = 0;
	const map = {};
	let length = 1;

	while (right < s.length) {
		map[s[right]] = map[s[right]] + 1 || 1;
		if (map[s[right]] > 1) {
			while (left <= right && map[s[right]] !== 1) {
				map[s[left]] = map[s[left]] - 1;
				left++;
			}
		}
		length = Math.max(length, right - left + 1);

		right++;
	}

	return length;
}
