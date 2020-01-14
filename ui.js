"use strict";
const React = require("react");
const PropTypes = require("prop-types");
const { Text, Color, Box } = require("ink");

const App = options => (
	<Box flexDirection="column" marginLeft={4}>
		<Box marginTop={1}>
			<Box width={14}>Date:</Box>
			<Color green>{options[0]}</Color>
		</Box>
		<Box>
			<Box width={14}>Name:</Box>
			<Color green>{options[1]}</Color>
		</Box>
		<Box>
			<Box width={14}>Url:</Box>
			<Color blue>{options[2]}</Color>
		</Box>

		<Box>
			<Box width={14}>Description:</Box>
			<Color>{options[3]}</Color>
		</Box>

		<Box>
			<Box width={14}>Tags:</Box>
			<Color>{options[4] ? options[4] : "None"}</Color>
		</Box>
	</Box>
);

module.exports = App;
