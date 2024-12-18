import { Outfit } from "next/font/google";
import { cn } from "@/functions";
import { ComponentPropsWithoutRef, ElementType } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export type TList<T extends ElementType = "ul"> = {
	as?: T;
	items?: { title: string; description: string }[];
} & ComponentPropsWithoutRef<T>;

export const List = <T extends ElementType = "ul">(props: TList<T>) => {
	const { as: Component = "ul", className, children, items, ...restProps } = props;

	return (
		<Component className={cn(outfit.className, "list-none", className)} {...restProps}>
			{items
				? items.map(item => (
						<li className="flex w-full justify-between" key={item.title}>
							<p className="text-text-label">{item.title}</p>
							<p className="ml-[1ch] text-text-label">{item.description}</p>
						</li>
					))
				: children}
		</Component>
	);
};

export default List;
