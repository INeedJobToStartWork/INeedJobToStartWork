import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";
import { ReactNode } from "react";

import { Navigation } from "../components";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "INEEDJ",
	description: "INeedJobToStartWork"
};

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<ViewTransitions>
			<html lang="en">
				<body className={outfit.className}>
					{children}
					<Navigation />
				</body>
			</html>
		</ViewTransitions>
	);
}
