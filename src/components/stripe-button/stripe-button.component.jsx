import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K8JkwH0nS0vBnbusjzdPfRkBVrvKwHHWmyaA3GYCCusLuwvc8BZimpg4wnRANcadNsqlZoUrqKm1OAE1dvAdmiY00A77l4apc'

    const onToken = token => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/android.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;