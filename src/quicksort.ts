function QuickSort(arr: number[], lo: number, hi: number) {
	if (lo >= hi) {
		return;
	}

	const pivot = partition(arr, lo, hi);

	QuickSort(arr, lo, pivot - 1);
	QuickSort(arr, pivot + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
	let index = lo - 1;
	const pivot = arr[hi];

	for (let i = lo; i < hi; i++) {
		if (arr[i] <= pivot) {
			++index;
			let temp = arr[i];
			arr[i] = arr[index];
			arr[index] = temp;
		}
	}

	++index;
	arr[hi] = arr[index];
	arr[index] = pivot;

	return index;
}

export default function sort(arr: number[]): number[] {
	QuickSort(arr, 0, arr.length - 1);
	return arr;
}
