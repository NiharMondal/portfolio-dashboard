import { toast } from "react-toastify";
import {
	useAllExperienceQuery,
	useDeleteExperienceMutation,
} from "../redux/api/experienceApi";

import { RiDeleteBin7Line } from "@remixicon/react";
import CreateExperience from "../components/experience/CreateExperience";
export default function Experience() {
	const { data, isLoading } = useAllExperienceQuery();
	const [deleteExperience] = useDeleteExperienceMutation();
	const handleDelete = async (id: string) => {
		window.alert("Do you want to delete");
		try {
			const res = await deleteExperience(id).unwrap();

			if (res.data.id) {
				toast.success("Experience is deleted successfully");
			}
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};
	return (
		<section className="space-y-5">
			<CreateExperience />
			<div className="space-y-5">
				<h1>Here is my Experience list</h1>

				<div>
					{isLoading && <p>Please wait</p>}

					<div className="flex justify-center md:justify-start flex-wrap gap-5">
						{data?.data.map((experience) => (
							<div
								className="relative p-3 border rounded-md w-full lg:w-[440px] xl:w-[580px] space-y-2"
								key={experience.id}
							>
								<h3 className="text-2xl font-semibold text-white">
									{experience.position}
								</h3>
								<span
									className="absolute top-4 right-5 cursor-pointer"
									onClick={() => handleDelete(experience.id)}
								>
									<RiDeleteBin7Line
										size={20}
										className="text-red-500"
									/>
								</span>
								<p className="text-primary">
									{experience.company}
								</p>
								<p className="space-x-3">
									<span>{experience.start_date}</span>
									<span> - </span>
									<span>{experience.end_date}</span>
								</p>

								<p>{experience.responsibilities}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
