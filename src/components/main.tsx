import { ReactElement } from "react";
import { PaymentInfo } from "./paymentInfo";
import { CheckoutBasedPayments, PaymentForm } from "./paymentForm";
import axios from "axios";

export const Main = ({ active }: { active: string }): ReactElement => {
  const CheckoutBasedPayment = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/payment/create-checkout-session",
        {
          amount: 4564,
          currency: "usd",
          productName: "table",
          successUrl: "http://www.example.com",
          cancelUrl: "http://www.failexample.com",
          garbage: "asdfasdf",
        }
      );

      if (res.status == 200) {
        window.location.href = res.data.url;
      }

      return res.data;
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };

  return (
    <div className="w-4/5 border border-blue h-full bg-[#E9EAEF] flex flex-row p-14">
      <div className="flex flex-row w-full">
        <PaymentInfo />

        {active == "checkout based payment" ? (
          <CheckoutBasedPayments makePayment={CheckoutBasedPayment} />
        ) : (
          <PaymentForm />
        )}
      </div>
    </div>
  );
};
