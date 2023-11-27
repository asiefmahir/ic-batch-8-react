const base_url = `http://localhost:4000`;

export const getAllProducts = async () => {
	try {
		const res = await fetch(`${base_url}/products`);
		if (!res.ok) {
			throw new Error("Something went wrong!");
		}
		return res.json();
	} catch (error) {
		return error.message;
	}
};

export const getProductById = async (id) => {
	try {
		const res = await fetch(`${base_url}/products/${id}`);
		if (!res.ok) {
			throw new Error("Something went wrong!");
		}
		return res.json();
	} catch (error) {
		return error.message;
	}
};
export const createProduct = async (product) => {
	return await fetch(`${base_url}/products`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(product),
	});
};
export const updateProduct = async (id, product) => {
	return await fetch(`${base_url}/products/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(product),
	});
};
export const removeProduct = async (id) => {
	return await fetch(`${base_url}/products/${id}`, {
		method: "DELETE",
	});
};
