
import React, { useState } from 'react';
import logo from '../../assets/logo/logo.png';
import globe from '../../assets/svg/globe.svg';
import bell from '../../assets/svg/notification-bell.svg';
import profile from '../../assets/svg/profile.svg';

const NavBar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleProfileDropdown = () => setIsProfileOpen(!isProfileOpen);
    const toggleNotificationDropdown = () => setIsNotificationOpen(!isNotificationOpen);
    const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <nav className="flex items-center justify-between bg-black/20 shadow-black shadow-sm text-6b6a68 h-16 w-full px-6">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-20 h-20 mr-4" />
            </div>
            <div className="flex-1">
                <ul className="flex justify-center space-x-8">
                    <li><a href="#" className="hover:text-white">Home</a></li>
                    <li><a href="#" className="hover:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white">Services</a></li>
                    <li><a href="#" className="hover:text-white">Blogs</a></li>
                </ul>
            </div>
            <div className="flex items-center space-x-6 text-black">
                {/* Dark Mode Toggle */}
                <div className="flex items-center space-x-2">
                    <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                        Light
                    </span>
                    <button
                        type="button"
                        onClick={toggleDarkMode}
                        className={`w-10 h-6 flex items-center rounded-full ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}
                    >
                        <div
                            className={`w-6 h-6 rounded-full transform transition-transform duration-300 ${isDarkMode ? "bg-orange-300 translate-x-4" : "bg-orange-500"}`}
                        ></div>
                    </button>
                    <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                        Dark
                    </span>
                </div>

                {/* Language Dropdown */}
                <div className="relative">
                    <button onClick={toggleLanguageDropdown} className="hover:text-gray-400">
                        <img src={globe} alt="Globe" className="h-7" />
                    </button>
                    {isLanguageOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hebrew</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Russian</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Notification Bell */}
                <div className="relative">
                    <button onClick={toggleNotificationDropdown} className="hover:text-gray-400">
                        <img src={bell} alt="Notification Bell" className="h-7" />
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

                {/* Profile Dropdown */}
                <div className="relative">
                    <button onClick={toggleProfileDropdown} className="hover:text-gray-200">
                        <div className="h-10 w-10 bg-gray-100 rounded-full border-2 border-black flex items-center justify-center">
                            <img
                                src={profile}
                                alt="Profile"
                                className="h-7 rounded-full"
                            />
                        </div>
                    </button>
                    {isProfileOpen && (
                        <div className="text-black absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
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