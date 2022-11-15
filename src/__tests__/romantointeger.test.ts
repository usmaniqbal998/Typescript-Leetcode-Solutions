import romanToInt from '../romantointeger';

it('it converts roman number to integer', () => {
	expect(romanToInt('MCMXCIV')).toBe(1994);
});
