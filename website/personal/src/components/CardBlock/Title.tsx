import { Outfit } from "next/font/google";
import { cn } from "@/functions";
import { ComponentPropsWithoutRef, ElementType } from "react";

const outfit = Outfit({ subsets: ["latin"] });

type TTitle<T extends ElementType = "h2"> = {
	as?: T;
} & ComponentPropsWithoutRef<T>;

export const Title = <T extends ElementType = "h2">(props: TTitle<T>) => {
	const { as: Component = "h2", className, children, ...restProps } = props;

	return (
		<Component className={cn(outfit.className, "text-lg", className)} {...restProps}>
			{children}
		</Component>
	);
};

export default Title;
