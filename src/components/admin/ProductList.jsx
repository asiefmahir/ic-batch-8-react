import ProductRow from "@/components/admin/ProductRow";

const ProductList = async ({ products }) => {
	return (
		<tbody>
			{products?.length !== 0 &&
				products?.map((item) => (
					<ProductRow key={item._id} item={item} />
				))}
		</tbody>
	);
};

export default ProductList;
