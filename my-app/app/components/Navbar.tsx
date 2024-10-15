"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes, FaShoppingCart } from "react-icons/fa"; // Icons

const Navbar: React.FC = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showTreatmentsDropdown, setShowTreatmentsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left side: Logo */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu for mobile */}
            <button
              className="md:hidden text-2xl text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-white">
                KONZEPT WEISS
              </Link>
            </div>
          </div>

          {/* Navbar links (visible on larger screens) */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() => setShowProductsDropdown(false)}
            >
              <div className="flex items-center space-x-1 cursor-pointer">
                <Link href="/products" className="hover:text-gray-300">
                  Produkte
                </Link>
                {showProductsDropdown ? (
                  <FaChevronUp className="text-white hover:text-gray-300" />
                ) : (
                  <FaChevronDown className="text-white hover:text-gray-300" />
                )}
              </div>
              {showProductsDropdown && (
                <div className="absolute left-0 mt-2 w-[700px] bg-white text-black shadow-lg z-10 p-6 flex opacity-100 transition-opacity duration-300 ease-in-out">
                  {/* Products Links */}
                  <div className="w-1/2">
                    <ul>
                      <li className="py-1">
                        <Link href="/products/all" className="hover:text-gray-600">
                          Alle Produkte
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/products/bestseller" className="hover:text-gray-600">
                          Bestseller
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/products/bundle" className="hover:text-gray-600">
                          Bundles & Sets
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/products/toothpaste" className="hover:text-gray-600">
                          Zahnpasta
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/products/whitening" className="hover:text-gray-600">
                          Aufhellungspaket
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Product Images */}
                  <div className="w-1/2 flex justify-between space-x-4">
                    <div className="text-center w-1/2">
                      <p className="text-lg font-semibold mb-2">Nur für kurze Zeit!</p>
                      <img
                        src="https://konzept-weiss.de/cdn/shop/files/BehandlungsgutscheinBannerBlackDeals_370x230@2x.png?v=1728557218"
                        alt="Promotion 1"
                        className="object-cover w-full h-auto"
                      />
                    </div>
                    <div className="text-center w-1/2">
                      <p className="text-lg font-semibold mb-2">Behandlungsgutschein</p>
                      <img
                        src="https://konzept-weiss.de/cdn/shop/files/BehandlungsgutscheinBannerBlackDeals_370x230@2x.png?v=1728557218"
                        alt="Promotion 2"
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
              <div className="flex items-center space-x-1 cursor-pointer">
                <Link href="/treatments" className="hover:text-gray-300">
                  Behandlungen
                </Link>
                {showTreatmentsDropdown ? (
                  <FaChevronUp className="text-white hover:text-gray-300" />
                ) : (
                  <FaChevronDown className="text-white hover:text-gray-300" />
                )}
              </div>
              {showTreatmentsDropdown && (
                <div className="absolute left-0 mt-2 w-[700px] bg-white text-black shadow-lg z-10 p-6 flex opacity-100 transition-opacity duration-300 ease-in-out">
                  {/* Treatments Links */}
                  <div className="w-1/2">
                    <ul>
                      <li className="py-1">
                        <Link href="/treatments/basic" className="hover:text-gray-600">
                          Basic Whitening
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/treatments/advanced" className="hover:text-gray-600">
                          Advanced Whitening
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link href="/treatments/premium" className="hover:text-gray-600">
                          Premium Whitening
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Treatment Images */}
                  <div className="w-1/2 flex justify-between space-x-4">
                    <div className="text-center w-1/2">
                      <p className="text-lg font-semibold mb-2">Angebot zur Zahnaufhellung</p>
                      <img
                        src="https://konzept-weiss.de/cdn/shop/files/BehandlungsgutscheinBannerBlackDeals_370x230@2x.png?v=1728557218"
                        alt="Treatment Promotion 1"
                        className="object-cover w-full h-auto"
                      />
                    </div>
                    <div className="text-center w-1/2">
                      <p className="text-lg font-semibold mb-2">Sonderrabatt</p>
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

            {/* Additional Links */}
            <Link href="/customers" className="hover:text-gray-300">
              Kunden & Ergebnisse
            </Link>
            <Link href="/faq" className="hover:text-gray-300">
              FAQ
            </Link>
          </div>

          {/* Right side: Appointment and Cart */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/book"
              className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Termin Buchen
            </Link>
            <Link href="/cart" className="relative text-white">
              <FaShoppingCart className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-2 py-0.5 rounded-full">0</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-md">
            <ul className="flex flex-col p-4 space-y-4">
              <li className="relative">
                <div
                  onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <span>Produkte</span>
                  {showProductsDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {showProductsDropdown && (
                  <ul className="mt-2">
                    <li>
                      <Link href="/products/all" className="hover:text-gray-400">
                        Alle Produkte
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/bestseller" className="hover:text-gray-400">
                        Bestseller
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="relative">
                <div
                  onClick={() => setShowTreatmentsDropdown(!showTreatmentsDropdown)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <span>Behandlungen</span>
                  {showTreatmentsDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {showTreatmentsDropdown && (
                  <ul className="mt-2">
                    <li>
                      <Link href="/treatments/basic" className="hover:text-gray-400">
                        Basic Whitening
                      </Link>
                    </li>
                    <li>
                      <Link href="/treatments/advanced" className="hover:text-gray-400">
                        Advanced Whitening
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Other links */}
              <li>
                <Link href="/customers" className="hover:text-gray-400">
                  Kunden & Ergebnisse
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-400">
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
