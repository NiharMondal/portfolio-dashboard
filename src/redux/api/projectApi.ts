import { TProject, TProjectResponse,TResponseFromServer } from "../../types";
import { baseApi } from "./baseApi";

type TUpdateRequest = {
    data: TProject,
    id: string;
}


const projectApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		allProject: builder.query<TResponseFromServer<TProjectResponse[] >,void>({
            query:()=>({
                url:"/project",
                method:"GET"
            }),
            providesTags:["project"]
        }),

		createProject: builder.mutation<TResponseFromServer<TProjectResponse>,TProject>({
            query:(data)=>{

                return{

                    url:"/project",
                    method:"POST",
                    body:data
                }
            },
            invalidatesTags:["project"]
        }),

		updateProject: builder.mutation<TResponseFromServer<TProjectResponse>,TUpdateRequest>({
            query:({data,id})=>{

                return{

                    url:`/project/${id}`,
                    method:"PATCH",
                    body:data
                }
            },
            invalidatesTags:["project"]
        }),
		deleteProject: builder.mutation<TResponseFromServer<TProjectResponse>,string>({
            query:(id)=>{

                return{

                    url:`/project/${id}`,
                    method:"DELETE",
                    
                }
            },
            invalidatesTags:["project"]
        }),


	}),
});

export const {useCreateProjectMutation, useAllProjectQuery, useUpdateProjectMutation, useDeleteProjectMutation} = projectApi;