import { Button, Card, CardTile } from "@/components";
import { hanson } from "@/assets/fonts";

import webSVG from "@/../public/svg/website.svg";
import { cn } from "@/functions";
import svgIMI from "@/../public/Vector.png";
import { TAPI_PROJECTS } from "../api/projects/route";

async function fetchGithubProjects(): Promise<TAPI_PROJECTS[]> {
	const res = await fetch("http://localhost:3000/api/projects", { next: { revalidate: 60 } });
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}
export default async function Home() {
	const githubProjects = await fetchGithubProjects();
	return (
		<main className={`m-auto inline-flex min-h-dvh w-full items-center justify-center max-tablet:pt-[10dvh]`}>
			<div className="wrapper inline-flex h-full items-center justify-center">
				<div className="flex h-full flex-col gap-12">
					<span>
						<h1 className={cn(hanson.className, "mb-4 text-5xl")}>Projects</h1>
						<p className="text-text-secondary">Cool things made by me.</p>
					</span>
					<span>
						<Button className="mr-1" variant="flat">
							Github
						</Button>
						<Button variant="flat">Recent Releases</Button>
					</span>
					<span>
						<h2 className="mb-2 font-bold">Currently Priority</h2>
						<p className="mb-9 text-text-secondary">Pinned repos at my github.</p>
						<span className="flex items-center gap-1">
							<CardTile as="a" href="/" className="max-m-lg:w-full max-m-lg:max-w-[400px]" src={webSVG} />
							<CardTile as="a" href="/" className="max-m-lg:w-full max-m-lg:max-w-[400px]" src={webSVG} />
						</span>
					</span>
					<span className="flex"></span>
					<ul className="grid max-h-[300px] w-full grow grid-cols-3 overflow-auto max-d-sm:grid-cols-2 max-tablet:grid-cols-1">
						{githubProjects.map(item => (
							<Card
								as="a"
								title={item.title}
								description={item.description}
								src={svgIMI}
								alt={"logo"}
								key={item.title}
								href={item.href}
								target="_blank"
							/>
						))}
					</ul>
				</div>
			</div>
		</main>
	);
}
