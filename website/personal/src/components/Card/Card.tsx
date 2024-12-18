import { cn } from "@/functions";
import Title from "./Title";
import Description from "./Description";
import List, { TList } from "./List";
import { ComponentPropsWithoutRef, ElementType } from "react";
import Content from "./Content";
import Logo from "./Logo";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TCard<T extends ElementType = "div"> = {
	title?: string;
	description?: string;
	items?: TList["items"];
	src: string | StaticImport;
	alt: string;
	as?: T;
} & ComponentPropsWithoutRef<T>;

export const Card = <T extends ElementType = "div">(props: TCard<T>) => {
	const { as: Component = "div", children, className, ...restProps } = props;
	return (
		<Component
			className={cn(
				`gradient-border flex h-fit min-w-fit flex-1 flex-row gap-4 rounded-lg border-[2px] border-transparent px-3 py-2 transition-all hover:bg-black/20`,
				className
			)}
			{...restProps}>
			{children ?? template(props)}
		</Component>
	);
};

Card.Title = Title;
Card.Description = Description;
Card.List = List;
Card.Content = Content;
Card.Logo = Logo;

const template = (props: Omit<TCard, "as">) => {
	const { title, description, alt, src } = props;
	return (
		<>
			<Card.Logo src={src} alt={alt} />
			<Card.Content>
				<Card.Title>{title}</Card.Title>
				<Card.Description>{description}</Card.Description>
			</Card.Content>
		</>
	);
};
export default Card;
