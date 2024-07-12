import { toast } from "react-toastify";
import CreateProject from "../components/project/CreateProject";
import {
	useAllProjectQuery,
	useDeleteProjectMutation,
} from "../redux/api/projectApi";
import { RiDeleteBin7Line } from "@remixicon/react";
export default function Project() {
	const [deleteProject] = useDeleteProjectMutation();
	const { data: projects, isLoading } = useAllProjectQuery();

	if (isLoading) return <p>Please Wait...</p>;

	const handleProjectDelete = async (id: string) => {
		try {
			const response = await deleteProject(id).unwrap();

			if (response.success) {
				toast.success("Project deleted successfully");
			}
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};
	return (
		<section>
			<CreateProject />
			<h1 className="my-10">Your Project List</h1>
			<div className="flex justify-center flex-wrap gap-5 w-full ">
				{projects?.data.map((project) => (
					<div
						className="border p-4 w-full md:max-w-[550px] rounded relative"
						key={project.id}
					>
						<span
							className="absolute top-4 right-4"
							onClick={() => handleProjectDelete(project.id)}
						>
							<RiDeleteBin7Line
								size={20}
								className="cursor-pointer text-red-400 hover:text-red-600"
							/>
						</span>
						<img
							src={project.photo}
							alt="project-photo"
							className="w-full max-h-[300px] object-cover object-top"
						/>
						<h3 className="text-3xl font-semibold">
							{project.title}
						</h3>
					</div>
				))}
			</div>
		</section>
	);
}
