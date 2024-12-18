import { cn } from "@/functions";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ComponentPropsWithoutRef, ElementType } from "react";

export type TCardTile<T extends ElementType = "div"> = {
	as?: T;
	src: string | StaticImport;
	alt: string;
	width?: number;
	height?: number;
} & ComponentPropsWithoutRef<T>;

export const CardTile = <T extends ElementType = "div">(props: TCardTile<T>) => {
	const { as: Component = "div", className, width = 2000, height = 2000, src, alt, ...restProps } = props;
	return (
		<Component
			className={cn(
				"rotate-img-in flex h-auto w-[200px] items-center justify-center rounded-md bg-background-secondary",
				className
			)}
			{...restProps}>
			<Image src={src} width={width} height={height} alt={alt} className="bg-black" />
		</Component>
	);
};
