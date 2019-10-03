const CreateEmptyListUseCase = require("./CreateEmptyListUseCase");
const output = require("./views/lists");
const ListRepository = require("./ListRepository");
const Presenter = require("./Presenter");

const repository = new ListRepository()
const presenter = new Presenter(output)

module.exports = {
	handle(req) {
		new CreateEmptyListUseCase(repository, presenter).execute(req);
	}
};