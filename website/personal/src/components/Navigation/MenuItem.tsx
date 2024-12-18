import { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/functions";
import { Link } from "next-view-transitions";

type menuProps<T extends ElementType = typeof Link> = {} & ComponentPropsWithoutRef<T>;

export const MenuItem = <T extends ElementType = typeof Link>(props: menuProps<T>) => {
	const { children, href = "/", className, ...restProps } = props;
	return (
		<li>
			<Link className={cn(`text-text-quaternary hover:text-text-label`, className)} href={href} {...restProps}>
				{children}
			</Link>
		</li>
	);
};
export default MenuItem;
