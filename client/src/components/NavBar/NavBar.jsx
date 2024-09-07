import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDarkMode, setSearchTerm } from "../../store/store";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.user);

  function toggleDarkMode() {
    dispatch(setIsDarkMode(!isDarkMode));
  }
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    console.log(searchTerm);

    document.querySelectorAll(".highlight").forEach((el) => {
      const parent = el.parentNode;
      parent.innerHTML = parent.innerHTML.replace(
        /<span class="highlight">(.*?)<\/span>/g,
        "$1"
      );
    });

    if (searchTerm) {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );

      let node;
      let found = false;

      while ((node = walker.nextNode())) {
        if (node.nodeValue.toLowerCase().includes(searchTerm)) {
          const parent = node.parentElement;
          const innerHTML = parent.innerHTML;
          const highlightedText = innerHTML.replace(
            new RegExp(`(${searchTerm})`, "gi"),
            '<span class="highlight">$1</span>'
          );
          parent.innerHTML = highlightedText;

          parent.scrollIntoView({ behavior: "instant", block: "start" });
          found = true;
          break;
        }
      }

      if (!found) {
        console.log("No matches found");
      }
    }
  };

  const toggleProfileDropdown = () => setIsProfileOpen(!isProfileOpen);
  const toggleNotificationDropdown = () =>
    setIsNotificationOpen(!isNotificationOpen);
  const toggleLanguageDropdown = () => setIsLanguageOpen(!isLanguageOpen);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <nav className="flex div items-center justify-between shadow-black shadow-sm text-6b6a68 h-16 w-full px-6 relative">
        <div className="flex items-center">
          <img src="/img/logo.jpg" alt="Logo" className="w-20 h-20 mr-4" />
          <label className="">search : </label>
          <input
            className="bg-gray-200 ml-6 bg2 "
            type="text "
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex-1">
          <ul className="flex justify-center space-x-8 pr-32">
            <li>
              <Link to="/" className="href">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="href">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="href">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="href">
                Blogs
              </Link>
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
              <div className="div absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-20">
                <ul>
                  <li className="href px-4 py-2  cursor-pointer">Profile</li>
                  <li className="href px-4 py-2  cursor-pointer">Settings</li>
                  <li className="href px-4 py-2  cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
