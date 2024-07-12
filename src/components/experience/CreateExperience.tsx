import { TExperience } from "../../types";
import CustomModal from "../shared/CustomModal";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateEperienceMutation } from "../../redux/api/experienceApi";
import { useRef } from "react";

export default function CreateExperience() {
	const modalRef = useRef<HTMLDialogElement>(null);
	const [createExperience] = useCreateEperienceMutation();

	const { register, handleSubmit, reset } = useForm<TExperience>();
	const handleCreateExperience: SubmitHandler<TExperience> = async (data) => {
		try {
			const res = await createExperience(data).unwrap();

			if (res.success) {
				modalRef.current?.close();
				toast.success("Experience created successfully");
				reset();
			}
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};

	return (
		<CustomModal btn_name="Create Experience" modalRef={modalRef}>
			<form
				className="space-y-3"
				onSubmit={handleSubmit(handleCreateExperience)}
			>
				<input
					{...register("position", { required: true })}
					type="text"
					placeholder="Position Name"
					className="input input-bordered w-full"
				/>
				<input
					{...register("company", { required: true })}
					type="text"
					placeholder="Company Name"
					className="input input-bordered w-full"
				/>
				<input
					{...register("start_date", { required: true })}
					type="date"
					placeholder="Start Date"
					className="input input-bordered w-full"
				/>
				<input
					{...register("end_date", { required: true })}
					type="date"
					placeholder="End Date"
					className="input input-bordered w-full"
				/>
				<textarea
					{...register("responsibilities", { required: true })}
					className="textarea textarea-bordered w-full"
					placeholder="Write your responsibilities"
					rows={5}
				/>
				<button type="submit" className="btn btn-primary text-white">
					Create Experience
				</button>
			</form>
		</CustomModal>
	);
}
