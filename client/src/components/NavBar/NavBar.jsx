// import React, { useState } from 'react';
// import logo from '../../assets/logo/logo.png';
// import globe from '../../assets/svg/globe.svg';
// import bell from '../../assets/svg/notification-bell.svg';
// import profile from '../../assets/svg/profile.svg';

// const ProfileDropdown = ({ profile }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const dropList = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="relative">
//             <button onClick={dropList} className="hover:text-gray-200">
//                 <div className="h-10 w-10 bg-gray-100 rounded-full border-2 border-black flex items-center justify-center">
//                     <img
//                         src={profile}
//                         alt="Profile"
//                         className="h-7 rounded-full"
//                     />
//                 </div>
//             </button>
//             {isOpen && (
//                 <div className="text-black absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
//                     <ul>
//                         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                             Profile
//                         </li>
//                         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                             Settings
//                         </li>
//                         <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                             Logout
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// const NavBar = () => {
//     return (
//         <nav className="flex items-center justify-between bg-black/20 shadow-black shadow-sm text-6b6a68 h-16 w-[100%] px-6">
//             <div className="flex items-center">
//                 <img src={logo} alt="Logo" className="w-40 h-40 mr-4" />
//             </div>
//             <div>
//                 <ul className="flex space-x-4">
//                     <li><a href="#" className="hover:text-white">Home</a></li>
//                     <li><a href="#" className="hover:text-white">About Us</a></li>
//                     <li><a href="#" className="hover:text-white">Services</a></li>
//                     <li><a href="#" className="hover:text-white">Blogs</a></li>
//                 </ul>
//             </div>
//             <div className="flex items-center justify-between px-4 py-2 text-white">
//                 <div className="flex items-center space-x-4">
//                     <a href="#" className="hover:text-gray-400">
//                         <img src={globe} alt="Globe" className="h-7" />
//                     </a>
//                     <a href="#" className="hover:text-gray-400">
//                         <img src={bell} alt="Notification Bell" className="h-7" />
//                     </a>
//                 </div>
//                 <div className="ml-3 self-center  flex justify-center bg-black/20 border-solid border-2 border-primary rounded-full  items-center  space-x-4">
//                     <ProfileDropdown profile={profile} />
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;
// import logo from "../../assets/logo/logo.png";
// import globe from "../../assets/svg/globe.svg";
// import bell from "../../assets/svg/notification-bell.svg";
// import profile from "../../assets/svg/profile.svg";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDarkMode } from "../../store/store";

const NavBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.user);

  function toggleDarkMode() {
    dispatch(setIsDarkMode(!isDarkMode));
  }

  const toggleProfileDropdown = () => setIsProfileOpen(!isProfileOpen);
  const toggleNotificationDropdown = () =>
    setIsNotificationOpen(!isNotificationOpen);
  const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);

  return (
    <nav className="flex items-center justify-between bg-black/20 shadow-black shadow-sm text-6b6a68 h-16 w-full px-6 relative">
      <div className="flex items-center">
        {/* <img src={logo} alt="Logo" className="w-20 h-20 mr-4" /> */}
      </div>
      <div className="flex-1">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Blogs
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-6">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={toggleLanguageDropdown}
            className="hover:text-gray-400"
          >
            {/* <img src={globe} alt="Globe" className="h-7" /> */}
          </button>
          {isLanguageOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  English
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Hebrew
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Russian
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={toggleNotificationDropdown}
            className="hover:text-gray-400"
          >
            {/* <img src={bell} alt="Notification Bell" className="h-7" /> */}
          </button>
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Notification 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Notification 2
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Notification 3
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={toggleDarkMode}
            className={`w-10 h-6 flex items-center rounded-full ${
              isDarkMode ? "bg-gray-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full transform transition-transform duration-300 ${
                isDarkMode ? "bg-yellow-300 translate-x-4" : "bg-yellow-500"
              }`}
            ></div>
          </button>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleProfileDropdown}
            className="hover:text-gray-200"
          >
            <div className="h-10 w-10 bg-gray-100 rounded-full border-2 border-black flex items-center justify-center">
              {/* <img src={profile} alt="Profile" className="h-7 rounded-full" /> */}
            </div>
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
