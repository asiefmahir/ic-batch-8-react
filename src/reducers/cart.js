import {
	ADD_TO_CART,
	CLEAR_CART,
	MODIFY_QUANTITY_OF_A_ITEM,
	REMOVE_ITEM_FROM_CART,
} from "@/action-types/cart";

export const cartReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const product = state.find(
				(item) => item._id === action.payload._id,
			);

			return product
				? state.map((item) => {
						if (item._id === product._id) {
							item.quantity += 1;
						}

						return item;
				  })
				: [...state, { ...action.payload, quantity: 1 }];
		}

		case REMOVE_ITEM_FROM_CART: {
			return state.filter((item) => item._id !== action.payload);
		}

		case MODIFY_QUANTITY_OF_A_ITEM: {
			return state.map((item) => {
				if (item._id === action.payload.id) {
					item.quantity = action.payload.quantity;
				}

				return item;
			});
		}

		case CLEAR_CART: {
			return [];
		}

		default: {
			return state;
		}
	}
};
