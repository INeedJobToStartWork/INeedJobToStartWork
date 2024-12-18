import { cn } from "@/functions";
import Title from "./Title";
import Description from "./Description";
import List, { TList } from "./List";
import { ComponentPropsWithoutRef, ElementType } from "react";

export type TCardBlock<T extends ElementType = "div"> = {
	as?: T;
	title?: string;
	description?: string;
	items?: TList["items"];
} & ComponentPropsWithoutRef<T>;

export const CardBlock = <T extends ElementType = "div">(props: TCardBlock<T>) => {
	const { as: Component = "div", children, className, ...restProps } = props;
	return (
		<Component className={cn("flex min-w-fit flex-1 flex-col gap-4 py-8", className)} {...restProps}>
			{children ?? template(restProps)}
		</Component>
	);
};

CardBlock.Title = Title;
CardBlock.Description = Description;
CardBlock.List = List;

const template = (props: TCardBlock) => {
	const { title, description, items } = props;
	return (
		<>
			<CardBlock.Title>{title}</CardBlock.Title>
			{description ? <CardBlock.Description>{description}</CardBlock.Description> : ""}
			<CardBlock.List items={items} />
		</>
	);
};
export default CardBlock;
