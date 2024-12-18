import { NextResponse } from "next/server";

export type TAPI_PROJECTS = {
	description: string;
	href: string;
	title: string;
};

export async function GET(request: Request): TAPI_PROJECTS[] {
	const result = (await (await fetch("https://api.github.com/users/ineedjobtostartwork/repos")).json()) as Object[];

	const resp = await result.map((item: object) => ({
		title: item.name,
		description: item.description,
		href: item.html_url
	}));

	return NextResponse.json(resp);
}
