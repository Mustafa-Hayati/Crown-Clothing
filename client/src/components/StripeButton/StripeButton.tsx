import React, { FC } from "react";
import axios from "axios";
import StripeCheckout, { Token } from "react-stripe-checkout";

interface IProps {
  price: number;
}

const StripeButton: FC<IProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `pk_test_srEioIfJTVH691sQgrNyjrVP002ZTpV1Xf`;

  const onToken = (token: Token) => {
    axios
      .post(`/payment`, {
        amount: priceForStripe,
        token,
      })
      .then(response => {
        alert("Payment successful");
      })
      .catch(error => {
        alert(
          `There was an issue with your payment. Please make sure you use the provided credit cart`
        );
        console.log(error);
        // console.log("Payment Error: ", JSON.parse(error));
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
