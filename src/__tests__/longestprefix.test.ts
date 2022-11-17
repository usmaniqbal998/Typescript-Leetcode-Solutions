import longestCommonPrefix, { compare } from '../longestcommonprefix';

it('compares two strings and find common charachters among them', () => {
	expect(compare('flower', 'flight')).toBe('fl');
});

it('it returns common prefix among all array members', () => {
	expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
});
