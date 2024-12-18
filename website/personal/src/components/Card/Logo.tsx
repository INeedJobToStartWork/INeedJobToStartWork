import { Outfit } from "next/font/google";
import { cn } from "@/functions";
import { ComponentPropsWithoutRef, ElementType } from "react";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });

type TLogo<T extends ElementType = typeof Image> = {
	as?: T;
} & ComponentPropsWithoutRef<T>;

export const Logo = <T extends ElementType = typeof Image>(props: TLogo<T>) => {
	const { as: Component = Image, className, src, ...restProps } = props;

	return (
		<Component
			width={45}
			height={45}
			src={src}
			className={cn(outfit.className, "text-md object-contain", className)}
			{...restProps}
		/>
	);
};

export default Logo;
