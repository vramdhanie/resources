const React = require("react");
const PropTypes = require("prop-types");
const { Text, Color, Box } = require("ink");

const Error = ({ error }) => (
	<Box marginTop={1} marginBottom={2}>
		<Color red>{error}</Color>
	</Box>
);

module.exports = Error;
