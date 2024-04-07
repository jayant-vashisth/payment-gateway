import { ReactElement, useState } from "react";
import { SidebarButton, SidebarHeading } from "./sidebarButton";

export const Sidebar = ({ setActive }): ReactElement => {
  const [paymentOptions, setPaymentOptions] = useState([
    "Checkout Based Payment",
    "Payment Intent",
    "Subscription Based Payment",
  ]);

  return (
    <div className="w-1/5 h-full p-4 bg-[#DDE0E6]">
      <div className="flex flex-col gap-2">
        <SidebarHeading text={"Available Payment Options"} />
        {paymentOptions.map((data, ind) => {
          return <SidebarButton setActive={setActive} text={data} key={ind} />;
        })}
      </div>
    </div>
  );
};
