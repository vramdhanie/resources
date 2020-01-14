#!/usr/bin/env node
"use strict";
const React = require("react");
const fs = require("fs");
const { exec } = require("child_process");
const importJsx = require("import-jsx");
const { render } = require("ink");
const meow = require("meow");
const moment = require("moment");

const ui = importJsx("./ui");

const cli = meow(
	`
	Usage
	  $ resources title url description tags [--commit|-c]

	Options
		--commit, -c  Commit and push to github

	Examples
	  $ resources Google https://google.com "A search engine" "search,chrome,mail"
`,
	{
		flags: {
			commit: {
				type: "boolean",
				default: true,
				alias: "c"
			}
		}
	}
);

const options = cli.input;

if (options.length < 3) {
	cli.showHelp();
} else {
	if (options.length >= 4) {
		options[3] = `"${options[3]}"`;
	}
	options.unshift(moment().format("YYYY-MM-DD"));
	const data = options.join(",") + "\n";
	fs.appendFile("data/data.csv", data, err => {
		if (err) {
			console.log("Could not write to file.");
			console.log(err);
		}
		if (cli.flags.commit) {
			exec("npm run commit", (err, stdout, stderr) => {
				if (err) {
					console.log("Could not commit changes");
				}
			});
		}
		render(React.createElement(ui, options));
	});
}
