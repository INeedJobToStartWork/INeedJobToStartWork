import { Card, Socials, CardBlock, TCardBlock } from "@/components";
import { hanson } from "@/assets/fonts";
import svgIMI from "@/../public/Vector.png";

import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: "700" });

export default function Home() {
	const Header = (
		<section className="flex flex-col gap-1">
			<h1 className={`text-text-primary text-5xl ${hanson.className}`}>INEEDJ</h1>
			<Socials />
			<p className="text-text-quaternary">@ineedjobtostartwork</p>
		</section>
	);
	const Paragraphs = (
		<>
			<p className="max-w-[50ch] text-pretty text-text-secondary">
				Dreaming up ideas and making them come true is where my passion lies. You can find my full projects list here. I
				also do some generative-art, compform, interactivity experiments on 100.antfu.me.
			</p>
			<p className="max-w-[50ch] text-pretty text-text-secondary">
				I give talks and write blog posts about open source, coding, tutorials, etc. Occasionally, I also do some coding
				live streams on YouTube and 哔哩哔哩.
			</p>
			<p className="max-w-[50ch] text-pretty text-text-secondary">
				Outside of programming, I enjoy doing photography and traveling. Some of my photos can be found on Instagram.
				Right now I live in Paris. If you are around, feel free to reach me out, we could have some coffee or work
				together.
			</p>
		</>
	);
	const CardBlocks = () => {
		const items: TCardBlock[] = [
			{
				title: "Education",
				items: [
					{ title: "Politechnika Częstochowska", description: "2024 - Current" },
					{ title: "TEB Edukacja, Częstochowa", description: "2020 - 2024" }
				]
			},
			{
				title: "Experience",
				items: [{ title: "T-Mobile help desk", description: "Jun 2023" }]
			},
			{
				title: "Languages",
				items: [
					{ title: "Polish", description: "Native" },
					{ title: "English", description: "B2" }
				]
			}
		];
		return (
			<section id="skills" className="flex w-full flex-row flex-wrap gap-7">
				{items.map(item => (
					<CardBlock title={item.title} items={item.items} key={`t-${item.title}`} />
				))}
			</section>
		);
	};
	return (
		<main className={`max-tablet:pt-[10dvh] m-auto inline-flex h-dvh w-full items-center justify-center`}>
			<div className="wrapper inline-flex h-full items-center justify-center">
				<div className="inline-flex w-fit flex-col gap-11">
					{Header}
					{Paragraphs}
					<CardBlocks />
					<span className="flex flex-wrap gap-10">
						<CardBlock as="section" id="techstack">
							<CardBlock.Title className={outfit.className}>Tech Stack</CardBlock.Title>
							<CardBlock.Description>My main technologies.</CardBlock.Description>
							<CardBlock.List
								items={[
									{ title: "CSS / TailwindCSS / SCSS", description: "CSS Handlers" },
									{ title: "ReactJS", description: "Library" },
									{ title: "NextJS", description: "Meta framework for optimize" },
									{ title: "Typescript", description: "Typesafety for production" },
									{ title: "ZOD", description: "Typesafety/Validator for Build" },
									{ title: "Prisma", description: "ORM" },
									{ title: "Vitest", description: "Unit Testing" }
								]}
							/>
							<CardBlock.Description>Enviroment</CardBlock.Description>
							<CardBlock.List
								items={[
									{ title: "Cursor.so (VsCode with AI)", description: "Code Editor" },
									{ title: "PostMan", description: "Build and test APIs" },
									{ title: "Github Copilot", description: "CSS Handlers" },
									{ title: "Figma", description: "For Web Design (I hate it)" }
								]}
							/>
						</CardBlock>
						<CardBlock as="section" id="projects">
							<CardBlock.Title className={outfit.className}>Projects</CardBlock.Title>
							<CardBlock.Description>Cool things made by me.</CardBlock.Description>
							<ul className="flex h-full flex-col justify-between">
								{[
									{ title: "FluidUI", description: "Unstyled Component Library", href: "https://github.com/1" },
									{ title: "DarkUI", description: "Styled Component Library", href: "https://github.com/2" },
									{ title: "ManiaUI", description: "Meta framework for optimize", href: "https://github.com/3" },
									{
										title: "Grook",
										description: "Alternative Figma/Framer which support CSS and html in 100%",
										href: "https://github.com/4"
									},
									{
										title: "ineedjobtostartwork.com",
										description: "Website for peoples whose is looking for job or team to projects",
										href: "https://github.com/5"
									}
								].map(item => (
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
						</CardBlock>
					</span>
				</div>
			</div>
		</main>
	);
}
