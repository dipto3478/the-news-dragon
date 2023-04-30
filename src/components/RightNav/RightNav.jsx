import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightNav = () => {
  return (
    <section className="px-5">
      <div>
        <h3 className="font-bold text-2xl text-[#403F3F] mb-5">Login With</h3>
        <button className="btn w-full btn-outline mb-2 btn-primary">
          <FaGoogle className="mr-2" /> Login With Google
        </button>
        <button className="btn w-full btn-outline btn-primary">
          <FaGithub className="mr-2" /> Login With Github
        </button>
      </div>
      <div className="my-8">
        <h3 className="text-[#403F3F] text-xl font-semibold mb-5">
          Find Us On
        </h3>
        <p className="p-4 border-2 text-base font-medium flex items-center gap-2">
          <FaFacebook />
          <a href="#" className="text-[#706F6F]">
            Facebook
          </a>
        </p>
        <p className="p-4 border-2 text-base font-medium flex items-center gap-2">
          <FaTwitter />
          <a href="#" className="text-[#706F6F]">
            Twitter
          </a>
        </p>
        <p className="p-4 border-2 text-base font-medium flex items-center gap-2">
          <FaInstagram />
          <a href="#" className="text-[#706F6F]">
            Instagram
          </a>
        </p>
      </div>
      <div>
        <QZone />
      </div>
    </section>
  );
};

export default RightNav;
