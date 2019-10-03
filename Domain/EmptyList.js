class EmptyList {
	constructor(title) {
		this.title = title
	}
	equals(aList) {
		return this.title === aList.title
	}
	asJSON() {
		return {
			title: this.title,
		}
	}
}

module.exports = EmptyList;