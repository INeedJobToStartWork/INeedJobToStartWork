import { hanson } from "@/assets/fonts";

export default function Custom404() {
	return (
		<main className="flex h-dvh items-center justify-center">
			<div className="wrapper flex flex-col items-center justify-center">
				<h1 className={`${hanson.className} text-7xl`}>404</h1>
				<p>Page Not Found</p>
			</div>
		</main>
	);
}
