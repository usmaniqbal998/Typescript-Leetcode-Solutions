let toNum = (num: string) => Number(num);

export default function isPalindrome(x: number): boolean {
	if (x < 0) return false;

	const nums = Array.from(String(x), toNum);

	let i = 0;
	let j = nums.length - 1;
	while (i <= j) {
		if (nums[i] !== nums[j]) {
			return false;
		}

		i++;
		j--;
	}

	return true;
}
