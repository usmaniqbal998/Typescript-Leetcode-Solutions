import { reverse } from '../reverseinteger';

it('reverses 32 bit integers else return 0', () => {
	expect(reverse(-321)).toBe(-123);
	expect(reverse(321)).toBe(123);
});
