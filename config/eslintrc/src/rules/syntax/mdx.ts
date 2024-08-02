/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import EslintMdx, { createRemarkProcessor as mdxProcessor } from "eslint-plugin-mdx";

import { composer, defineFlatConfig } from "eslint-flat-config-utils";

export default composer([
	defineFlatConfig({
		name: "Mdx",
		files: ["**/*.md"],
		// languageOptions: languageOptions,
		plugins: { "@EslintMdx": EslintMdx },
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		processor: mdxProcessor({
			lintCodeBlocks: true
		}),
		rules: {
			"@EslintMdx/remark": "warn"
		}
	})
	// defineFlatConfig({
	// 	name: "EslintMarkdown Lint",
	// 	files: ["**/*.md"],
	// 	// languageOptions: languageOptions,
	// 	plugins: { "@EslintMdxLinter": EslintMarkdownLint },
	// 	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	// 	processor: parseForESLint,
	// 	rules: {
	// 		"@EslintMdx/remark": "warn",
	// 		"@EslintMdxLinter/md001": "error",
	// 		"@EslintMdxLinter/md003": "error",
	// 		"@EslintMdxLinter/md004": "error",
	// 		"@EslintMdxLinter/md005": "error",
	// 		"@EslintMdxLinter/md007": "error",
	// 		"@EslintMdxLinter/md009": "warn",
	// 		"@EslintMdxLinter/md011": "error",
	// 		"@EslintMdxLinter/md012": "error",
	// 		"@EslintMdxLinter/md013": "off", // Line height - idk how to config
	// 		"@EslintMdxLinter/md014": "error",
	// 		"@EslintMdxLinter/md018": "error",
	// 		"@EslintMdxLinter/md019": "warn",
	// 		"@EslintMdxLinter/md020": "error",
	// 		"@EslintMdxLinter/md021": "error",
	// 		"@EslintMdxLinter/md022": "error",
	// 		"@EslintMdxLinter/md023": "error",
	// 		"@EslintMdxLinter/md024": "error",
	// 		"@EslintMdxLinter/md025": "error",
	// 		"@EslintMdxLinter/md026": "error",
	// 		"@EslintMdxLinter/md027": "error",
	// 		"@EslintMdxLinter/md028": "error",
	// 		"@EslintMdxLinter/md029": "error",
	// 		"@EslintMdxLinter/md030": "error",
	// 		"@EslintMdxLinter/md031": "error",
	// 		"@EslintMdxLinter/md032": "error",
	// 		"@EslintMdxLinter/md033": "warn", // Maybe off
	// 		"@EslintMdxLinter/md034": "error",
	// 		"@EslintMdxLinter/md035": "warn",
	// 		"@EslintMdxLinter/md036": "warn", // Maybe off
	// 		"@EslintMdxLinter/md037": "error",
	// 		"@EslintMdxLinter/md038": "error",
	// 		"@EslintMdxLinter/md039": "error",
	// 		"@EslintMdxLinter/md040": "error",
	// 		"@EslintMdxLinter/md041": "warn",
	// 		"@EslintMdxLinter/md042": "error",
	// 		"@EslintMdxLinter/md043": "off",
	// 		"@EslintMdxLinter/md044": "error",
	// 		"@EslintMdxLinter/md045": "error",
	// 		"@EslintMdxLinter/md046": "error",
	// 		"@EslintMdxLinter/md047": "error",
	// 		"@EslintMdxLinter/md048": "error",
	// 		"@EslintMdxLinter/md049": "error",
	// 		"@EslintMdxLinter/md050": "error"
	// 	}
	// })
]);
// export default composer([
// 	defineFlatConfig({
// 		name: "Mdx",
// 		files: ["**/*.md"],
// 		// languageOptions: languageOptions,
// 		plugins: { "@EslintMdx": EslintMdx },
// 		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
// 		processor: mdxProcessor({
// 			lintCodeBlocks: true
// 		}),
// 		rules: {
// 			"@EslintMdx/remark": "warn"
// 		}
// 	}),
// 	defineFlatConfig({
// 		name: "EslintMarkdown Lint",
// 		files: ["**/*.md"],
// 		// languageOptions: languageOptions,
// 		plugins: { "@EslintMdxLinter": EslintMarkdownLint },
// 		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
// 		processor: EslintMarkdownLint.processor,
// 		rules: {
// 			"@EslintMdx/remark": "warn",
// 			"@EslintMdxLinter/md001": "error",
// 			"@EslintMdxLinter/md003": "error",
// 			"@EslintMdxLinter/md004": "error",
// 			"@EslintMdxLinter/md005": "error",
// 			"@EslintMdxLinter/md007": "error",
// 			"@EslintMdxLinter/md009": "warn",
// 			"@EslintMdxLinter/md011": "error",
// 			"@EslintMdxLinter/md012": "error",
// 			"@EslintMdxLinter/md013": "off", // Line height - idk how to config
// 			"@EslintMdxLinter/md014": "error",
// 			"@EslintMdxLinter/md018": "error",
// 			"@EslintMdxLinter/md019": "warn",
// 			"@EslintMdxLinter/md020": "error",
// 			"@EslintMdxLinter/md021": "error",
// 			"@EslintMdxLinter/md022": "error",
// 			"@EslintMdxLinter/md023": "error",
// 			"@EslintMdxLinter/md024": "error",
// 			"@EslintMdxLinter/md025": "error",
// 			"@EslintMdxLinter/md026": "error",
// 			"@EslintMdxLinter/md027": "error",
// 			"@EslintMdxLinter/md028": "error",
// 			"@EslintMdxLinter/md029": "error",
// 			"@EslintMdxLinter/md030": "error",
// 			"@EslintMdxLinter/md031": "error",
// 			"@EslintMdxLinter/md032": "error",
// 			"@EslintMdxLinter/md033": "warn", // Maybe off
// 			"@EslintMdxLinter/md034": "error",
// 			"@EslintMdxLinter/md035": "warn",
// 			"@EslintMdxLinter/md036": "warn", // Maybe off
// 			"@EslintMdxLinter/md037": "error",
// 			"@EslintMdxLinter/md038": "error",
// 			"@EslintMdxLinter/md039": "error",
// 			"@EslintMdxLinter/md040": "error",
// 			"@EslintMdxLinter/md041": "warn",
// 			"@EslintMdxLinter/md042": "error",
// 			"@EslintMdxLinter/md043": "off",
// 			"@EslintMdxLinter/md044": "error",
// 			"@EslintMdxLinter/md045": "error",
// 			"@EslintMdxLinter/md046": "error",
// 			"@EslintMdxLinter/md047": "error",
// 			"@EslintMdxLinter/md048": "error",
// 			"@EslintMdxLinter/md049": "error",
// 			"@EslintMdxLinter/md050": "error"
// 		}
// 	})
// ]);
