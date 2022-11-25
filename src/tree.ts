export interface Node<T> {
	value: T;
	children: Node<T>[];
}

export default class BinaryTree<T> {
	root: Node<T>;

	constructor(root: Node<T>) {
		this.root = root;
	}

	insertion(value: T, current: Node<T>) {
		if (this.root === undefined) {
			this.root = { value: value, children: [] };
			return;
		}

		if (current === undefined) {
			return;
		}

		if (value < current.value) {
			if (current.children[0] !== undefined)
				this.insertion(value, current.children[0]);
			else current.children[0] = { value, children: [] };
		}
		if (value > current.value) {
			if (current.children[1] !== undefined)
				this.insertion(value, current.children[1]);
			else current.children[1] = { value, children: [] };
		}
	}
}

export function preOrderTraversal<T>(current: Node<T>, result: T[]): T[] {
	if (current === undefined) return result;

	result.push(current.value);
	preOrderTraversal(current.children[0], result);
	preOrderTraversal(current.children[1], result);

	return result;
}

export function preOrderLoop<T>(root: Node<T> | null): T[] {
	const res: T[] = [];
	const stack: Node<T>[] = [];

	let current = root;
	if (current) stack.push(current);

	while (stack.length !== 0) {
		current = stack.pop() || null;
		res.push(current?.value as T);

		if (current?.children[1]) {
			stack.push(current.children[1]);
		}

		if (current?.children[0]) {
			stack.push(current.children[0]);
		}
	}

	return res;
}

export function inOrderTraversal<T>(current: Node<T>, result: T[]): T[] {
	if (current === undefined) return result;

	inOrderTraversal(current.children[0], result);
	result.push(current.value);
	inOrderTraversal(current.children[1], result);

	return result;
}

export function inOrderLoop<T>(root: Node<T> | null): T[] {
	const res: T[] = [];
	const stack: Node<T>[] = [];

	let current = root;

	while (current !== null || stack.length !== 0) {
		while (current !== null) {
			stack.push(current);
			current = current?.children[0] || null;
		}

		current = stack.pop() || null;
		res.push(current!.value);
		current = current?.children[1] || null;
	}

	return res;
}

export function postOrderTraversal<T>(current: Node<T>, result: T[]): T[] {
	if (current === undefined) return result;

	postOrderTraversal(current.children[0], result);
	postOrderTraversal(current.children[1], result);
	result.push(current.value);

	return result;
}

export function breathFirstTraversal<T>(root: Node<T>): T[] {
	let breath: Node<T>[] = [root];
	let res: T[] = [];

	while (breath.length > 0) {
		let curr = breath.shift();
		if (curr) {
			breath = [...breath, ...curr.children];
		}

		if (curr) res.push(curr.value);
	}

	return res;
}
