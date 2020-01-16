import React from "react";
import styled from "styled-components";

const Card = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export default styled(Card)`
	box-shadow: 0.5px 0.5px 1px 1px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	margin: 2px;
`;
