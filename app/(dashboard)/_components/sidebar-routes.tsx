"use client";

import { Compass, Layout } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
	{
		href: "/",
		label: "Dashboard",
		icon: Layout,
	},
	{
		href: "/search",
		label: "Jelajahi",
		icon: Compass,
	},
];

export const SidebarRoutes = () => {
	const routes = guestRoutes;

	return (
		<div className="flex flex-col w-full">
			{routes.map((route, index) => (
				<SidebarItem
					key={route.href}
					icon={route.icon}
					label={route.label}
					href={route.href}
				/>
			))}
		</div>
	);
};
