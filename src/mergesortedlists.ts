//   Definition for singly-linked list.
export default class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val: number, next: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	const res = combineSorted(list1, list2);
	return res;
}

function combineSorted(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	let res: ListNode | null = null;
	if (list1 === null && list2 === null) {
		return res;
	}

	if (list1 === null) {
		return list2;
	}

	if (list2 === null) {
		return list1;
	}
	if (list1!.val <= list2!.val) {
		res = { val: list1!.val, next: null };
		list1 = list1?.next || null;
	} else {
		res = { val: list2!.val, next: null };
		list2 = list2?.next || null;
	}
	res.next = combineSorted(list1, list2);
	return res;
}
