import React from "react";
import styled from "styled-components";
import Card from "./card";
import CardHeader from "./cardHeader";
import Tag from "./tag";
import ReactMarkdown from "react-markdown";

const Bookmark = ({ className, title, description, url, tags }) => {
	return (
		<Card className={className}>
			<CardHeader title={title} url={url} />
			<div className="content">
				<ReactMarkdown
					source={description}
					escapeHtml={false}
					renderers={{ paragraph: props => <div {...props} /> }}
				/>
			</div>
			<div className="tags">
				{tags.map(tag => (
					<Tag name={tag} key={tag} />
				))}
			</div>
		</Card>
	);
};

export default styled(Bookmark)`
	.content {
		padding: 8px;

		p {
			font-weight: 300;
		}
	}

	.tags {
		width: 100%;
	}
`;
