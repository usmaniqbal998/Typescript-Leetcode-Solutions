//  https://leetcode.com/problems/longest-substring-without-repeating-characters/

import { lengthOfLongestSubstring } from '../longestsubstring';

it('returns length of longest substring with distinct values', () => {
	expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
	expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
	expect(lengthOfLongestSubstring('bbbb')).toBe(1);
});
