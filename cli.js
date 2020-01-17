#!/usr/bin/env node
"use strict";
const React = require("react");
const fs = require("fs").promises;
const { exec } = require("child_process");
const importJsx = require("import-jsx");
const { render } = require("ink");
const meow = require("meow");
const moment = require("moment");
const uuid = require("uuid/v4");

const ui = importJsx("./ui");
const Interactive = importJsx("./interactive");
const { DATA_FILE } = require("./config");

const cli = meow(
	`
	Usage
	  $ resources title url description tags [--commit|-c] [--interactive|-i]

	Options
		--commit, -c  Commit and push to github
		--interactive, -i Interactive mode

	Examples
	  $ resources Google https://google.com "A search engine" "search,chrome,mail"
`,
	{
		flags: {
			commit: {
				type: "boolean",
				default: true,
				alias: "c"
			},
			interactive: {
				type: "boolean",
				default: false,
				alias: "i"
			}
		}
	}
);

if (cli.flags.i) {
	render(React.createElement(Interactive));
}

const options = cli.input;

const dofile = async () => {
	const data = await fs.readFile(DATA_FILE);
	const links = JSON.parse(data);
	console.log(links);
};

//dofile();

// if (options.length < 3) {
// 	cli.showHelp();
// } else {
// 	const row = {
// 		id: uuid(),
// 		date: moment().format("YYYY-MM-DD"),
// 		title: options[0],
// 		url: options[1],
// 		description: options[2]
// 	};

// 	if (options.length >= 4) {
// 		row.tags = options[3].split(",").map(t => t.trim());
// 	}

// 	fs.readFile(DATA_FILE, (err, data) => {
// 		if (err) {
// 			row.error = "Could not open file";
// 		} else {
// 			const links = JSON.parse(data);
// 			links.push(row);
// 			fs.writeFile(DATA_FILE, JSON.stringify(links, null, 2), err => {
// 				if (err) {
// 					row.error = "Could not write to file.";
// 				} else {
// 					if (cli.flags.commit) {
// 						exec(`./commit.sh "Add ${row.title}"`, (err, stdout, stderr) => {
// 							if (err) {
// 								row.error = "Could not commit changes";
// 							}
// 							//console.log(stdout);
// 						});
// 					}
// 				}
// 			});
// 		}
// 		render(React.createElement(ui, row));
// 	});
// }
