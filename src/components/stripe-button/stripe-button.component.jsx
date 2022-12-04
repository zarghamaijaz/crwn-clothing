import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51M9u9dA88O4xfBaKM4pROjtPbtKXi4tzBpXeMFV8gsRfQUEGRgIuQ8t3jPsFsoTMNv65gjJdt1dvoUIacqwTn5HT00d3pgvUdE";
    const onToken = token => {
        console.log(token)
        alert("Payment successful!");
    }
    return (
        <StripeCheckout
            label="Pay now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;