export default function (plop) {
	plop.setWelcomeMessage("Configure Node vesion managers!")
	plop.setGenerator('Every', {
		description: 'Do Every installation from bellow',
		prompts: [],
		actions: []
	});
	plop.setGenerator('NVM', {
		description: "generate '.nvmrc'",
		prompts: [],
		actions: []
	});
	plop.setGenerator('FNM', {
		description: "generate '.node-version'",
		prompts: [],
		actions: []
	});
	plop.setGenerator('N', {
		description: "add configuration N to 'package.json'",
		prompts: [],
		actions: []
	});
	plop.setGenerator('VOLTA', {
		description: "add configuration VOLTA to 'package.json'",
		prompts: [],
		actions: []
	});

};