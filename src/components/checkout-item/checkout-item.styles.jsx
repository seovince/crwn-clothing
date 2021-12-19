import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const ItemImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`

export const ItemImageStyles = styled.img`
    width: 100%;
    height: 100%;
`

export const ItemTextContainer = styled.span`
    width: 23%;
`

export const QuantityContainer = styled(ItemTextContainer)`
    display: flex;

    span {
        margin: 0 10px;
    }

    div {
        cursor: pointer;
    }
`

export const ItemRemoveButtonStyles = styled.div`
    padding-left: 12px;
    cursor: pointer;
`