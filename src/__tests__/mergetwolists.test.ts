import ListNode, { mergeTwoLists } from '../mergesortedlists';

it('it merges sorted lists', () => {
	const list1 = new ListNode(1, {
		val: 2,
		next: { val: 4, next: null },
	});

	const list2 = new ListNode(1, {
		val: 3,
		next: { val: 4, next: null },
	});

	const res = new ListNode(1, {
		val: 1,
		next: {
			val: 2,
			next: {
				val: 3,
				next: {
					val: 4,
					next: {
						val: 4,
						next: null,
					},
				},
			},
		},
	});
	expect(mergeTwoLists(list1, list2)).toEqual(res);
});
