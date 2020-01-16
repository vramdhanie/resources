import React from "react";
import styled from "styled-components";

const Tag = ({ className, name }) => {
	return <div className={className}>{name}</div>;
};

export default styled(Tag)`
	color: #fff;
	border: none;
	cursor: default;
	height: 32px;
	display: inline-flex;
	outline: 0;
	padding: 2px;
	font-size: 0.8125rem;
	box-sizing: border-box;
	transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	align-items: center;
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	white-space: nowrap;
	border-radius: 16px;
	vertical-align: middle;
	justify-content: center;
	text-decoration: none;
	background-color: #616161;
	margin: 4px;

	&:hover {
		background-color: white;
		color: #616161;
		box-shadow: 0 0 1px 1px #616161;
	}
`;
