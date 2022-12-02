import { addTwoNumbers, ListNode } from "../addTwoLists";

it("adds two lists in reverse", () => {
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);

  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);

  const res = new ListNode(7);
  res.next = new ListNode(0);
  res.next.next = new ListNode(8);

  expect(addTwoNumbers(l1, l2)).toEqual(res);
});
