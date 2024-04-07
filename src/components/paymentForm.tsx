import { ReactElement } from "react";
import { MdLock } from "react-icons/md";

export const PaymentForm = (): ReactElement => {
  return (
    <div className="bg-white px-20 pt-20 rounded-tr-2xl rounded-br-2xl flex flex-col gap-6">
      <div>
        <span className="font-semibold text-lg">Payment Details</span>
        <p className="text-[12px] text-[#727274]">
          Complete your purchase by providing the payment details
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <FormFields heading="Email address" />
        <FormFields heading="Card Details" />
        <FormFields heading="Cardholder Name" />
        <FormFields heading="Email Address" />

        <FormButton />
      </div>

      <div className="flex items-center justify-center">
        <span className="flex flex-row items-center gap-1 text-[10px] text-[#727274]">
          <MdLock /> Payments are secured & encrypted
        </span>
      </div>
    </div>
  );
};

export const FormFields = ({ heading }: { heading: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-semibold">{heading}</span>
      <input
        className="border border-[#DDD] rounded-md p-1 pl-1.5 text-sm active:border active:border-blue-500"
        type="text"
        placeholder={`Enter ${heading}`}
      />
    </div>
  );
};

export const FormButton = () => {
  return (
    <button className="bg-blue-500 rounded-lg py-2 text-white text-sm mt-3">
      Pay 240
    </button>
  );
};
