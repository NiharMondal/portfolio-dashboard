import { TBlog, TBlogResponse,TResponseFromServer } from "../../types";
import { baseApi } from "./baseApi";

type TUpdateRequest = {
    data: TBlog,
    id: string;
}


const blogApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		allBlog: builder.query<TResponseFromServer<TBlogResponse[] >,void>({
            query:()=>({
                url:"/blog",
                method:"GET"
            }),
            providesTags:["blog"]
        }),

		createBlog: builder.mutation<TResponseFromServer<TBlogResponse>,TBlog>({
            query:(data)=>{
                return{
                    url:"/blog",
                    method:"POST",
                    body:data
                }
            },
            invalidatesTags:["blog"]
        }),

		updateBlog: builder.mutation<TResponseFromServer<TBlogResponse>,TUpdateRequest>({
            query:({data,id})=>{

                return{

                    url:`/blog/${id}`,
                    method:"PATCH",
                    body:data
                }
            },
            invalidatesTags:["blog"]
        }),
		deleteBlog: builder.mutation<TResponseFromServer<TBlogResponse>,string>({
            query:(id)=>{

                return{

                    url:`/blog/${id}`,
                    method:"DELETE",
                    
                }
            },
            invalidatesTags:["blog"]
        }),


	}),
});

export const {useCreateBlogMutation, useAllBlogQuery, useUpdateBlogMutation, useDeleteBlogMutation} = blogApi;