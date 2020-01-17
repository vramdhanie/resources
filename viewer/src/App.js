import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Bookmark from "./bookmark";

function App({ className }) {
	const [bookmarks, setBookmarks] = useState([]);
	const [error, setError] = useState(null);

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
				setError(null);
			} catch (e) {
				setError("Could not fetch data");
			}
		})();
	}, []);

	return (
		<div className={className}>
			<header>Bookmarks</header>

			<main>
				{error ? <div>{error}</div> : ""}
				{bookmarks.map(b => (
					<Bookmark {...b} key={b.id} />
				))}
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
		font-size: 1.5rem;
		font-weight: bold;
		background: #616161;
		padding: 16px;
		color: #ffffff;
		margin-bottom: 8px;
		box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
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
