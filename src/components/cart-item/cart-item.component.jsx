import React from "react";

import {
    CartItemContainer,
    ItemImageStyles,
    ItemDetailsContainer,
    ItemTextStyles
} from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ItemImageStyles src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <ItemTextStyles>{name}</ItemTextStyles>
            <ItemTextStyles>{quantity} x ${price}</ItemTextStyles>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;