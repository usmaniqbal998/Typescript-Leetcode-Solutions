function earliestAcq(logs: number[][], n: number): number {
	let unconnected = n;
	const sortedLogs = sortByTimestamp(logs);

	const friends: number[] = new Array(n).fill(-1);
	const rank: number[] = new Array(n).fill(0);

	for (let friendship of sortedLogs) {
		let [timestamp, userA, userB] = friendship;
		unconnected -= union(friends, rank, userA, userB);
		if (unconnected === 0) return timestamp;
	}

	return -1;
}

function union(
	friends: number[],
	rank: number[],
	userA: number,
	userB: number
): number {
	const rootA = find(friends, userA);
	const rootB = find(friends, userB);

	if (rootA !== rootB) {
		if (rank[rootA] > rank[rootB]) friends[userB] = userA;
		else if (rank[rootB] > rank[rootA]) friends[userA] = userB;
		else {
			friends[userB] = userA;
			rank[userA] += 1;
		}
		return -1;
	}
	return 0;
}

function find(friends: number[], user: number): number {
	if (friends[user] === -1) return user;
	return find(friends, friends[user]);
}

function sortByTimestamp(logs: number[][]): number[][] {
	return logs.sort((a, b) => (a[0] > b[0] ? 1 : 0));
}
