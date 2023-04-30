import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const checkbox = form.checkbox.value;
    console.log(name, photo, email, password, checkbox);
    createUser(email, password)
      .then((result) => {
        const loggerUser = result.user;
        console.log(loggerUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccept = (event) => {
    setAccept(event.target.checked);
  };
  return (
    <div className=" bg-[#F3F3F3] h-full">
      <div className="max-w-screen-xl mx-auto py-5">
        <Navbar />

        <div className="max-w-screen-xl  mt-5  flex justify-center items-center">
          <div className="bg-white max-w-[750px] p-10 rounded-lg ">
            <h3 className="text-3xl text-[#403F3F] font-semibold mb-10">
              Register your account
            </h3>
            <form onSubmit={handleRegister}>
              <div className="flex flex-col w-full mb-4">
                <label
                  className="text-[#403F3F] font-semibold mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="p-5 bg-[#f3f3f3] text-[#9F9F9F] w-full"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name "
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label
                  className="text-[#403F3F] font-semibold mb-2"
                  htmlFor="photo"
                >
                  Photo URL
                </label>
                <input
                  className="p-5 bg-[#f3f3f3] text-[#9F9F9F] w-full"
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Enter your photo url "
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label
                  className="text-[#403F3F] font-semibold mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="p-5 bg-[#f3f3f3] text-[#9F9F9F] w-full"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email "
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label
                  className="text-[#403F3F] font-semibold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="p-5 bg-[#f3f3f3] text-[#9F9F9F] w-full "
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                />
              </div>
              <div className="flex items-center gap-3 mb-5">
                <input
                  onClick={handleAccept}
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                />
                <Link className="text-blue-500 underline" to="/terms">
                  Accept Term & Conditions
                </Link>
              </div>
              <div className="mb-7">
                <input
                  disabled={!accept}
                  className="bg-[#403F3F] text-white rounded-lg cursor-pointer w-full py-4 text-xl font-bold"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
