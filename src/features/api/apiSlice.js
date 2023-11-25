import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4000/` }),
	tagTypes: ["Products", "Todos"],
	refetchOnFocus: true,
	refetchOnMountOrArgChange: 50,
	refetchOnReconnect: false,
	endpoints: (builder) => ({}),
});

// export default apiSlice.reducer;
