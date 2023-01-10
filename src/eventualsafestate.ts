//  https://leetcode.com/problems/find-eventual-safe-states/description/

enum colors {
	WHITE,
	BLACK,
	GREY,
}

function eventualSafeNodes(graph: number[][]): number[] {
	let n = graph.length;
	let co = new Array(n).fill(colors.WHITE);
	let res: number[] = [];

	for (let i = 0; i < graph.length; i++) {
		if (dfs(graph, i, co)) {
			res.push(i);
		}
	}
	return res;
}

function dfs(graph: number[][], node: number, clr: colors[]): boolean {
	if (clr[node] === colors.GREY) return false;
	if (clr[node] === colors.BLACK) return true;

	clr[node] = colors.GREY;

	for (let neighbour of graph[node]) {
		if (clr[neighbour] === colors.BLACK) continue;
		if (clr[neighbour] === colors.GREY || !dfs(graph, neighbour, clr))
			return false;
	}

	clr[node] = colors.BLACK;
	return true;
}
