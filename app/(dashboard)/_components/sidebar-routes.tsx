"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

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

const teacherRoutes = [
	{
		href: "/teacher/courses",
		label: "Kursus",
		icon: List,
	},
	{
		href: "/teacher/analytics",
		label: "Analitik",
		icon: BarChart,
	},
];

export const SidebarRoutes = () => {
	const pathname = usePathname();

	const isTeacher = pathname?.includes("/teacher");

	const routes = isTeacher ? teacherRoutes : guestRoutes;

	return (
		<div className="flex flex-col w-full">
			{routes.map((route) => (
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
