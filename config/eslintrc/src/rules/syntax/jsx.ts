// @ts-expect-error: No type declaration for module
import EslintJSXA11 from "eslint-plugin-jsx-a11y";
import { isTS, languageOptionsTS } from "../helpers";
import { defineFlatConfig } from "eslint-flat-config-utils";

export const files = ["**/*.jsx", ...(isTS ? ["**/*.tsx"] : [])];

export default defineFlatConfig({
	name: "Default",
	files: files,
	languageOptions: languageOptionsTS(),
	plugins: { "@EslintJSXA11": EslintJSXA11 as any },
	rules: {
		"@EslintJSXA11/alt-text": "error",
		"@EslintJSXA11/anchor-ambiguous-text": "error",
		"@EslintJSXA11/anchor-has-content": [2, { components: ["Anchor"] }],
		"@EslintJSXA11/anchor-is-valid": "error",
		"@EslintJSXA11/aria-activedescendant-has-tabindex": "error",
		"@EslintJSXA11/aria-props": "warn",
		"@EslintJSXA11/aria-proptypes": "error",
		"@EslintJSXA11/aria-role": "error",
		"@EslintJSXA11/aria-unsupported-elements": "error",
		"@EslintJSXA11/autocomplete-valid": "error",
		"@EslintJSXA11/click-events-have-key-events": "error",
		"@EslintJSXA11/control-has-associated-label": "off", // if you want to configure it, gl
		"@EslintJSXA11/heading-has-content": "error",
		"@EslintJSXA11/html-has-lang": "error",
		"@EslintJSXA11/iframe-has-title": "error",
		"@EslintJSXA11/img-redundant-alt": [
			2,
			{
				components: ["Image"],
				words: ["Bild", "Foto", "Photo"]
			}
		],
		"@EslintJSXA11/interactive-supports-focus": "error",
		"@EslintJSXA11/label-has-associated-control": "off", // if you want to configure it, gl
		"@EslintJSXA11/lang": "error",
		"@EslintJSXA11/media-has-caption": [
			2,
			{
				audio: ["Audio"],
				video: ["Video"],
				track: ["Track"]
			}
		],
		"@EslintJSXA11/no-access-key": "error", // I am not sure this is best idea
		"@EslintJSXA11/no-aria-hidden-on-focusable": "error",
		"@EslintJSXA11/no-autofocus": [2, { ignoreNonDOM: true }],
		"@EslintJSXA11/no-distracting-elements": "off", // if you want to configure it, gl
		"@EslintJSXA11/no-interactive-element-to-noninteractive-role": "off", // if you want to configure it, gl
		"@EslintJSXA11/no-noninteractive-element-interactions": "off", // if you want to configure it, gl
		"@EslintJSXA11/no-noninteractive-element-to-interactive-role": [
			"error",
			{
				ul: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
				ol: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
				li: ["menuitem", "option", "row", "tab", "treeitem"],
				table: ["grid"],
				td: ["gridcell"]
			}
		],
		"@EslintJSXA11/no-noninteractive-tabindex": "error",
		"@EslintJSXA11/no-redundant-roles": "error",
		"@EslintJSXA11/no-static-element-interactions": [
			"error",
			{
				handlers: ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"],
				allowExpressionValues: true
			}
		],
		"@EslintJSXA11/prefer-tag-over-role": "off", // can have some issues
		"@EslintJSXA11/role-has-required-aria-props": "warn",
		"@EslintJSXA11/role-supports-aria-props": "error",
		"@EslintJSXA11/scope": "error",
		"@EslintJSXA11/tabindex-no-positive": "error" // Can have some issues
	}
});
