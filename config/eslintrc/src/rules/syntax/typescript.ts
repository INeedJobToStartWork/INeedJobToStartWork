/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import tslint from "@typescript-eslint/eslint-plugin";
import eslintDeprecation from "eslint-plugin-deprecation";
// @ts-expect-error: No type declaration for module
import EslintTypescriptSortKeys from "eslint-plugin-typescript-sort-keys";
// @ts-expect-error: No type declaration for module
import EslintNoExplicitTypeExports from "eslint-plugin-no-explicit-type-exports";
import eslintTSDocs from "eslint-plugin-tsdoc";
import { fileURLToPath } from "node:url";
import { languageOptionsTS } from "../helpers";
import { defineFlatConfig } from "eslint-flat-config-utils";

// 👇️ "/home/borislav/Desktop/javascript/index.js"
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);

// 👇️ "/home/borislav/Desktop/javascript"
// const __dirname = path.resolve('tsconfig.json');
export default defineFlatConfig({
	ignores: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.json"],
	files: ["**/*.ts", "**/*.cts", "**/*.mts", "**.*.tsx"],
	languageOptions: languageOptionsTS(),
	name: "TypeScript - Strong Typing",
	plugins: {
		"@typescript-eslint": tslint as any,
		"@EslintDeprecation": eslintDeprecation as any,
		"@EslintTSDocs": eslintTSDocs as any,
		"@EslintNoExplicitTypeExports": EslintNoExplicitTypeExports,
		"@EslintTypescriptSortKeys": EslintTypescriptSortKeys
	},
	rules: {
		"@typescript-eslint/explicit-module-boundary-types": "error", // ccc
		"@typescript-eslint/explicit-member-accessibility": "off", // ???
		"@typescript-eslint/no-extraneous-class": "off",
		"no-dupe-class-members": "off",
		"@typescript-eslint/no-dupe-class-members": "error",
		"@typescript-eslint/consistent-type-definitions": "off",
		"@typescript-eslint/restrict-template-expressions": "off", // TODO
		"@typescript-eslint/no-meaningless-void-operator": "off",
		"@typescript-eslint/no-mixed-enums": "error", // ccc TODO1
		"default-param-last": "off",
		"@typescript-eslint/default-param-last": "error", // Security problem at Serverside
		"@typescript-eslint/restrict-plus-operands": "error", // ?????
		"no-throw-literal": "off",
		// "@typescript-eslint/only-throw-error": "error", // TODO IN NEXT PATCH INSTEAD BELLOW
		"@typescript-eslint/no-throw-literal": "error",
		// "@typescript-eslint/no-unnecessary-template-expression": "error",// TODO IN NEXT PATCH
		// "@typescript-eslint/no-unnecessary-template-expression": "error",
		"@typescript-eslint/no-useless-template-literals": "error",
		"@typescript-eslint/no-unsafe-enum-comparison": "error", // ccc
		"no-redeclare": "off",
		"@typescript-eslint/no-redeclare": "off",
		"@typescript-eslint/no-unnecessary-type-arguments": "off", // Security problem, don't use
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-require-imports": "error",
		"no-invalid-this": "off",
		"@typescript-eslint/no-invalid-this": "off",
		"dot-notation": "off",
		"@typescript-eslint/dot-notation": "error",
		"prefer-promise-reject-errors": "off",
		"@typescript-eslint/prefer-promise-reject-errors": "error",
		"@typescript-eslint/prefer-return-this-type": "error", // ccc
		"@typescript-eslint/prefer-readonly": "off", // ??
		"@typescript-eslint/prefer-readonly-parameter-types": "off", // ccc
		"@typescript-eslint/prefer-literal-enum-member": "off",
		"@typescript-eslint/prefer-function-type": "error", // ?
		"@typescript-eslint/prefer-find": "error",
		"@typescript-eslint/unbound-method": "error", // ?
		"@typescript-eslint/typedef": "off",
		"no-array-constructor": "off",
		"@typescript-eslint/no-array-constructor": "error", // CCC
		"@typescript-eslint/no-array-delete": "error",
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": ["error", { default: "array-simple" }],
		"@typescript-eslint/await-thenable": "off",
		"@typescript-eslint/ban-ts-comment": "error",
		"@typescript-eslint/ban-tslint-comment": "error",
		// "@typescript-eslint/ban-types": "error", // TEST123123
		"@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
		"@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
		"@typescript-eslint/consistent-type-exports": "error",
		"@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "separate-type-imports" }],
		"@typescript-eslint/default-param-last:": "off",
		"@typescript-eslint/explicit-function-return-type": "off",

		// "@typescript-eslint/explicit-module-boundary-types": ["error", { allowArgumentsExplicitlyTypedAsAny: true }],
		// "@typescript-eslint/explicit-module-boundary-types": ["error", { allowArgumentsExplicitlyTypedAsAny: false }],
		"@typescript-eslint/init-declarations": "off",
		"@typescript-eslint/max-params": "off",
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/method-signature-style": "off",
		"@typescript-eslint/naming-convention": "off",
		"@typescript-eslint/no-base-to-string": "off",
		"@typescript-eslint/no-confusing-non-null-assertion": "off",
		"@typescript-eslint/no-confusing-void-expression": "error",
		"@typescript-eslint/no-duplicate-enum-values": "error",
		"@typescript-eslint/no-duplicate-type-constituents": "error",
		"@typescript-eslint/no-dynamic-delete": "off",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "error",

		"@typescript-eslint/no-extra-non-null-assertion": "error",
		"@typescript-eslint/no-floating-promises": "warn",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-implied-eval": "error",
		"@typescript-eslint/no-import-type-side-effects": "error",
		"@typescript-eslint/no-inferrable-types": "error",
		"no-empty-function": "off",
		"@typescript-eslint/no-invalid-void-type": "error",
		"@typescript-eslint/no-loop-func": "warn",
		"@typescript-eslint/no-loss-of-precision": "error",
		"@typescript-eslint/no-magic-numbers": "off",

		"@typescript-eslint/no-misused-new": "error",
		"no-extraneous-class": "off",
		"@typescript-eslint/no-misused-promises": "error",
		"@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
		"no-implied-eval": "off",
		"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
		"@typescript-eslint/no-non-null-asserted-optional-chain": "error",

		// "@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-redundant-type-constituents": "off",
		"no-loop-func": "off",
		"@typescript-eslint/no-restricted-imports": "off",
		"no-loss-of-precision": "off",
		"@typescript-eslint/no-shadow": "off",
		"no-magic-numbers": "off",
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/no-unsafe-argument": "error",
		"@typescript-eslint/no-unsafe-assignment": "error",
		"@typescript-eslint/no-unsafe-call": "error",
		"@typescript-eslint/no-unsafe-declaration-merging": "error",
		"no-restricted-imports": "off",
		"@typescript-eslint/no-unsafe-member-access": "error",
		"no-shadow": "off",
		"@typescript-eslint/no-unsafe-return": "error",
		"@typescript-eslint/no-unsafe-unary-minus": "error",
		"@typescript-eslint/no-unused-expressions": "error",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"no-unnecessary-type-arguments": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/no-useless-constructor": "error",
		"@typescript-eslint/no-useless-empty-export": "error",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/non-nullable-type-assertion-style": "error",
		"@typescript-eslint/parameter-properties": "off",
		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/prefer-destructuring": "off",
		"no-unused-expressions": "off",
		"@typescript-eslint/prefer-enum-initializers": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"no-use-before-define": "off",
		"@typescript-eslint/prefer-includes": "error",
		"no-useless-constructor": "off",
		"@typescript-eslint/prefer-namespace-keyword": "off",
		"@typescript-eslint/prefer-nullish-coalescing": "off",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"prefer-destructuring": "off",
		"@typescript-eslint/prefer-ts-expect-error": "error",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/require-array-sort-compare": "error",
		"@typescript-eslint/require-await": "warn",

		// "@typescript-eslint/return-await": "error",
		"@typescript-eslint/return-await": "warn",
		"@typescript-eslint/sort-type-constituents": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/unified-signatures": "error",
		"require-await": "off",
		"@EslintDeprecation/deprecation": "error", // TEST123123

		"@EslintTSDocs/syntax": "error",

		"@EslintNoExplicitTypeExports/no-explicit-type-exports": "error",
		"@EslintTypescriptSortKeys/interface": "warn",
		"@EslintTypescriptSortKeys/string-enum": "warn",
		"@typescript-eslint/ban-types": [
			"error",
			{
				types: {
					TODO: "It's only allowed in Development"
				},
				extendDefaults: true
			}
		]
	}
});
