
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:5000/api/v1";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: () => ({}),
	tagTypes:["skill","experience","project","blog" ]
});