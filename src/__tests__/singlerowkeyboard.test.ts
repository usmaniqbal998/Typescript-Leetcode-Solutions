import { calculateTime } from '../singlerowkeyboard';

it('caluculates time for a word to write oj single row keyboard', () => {
	expect(calculateTime('abcdefghijklmnopqrstuvwxyz', 'cba')).toBe(4);
	expect(calculateTime('pqrstuvwxyzabcdefghijklmno', 'leetcode')).toBe(73);
});
