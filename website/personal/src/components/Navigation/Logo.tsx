import { Link } from "next-view-transitions";
import { hanson } from "@/assets/fonts";
import { ComponentPropsWithoutRef, ElementType, FC } from "react";
import { cn } from "@/functions";

type logoProps<T extends ElementType = typeof Link> = {
	as?: T;
} & ComponentPropsWithoutRef<T>;

export const Logo: FC<logoProps> = props => {
	const { as: Component = Link, href = "/", className, ...restProps } = props;
	return (
		<Component {...restProps} className={cn(hanson.className, className)} href={href}>
			INEEDJ
		</Component>
	);
};
