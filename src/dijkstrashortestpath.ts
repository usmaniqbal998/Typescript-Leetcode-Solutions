type node = {
	[key: string]: number;
};

type Graph = {
	[key: string]: node;
};

export let findShortestPath = (
	graph: Graph,
	startNode: string,
	endNode: string
) => {
	// track distances from the start node using a hash object
	let distances = {};

	distances[endNode] = 'Infinity';
	distances = Object.assign(distances, graph[startNode]);
	// track paths using a hash object
	console.log(distances);

	let parents: object = { [endNode]: null };
	for (let child in graph[startNode]) {
		parents[child] = startNode;
	}

	console.log(parents);

	const visited: any[] = [];
	// collect visited nodes
	// find the nearest node
	let node = shortestDistanceNode(distances, visited);

	console.log(node);

	// for that node:
	// find its child nodes
	// for each of those child nodes:
	// make sure each child node is not the start node
	// save the distance from the start node to the child node
	// if there's no recorded distance from the start node to the child node in the distances object
	// or if the recorded distance is shorter than the previously stored distance from the start node to the child node
	// save the distance to the object
	// record the path
	// move the current node to the visited set
	// move to the nearest neighbor node
	// when the end node is reached, reverse the recorded path back to the start node
	//this is the shortest path
	// return the shortest path & the end node's distance from the start node
};

let shortestDistanceNode = (distances: object, visited: any[]) => {
	// create a default value for shortest
	let shortest = null;

	// for each node in the distances object
	for (let node in distances) {
		// if no node has been assigned to shortest yet
		// or if the current node's distance is smaller than the current shortest
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest];

		// and if the current node is in the unvisited set
		if (currentIsShortest && !visited.includes(node)) {
			// update shortest to be the current node
			shortest = node;
		}

		console.log(shortest);
	}
	return shortest;
};
