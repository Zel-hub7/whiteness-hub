"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import Chevron Icons

const Navbar: React.FC = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showTreatmentsDropdown, setShowTreatmentsDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side of the navbar */}
          <div className="flex">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                WhitenessHub
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex space-x-8 items-center">
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
                  <div
                    className={`absolute left-0 mt-2 w-[700px] bg-white shadow-lg z-10 p-6 flex opacity-0 transition-opacity duration-300 ease-in-out ${
                      showProductsDropdown ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
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

                    {/* Right side: Images with text */}
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
                  <div
                    className={`absolute left-0 mt-2 w-[700px] bg-white shadow-lg z-10 p-6 flex opacity-0 transition-opacity duration-300 ease-in-out ${
                      showTreatmentsDropdown ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
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

                    {/* Right side: Images with text */}
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

          {/* Right side of the navbar */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-500 hover:text-blue-600">
              Login
            </Link>
            <Link href="/book" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
