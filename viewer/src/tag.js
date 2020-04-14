import React from "react";

const Tag = ({ name }) => {
	return (
		<div className="text-white inline-flex justify-center items-center rounded-full bg-gray-600 p-1 text-xs m-1 hover:bg-white hover:text-gray-600 transition-all duration-300 shadow-sm">
			{name}
		</div>
	);
};

export default Tag;

// 	&:hover {
// 		background-color: white;
// 		color: #616161;
// 		box-shadow: 0 0 1px 1px #616161;
// 	}
// `;
