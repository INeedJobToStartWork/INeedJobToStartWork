// @ts-expect-error: No type declaration for module
import EslintReact from "eslint-plugin-react";
// @ts-expect-error: No type declaration for module
import EslintReactFormFields from "eslint-plugin-react-form-fields";
// @ts-expect-error: No type declaration for module
import EslintReactHooksForms from "eslint-plugin-react-hook-form";
// @ts-expect-error: No type declaration for module
import EslintReactPerf from "eslint-plugin-react-perf";
import EslintReactPrefFuncComp from "eslint-plugin-react-prefer-function-component";
// @ts-expect-error: No type declaration for module
import EslintReactRefresh from "eslint-plugin-react-refresh";
// @ts-expect-error: No type declaration for module
import EslintSSRFriendly from "eslint-plugin-ssr-friendly";
// @ts-expect-error: No type declaration for module
import EslintValJSXNesting from "eslint-plugin-validate-jsx-nesting";

export default [
	{
		files: ["**/*.jsx", "**/*.tsx"],
		name: "React",
		plugins: {
			"@EslintReact": EslintReact,
			"@EslintReactRefresh": EslintReactRefresh,
			"@EslintReactPrefFuncComp": EslintReactPrefFuncComp,
			"@EslintReactFormFields": EslintReactFormFields,
			"@EslintReactHooksForms": EslintReactHooksForms,
			"@EslintSSRFriendly": EslintSSRFriendly,
			"@EslintValJSXNesting": EslintValJSXNesting,
			"@EslintReactPerf": EslintReactPerf
		},
		rules: {
			"@EslintReact/boolean-prop-naming": "error",
			"@EslintReact/button-has-type": "off",
			"@EslintReact/checked-requires-onchange-or-readonly": "error",
			"@EslintReact/default-props-match-prop-types": "off", // No body use defaultProps and proptypes cuz deprecated lol
			"@EslintReact/destructuring-assignment": ["error", "always"],
			"@EslintReact/display-name": "error",
			"@EslintReact/forbid-component-props": "off", // If you want to configure, gl
			"@EslintReact/forbid-dom-props": "off", // If you want to configure, gl
			"@EslintReact/forbid-elements": "off", // If you want to configure, gl
			"@EslintReact/forbid-foreign-prop-types": "off", // If you want to configure, gl
			"@EslintReact/forbid-prop-types": "off", // If you want to configure, gl
			"@EslintReact/function-component-definition": [
				"error",
				{
					namedComponents: ["function-expression", "arrow-function"],
					unnamedComponents: ["function-expression", "arrow-function"]
				}
			],
			"@EslintReact/hook-use-state": ["error", { allowDestructuredState: true }],
			"@EslintReact/iframe-missing-sandbox": "error", // IDK never used
			"@EslintReact/jsx-boolean-value": ["error", "never"],
			"@EslintReact/jsx-child-element-spacing": "error",
			"@EslintReact/jsx-closing-bracket-location": "off", // There no stylistic changes
			"@EslintReact/jsx-closing-tag-location": "error", // There no stylistic changes
			"@EslintReact/jsx-curly-spacing": "off", // There no stylistic changes
			"@EslintReact/jsx-curly-newline": "off", // There no stylistic changes
			"@EslintReact/jsx-equals-spacing": "off", // There no stylistic changes
			"@EslintReact/jsx-filename-extension": ["error", "always"],
			"@EslintReact/jsx-first-prop-new-line": "off", // There no stylistic changes
			"@EslintReact/jsx-handler-names": "off", // not sure about configuration
			"@EslintReact/jsx-indent": "off", // There no stylistic changes
			"@EslintReact/jsx-indent-props": "off", // There no stylistic changes
			"@EslintReact/jsx-key": [
				"error",
				{
					checkFragmentShorthand: false,
					warnOnDuplicates: true
				}
			],
			"@EslintReact/jsx-max-depth": ["error", { max: 6 }],
			"@EslintReact/jsx-max-props-per-line": "off", // There no stylistic changes
			"@EslintReact/jsx-newline": "off", // There no stylistic changes

			"@EslintReact/jsx-no-bind": [
				"error",
				{
					allowArrowFunctions: true,
					allowFunctions: true,
					allowBind: false
				}
			],
			"@EslintReact/jsx-no-comment-textnodes": "error",
			"@EslintReact/jsx-no-constructed-context-values": "error",
			"@EslintReact/jsx-no-duplicate-props": "error",
			"@EslintReact/jsx-no-leaked-render": ["error", { validStrategies: "ternary" }],
			"@EslintReact/jsx-no-literals": [
				"error",
				{
					noStrings: true,
					allowedStrings: true,
					ignoreProps: true,
					noAttributeStrings: false
				}
			], // Not sure, i configure that like i wanted
			"@EslintReact/jsx-no-script-url": ["error", { includeFromSettings: true }],
			"@EslintReact/jsx-no-target-blank": "error",
			"@EslintReact/jsx-no-useless-fragment": "error",
			"@EslintReact/jsx-one-expression-per-line": "off", // There no stylistic changes
			"@EslintReact/jsx-no-undef": ["error", { allowGlobals: true }],
			"@EslintReact/jsx-curly-brace-presence": "off", // There no stylistic changes
			"@EslintReact/jsx-pascal-case": [
				"error",
				{
					allowAllCaps: false,
					allowNamespace: true,
					allowLeadingUnderscore: false
				}
			],
			"@EslintReact/jsx-fragments": ["error", "syntax"],
			"@EslintReact/jsx-props-no-multi-spaces": "off", // There no stylistic changes
			"@EslintReact/jsx-props-no-spreading": "off",
			"@EslintReact/jsx-sort-props": [
				"error",
				{
					callbacksLast: false,
					shorthandFirst: false,
					shorthandLast: true,
					multiline: "last",
					noSortAlphabetically: false,
					locale: "auto"
				}
			],
			"@EslintReact/jsx-tag-spacing": "off", // There no stylistic changes

			"@EslintReact/jsx-uses-react": "off",
			"@EslintReact/jsx-uses-vars": "off",
			"@EslintReact/jsx-wrap-multilines": "off", // There no stylistic changes
			"@EslintReact/no-invalid-html-attribute": "error",
			"@EslintReact/no-access-state-in-setstate": "error",
			"@EslintReact/no-adjacent-inline-elements": "off", // There no stylistic changes
			"@EslintReact/no-array-index-key": "error",
			"@EslintReact/no-arrow-function-lifecycle": "error",
			"@EslintReact/no-children-prop": "error",
			"@EslintReact/no-danger": "error",
			"@EslintReact/no-danger-with-children": "error",
			"@EslintReact/no-deprecated": "error",
			"@EslintReact/no-did-mount-set-state": "off", // Who use class components in 2024?
			"@EslintReact/no-did-update-set-state": "off", // Who use class components in 2024?
			"@EslintReact/no-direct-mutation-state": "off", // Who use class components in 2024?
			"@EslintReact/no-find-dom-node": "error", // Who use class components in 2024?
			"@EslintReact/no-is-mounted": "error", // Who use class components in 2024?
			"@EslintReact/no-multi-comp": "off", // Who use class components in 2024?
			"@EslintReact/no-namespace": "off", // Wtf
			"@EslintReact/no-set-state": "error", // Who use class components in 2024?
			"@EslintReact/no-string-refs": "error", // Who use class components in 2024?
			"@EslintReact/no-redundant-should-component-update": "error", // Who use class components in 2024?
			"@EslintReact/no-render-return-value": "error",
			"@EslintReact/no-this-in-sfc": "error",
			"@EslintReact/no-typos": "error",
			"@EslintReact/no-unescaped-entities": "error",

			"@EslintReact/no-unknown-property": "error",
			"@EslintReact/no-unsafe": "error",
			"@EslintReact/no-unstable-nested-components": "error",
			"@EslintReact/no-unused-class-component-methods": "error",
			"@EslintReact/no-unused-prop-types": "error",
			"@EslintReact/no-unused-state": "error",
			"@EslintReact/no-object-type-as-default-prop": "error",
			"@EslintReact/no-will-update-set-state": "error",
			"@EslintReact/prefer-es6-class": ["error", "always"],
			"@EslintReact/prefer-exact-props": "off", // Who use it?
			"@EslintReact/prefer-read-only-props": "error",
			"@EslintReact/prefer-stateless-function": ["error"],
			"@EslintReact/prop-types": "off", // Who use this in 2024?
			"@EslintReact/react-in-jsx-scope": "error",
			"@EslintReact/require-default-props": "off", // WHO USE THIS?
			"@EslintReact/require-optimization": "off", // IDK how to use it
			"@EslintReact/require-render-return": "error",
			"@EslintReact/self-closing-comp": "off", // There no stylistic changes
			"@EslintReact/sort-comp": "off", // There no stylistic changes
			"@EslintReact/sort-default-props": "off", // There no stylistic changes
			"@EslintReact/sort-prop-types": "off", // There no stylistic changes
			"@EslintReact/state-in-constructor": "off", // idk
			"@EslintReact/static-property-placement": "off", // idk
			"@EslintReact/style-prop-object": "off", // Who use this
			"@EslintReact/void-dom-elements-no-children": "error",

			"@EslintReactRefresh/only-export-components": "error",

			// React
			"@EslintReactHooksForms/no-nested-object-setvalue": "error",
			"@EslintReactHooksForms/no-access-control": "error",
			"@EslintReactHooksForms/destructuring-formstate": "error",
			"@EslintReactFormFields/no-mix-controlled-with-uncontrolled": "error", // Maybe issues
			"@EslintReactFormFields/no-only-value-prop": "error",
			"@EslintReactFormFields/styled-no-mix-controlled-with-uncontrolled": "error",
			"@EslintReactFormFields/styled-no-only-value-prop": "error",
			"@EslintReactPrefFuncComp/react-prefer-function-component": "error",
			"@EslintReactHooks/rules-of-hooks": "error",
			"@EslintReactHooks/exhaustive-deps": "error",

			"@EslintValJSXNesting/no-invalid-jsx-nesting": "error",

			"@EslintSSRFriendly/no-dom-globals-in-module-scope": "error",
			"@EslintSSRFriendly/no-dom-globals-in-constructor": "error",
			"@EslintSSRFriendly/no-dom-globals-in-react-cc-render": "error",
			"@EslintSSRFriendly/no-dom-globals-in-react-fc": "error",

			"@EslintReactPerf/jsx-no-new-object-as-prop": "off",
			"@EslintReactPerf/jsx-no-new-array-as-prop": "off",
			"@EslintReactPerf/jsx-no-new-function-as-prop": "off",
			"@EslintReactPerf/jsx-no-jsx-as-prop": "error"
		}
	}
];
