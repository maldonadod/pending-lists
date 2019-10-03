class CreateEmptyListUseCase {
	constructor(repo, presenter) {
		this.repo = repo;
		this.presenter = presenter;
	}
	execute(newList) {
		this.repo.add(newList)
		this.presenter.showLists(this.repo.showAll())
	}
}
module.exports = CreateEmptyListUseCase;