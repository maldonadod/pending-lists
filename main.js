const CreateListController = require("./CreateListController");

process
	.stdin
	.on("data", line => {
		line = line.toString().replace(/(\r\n|\n|\r)/gm, "")
		CreateListController.handle({ title: line })
	})