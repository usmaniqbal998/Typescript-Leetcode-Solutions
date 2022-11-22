import BinaryTree, {
	inOrderTraversal,
	Node,
	postOrderTraversal,
	preOrderTraversal,
	breathFirstTraversal,
} from '../tree';

it('inserts values inside a tree', () => {
	const values = [2, 6, 8, 3, 9, 1, 10, 0, 20];

	const btree = new BinaryTree({ value: 5, children: [] });
	values.forEach((element) => {
		btree.insertion(element, btree.root);
	});

	const preRes = preOrderTraversal(btree.root as Node<number>, []);
	const inRes = inOrderTraversal(btree.root as Node<number>, []);
	const postRes = postOrderTraversal(btree.root as Node<number>, []);
	const bfsRes = breathFirstTraversal(btree.root as Node<number>);

	expect(preRes).toEqual([5, 2, 1, 0, 3, 6, 8, 9, 10, 20]);
	expect(inRes).toEqual([0, 1, 2, 3, 5, 6, 8, 9, 10, 20]);
	expect(postRes).toEqual([0, 1, 3, 2, 20, 10, 9, 8, 6, 5]);
	expect(bfsRes).toEqual([5, 2, 6, 1, 3, 8, 0, 9, 10, 20]);
});
