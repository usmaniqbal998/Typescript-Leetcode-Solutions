import { isSymmetric, TreeNode } from '../symmetrictree';

it('it tells if a tree is a mirror from center or not', () => {
	const tree = new TreeNode(3);
	tree.left = new TreeNode(2);
	tree.right = new TreeNode(2);

	const tree2 = new TreeNode(3);
	tree2.left = new TreeNode(2);
	tree2.right = new TreeNode(1);

	expect(isSymmetric(tree)).toBe(true);

	expect(isSymmetric(tree2)).toBe(false);
});
