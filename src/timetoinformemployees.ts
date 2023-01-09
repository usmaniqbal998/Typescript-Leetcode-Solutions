//  https://leetcode.com/problems/time-needed-to-inform-all-employees/description/

function numOfMinutes(
	n: number,
	headID: number,
	manager: number[],
	informTime: number[]
): number {
	if (n === 1) return informTime[0];
	let totalTime = 0;

	let company = createList(manager);
	let q: number[] = [headID];

	while (q.length > 0) {
		let current = q.shift() as number;

		if (manager[current] >= 0)
			informTime[current] += informTime[manager[current]];
		totalTime = Math.max(totalTime, informTime[current]);
		q.push(...company[current.toString()]);
	}

	return totalTime;
}

function createList(m: number[]): object {
	let c: object = {};
	for (let i = 0; i < m.length; i++) {
		if (m[i] === -1) continue;
		c[m[i]] = c[m[i]] ? [...c[m[i]], i] : [i];
		c[i] = c[i] ? [...c[i]] : [];
	}

	return c;
}
