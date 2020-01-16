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
			<header>This is the list of bookmarks</header>

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
	}

	main {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 8px;
		column-gap: 8px;
	}

	footer {
	}
`;
