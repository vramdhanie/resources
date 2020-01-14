"use strict";
const React = require("react");
const PropTypes = require("prop-types");
const { Text, Color, Box } = require("ink");

const App = ({ id, date, title, url, description, tags, error }) => (
	<Box flexDirection="column" marginLeft={4}>
		{error ? (
			<Box marginTop={1} marginBottom={2}>
				<Color red>{error}</Color>
			</Box>
		) : (
			""
		)}
		<Box marginTop={1}>
			<Box width={14}>Date:</Box>
			<Color green>{date}</Color>
		</Box>
		<Box>
			<Box width={14}>Name:</Box>
			<Color green>{title}</Color>
		</Box>
		<Box>
			<Box width={14}>Url:</Box>
			<Color blue>{url}</Color>
		</Box>

		<Box>
			<Box width={14}>Description:</Box>
			<Color>{description}</Color>
		</Box>

		<Box>
			<Box width={14}>Tags:</Box>
			<Color>{tags ? tags.join(", ") : "None"}</Color>
		</Box>
	</Box>
);

module.exports = App;
