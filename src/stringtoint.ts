//  https://leetcode.com/problems/string-to-integer-atoi/

function myAtoi(s: string): number {
	let res: number;
	let isNegative = false;
	let nonDigitChars = 0;

	s = s.trim();

	if (s.charCodeAt(0) === 45) {
		isNegative = true;
		s = s.slice(1);
	} else if (s.charCodeAt(0) === 43) s = s.slice(1);

	for (let i = 0; i < s.length; i++) {
		if (s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) break;
		nonDigitChars++;
	}

	s = s.slice(0, nonDigitChars);

	if (nonDigitChars === 0) res = 0;
	else res = isNegative ? parseInt('-' + s) : parseInt(s);

	if (res < -2147483648) res = -2147483648;
	else if (res > 2147483647) res = 2147483647;

	return res;
}
