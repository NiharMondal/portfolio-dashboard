import { baseApi } from "./baseApi";
type TSkill = {
    id: string;
    name: string;
    isDeleted:boolean;
    createdAt: string;
    updatedAt: string;

}

type TSkillRequest = {
    name: string;
}

type TResponseFromServer<T> = {
    success:boolean;
    message:string;
    data: T
}
const skillApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		allSkills: builder.query<TResponseFromServer<TSkill[]>,void>({
            query:()=>({
                url:"/skill",
                method:"GET"
            }),
            providesTags:["skill"]
        }),

		createSkill: builder.mutation<TResponseFromServer<TSkill>,TSkillRequest>({
            query:(data)=>{

                return{

                    url:"/skill",
                    method:"POST",
                    body:data
                }
            },
            invalidatesTags:["skill"]
        }),

		updateSkill: builder.mutation<TResponseFromServer<TSkill>,any>({
            query:({data,id})=>{

                return{

                    url:`/skill/${id}`,
                    method:"PATCH",
                    body:data
                }
            },
            invalidatesTags:["skill"]
        }),
		deleteSkill: builder.mutation<TResponseFromServer<TSkill>,string>({
            query:(id)=>{

                return{

                    url:`/skill/${id}`,
                    method:"DELETE",
                    
                }
            },
            invalidatesTags:["skill"]
        }),


	}),
});

export const {useCreateSkillMutation, useAllSkillsQuery,useUpdateSkillMutation, useDeleteSkillMutation} = skillApi;