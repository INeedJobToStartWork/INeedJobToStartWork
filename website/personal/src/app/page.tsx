import { CardTile, Socials } from "@/components";
import { hanson } from "@/assets/fonts";

import webSVG from "@/../public/svg/website.svg";

export default function Home() {
	return (
		<main className={`m-auto inline-flex h-dvh w-full items-center justify-center`}>
			<div className={`wrapper inline-flex h-full flex-col items-center justify-center gap-11`}>
				<span className="flex flex-col items-center gap-9">
					<h1 className={`text-text-primary text-5xl ${hanson.className}`}>INEEDJ</h1>
					<Socials />
				</span>
				<h2 className={`text-text-primary ${hanson.className}`}>Open Sources</h2>
				<div className="flex flex-wrap items-center justify-center gap-1">
					<CardTile as="a" href="/" alt="" className="max-m-lg:w-full max-m-lg:max-w-[400px]" src={webSVG} />
					<CardTile
						as="a"
						alt=""
						href="/"
						className="max-m-lg:w-full max-m-lg:max-w-[400px]"
						width={1000}
						src={"https://raw.githubusercontent.com/INeedJobToStartWork/Test/main/webtemplate.svg"}
					/>
				</div>
			</div>
		</main>
	);
}
