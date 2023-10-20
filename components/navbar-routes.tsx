"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";

export const NavbarRoutes = () => {
	const pathname = usePathname();

	const isTeacher = pathname?.startsWith("/teacher");
	const isPlayerPage = pathname?.startsWith("/chapter");
	return (
		<div className="flex gap-x-2 ml-auto">
			{isTeacher || isPlayerPage ? (
				<Link href="/">
					<Button>
						<LogOut className="h-4 w-4 mr-2" />
						Keluar
					</Button>
				</Link>
			) : (
				<Link href="/teacher/courses">
					<Button size="sm" variant="ghost">
						Guru
					</Button>
				</Link>
			)}
			<UserButton afterSignOutUrl="/belajar" />
		</div>
	);
};
