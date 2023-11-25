import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => `/products`,
			providesTags: (result, error, arg) =>
				result.length > 0
					? [
							...result.map((item) => ({
								type: "Product",
								id: item.id,
							})),
							"Products",
					  ]
					: ["Products"],
			transformResponse: (res) => {
				return res.sort((a, b) => b.price - a.price);
			},
		}),
		// 'http://localhost:4000/' + 'products'

		addProduct: builder.mutation({
			query: (product) => ({
				url: "/products",
				method: "POST",
				body: product,
			}),
			invalidatesTags: ["Products"],
		}),

		removeProduct: builder.mutation({
			query: (productId) => ({
				url: `/products/${productId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Products"],
		}),
	}),
});

export const {
	useGetAllProductsQuery,
	useAddProductMutation,
	useRemoveProductMutation,
} = productApi;
