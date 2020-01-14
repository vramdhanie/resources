import React, { useState, useEffect } from "react";
import styled from "styled-components";

function App({ className }) {
	const [bookmarks, setBookmarks] = useState([]);
	const [error, setError] = useState(null);

	useEffect(async () => {
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
	}, []);

	return (
		<div className={className}>
			{error ? <div>{error}</div> : ""}
			This is the list of bookmarks
			{bookmarks.map(b => (
				<div>{b.title}</div>
			))}
		</div>
	);
}

export default styled(App)``;
