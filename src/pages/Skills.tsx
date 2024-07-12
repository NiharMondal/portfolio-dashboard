import { useState } from "react";
import {
	useAllSkillsQuery,
	useCreateSkillMutation,
	useDeleteSkillMutation,
} from "../redux/api/skillApi";
import { RiEditBoxLine, RiDeleteBin7Line } from "@remixicon/react";
import { toast } from "react-toastify";
import GeneralModal from "../components/shared/GeneralModal";

export default function Skills() {
	const [skillValue, setSkillValue] = useState("");
	const { data } = useAllSkillsQuery();

	const [createSkill] = useCreateSkillMutation();
	const [deleteSkill] = useDeleteSkillMutation();
	const handleCreate = async () => {
		const skillData = {
			name: skillValue,
		};
		try {
			const res = await createSkill(skillData).unwrap();
			if (res.data.id) {
				toast.success("Skill created successfully");
			}
			setSkillValue("");
		} catch (error: any) {
			if (error.status === 409) {
				toast.error("Skill already exist!");
			}
		}
	};

	const handleDelete = async (id: string) => {
		try {
			const res = await deleteSkill(id).unwrap();

			if (res.data.id) {
				toast.success("Skill deleted successfully");
			}
			console.log(res);
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};

	return (
		<section>
			<h1>Your all Skill set is here</h1>
			<p>You can add more or delete any specific skill from this list</p>

			<ul className="flex flex-wrap gap-4 mt-8">
				{data?.data.map((skill) => (
					<li
						key={skill.id}
						className="flex gap-2 items-center bg-primary px-4 py-2 text-white font-bold rounded"
					>
						<span className="relative">{skill.name}</span>
						<GeneralModal id={skill.id} value={skill.name}>
							<span className="cursor-pointer">
								<RiEditBoxLine size={20} />
							</span>
						</GeneralModal>
						<span onClick={() => handleDelete(skill.id)}>
							<RiDeleteBin7Line
								size={20}
								className="text-red-400 cursor-pointer"
							/>
						</span>
					</li>
				))}
			</ul>

			<div className="mt-10">
				<h2>Add your skill one by one following your priority.</h2>

				<div className="mt-2 flex gap-x-2">
					<input
						value={skillValue}
						onChange={(e) => setSkillValue(e.target.value)}
						type="text"
						placeholder="Skill name"
						className="input input-bordered "
					/>
					<button
						onClick={handleCreate}
						className="btn btn-secondary text-white font-bold text-xl"
					>
						Add skill
					</button>
				</div>
			</div>
		</section>
	);
}
