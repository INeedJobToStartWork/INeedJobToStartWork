import stylisticJs from "@stylistic/eslint-plugin-js";
import EslintOptRegConf from "eslint-plugin-optimize-regex";
import EslintPii from "eslint-plugin-pii";
import EslintSecurity from "eslint-plugin-security";
import EslintSortKeys from "eslint-plugin-sort-keys-fix";
import globals from "globals";

export default [
	{
		ignores: [
			"**/.vscode/**",
			"**/.next/**",
			"**/config/**",
			"**/node_modules/**",
			"**/dist/**",
			"**/lib/**",
			"**/*.d.ts",
			"**/tsconfig.json",
			"**/theme.config.jsx",
			"**/templates/**",
		]
	},
	{
		files: ["**/*.js", "**/*.jsx", "**/*.mjs", "**/*.ejs", "**/*.ts", "**/*.tsx", "**/*.mts", "**/*.ets"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.node
			}
		},
		name: "Default",
		plugins: {
			"@EslintOptRegConf": EslintOptRegConf,
			"@EslintPii": EslintPii,
			"@EslintSecurity": EslintSecurity,
			"@EslintSortKeys": EslintSortKeys,	 
		},
		rules: {
		
			"array-callback-return": "error",
			"constructor-super": "error",
			"for-direction": "error",
			"getter-return": "error",
			"no-async-promise-executor": "error",
			"no-await-in-loop": "error",
			"no-class-assign": "error",
			"no-compare-neg-zero": "error",
			"no-cond-assign": "error",
			"no-const-assign": "error",
			"no-constant-binary-expression": "error",
			"no-constant-condition": "error",
			"no-constructor-return": "error",
			"no-control-regex": "warn",
			"no-debugger": "warn",
			"no-dupe-args": "error",
			"no-dupe-class-members": "error",
			"no-dupe-else-if": "error",
			"no-dupe-keys": "error",
			"no-duplicate-case": "error",
			"no-duplicate-imports": "error",
			"no-empty-character-class": "error",
			"no-empty-pattern": "warn",
			"no-ex-assign": "error",
			"no-fallthrough": "error",
			"no-func-assign": "error",
			"no-import-assign": "warn",
			"no-inner-declarations": "warn",
			"no-invalid-regexp": "error",
			"no-irregular-whitespace": "warn",
			"no-loss-of-precision": "error",
			"no-misleading-character-class": "warn",
			"no-new-native-nonconstructor": "error",
			"no-new-symbol": "error",
			"no-obj-calls": "error",
			"no-promise-executor-return": "error",
			"no-prototype-builtins": "warn",
			"no-self-assign": "warn",
			"no-self-compare": "error",
			"no-setter-return": "error",
			"no-sparse-arrays": "warn",
			"disallowArithmeticOperators": 0,
			"no-template-curly-in-string": "error",
			"no-this-before-super": "error",
			"no-undef": "warn",
			"no-unexpected-multiline": "off",
			"no-unmodified-loop-condition": "warn",
			"no-unreachable": "error",
			"no-unreachable-loop": "error",
			"accessor-pairs": "warn",
			"no-unsafe-finally": "error",
			"arrow-body-style": ["error", "as-needed"],
			"no-unsafe-negation": "error",
			"block-scoped-var": "error",
			"no-unsafe-optional-chaining": "error",
			camelcase: [
				"error",
				{ ignoreDestructuring: true, ignoreGlobals: true, ignoreImports: true, properties: "always" }
			],
			"no-unused-private-class-members": "error",
			// "capitalized-comments": ["error", "never"],
			"no-unused-vars": "warn",
			"class-methods-use-this": "error",
			"no-use-before-define": "off",
			complexity: ["error", 10],
			"no-useless-backreference": "error",
			// "consistent-return": "error",
			"require-atomic-updates": "warn",

			"consistent-this": "error",
			"use-isnan": "error",
			curly: ["error", "multi-line"],
			"valid-typeof": "error",
			"default-case": "error",
			"default-case-last": "error",
			"default-param-last": "off", // Security Problems at Serverside
			"dot-notation": "error",
			"eqeqeq": ["off", "smart"],
			"func-name-matching": "off",
			"func-style": "off",
			"grouped-accessor-pairs": "off",
			"guard-for-in": "error",
			"id-denylist": "off",
			"id-length": "off",
			"init-declarations": "off",
			"logical-assignment-operators": "off",
			"new-cap": "error",
			"no-alert": "error",
			"no-array-constructor": "error",
			"no-bitwise": "error",
			"no-caller": "error",
			"no-case-declarations": "off",
			"no-console": "off",
			"no-continue": "off",
			"no-delete-var": "error",
			"no-div-regex": "warn",
			"no-else-return": ["error", { allowElseIf: false }],
			"no-empty": "error",
			"no-empty-function": "warn",
			"no-empty-static-block": "error",
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "warn",
			"no-extra-boolean-cast": "error",
			"no-extra-label": "error",
			"no-global-assign": "warn",
			"no-implicit-coercion": "warn",
			"no-implicit-globals": "off",
			"no-implied-eval": "error",
			"no-inline-comments": "off",
			"no-invalid-this": "off",
			"no-iterator": "error",
			"no-label-var": "error",
			"no-labels": "error",
			"no-lone-blocks": "error",
			"no-lonely-if": "error",
			"no-loop-func": "warn",
			"no-magic-numbers": "off",
			"no-multi-assign": "error",
			"no-multi-str": "error",
			"no-negated-condition": "warn",
			"no-nested-ternary": "warn",
			"no-new": "error",
			"no-new-func": "off",
			"no-new-wrappers": "error",
			"no-nonoctal-decimal-escape": "error",
			"no-object-constructor": "warn",
			"no-octal": "warn",
			"no-octal-escape": "error",
			"no-param-reassign": "error",
			"no-plusplus": "off",
			"no-proto": "error",
			"no-redeclare": "off",
			"no-regex-spaces": "error",
			"no-restricted-exports": "off",
			"no-restricted-globals": "off",
			"no-restricted-imports": "off",
			"no-restricted-properties": "off",
			"no-restricted-syntax": "off",
			"no-return-assign": "error",
			"func-names":["off"],
			"max-classes-per-file": ["error", { ignoreExpressions: true }],
			"max-depth": ["error", 5],
			"capitalized-comments":["off"],
			"max-lines": ["error", {"max": 300, "skipBlankLines": true}],
			"consistent-return": ["error", { "treatUndefinedAsUnspecified": false }],
			"no-script-url": "error",
			"no-sequences": "error",
			"max-params": ["error", 4],
			
			"no-shadow": "off",
			"no-shadow-restricted-names": "error",
			"no-ternary": "off",
			"no-throw-literal": "error",
			"no-undef-init": "error",
			"no-undefined": "off",
			"no-underscore-dangle": "error",
			"no-unneeded-ternary": "error",
			"no-unused-expressions": "error",
			"no-unused-labels": "error",
			"no-useless-call": "error",
			"no-useless-catch": "error",
			"no-useless-computed-key": "error",
			"no-useless-concat": "error",
			"no-useless-constructor": "error",
			"no-useless-escape": "error",
			"no-useless-rename": "error",
			"no-useless-return": "error",
			"no-var": "error",
			"no-void": "off",
			"no-warning-comments": "off",
			"no-with": "off",
			"object-shorthand": "off",
			"one-var": "off",
			"operator-assignment": "off",
			"prefer-arrow-callback": "off",
			"prefer-const": "off",
			"prefer-destructuring": "off",
			"prefer-exponentiation-operator": "warn",
			"prefer-named-capture-group": "off",
			"prefer-numeric-literals": "error",
			"prefer-object-has-own": "warn",
			"prefer-object-spread": "error",
			// "sort-keys": "warn", // No because some scripts can depends on keys order
			// "@EslintSortKeys/sort-keys-fix": "warn",

			"prefer-promise-reject-errors": "error",

			"prefer-regex-literals": "error",

			"prefer-rest-params": "error",

			"prefer-spread": "error",

			"prefer-template": "error",

			"line-comment-position": "off",
			radix: "off",
		
			"require-await": "warn",

		
			"require-unicode-regexp": "warn",
		
			"require-yield": "error",
		
			"no-eq-null": "error",
			"sort-imports": "warn",
		
			"sort-vars": "off",
		
			strict: "off",
		
			"symbol-description": "warn",
		
			"vars-on-top": "warn",
		
			yoda: "error",
		
			"unicode-bom": "error",
		
		
		
		

		
		
			"@EslintPii/no-email": "error",
		
			"@EslintPii/no-ip": "error",
		
			"@EslintOptRegConf/optimize-regex": "error",
		
			"@EslintPii/no-phone-number": "error",
		
			
			
			"@EslintSecurity/detect-unsafe-regex": "error",

			"@EslintSecurity/detect-non-literal-require": "error",
			"@EslintSecurity/detect-object-injection": "error",
			"@EslintSecurity/detect-non-literal-regexp": "error",
			"@EslintSecurity/detect-bidi-characters": "error",
			"@EslintSecurity/detect-no-unsafe-regex": "error",
			"@EslintSecurity/detect-non-literal-require": "error",
			"@EslintSecurity/detect-object-injection": "error",
			"@EslintSecurity/detect-child-process":"error",
			"@EslintSecurity/detect-new-buffer":"error",
			"@EslintSecurity/detect-disable-mustache-escape":"error",
			"@EslintSecurity/detect-possible-timing-attacks":"error",
			"@EslintSecurity/detect-eval-with-expression":"error",
			"@EslintSecurity/detect-eval-with-expression":"error",
			"@EslintSecurity/detect-buffer-noassert":"error",
			"@EslintSecurity/detect-pseudoRandomBytes":"error",
			"@EslintSecurity/detect-no-csrf-before-method-override":"error",
			"@EslintSecurity/detect-non-literal-fs-filename":"error"
		}
	}
];
