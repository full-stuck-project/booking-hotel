import { useState } from "react";
// import { useSelector } from "react-redux";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [tooltip, setTooltip] = useState("");
  // const { isDarkMode } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Changed field:", name);
    console.log("New value:", value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/users/addUser",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error creating the user:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseEnter = (role) => {
    if (role === "Personal") {
      setTooltip("Individual account for personal use.");
    } else if (role === "Business") {
      setTooltip("Account for businesses and organizations.");
    }
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen p-6 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`div p-8 rounded-lg shadow-lg w-full max-w-md relative`}
      >
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <span className={`text-sm`}>Light</span>
          <button
            type="button"
            onClick={toggleDarkMode}
            className={`w-10 h-6 flex items-center rounded-full`}
          >
            <div
              className={`w-6 h-6 rounded-full transform transition-transform duration-300`}
            ></div>
          </button>
          <span className={`text-sm`}>Dark</span>
        </div>
        <h1 className={`h1 text-3xl font-semibold mb-6 text-center`}>
          Create an Account
        </h1>

        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={`input border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.lastName}
          name="lastName"
          className={`input border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          name="email"
          className={`input border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <input
          type="tel"
          placeholder="Phone"
          onChange={handleChange}
          value={formData.phone}
          name="phone"
          className={`input border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            name="password"
            className={`input border border-gray-300 rounded-md p-3 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
          >
            {showPassword ? (
              <EyeSlashIcon className={`w-5 h-5 `} />
            ) : (
              <EyeIcon className={`w-5 h-5 `} />
            )}
          </button>
        </div>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmPassword}
            name="confirmPassword"
            className={`input border border-gray-300 rounded-md p-3 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
          >
            {showPassword ? (
              <EyeSlashIcon className={`w-5 h-5 `} />
            ) : (
              <EyeIcon className={`w-5 h-5 `} />
            )}
          </button>
        </div>

        <div className="relative mb-4">
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            onMouseEnter={() =>
              handleMouseEnter(formData.role == "1" ? "Personal" : "Business")
            }
            onMouseLeave={handleMouseLeave}
            className={`input border border-gray-300 rounded-md p-3 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 `}
          >
            <option value="1" className={``}>
              Personal
            </option>
            <option value="2" className={``}>
              Business
            </option>
          </select>
          {/* Tooltip */}
          {tooltip && (
            <span
              className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 w-[220px] text-center rounded-xl p-2 shadow-lg opacity-100 transition-opacity duration-300`}
            >
              {tooltip}
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-4 h-4 rotate-45`}
              ></span>
            </span>
          )}
        </div>
        <Link to="/signin" className="text-blue-500 hover:underline">
          have already account ?
        </Link>

        <button
          className={`bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition duration-200 w-full max-w-xs mx-auto `}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
