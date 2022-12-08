export function calculateTime(keyboard: string, word: string): number {
	const map = {};
	let sum = 0;
	let current = 0;

	for (let i = 0; i < keyboard.length; i++) {
		map[keyboard[i]] = i;
	}

	for (let alphabet of word) {
		let v = map[alphabet];
		sum += Math.abs(current - v);
		current = v;
	}
	return sum;
}
