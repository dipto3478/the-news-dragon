import React from "react";
import RightNav from "../RightNav/RightNav";
import LeftNav from "../LeftNav/LeftNav";

import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <section className="grid lg:grid-cols-4 max-w-screen-xl mx-auto mt-20 h-96">
        <div className=" ">
          <LeftNav />
        </div>
        <div className=" col-span-2">
          <Outlet />
        </div>
        <div className=" ">
          <RightNav />
        </div>
      </section>
    </>
  );
};

export default Home;
