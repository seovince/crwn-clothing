import React from "react";

import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

import {
    CheckoutItemContainer,
    ItemImageContainer,
    ItemImageStyles,
    ItemTextContainer,
    QuantityContainer,
    ItemRemoveButtonStyles
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <CheckoutItemContainer>
            <ItemImageContainer>
                <ItemImageStyles src={imageUrl} alt='item' />
            </ItemImageContainer>
            <ItemTextContainer type={"name"}>{name}</ItemTextContainer>
            <QuantityContainer type={"quantity"}>
                <div onClick={() => removeItem(cartItem) }>&#10094;</div>
                    <span type={"value"}>{quantity}</span>
                <div onClick={() => addItem(cartItem) }>&#10095;</div>
            </QuantityContainer>
            <ItemTextContainer type={"price"}>${price}</ItemTextContainer>
            <ItemRemoveButtonStyles onClick={() => clearItem(cartItem)}>&#10005;</ItemRemoveButtonStyles>
        </CheckoutItemContainer>

    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);