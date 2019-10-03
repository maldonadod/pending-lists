const CreateEmptyListUseCase = require("../Domain/CreateEmptyListUseCase");
const ListRepository = require("../Domain/ListRepository");
const Presenter = require("../Domain/Presenter");

describe("WorkspaceShould", () => {
	
	const output = {
		showLists: jest.fn()
	}
	const repository = new ListRepository()
	repository.add = jest.fn(repository.add)
	const presenter = new Presenter(output)

	it("should add an empty list given a title", () => {

		new CreateEmptyListUseCase(repository, presenter).execute({ title: "my first list" });

		expect(repository.add).toHaveBeenCalledWith({ title: "my first list" })
		expect(output.showLists).toHaveBeenCalledWith([{ title: "my first list" }])
	})
})