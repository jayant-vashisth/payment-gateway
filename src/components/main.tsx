import { ReactElement } from "react";
import { PaymentInfo } from "./paymentInfo";
import { PaymentForm } from "./paymentForm";

export const Main = (): ReactElement => {
  return (
    <div className="w-4/5 border border-blue h-full bg-[#E9EAEF] flex flex-row p-14">
      <div className="flex flex-row w-full">
        <PaymentInfo />
        <PaymentForm />
      </div>
    </div>
  );
};
