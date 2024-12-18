import { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/functions";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import MenuItem from "./MenuItem";
import Buttons from "./Buttons";

type TNavigation<T extends ElementType = "nav"> = {
	as?: T;
} & ComponentPropsWithoutRef<T>;

export const Navigation = <T extends ElementType = "nav">(props: TNavigation<T>) => {
	const { as: Component = "nav", className, children, ...restProps } = props;
	return (
		// <Component className={cn(`wrapper   flex flex-row justify-between bg-red-50}`, "fixed", className)}>
		<Component
			className={cn(
				`wrapper align-center fixed bottom-10 left-0 right-0 flex flex-row items-center justify-between`,
				"max-tablet:bottom-2 max-tablet:flex-wrap max-tablet:gap-4",
				className
			)}
			{...restProps}>
			{children ?? templateNavigation}
		</Component>
	);
};

Navigation.Logo = Logo;
Navigation.Menu = Menu;
Navigation.MenuItem = MenuItem;
Navigation.Buttons = Buttons;

const templateNavigation = (
	<>
		<Navigation.Logo href="/" />
		<Navigation.Menu>
			<Navigation.MenuItem href="/blog">Blog</Navigation.MenuItem>
			<Navigation.MenuItem href="/projects">Project</Navigation.MenuItem>
			<Navigation.MenuItem href="/aboutme">About me</Navigation.MenuItem>
			<Navigation.MenuItem href="/workspace">Workspace</Navigation.MenuItem>
		</Navigation.Menu>
		<Navigation.Buttons />
	</>
);
