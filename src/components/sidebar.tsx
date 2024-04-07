import { ReactElement, useState } from "react";
import { SidebarButton, SidebarHeading } from "./sidebarButton";

export const Sidebar = (): ReactElement => {
  const [paymentOptions, setPaymentOptions] = useState([
    "Redirect Based Payment",
    "Payment Intent",
    "Subscription Based Payment",
  ]);

  return (
    <div className="w-1/5 h-full p-4 bg-[#DDE0E6]">
      <div className="flex flex-col gap-2">
        <SidebarHeading text={"Available Payment Options"} />
        {paymentOptions.map((data, ind) => {
          return <SidebarButton text={data} key={ind} />;
        })}
      </div>
    </div>
  );
};
