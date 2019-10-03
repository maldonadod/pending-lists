const EmptyList = require("./EmptyList");

class ListRepository {
	constructor() {
		this.lists = [];
	}
	add({ title }) {
		this.lists = [...this.lists, new EmptyList(title)]
	}
	first() {
		return this.lists[0]
	}
	showAll() {
		return this.lists
	}
}

module.exports = ListRepository;