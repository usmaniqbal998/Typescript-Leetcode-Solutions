export default function longestCommonPrefix(strs: string[]): string {
	return longestPrefix(strs);
}

export function longestPrefix(strs: string[]): string {
	if (strs.length <= 1) return strs[0];

	const midpoint = Math.floor(strs.length / 2);

	return compare(
		longestCommonPrefix(strs.slice(0, midpoint)),
		longestCommonPrefix(strs.slice(midpoint))
	);
}

export function compare(left: string, right: string): string {
	let min = Math.min(left.length, right.length);
	for (let i = 0; i < min; i++) {
		if (left.charAt(i) != right.charAt(i)) return left.substring(0, i);
	}

	return left.substring(0, min);
}
