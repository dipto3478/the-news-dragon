import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const userLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="flex  items-center justify-center">
      <ul className="text-[#706F6F] font-normal font-lg ml-auto flex items-center  gap-5 ">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Career</Link>
      </ul>
      <div className="ml-auto">
        {user ? (
          <button
            onClick={userLogOut}
            className="bg-[#403F3F] text-white text-xl font-semibold px-8 py-2"
          >
            LogOut
          </button>
        ) : (
          <button className="bg-[#403F3F] text-white text-xl font-semibold px-8 py-2">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
