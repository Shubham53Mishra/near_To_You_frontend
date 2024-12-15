"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { AccountCircleRounded as AccountIcon, Search as SearchIcon, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const NavLink = ({ item }) => (
  <li>
    <Link href="#" className="hover:underline text-white">
      {item}
    </Link>
  </li>
);

const UserDropdown = ({ isOpen, toggleDropdown, handleLogout, user }) => (
  <div className="relative">
    <button onClick={toggleDropdown} className="focus:outline-none" aria-label="User Menu">
      <img src="/robo.png" alt="Account Icon" className="rounded-full w-12 h-12" />
    </button>
    {isOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900">{user.name}</span>
          <span className="block text-sm text-gray-500">{user.email}</span>
        </div>
        <ul className="py-2 text-black">
          <li>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Profile
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
              Sign out
            </button>
          </li>
        </ul>
      </div>
    )}
  </div>
);

const Navbar = ({ showSearchInput }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleLogout = () => {
    Cookies.remove('accessToken');
    setIsLoggedIn(false);
    setUser({ name: '', email: '' });
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken = Cookies.get('accessToken');
      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://near-to-you-backend.onrender.com/api/v1/users/get-user-profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });

        const result = await response.json();

        if (result.success) {
          setUser({
            name: result.data.name || 'Guest',
            email: result.data.email || 'No email provided'
          });
          setIsLoggedIn(true);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error('Failed to fetch user profile.', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <header className="w-full h-24 flex justify-center items-center bg-black">
        <nav className="w-[90vw] flex justify-between items-center px-8 text-white">
          <span>Loading...</span>
        </nav>
      </header>
    );
  }

  return (
    <header className="w-full h-24 flex justify-center items-center bg-black">
      <nav className="w-[90vw] flex justify-between items-center px-8 text-white">
        <div className="flex items-center">
          <AccountIcon className="w-12 h-12 text-white" />
          <span className="ml-4 text-2xl font-semibold">Near2you</span>
        </div>
        <ul className={`flex space-x-8 md:flex hidden`}>
          {["Home", "Service", "Use Case", "Native"].map((item) => (
            <NavLink key={item} item={item} />
          ))}
        </ul>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center space-x-6 z-60"> {/* Set higher z-index for hamburger */}
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>

        {/* Search input */}
        {showSearchInput && (
          <div className="relative w-80 hidden md:block">
            <input
              type="text"
              placeholder="Search here"
              className="w-full h-10 border px-4 rounded-xl text-black focus:outline-none"
              aria-label="Search"
            />
            <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700" />
          </div>
        )}

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-24 left-0 right-0 bg-black text-white p-4 z-50`}>
          <ul className="space-y-4">
            {["Home", "Service", "Use Case", "Native"].map((item) => (
              <NavLink key={item} item={item} />
            ))}
            <li className="pt-4">
              {isLoggedIn ? (
                <UserDropdown
                  isOpen={isDropdownOpen}
                  toggleDropdown={toggleDropdown}
                  handleLogout={handleLogout}
                  user={user}
                />
              ) : (
                <Link href="/Signin">
                  <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100">Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* Desktop user login */}
        <div className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <span className="text-lg">Hello, {user.name}</span>
              <UserDropdown
                isOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                handleLogout={handleLogout}
                user={user}
              />
            </>
          ) : (
            <Link href="/Signin">
              <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
