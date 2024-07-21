// // import JSON from './src/rules/formatters/json.js';
// // import PerfectionistSorters from './src/rules/formatters/perfectionistSorters.js';
// // // import Base from './src/rules/syntax/base.js';
// // import JSX from './src/rules/syntax/jsx.js';
// // import Node from './src/rules/syntax/node.js';
// // import React from './src/rules/syntax/react.js';
// // import Typescript from './src/rules/syntax/typescript.js';

// // export default [...Base];

import ineedj from "./dist/index.js";

export default ineedj({
	formatters: {
		json: false,
		stylistic: false,
		stylisticJSX: false,
		stylisticTS: false,
		perfectionistSorters: false
	},
	syntax: {
		eslint: true,
		jsx: false,
		next: false,
		node: true,
		react: false,
		storybook: false,
		tailwindcss: false,
		typescript: true,
		toml: false,
		yaml: false
	}
});

// export default [];
