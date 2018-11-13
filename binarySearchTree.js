function BinarySearchTree(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insert = function(val) {
	var subTree = val < this.value ? "left" : "right";

	if (this[subTree]) {
		this[subTree].insert(val);
	} else {
		this[subTree] = new BinarySearchTree(val);
	}
};

BinarySearchTree.prototype.contains = function(val) {
	if (this.value == val) {
		return true;
	}
	var subTree = val < this.value ? "left" : "right";
	if (this[subTree]) {
		return this[subTree].contains(val);
	} else {
		return false;
	}
};
