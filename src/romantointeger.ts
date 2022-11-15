const symbols = {
	I: 1,
	IV: 4,
	V: 5,
	IX: 9,
	X: 10,
	XL: 40,
	L: 50,
	XC: 90,
	C: 100,
	CD: 400,
	D: 500,
	CM: 900,
	M: 1000,
};

export default function romanToInt(s: string): number {
	const symbol_arr = [];

	for (let i = 0; i < s.length; i++) {
		if (symbols[s[i]] < symbols[s[i + 1]]) {
			symbol_arr.push(s[i] + s[i + 1]);
			i++;
		} else {
			symbol_arr.push(s[i]);
		}
	}

	return symbol_arr.reduce((prev, curr) => prev + symbols[curr], 0);
}
