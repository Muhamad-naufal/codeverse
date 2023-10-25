"use client";

import qs from "query-string";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { use } from "react";
import { IconType } from "react-icons";

interface CategoryItemProps {
    label: string;
    icon: IconType;
    value: string;
}

export const CategoryItem = ({ label, value, icon: Icon, }: CategoryItemProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const CurrentCategoryId = searchParams.get("categoryId");
    const currentTitle = searchParams.get("title");
    const isSelected = CurrentCategoryId === value;
    const onClick = () => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                categoryId: value,
                title: currentTitle,
            },
        }, { skipNull: true, skipEmptyString: true });

        router.push(url);
    }
    return (
        <div>
            <button
                onClick={onClick}
                className={cn(
                    "py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-2 hover:border-sky-700 transition",
                    isSelected && "border-sky-700 bg-sky-200/20 text-sky-800"
                )} type="button">

                {Icon && <Icon size={20} />}
                <div className="truncate">
                    {label}
                </div>
            </button>
        </div>
    )
}