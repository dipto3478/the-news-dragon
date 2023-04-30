import React from "react";
import RightNav from "../RightNav/RightNav";
import LeftNav from "../LeftNav/LeftNav";

import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const NewLayout = () => {
  return (
    <>
      <Header />
      <section className="grid lg:grid-cols-4 max-w-screen-xl mx-auto mt-20 h-96">
        <div className=" col-span-3">
          <Outlet />
        </div>
        <div className=" border-2">
          <RightNav />
        </div>
      </section>
    </>
  );
};

export default NewLayout;
