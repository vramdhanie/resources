const fs = require("fs").promises;
const { DATA_FILE } = require("./config");

/**
 * Lowercase all tags in the dataset
 *
 */
const lowerCaseTags = async () => {
	try {
		const data = await fs.readFile(DATA_FILE);
		const links = JSON.parse(data);
		links.forEach(
			link => (link.tags = link.tags.map(tag => tag.toLowerCase()))
		);
		await fs.writeFile(DATA_FILE, JSON.stringify(links, null, 2));
		console.log("Success! All tags lower case.");
	} catch (err) {
		console.log("Unfortunately something went wrong.", err);
	}
};

lowerCaseTags();
