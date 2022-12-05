import { isSameTree, TreeNode } from '../sametree';

it('it tells if both trees are structurally and by values same', () => {
	const tree = new TreeNode(3);
	tree.left = new TreeNode(2);
	tree.right = new TreeNode(2);

	const tree2 = new TreeNode(3);
	tree2.left = new TreeNode(2);
	tree2.right = new TreeNode(2);

	expect(isSameTree(tree, tree2)).toBe(true);
});
