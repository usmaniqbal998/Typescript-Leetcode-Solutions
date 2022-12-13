// Definition for Node.

export class GraphNode {
	val: number;
	neighbors: GraphNode[];
	constructor(val?: number, neighbors?: GraphNode[]) {
		this.val = val === undefined ? 0 : val;
		this.neighbors = neighbors === undefined ? [] : neighbors;
	}
}
//  leetcode.com/problems/clone-graph/description/

https: export function cloneGraph(node: GraphNode | null): GraphNode | null {
	let visited = new Map<number, GraphNode>();
	const res = exploreGraph(node, visited);
	console.log(res);
	return res;
}

function exploreGraph(
	node: GraphNode | null,
	visited: Map<number, GraphNode>
): GraphNode | null {
	if (node === null) return node;

	if (visited.has(node.val)) return visited.get(node.val) || null;

	const n = new GraphNode(node.val, []);
	visited.set(n.val, n);

	for (let neighbours of node.neighbors) {
		n.neighbors.push(
			exploreGraph(neighbours as GraphNode, visited) as GraphNode
		);
	}

	return n;
}
