import { ReactElement } from "react";
import { Sidebar } from "../components/sidebar";
import { Main } from "../components/main";
import { Navbar } from "../components/navbar";

export const Home = (): ReactElement => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row h-full">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};
