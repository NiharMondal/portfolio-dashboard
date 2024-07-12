import { RiEditBoxLine, RiDeleteBin5Line } from "@remixicon/react";
import { TBlogResponse } from "../../types";
import { useDeleteBlogMutation } from "../../redux/api/blogApi";
import { toast } from "react-toastify";

type BlogListProps = {
	tHead: JSX.Element;
	data: TBlogResponse[];
};
export default function CustomTable({ tHead, data }: BlogListProps) {
	const [deleteBlog] = useDeleteBlogMutation();

	const handleDelete = async (id: string) => {
		try {
			const res = await deleteBlog(id).unwrap();
			if (res.success) {
				toast.success("Blog deleted successfully");
			}
		} catch (error) {
			toast.error("Something went wrong!");
		}
	};
	return (
		<div className="overflow-x-auto mt-5">
			<table className="table table-xs">
				<thead>{tHead}</thead>
				<tbody>
					{data.map((blog, index) => (
						<tr key={blog?.id}>
							<td>{index + 1}</td>
							<td>{blog.title}</td>

							<td>{blog.createdAt}</td>
							<td className="text-center">
								<div className="space-x-2">
									<button className="btn">
										<RiEditBoxLine color="lightblue" />
									</button>
									<button className="btn" onClick={()=> handleDelete(blog.id)}>
										<RiDeleteBin5Line color="red" />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
