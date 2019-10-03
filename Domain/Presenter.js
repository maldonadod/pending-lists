class Presenter {
	constructor(output) {
		this.output = output
	}
	showLists(lists) {
		this.output.showLists(lists.map(list => list.asJSON()))
	}
}

module.exports = Presenter;