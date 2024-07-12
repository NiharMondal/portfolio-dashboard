import { TExperience, TExperienceResponse, TResponseFromServer } from "../../types";
import { baseApi } from "./baseApi";

type TUpdateRequest = {
    data: TExperience,
    id: string;
}


const experiencApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		allExperience: builder.query<TResponseFromServer<TExperienceResponse[] >,void>({
            query:()=>({
                url:"/experience",
                method:"GET"
            }),
            providesTags:["experience"]
        }),

		createEperience: builder.mutation<TResponseFromServer<TExperienceResponse>,TExperience>({
            query:(data)=>{

                return{

                    url:"/experience",
                    method:"POST",
                    body:data
                }
            },
            invalidatesTags:["experience"]
        }),

		updateExperience: builder.mutation<TResponseFromServer<TExperienceResponse>,TUpdateRequest>({
            query:({data,id})=>{

                return{

                    url:`/experience/${id}`,
                    method:"PATCH",
                    body:data
                }
            },
            invalidatesTags:["experience"]
        }),
		deleteExperience: builder.mutation<TResponseFromServer<TExperienceResponse>,string>({
            query:(id)=>{

                return{

                    url:`/experience/${id}`,
                    method:"DELETE",
                    
                }
            },
            invalidatesTags:["experience"]
        }),


	}),
});

export const {useCreateEperienceMutation, useAllExperienceQuery, useUpdateExperienceMutation,useDeleteExperienceMutation} = experiencApi;