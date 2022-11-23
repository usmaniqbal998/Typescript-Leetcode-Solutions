import { isValid } from '../validparenthesis';

it('tets if input string are valid parenthis', () => {
	expect(isValid('()')).toBe(true);
	expect(isValid('[()]')).toBe(true);
	expect(isValid('[()')).toBe(false);
});
