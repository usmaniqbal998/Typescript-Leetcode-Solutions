// priority queue using heap

export class MinHeap {
	length: number = 0;
	private data: number[] = [];

	insert(value: number) {
		this.data[this.length] = value;
		this.heapifyUp(this.length);
		this.length++;
	}

	delete(): number | undefined {
		if (this.length === 0) return undefined;

		const res = this.data[0];
		this.length--;
		if (this.length === 0) {
			this.data = [];
			return res;
		}

		this.data[0] = this.data[this.length];
		this.heapifyDown(0);
		return res;
	}

	heapifyUp(idx: number) {
		if (idx === 0) {
			return;
		}

		let parentIndex = this.parent(idx);
		let parentData = this.data[parentIndex];
		let currNodeData = this.data[idx];

		if (parentData > currNodeData) {
			this.data[parentIndex] = currNodeData;
			this.data[idx] = parentData;
			this.heapifyUp(parentIndex);
		}
	}

	heapifyDown(idx: number) {
		const leftIndex = this.left(idx);
		const rightIndex = this.right(idx);

		if (idx >= this.length || leftIndex > this.length) {
			return;
		}

		const leftData = this.data[leftIndex];
		const rightData = this.data[rightIndex];
		const currentData = this.data[idx];

		if (leftData < rightData && leftData < currentData) {
			this.data[leftIndex] = currentData;
			this.data[idx] = leftData;
			this.heapifyDown(leftIndex);
		} else if (rightData < leftData && rightData < currentData) {
			this.data[rightIndex] = currentData;
			this.data[idx] = rightData;
			this.heapifyDown(rightIndex);
		}
	}

	left(idx: number): number {
		return 2 * idx + 1;
	}

	right(idx: number): number {
		return 2 * idx + 2;
	}

	parent(idx: number): number {
		return Math.floor((idx - 1) / 2);
	}
}
