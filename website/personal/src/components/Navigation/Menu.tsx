import { cn } from "@/functions";
import { ComponentPropsWithoutRef, ElementType } from "react";

type menuProps<T extends ElementType = "ul"> = {
	as?: T;
} & ComponentPropsWithoutRef<T>;

export const Menu = <T extends ElementType = "ul">(props: menuProps<T>) => {
	const { as: Component = "ul", children, className, ...restProps } = props;
	return (
		<Component
			className={cn(
				`max-tablet:order-last max-tablet:w-full flex w-1/2 justify-center gap-[10px] rounded-full border border-background-secondary bg-black/0 p-3 backdrop-blur-lg`,
				className
			)}
			{...restProps}>
			{children}
		</Component>
	);
};
export default Menu;
