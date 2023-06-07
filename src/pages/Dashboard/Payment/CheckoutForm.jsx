import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
// import './common.css';

const CheckoutForm = ({cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      // console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);
  // price, axiosSecure

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // console.log('card', card);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log("[error]", error);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment Intent", paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);
      console.log(transactionId);
      // save payment information to the server
      const payment = {
        user: user?.email,
        transactionId: paymentIntent.id,
        price,
        // date: new Date(),
        quantity: cart.length,
        items: cart.map((item) => item._id),
        // status: 'Service pending',
        itemNames: cart.map((item) => item.name)
      };
      axiosSecure.post("/payments", payment)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            // display confirm
          }
      })
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-3/4 mx-auto">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="mt-4 w-2/5 mx-auto">
          <button
            className="btn bg-[#570DF8] hover:bg-[#570DF8] border-0"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && (
        <p className="text-red-500 text-center text-lg mt-4">{cardError}</p>
      )}
      {transactionId && (
        <p className="text-green-500 text-center mt-4">Transaction complete with transactionId: {transactionId}</p>
      )}
    </>
  );
};

export default CheckoutForm;
