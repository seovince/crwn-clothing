import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { 
    CartDropdownContainer, 
    CartItemsContainer, 
    EmptyMessageStyles 
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, dispatch }) => {
    const navigate = useNavigate();

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                        :
                        <EmptyMessageStyles>Your cart is empty</EmptyMessageStyles>
                }
            </CartItemsContainer>
            <CustomButton onClick={() => {
                navigate(`/checkout`)
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(
    mapStateToProps,
    null
)(CartDropdown);