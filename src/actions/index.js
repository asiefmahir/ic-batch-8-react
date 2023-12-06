'use server'
import {revalidatePath} from 'next/cache'

export const createProduct = async (formData) => {
        const product = {
            title: formData.get("title"),
            description: formData.get("description"),
            price: formData.get("price"),
            image: formData.get("image")
        }
        console.log(product);
    	try {
            await fetch(`http://localhost:8080/products`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(product),
            })
        } catch (error) {
            console.log(error);
        }

        revalidatePath('/shop')
}

export const deleteProduct = async (id) => {
    console.log(id);
    try {
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "DELETE",
        })
    } catch (error) {
        console.log(error);
    }

    revalidatePath('/product-admin')
    revalidatePath('/shop')
    return id;

}