import { Outfit } from "next/font/google";
import { cn } from "@/functions";
import { ComponentPropsWithoutRef, ElementType } from "react";

const outfit = Outfit({ subsets: ["latin"] });

type TContent<T extends ElementType = "span"> = {
	as?: T;
} & ComponentPropsWithoutRef<T>;

export const Content = <T extends ElementType = "span">(props: TContent<T>) => {
	const { as: Component = "span", className, children, ...restProps } = props;

	return (
		<Component className={cn(outfit.className, "gap flex flex-col", className)} {...restProps}>
			{children}
		</Component>
	);
};

export default Content;
