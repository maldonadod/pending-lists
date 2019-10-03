const ListRepository = require("../Domain/ListRepository");
const EmptyList = require("../Domain/EmptyList");

it("should add list", addList);
it("should show all lists", showAllLists);

function addList() {
	const repo = new ListRepository()
	
	repo.add({
		title: "my first list"
	})

	expect(repo.first().equals(new EmptyList("my first list"))).toBeTruthy()
}
function showAllLists() {
	const repo = new ListRepository()
	repo.add({
		title: "my first list"
	})
	const lists = repo.showAll()

	expect(lists).toEqual([new EmptyList("my first list")])
}