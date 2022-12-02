// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  return addTwoLists(l1, l2, 0);
}

function addTwoLists(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number
): ListNode | null {
  if (l1 === null && l2 === null && carry <= 0) {
    return null;
  }

  const resultList = new ListNode();

  let res: number = (l1?.val || 0) + (l2?.val || 0) + carry;
  if (res >= 10) {
    carry = Math.floor(res / 10);
    res = res % 10;
  } else {
    carry = 0;
  }

  resultList.val = res;
  resultList.next = addTwoLists(l1?.next || null, l2?.next || null, carry);
  return resultList;
}
