import { Inter } from "next/font/google";

const inter = Inter({ weight: "900", subsets: ["latin"] });

export const Socials = () => (
	<nav
		className={`max-m-lg:w-[20.83em] max-tablet:gap-2 flex w-[33.33em] list-none flex-row items-center gap-6 text-xs font-black ${inter.className} text-text-tertiary`}>
		<li>
			<a target="_blank" href={process.env.SOCIALS_YOUTUBE} className={`hover:text-text-label`}>
				YOUTUBE
			</a>
		</li>
		<span className="h-px w-full bg-text-tertiary" />
		<li>
			<a target="_blank" href={process.env.SOCIALS_GITHUB} className={`hover:text-text-label`}>
				GITHUB
			</a>
		</li>
		<span className="h-[0.0625em] w-full bg-text-tertiary" />
		<li>
			<a target="_blank" href={process.env.SOCIALS_DISCORD} className={`hover:text-text-label`}>
				DISCORD
			</a>
		</li>
	</nav>
);
