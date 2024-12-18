import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	plugins: [],
	theme: {
		screens: {
			"m-sm": "20rem", // 1
			"m-md": "23.4375rem", // 2
			"m-lg": "26.5625rem", // 3
			tablet: "48rem", // 4
			"d-sm": "64rem", // 5
			"d-md": "90rem", // 6
			"d-lg": "128rem", // 7
			"d-xl": "160rem" // 8
		},
		extend: {
			backgroundImage: {
				heroBG: "url('/bgAbstract.svg')"
			},
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
	screens: {
		// => @media (min-width: 640px) { ... }
		"mobile-s": "640px",
		"mobile-m": "640px",
		"mobile-l": "640px",
		tablet: "768",
		"desktop-s": "1024px",
		"desktop-m": "1440px",
		"desktop-l": "1442px"
	}
};
export default config;
