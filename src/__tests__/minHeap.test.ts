import { MinHeap } from '../priorityqueue';

it('creates a priority queue and return elements according to priority', () => {
	const pq = new MinHeap();

	pq.insert(4);
	pq.insert(5);
	pq.insert(2);
	pq.insert(7);

	expect(pq.delete()).toEqual(2);
	expect(pq.delete()).toEqual(4);
});
