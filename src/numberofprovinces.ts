export function findCircleNum(isConnected: number[][]): number {
	const connections = new Array(isConnected.length).fill(-1);
	let provinces = isConnected.length;
	let rank = new Array(isConnected.length).fill(1);

	for (let i = 0; i < connections.length; i++) {
		for (let j = 0; j < connections.length; j++)
			if (isConnected[i][j] === 1)
				provinces += union(connections, rank, i, j);
	}

	return provinces;
}

export function union(
	connections: number[],
	rank: number[],
	cityA: number,
	cityB: number
) {
	const capitalA = find(cityA, connections);
	const capitalB = find(cityB, connections);

	if (capitalA !== capitalB) {
		if (rank[capitalA] > rank[capitalB]) {
			connections[capitalB] = capitalA;
		} else if (rank[capitalB] > rank[capitalA]) {
			connections[capitalA] = capitalB;
		} else {
			connections[capitalB] = capitalA;
			rank[capitalA] += 1;
		}
		return -1;
	}

	return 0;
}

export function find(city: number, connections: number[]): number {
	if (connections[city] === -1) return city;
	return (connections[city] = find(connections[city], connections));
}
