import { ReactElement } from "react";
import ProductImage from "../assets/productImage.png";

export const PaymentInfo = (): ReactElement => {
  return (
    <div className="w-1/2 flex flex-col gap-5 bg-[#F9FAFC] rounded-tl-2xl rounded-bl-2xl  px-20 pt-20 ">
      <div className="flex flex-row justify-between font-semibold text-lg">
        <span>Professional Plan</span>
        <span>$206</span>
      </div>
      <img src={ProductImage} className="rounded-xl" />

      <div className="flex flex-col gap-4 font-medium text-[#727274] text-[10px]">
        <div>
          <p>
            <span className="font-semibold text-black text-[12px]">
              Stand out in the crowd!
            </span>{" "}
            With the Professinal Plan, your profile takes center stage,
            attracting potential clients and collaborators
          </p>
        </div>
        <p>
          <span className="font-semibold text-black text-[12px]">
            Showcase your versatility!
          </span>{" "}
          List as many projects as your creativity allows. Whether it's sleek
          mobile apps, intuitive web interfaces, or immersive user experiences,
          there's no limit to the number of masterpieces you can display,
          drawing clients into your world of design brilliance.
        </p>
      </div>
    </div>
  );
};
