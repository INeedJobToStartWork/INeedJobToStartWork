import { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/functions";
import { tv, VariantProps } from "tailwind-variants";

const ButtonVariants = tv({
	base: "w-fit rounded-[0.25em] px-6 py-4",
	variants: {
		variant: {
			solid: "bg-white text-black",
			flat: `
     rounded-[0.25em] bg-white/[0.02] text-text-quaternary backdrop-blur-2xl

     hover:text-text-secondary
   `,
			ghost: "#"
		}
	},
	defaultVariants: {
		variant: "solid"
	}
});

type TButton<T extends ElementType = "button"> = {
	as?: T;
} & ComponentPropsWithoutRef<T> &
	VariantProps<typeof ButtonVariants>;

export const Button = <T extends ElementType = "button">(props: TButton<T>) => {
	const { as: Component = "button", className, children, ...restProps } = props;
	return (
		<Component className={cn(ButtonVariants(restProps), className)} {...restProps}>
			{children}
		</Component>
	);
};
