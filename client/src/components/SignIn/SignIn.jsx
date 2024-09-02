import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Changed field:", name);
    console.log("New value:", value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full h-[430px]">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Welcome Back!
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Sign in and start planning your dream vacation today!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold rounded-md p-3 w-full hover:bg-orange-600 transition duration-300"
          >
            Sign In
          </button>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create an Account
          </Link>
        </form>
      </div>
    </div>
  );
};
