//	https://leetcode.com/problems/reverse-integer/description/

export function reverse(x: number): number {
	if (x === 0) return 0;

	let isNegative: boolean = x < 0;
	let reverse = '';

	x = Math.abs(x);

	while (x) {
		reverse = reverse + (x % 10);

		x = Math.floor(x / 10);
	}

	let reversed = parseInt(reverse);

	if (reversed < -2147483648 || reversed > 2147483647) return 0;

	return isNegative ? reversed * -1 : reversed;
}
