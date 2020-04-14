import React from "react";
import { FaCheck } from "react-icons/fa";

const FilterTag = ({ name, count, selected, addFilter, removeFilter }) => {
	const removeHandler = e => {
		e.stopPropagation();
		removeFilter(name);
	};

	return (
		<div
			className="px-4 h-6 rounded-full text-xs font-semibold inline-flex items-center cursor-pointer bg-indigo-100 text-indigo-700 hover:bg-indigo-500 hover:text-white mr-1"
			onClick={() => addFilter(name)}
		>
			<div className="w-5 h-5 rounded-full mr-1 text-indigo-100 bg-indigo-300 text-center text-xs">
				{count}
			</div>
			{name}
			{selected ? (
				<FaCheck
					className="rounded-full mr-1 text-xs ml-1"
					onClick={removeHandler}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default FilterTag;
