const React = require("react");
const { useState } = require("react");
const { Color, Box } = require("ink");
const MultiSelect = require("ink-multi-select");

const Interactive = () => {
	const [page, setPage] = useState(4);
	const mainMenu = [
		{
			label: "Add Bookmark",
			value: 1
		},
		{
			label: "Edit Bookmark",
			value: 2
		},
		{
			label: "Delete Bookmark",
			value: 3
		},
		{
			label: "Exit",
			value: 4
		}
	];

	const menuSelection = items => {
		console.log(items);
	};

	let screen;

	switch (page) {
		case 0:
			screen = <MultiSelect items={mainMenu} onSubmit={menuSelection} />;
			break;
		default:
			screen = <Box>Interactive Mode!</Box>;
	}

	return screen;
};

module.exports = Interactive;
