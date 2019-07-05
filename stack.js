class Stack {
	constructor() {
		this.stack = []
		this.count = 0;

	}

	push(item) {
		this.stack.unshift(item);
		this.count++;

	}

	pop(item) {
		if (this.count === 0) {
			return undefined;
		}
		let poppedElement = this.stack.pop();
		this.count--;
		console.log(poppedElement)
		return poppedElement;
	}

	size() {
		return this.count;
	}
}