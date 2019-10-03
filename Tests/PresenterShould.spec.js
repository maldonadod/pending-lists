const Presenter = require("../Domain/Presenter");
const EmptyList = require("../Domain/EmptyList");

describe("PresenterShould", PresenterShould)

function PresenterShould() {
	it("should show all lists", () => {
		const output = {
			showLists: jest.fn()
		}
		const presenter = new Presenter(output)
		presenter.showLists([
			new EmptyList("my first list"),
			new EmptyList("my second list"),
		])
		expect(output.showLists).toHaveBeenCalledWith([{
			title: "my first list"
		}, {
			title: "my second list"
		}])
	})
}