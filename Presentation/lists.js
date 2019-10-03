function toHeadTitle({ index, title }) {
	return `${index}) ${title}`
}
function toViewModel(list, index) {
	return {
		index: index + 1,
		title: list.title
	}
}
module.exports = {
	showLists: lists => {
		console.clear()
		console.log(
			lists
				.map(toViewModel)
				.map(toHeadTitle)
				.join(" | ")
		)
	}
}