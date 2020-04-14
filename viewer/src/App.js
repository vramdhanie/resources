import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Bookmark from "./bookmark";
import FilterTag from "./filterTag";
import { MdClose } from "react-icons/md";
import { FaBackspace, FaEllipsisV } from "react-icons/fa";
import logo from "./images/logo.png";

function App({ className }) {
	const [bookmarks, setBookmarks] = useState([]);
	const [tags, setTags] = useState([]);
	const [error, setError] = useState(null);
	const [filters, setFilters] = useState([]);
	const [search, setSearch] = useState("");
	const [showTags, setShowTags] = useState(false);

	const getTags = data => {
		// setTags(
		// 	Object.keys(
		// 		data.reduce((acc, curr) => {
		// 			curr.tags.forEach(t => (acc[t] = t));
		// 			return acc;
		// 		}, {})
		// 	)
		// );
		setTags(
			Object.entries(
				data
					.flatMap(bookmark => bookmark.tags)
					.reduce((acc, curr) => {
						if (acc[curr]) {
							acc[curr] = acc[curr] + 1;
						} else {
							acc[curr] = 1;
						}
						return acc;
					}, {})
			).sort((a, b) => b[1] - a[1])
		);
	};

	const addFilter = filter => {
		if (!filters.includes(filter)) {
			setFilters([...filters, filter]);
		}
	};

	const removeFilter = filter => {
		setFilters(filters.filter(f => f !== filter));
	};

	useEffect(() => {
		(async function fetchData() {
			try {
				const result = await fetch(
					"https://raw.githubusercontent.com/vramdhanie/resources/master/data/data.json"
				);
				if (!result.ok) {
					throw new Error();
				}
				const data = await result.json();
				setBookmarks(data);
				getTags(data);
				setError(null);
			} catch (e) {
				setError("Could not fetch data");
				console.log(e);
			}
		})();
	}, []);

	const filtered = (filters.length
		? bookmarks.filter(b => b.tags.some(t => filters.includes(t)))
		: bookmarks
	)
		.filter(b => b.description.includes(search))
		.map(b => <Bookmark {...b} key={b.id} />);

	return (
		<div className="flex flex-col h-screen">
			<header className="mb-1 bg-gray-700 p-2 text-white shadow-md flex items-center justify-between">
				<div className="flex items-center">
					<img src={logo} alt="Resources Logo" />
					<h1>Bookmarks</h1>
				</div>
				<div className="">
					<input
						onChange={e => setSearch(e.target.value)}
						type="text"
						value={search}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="stats">
					<div className="count">
						Showing {filtered.length} of {bookmarks.length}
					</div>
					<div>
						{filters.length ? (
							<div className="filter-list">
								{filters.map(f => (
									<div className="filter" key={f}>
										{f}{" "}
										<MdClose
											className="closeBtn"
											onClick={() => removeFilter(f)}
										/>
									</div>
								))}
								<FaBackspace
									className="backspace"
									onClick={() => setFilters([])}
								/>
							</div>
						) : (
							"No Filters"
						)}
					</div>
				</div>
			</header>
			<section className="tags">
				<div className="flex justify-end">
					<FaEllipsisV
						onClick={() => setShowTags(showTags => !showTags)}
						className="text-right cursor-pointer hover:text-gray-300 text-gray-600 tansition-all duration-300"
					/>
				</div>
				{showTags
					? tags.map(([name, count]) => (
							<FilterTag
								name={name}
								count={count}
								selected={filters.includes(name)}
								key={name}
								addFilter={addFilter}
								removeFilter={removeFilter}
							/>
					  ))
					: ""}
			</section>
			<main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{error ? <div>{error}</div> : ""}
				{filtered}
			</main>
			<footer>&copy; 2020 Vincent Ramdhanie</footer>
		</div>
	);
}

export default styled(App)`
	main {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr;
		grid-column-gap: 8px;
		column-gap: 8px;
	}

	footer {
		margin-top: 8px;
		padding: 16px;
		font-size: 0.7rem;
		font-weight: 300px;
		text-align: center;
	}

	.filter-list {
		display: flex;
		align-items: center;
	}

	.filter {
		display: flex;
		align-items: center;
		margin-top: 2px;
	}

	.filter-list .filter:not(:last-child) {
		border-right: solid 1px white;
		margin-right: 2px;
		padding: 2px;
	}

	.closeBtn {
		transition: all 1s linear;
		cursor: pointer;
	}

	.closeBtn:hover {
		color: red;
		transform: translateY(-1);
	}

	.count {
		text-align: right;
	}

	.backspace {
		cursor: pointer;
		margin-left: 3px;
		transition: all 1s linear;
	}
	.backspace:hover {
		color: red;
		transform: translateY(-1);
	}

	.site_name {
		display: flex;
	}

	@media screen and (min-width: 600px) {
		main {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and (min-width: 1200px) {
		main {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	@media screen and (min-width: 1800px) {
		main {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
`;
