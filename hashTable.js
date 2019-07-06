
var getIndexBelowMaxForKey = function(str, max) {
	var hash = 0;
	for (var i = 0; i < str.length; i++) {
		hash = (hash << 5) + hash + str.charCodeAt(i);
		hash = hash & hash; // Convert to 32bit integer
		hash = Math.abs(hash);
	}
	return hash % max;
};



class HashTable {
	constructor() {
		this.storage = []
		this.storageLimit = 1000;
	}

	insert(key, value) {

		let index = getIndexBelowMaxForKey(key, this.storageLimit);
		if (this.storage[index]) {
			this.storage[index][key] = value;
		} else {

			this.storage[index] = {};
			this.storage[index][key] = value;
		}

	}

	retrieve(key) {
		let index = getIndexBelowMaxForKey(key, this.storageLimit);
		if (this.storage[index] && this.storage[index][key]) {
			return this.storage[index][key];
		} else {
			return false;
		}
	}

	remove(key) {
		let index = getIndexBelowMaxForKey(key, this.storageLimit);
		if (this.storage[index] !== undefined && this.storage[index][key] !== undefined) {
			let result = this.storage[index][key];
			delete this.storage[index][key];
			return result;
		} else {
			return null;
		}
	}
}