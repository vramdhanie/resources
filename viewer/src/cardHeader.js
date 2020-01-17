import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import bat from "./images/bat.png";

import styled from "styled-components";

const CardHeader = ({ className, title, url }) => {
	const urlParts = url.split("/");
	const baseUrl = `${urlParts[0]}//${urlParts[2]}`;

	return (
		<div className={className}>
			<div className="avatar">
				<img
					src={baseUrl + "/favicon.ico"}
					alt={title + " icon"}
					className="icon"
					onError={e => (e.target.src = bat)}
				/>
			</div>
			<div className="title">{title}</div>
			<div className="link">
				<a href={url} title={title} target="_blank" rel="noopener noreferrer">
					<FaExternalLinkAlt />
				</a>
			</div>
		</div>
	);
};

export default styled(CardHeader)`
	display: flex;
	align-items: center;
	padding: 8px;
	.title {
		flex: 1;
		font-size: 1.1rem;
		font-weight: 400;
		padding-left: 10px;
	}

	.icon {
		width: 32px;
	}
`;
