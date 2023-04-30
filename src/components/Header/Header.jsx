import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="text-center">
        <img className="mx-auto mt-5 " src={logo} alt="logo" />
        <p className="text-[#706F6F] text-lg my-2">
          Journalism Without Fear or Favour
        </p>
        <p className="text-[#403F3F] text-xl font-bold">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div className="my-8 bg-[#F3F3F3] p-4 flex items-center">
        <button className="px-6 py-2 font-semibold text-xl text-white  bg-[#D72050]">
          Latest
        </button>
        <Marquee speed={50}>
          <p className="text-[#403F3F] text-lg  px-5 font-semibold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as... Match Highlights: Germany vs
            Spain — as it happened ! Match Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
