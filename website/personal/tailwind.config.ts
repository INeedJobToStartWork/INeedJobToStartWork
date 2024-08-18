import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				text: {
					label: "#FFFFFF",
					secondary: "#BABABA",
					quaternary: "#6E6E6E",
					tertiary: "#494949"
				},
				background: {
					primary: "#111111",
					secondary: "#222222"
				}
			}
		}
	},
	plugins: []
};
export default config;
