import { Outfit } from "next/font/google";
import { cn } from "@/functions";
import { ComponentPropsWithoutRef, ElementType } from "react";

const outfit = Outfit({ subsets: ["latin"] });

type TDescription<T extends ElementType = "p"> = {
	as?: T;
} & ComponentPropsWithoutRef<T>;

export const Description = <T extends ElementType = "p">(props: TDescription<T>) => {
	const { as: Component = "p", className, children, ...restProps } = props;

	return (
		<Component className={cn(outfit.className, "text-[#A6A6A6]", className)} {...restProps}>
			{children}
		</Component>
	);
};

export default Description;
