import React, { FC } from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";

interface IProps {
  price: number;
}

const StripeButton: FC<IProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `pk_test_srEioIfJTVH691sQgrNyjrVP002ZTpV1Xf`;

  const onToken = (token: Token) => {
    /* NOTE
     * We could send the token to the backend to do the
     * necessary processing, but we don't implement it here.
     */
    alert("Payment successful");
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
