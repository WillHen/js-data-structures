class BinarySearchTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		let subTree = value > this.value ? 'right' : 'left';

		if (this[subTree]) {
			this[subTree].insert(value);
		} else {
			this[subTree] = new BinarySearchTree(value);
		}
	}


	contains(value) {
		console.log(this.value == value)
		if (this.value == value) {
			console.log('true', true)
			return true
		} else {
			let subTree = value > this.value ? 'right' : 'left';
			if (this[subTree]) {
				return this[subTree].contains(value);	
				
			}
		}
		return false;
	}

}