import CreateBlog from "../components/blog/CreateBlog";
import CustomTable from "../components/shared/CustomTable";

import { useAllBlogQuery } from "../redux/api/blogApi";

import { TBlogResponse } from "../types";

export default function Blog() {
	const {data:blogs,isLoading} = useAllBlogQuery()
	if(isLoading) return <p>Please wait...</p>
	return (
		<section >
			<CreateBlog />
			<div className="mt-5 space-y-3">
				<h1> Your Published Blog list</h1>
				{blogs!.data?.length > 0 ? (
					<CustomTable
						tHead={tHead}
						data={blogs?.data as TBlogResponse[]}
					/>
				) : (
					<p>No blog published yet!</p>
				)}
			</div>
		</section>
	);
}

const tHead = (
	<tr>
		<th>S/N</th>
		<th>Title</th>
		
		<th>Published Date</th>
		<th className="text-center">Action</th>
	</tr>
);
