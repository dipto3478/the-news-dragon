import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" bg-[#F3F3F3] h-screen">
      <div className="max-w-screen-xl mx-auto py-5">
        <Navbar />

        <div className="max-w-screen-xl  h-[calc(100vh-85px)] flex justify-center items-center">
          <div className="bg-white max-w-[750px] p-10 rounded-lg ">
            <h3 className="text-3xl text-[#403F3F] font-semibold mb-10">
              Login your account
            </h3>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col w-full mb-6">
                <label
                  className="text-[#403F3F] font-semibold mb-4"
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
              <div className="flex flex-col w-full mb-7">
                <label
                  className="text-[#403F3F] font-semibold mb-4"
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
              <div className="mb-7">
                <input
                  className="bg-[#403F3F] text-white rounded-lg cursor-pointer w-full py-4 text-xl font-bold"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-[#706F6F] text-center text-base font-semibold">
                Don’t Have An Account ?{" "}
                <Link className="text-blue-500 underline" to="/register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
