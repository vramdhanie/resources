import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const FilterTag = ({
	className,
	name,
	count,
	selected,
	addFilter,
	removeFilter
}) => {
	const removeHandler = e => {
		e.stopPropagation();
		removeFilter(name);
	};

	return (
		<div className={className} onClick={() => addFilter(name)}>
			<div className="count">{count}</div>
			{name}
			{selected ? <FaCheck className="check" onClick={removeHandler} /> : ""}
		</div>
	);
};

export default styled(FilterTag)`
	color: #fff;
	border: none;
	cursor: pointer;
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

	.check {
		color: green;
		background: white;
		border-radius: 50%;
		padding: 1px;
		margin-left: 2px;
		transition: all 1s linear;
	}

	.check:hover {
		color: white;
		background: green;
	}

	.count {
		background: #0034ab;
		border-radius: 50%;
		color: white;
		padding: 1px;
		margin-right: 2px;
		width: 16px;
		text-align: center !important;
	}
`;
