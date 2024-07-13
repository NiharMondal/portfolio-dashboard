
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tokenHelper } from "../../utils/helper";
import { tokenName } from "../../utils/constant";

const BASE_URL = "https://portfolio-dashboard-backend-plum.vercel.app/api/v1";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ 
		baseUrl: BASE_URL,
		
		prepareHeaders: (headers) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const token = tokenHelper.getToken(tokenName)
			if (token) {
				headers.set('authorization', `${token}`)
			}
			return headers
		},
	}),
	
	endpoints: () => ({}),
	tagTypes:["skill","experience","project","blog" ]
});