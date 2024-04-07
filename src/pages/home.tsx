import { ReactElement, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Main } from "../components/main";
import { Navbar } from "../components/navbar";

export const Home = (): ReactElement => {
  const [active, setActive] = useState<string>("checkout based payment");
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-row h-full">
        <Sidebar setActive={setActive} />
        <Main active={active} />
      </div>
    </div>
  );
};
