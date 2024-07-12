import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TBlog } from "../../types";
import TextEditor from "../shared/TextEditor";
import { toast } from "react-toastify";
import FullModal from "../shared/FullModal";
import { useCreateBlogMutation } from "../../redux/api/blogApi";

export default function CreateBlog() {
	const modalRef = useRef<HTMLDialogElement>(null);

	const [createBlog] = useCreateBlogMutation();
	const [description, setDescription] = useState("");
	const { register, handleSubmit, reset } = useForm<TBlog>();

	const onSubmit: SubmitHandler<TBlog> = async (formValue) => {
		const blogData = { ...formValue, description };
		try {
			const response = await createBlog(blogData).unwrap();

			if (response.data.id) {
				modalRef.current?.close();
				toast.success("Blog created successfully");
				setDescription("");
				reset();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<FullModal btn_name="Create Blog" modalRef={modalRef}>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
				<div className="space-y-3">
					<input
						{...register("title", { required: true })}
						type="text"
						placeholder="Blog Title"
						className="input input-bordered w-full"
					/>

					<TextEditor value={description} setValue={setDescription} />
				</div>

				<button className="btn btn-primary" type="submit">
					Create Blog
				</button>
			</form>
		</FullModal>
	);
}
