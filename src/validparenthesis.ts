const Pairs = {
	'(': ')',
	'[': ']',
	'{': '}',
};
export function isValid(s: string): boolean {
	if (s.length % 2 !== 0) {
		return false;
	}

	let pipe: string[] = [];

	for (const value of s) {
		if (value === Pairs[pipe[pipe.length - 1]]) pipe.pop();
		else pipe.push(value);
	}

	return !Boolean(pipe.length);
}
