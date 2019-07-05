class Queue {
	constructor() {
		this.queue = []
		this.count = 0;

	}

	enqueue(item) {
		this.count++;
		this.queue.push(item);
	}

	dequeue() {
		if(this.count === 0) {
			return undefined;
		}
		let deletedItem = this.queue.shift();
		this.count--;
		return deletedItem;
	}

	size() {
		return this.count;
	}
}
