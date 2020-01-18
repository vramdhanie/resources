import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Bookmark from "./bookmark";
import FilterTag from "./filterTag";
import { MdClose } from "react-icons/md";
import { FaBackspace } from "react-icons/fa";
import logo from "./images/logo.png";

function App({ className }) {
	const [bookmarks, setBookmarks] = useState([]);
	const [tags, setTags] = useState([]);
	const [error, setError] = useState(null);
	const [filters, setFilters] = useState([]);

	const getTags = data => {
		setTags(
			Object.keys(
				data.reduce((acc, curr) => {
					curr.tags.forEach(t => (acc[t] = t));
					return acc;
				}, {})
			)
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
			}
		})();
	}, []);

	const filtered = (filters.length
		? bookmarks.filter(b => b.tags.some(t => filters.includes(t)))
		: bookmarks
	).map(b => <Bookmark {...b} key={b.id} />);

	return (
		<div className={className}>
			<header>
				<div className="site_name">
					<img src={logo} alt="Resources Logo" />
					<h1>Bookmarks</h1>
				</div>
				<div className="stats">
					<div className="count">
						Showing {filtered.length} of {bookmarks.length}
					</div>
					<div>
						{filters.length ? (
							<div className="filter-list">
								{filters.map(f => (
									<div className="filter">
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
				{tags.map(tag => (
					<FilterTag
						name={tag}
						selected={filters.includes(tag)}
						key={tag}
						addFilter={addFilter}
						removeFilter={removeFilter}
					/>
				))}
			</section>
			<main>
				{error ? <div>{error}</div> : ""}
				{filtered}
			</main>
			<footer>&copy; 2020 Vincent Ramdhanie</footer>
		</div>
	);
}

export default styled(App)`
	display: flex;
	flex-direction: column;
	height: 100%;

	header {
		background: #616161;
		padding: 16px;
		color: #ffffff;
		margin-bottom: 8px;
		box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
		display: flex;
		justify-content: space-between;
		align-items: center;

		& h1 {
			font-size: 1.5rem;
			font-weight: bold;
		}

		& .stats {
			font-size: 0.9rem;
			font-weight: 300;
		}
	}

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
