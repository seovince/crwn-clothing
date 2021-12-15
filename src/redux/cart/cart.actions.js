import { CartActionsTypes } from "./cart.types"

export const toggleCartHidden = () => ({
    type: CartActionsTypes.TOGGLE_CART_HIDDEN
})

// payload --- no need because we don't send any value