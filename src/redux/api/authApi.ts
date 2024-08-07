import {  TLoginCredentials, TResponseFromServer } from "../../types";
import { baseApi } from "./baseApi";
type LoginResponse = {
    id: string;
    name:string;
    token: string;
}
const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
        
        login : builder.mutation<TResponseFromServer<LoginResponse>, TLoginCredentials>({
            query: (payload)=>({
                url:"/auth/login",
                method:"POST",
                body:payload,
            })
        })


	}),
});

export const {useLoginMutation} = authApi;