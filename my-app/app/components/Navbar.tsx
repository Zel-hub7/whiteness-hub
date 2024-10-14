"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa"; // Icons

const Navbar: React.FC = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showTreatmentsDropdown, setShowTreatmentsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side of the navbar */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu for mobile */}
            <button
              className="md:hidden text-2xl text-gray-500 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                WhitenessHub
              </Link>
            </div>
          </div>

          {/* Full navbar links (visible from md screens and above) */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() => setShowProductsDropdown(false)}
            >
              <div className="flex items-center space-x-1">
                <Link href="/products" className="text-gray-500 hover:text-blue-600">
                  Products
                </Link>
                {showProductsDropdown ? (
                  <FaChevronUp className="text-gray-500 hover:text-blue-600" />
                ) : (
                  <FaChevronDown className="text-gray-500 hover:text-blue-600" />
                )}
              </div>
              {showProductsDropdown && (
                <div className="absolute left-0 mt-2 w-[700px] bg-white shadow-lg z-10 p-6 flex opacity-100 transition-opacity duration-300 ease-in-out">
                  {/* Left side: Product Links */}
                  <div className="w-1/2">
                    <ul>
                      <li className="py-1">
                        <Link href="/products/all" className="text-gray-700 hover:text-blue-600">
                          All
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/products/bestseller" className="text-gray-700 hover:text-blue-600">
                          Bestseller
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/products/bundle" className="text-gray-700 hover:text-blue-600">
                          Bundle & Sets
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/products/toothpaste" className="text-gray-700 hover:text-blue-600">
                          Flavored Toothpaste
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/products/whitening" className="text-gray-700 hover:text-blue-600">
                          Daily Whitening Bundle+
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Right side: Images */}
                  <div className="w-1/2 flex justify-between space-x-4">
                    <div className="text-center w-1/2">
                      <p className="text-lg font-semibold mb-2">ONLY FOR A SHORT TIME!</p>
                      <img
                        src="https://konzept-weiss.de/cdn/shop/files/BehandlungsgutscheinBannerBlackDeals_370x230@2x.png?v=1728557218"
                        alt="Product Promotion 1"
                        className="object-cover w-full h-auto"
                      />
                    </div>
                    <div className="text-center w-1/2">
                      <p className="text-lg font-semibold mb-2">Our Treatment Voucher</p>
                      <img
                        src="https://konzept-weiss.de/cdn/shop/files/BehandlungsgutscheinBannerBlackDeals_370x230@2x.png?v=1728557218"
                        alt="Product Promotion 2"
                        className="object-cover w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Treatments Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowTreatmentsDropdown(true)}
              onMouseLeave={() => setShowTreatmentsDropdown(false)}
            >
              <div className="flex items-center space-x-1">
                <Link href="/treatments" className="text-gray-500 hover:text-blue-600">
                  Treatments
                </Link>
                {showTreatmentsDropdown ? (
                  <FaChevronUp className="text-gray-500 hover:text-blue-600" />
                ) : (
                  <FaChevronDown className="text-gray-500 hover:text-blue-600" />
                )}
              </div>
              {showTreatmentsDropdown && (
                <div className="absolute left-0 mt-2 w-[700px] bg-white shadow-lg z-10 p-6 flex opacity-100 transition-opacity duration-300 ease-in-out">
                  {/* Left side: Treatment Links */}
                  <div className="w-1/2">
                    <ul>
                      <li className="py-1">
                        <Link href="/treatments/basic" className="text-gray-700 hover:text-blue-600">
                          Basic Whitening
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/treatments/advanced" className="text-gray-700 hover:text-blue-600">
                          Advanced Whitening
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/treatments/premium" className="text-gray-700 hover:text-blue-600">
                          Premium Whitening
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Right side: Images */}
                  <div className="w-1/2 flex justify-between space-x-4">
                    <div className="text-center w-1/2">
                      <p className="text-lg font-semibold mb-2">Whitening Offer</p>
                      <img
                        src="https://konzept-weiss.de/cdn/shop/files/BehandlungsgutscheinBannerBlackDeals_370x230@2x.png?v=1728557218"
                        alt="Treatment Promotion 1"
                        className="object-cover w-full h-auto"
                      />
                    </div>
                    <div className="text-center w-1/2">
                      <p className="text-lg font-semibold mb-2">Special Discount</p>
                      <img
                        src="https://konzept-weiss.de/cdn/shop/files/BehandlungsgutscheinBannerBlackDeals_370x230@2x.png?v=1728557218"
                        alt="Treatment Promotion 2"
                        className="object-cover w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link href="/customers" className="text-gray-500 hover:text-blue-600">
              Customers & Results
            </Link>
            <Link href="/faq" className="text-gray-500 hover:text-blue-600">
              FAQ
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col p-4 space-y-4">
              {/* Products with dropdown */}
              <li className="relative">
                <div
                  onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                  className="flex items-center justify-between text-gray-500 hover:text-blue-600 cursor-pointer"
                >
                  <span>Products</span>
                  {showProductsDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {showProductsDropdown && (
                  <ul className="mt-2 bg-white">
                    <li>
                      <Link href="/products/all" className="text-gray-700 hover:text-blue-600">
                        All
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/bestseller" className="text-gray-700 hover:text-blue-600">
                        Bestseller
                      </Link>
                    </li>
                    {/* ... Add more products */}
                  </ul>
                )}
              </li>

              {/* Treatments with dropdown */}
              <li className="relative">
                <div
                  onClick={() => setShowTreatmentsDropdown(!showTreatmentsDropdown)}
                  className="flex items-center justify-between text-gray-500 hover:text-blue-600 cursor-pointer"
                >
                  <span>Treatments</span>
                  {showTreatmentsDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {showTreatmentsDropdown && (
                  <ul className="mt-2 bg-white">
                    <li>
                      <Link href="/treatments/basic" className="text-gray-700 hover:text-blue-600">
                        Basic Whitening
                      </Link>
                    </li>
                    <li>
                      <Link href="/treatments/advanced" className="text-gray-700 hover:text-blue-600">
                        Advanced Whitening
                      </Link>
                    </li>
                    {/* ... Add more treatments */}
                  </ul>
                )}
              </li>

              {/* Other links */}
              <li>
                <Link href="/customers" className="text-gray-500 hover:text-blue-600">
                  Customers & Results
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
