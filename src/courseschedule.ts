function canFinish(numCourses: number, prerequisites: number[][]): boolean {
	if (prerequisites.length === 0) return true;
	const graph = createGraph(prerequisites);
	console.log(graph);
	const [fk] = graph.keys();
	const stack = [fk];

	const visited = new Set<number>();

	while (stack.length > 0) {
		let curr: number = stack.pop() as number;

		if (visited.has(curr)) {
			return false;
		}

		visited.add(curr);

		if (graph.has(curr)) {
			const res = graph.get(curr) as number[];
			for (let n of res) {
				console.log(n);
			}
		}

		numCourses--;
	}

	return numCourses - 1 <= 0 && true;
}

function createGraph(courses: number[][]): Map<number, number[]> {
	const map = new Map();

	for (let c of courses) {
		if (map.has(c[1])) {
			let res = map.get(c[1]);
			res.push(c[0]);
			map.set(c[1], res);
		} else {
			map.set(c[1], [c[0]]);
		}
	}

	return map;
}
