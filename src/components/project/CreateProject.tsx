import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TProject } from "../../types";
import TextEditor from "../shared/TextEditor";
import { useCreateProjectMutation } from "../../redux/api/projectApi";

import { toast } from "react-toastify";
import FullModal from "../shared/FullModal";

export default function CreateProject() {
	const modalRef = useRef<HTMLDialogElement>(null);

	const [createProject] = useCreateProjectMutation();
	const [description, setDescription] = useState("");
	const { register, handleSubmit, reset } = useForm<TProject>();

	const onSubmit: SubmitHandler<TProject> = async (formValue) => {
		try {
			const projectData = { ...formValue, description };

			const response = await createProject(projectData).unwrap();
			console.log(response);
			if (response.data.id) {
				modalRef.current?.close();
				toast.success("Project created successfully");
				reset();
				setDescription("");
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<FullModal btn_name="Create Project" modalRef={modalRef}>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
				<div className="space-y-3">
					<input
						{...register("photo", { required: true })}
						type="text"
						placeholder="https://i.ibb.co/xyzabc/ecommerce.png"
						className="input input-bordered w-full"
					/>
					<input
						{...register("title", { required: true })}
						type="text"
						placeholder="Project Title"
						className="input input-bordered w-full"
					/>

					<TextEditor value={description} setValue={setDescription} />
				</div>

				<button className="btn btn-primary" type="submit">
					Create Project
				</button>
			</form>
		</FullModal>
	);
}
