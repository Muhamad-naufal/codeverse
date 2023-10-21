import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const backgroundVariants = cva(
	"rounded-full flex items-center justofy-center",
	{
		variants: {
			variant: {
				default: "bg-sky-100",
				success: "bg-emerald-100",
			},
			iconVariant: {
				default: "text-sky-700",
				success: "text-emerald-700",
			},
			size: {
				default: "p-2",
				sm: "p-1",
			},
		},
		defaultVariants: {
			size: "default",
			variant: "default",
		},
	}
);

const iconVariants = cva("", {
	variants: {
		variant: {
			default: "text-sky-700",
			success: "text-emerald-700",
		},
		size: {
			default: "w-8 h-8",
			sm: "w-4 h-4",
		},
	},
	defaultVariants: {
		size: "default",
		variant: "default",
	},
});

type BckgroundVariantProps = VariantProps<typeof backgroundVariants>;
type IconVariantProps = VariantProps<typeof iconVariants>;
interface IconBadgeProps extends BckgroundVariantProps, IconVariantProps {
	icon: LucideIcon;
}
export const IconBadge = ({ icon: Icon, variant, size }: IconBadgeProps) => {
	return (
		<div className={cn(backgroundVariants({ variant, size }))}>
			<Icon className={cn(iconVariants({ variant, size }))} />
		</div>
	);
};