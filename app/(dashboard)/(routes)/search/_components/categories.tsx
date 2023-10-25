"use client";

import { Category } from "@prisma/client";
import { FcAddressBook, FcMultipleSmartphones, FcCollaboration, FcBusinessman, FcSelfServiceKiosk, FcSteam, FcClapperboard } from 'react-icons/fc'
import { IconType } from "react-icons"
import { CategoryItem } from "./category-item";

interface CategoryProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Informatika": FcAddressBook,
    "Mobile Development": FcMultipleSmartphones,
    "Komputer": FcSelfServiceKiosk,
    "Web Development": FcCollaboration,
    "Multimedia": FcClapperboard,
    "Game Development": FcSteam,
    "Desain Grafis": FcBusinessman,
}

export const Categories = ({
    items,
}: CategoryProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
                <CategoryItem
                    key={item.id}
                    label={item.name}
                    icon={iconMap[item.name]}
                    value={item.id}
                />
            ))}
        </div>
    )
}