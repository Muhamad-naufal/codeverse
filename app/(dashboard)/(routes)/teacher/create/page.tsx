"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormLabel,
	FormMessage,
	FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const FormScema = z.object({
	title: z.string().min(3, { message: "Judul harus lebih dari 3 karakter" }),
});

const CreatePage = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof FormScema>>({
		resolver: zodResolver(FormScema),
		defaultValues: {
			title: "",
		},
	});

	const { isSubmitting, isValid } = form.formState;

	const onSubmit = async (values: z.infer<typeof FormScema>) => {
		try {
			const response = await axios.post("/api/courses", values);
			router.push(`/teacher/courses/${response.data.id}`);
			toast.success("Berhasil, Selamat Yah, silahkan Lanjutkan Buatnya!!");
		} catch {
			toast.error("Ada Yang salah nieh, coba lagi yah");
		}
	};

	return (
		<div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
			<div>
				<h1 className="text-2xl">Nama Kursusmu</h1>
				<p className="text-sm text-slate-600">
					Kira - kira kamu mau namain apa yah kursusmu? Jangan khawatir, nanti
					bisa diganti kok
				</p>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6 mt-8"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Judul Kursus</FormLabel>
									<FormControl>
										<Input
											disabled={isSubmitting}
											placeholder="contoh Web Developer"
											{...field}
										/>
									</FormControl>
									<FormDescription>Isinya apa aja sih?</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-center gap-x-2">
							<Link href="/">
								<Button type="button" variant="ghost">
									Nggak Jadi
								</Button>
							</Link>
							<Button type="submit" disabled={!isValid || isSubmitting}>
								Lanjutin
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default CreatePage;
