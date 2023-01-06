function canVisitAllRooms(rooms: number[][]): boolean {
	const visited: Set<number> = new Set();
	visited.add(0);
	visitRoom(rooms, visited, 0);
	// console.log(visited);
	// // if (visited.length === rooms.length) return true;
	// return false;

	return true;
}

function visitRoom(rooms: number[][], v: Set<number>, r: number) {
	for (let key of rooms[r]) {
		if (v.has(key)) continue;
		v.add(key);
		visitRoom(rooms, v, key);
	}
}
