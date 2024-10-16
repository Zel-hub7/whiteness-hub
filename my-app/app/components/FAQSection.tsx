"use client"; // Add this at the top of the file

import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  const faqs = [
    {
      question: "Are there any side effects?",
      answer: "No, there are no known side effects.",
    },
    {
      question: "Is professional teeth whitening necessary?",
      answer: "Yes, professional teeth whitening provides better results than DIY products.",
    },
    {
      question: "Can crowns, bridges, fillings, or veneers be whitened?",
      answer: "No, these materials cannot be whitened through bleaching.",
    },
    {
      question: "How white can my teeth get?",
      answer: "Teeth can be whitened by several shades, depending on the current tooth color.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Title */}
        <h2 className="text-3xl font-bold mb-8 text-center">
          Your Questions. Our Answers.
        </h2>

        {/* FAQ Items */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b last:border-none">
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Product Section with Images */}
        <div className="mt-16 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-2">
            Extend Your Whitening Results
          </h2>
          <p className="text-lg mb-8">Discover our care products</p>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-green-800 p-6 rounded-lg text-center shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/COLOURCORRECTOR-removebg-preview.png?v=1705600089"
                alt="Sonic Toothbrush"
                className="w-24 h-auto mx-auto mb-4 transition duration-500 transform hover:scale-110"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-white">
                  SONIC+ ELECTRIC SONIC TOOTHBRUSH 2.0
                </h3>
                <p className="text-gray-300 mb-4">
                  The Sonic Sonic Toothbrush 2.0 offers you 5 modes for gentle and effective cleaning of your teeth.
                </p>
              </div>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg mt-auto transition duration-300">
                LEARN MORE
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-green-800 p-6 rounded-lg text-center shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/COLOURCORRECTOR-removebg-preview.png?v=1705600089"
                alt="Premium Care Bundle"
                className="w-24 h-auto mx-auto mb-4 transition duration-500 transform hover:scale-110"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-white">PREMIUM CARE BUNDLE+</h3>
                <p className="text-gray-300 mb-4">
                  Discover our PREMIUM CARE BUNDLE+ with advanced sonic toothbrush and whitening products.
                </p>
              </div>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg mt-auto transition duration-300">
                LEARN MORE
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-green-800 p-6 rounded-lg text-center shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/COLOURCORRECTOR-removebg-preview.png?v=1705600089"
                alt="Colour Corrector"
                className="w-24 h-auto mx-auto mb-4 transition duration-500 transform hover:scale-110"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-white">CC+ COLOUR CORRECTOR</h3>
                <p className="text-gray-300 mb-4">
                  The CC+ Colour Corrector neutralizes discoloration on your teeth and brings new shine.
                </p>
              </div>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg mt-auto transition duration-300">
                LEARN MORE
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-green-800 p-6 rounded-lg text-center shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/COLOURCORRECTOR-removebg-preview.png?v=1705600089"
                alt="Premium Whitening"
                className="w-24 h-auto mx-auto mb-4 transition duration-500 transform hover:scale-110"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-white">
                  PREMIUM WHITENING TOOTHPASTE+
                </h3>
                <p className="text-gray-300 mb-4">
                  Our activated charcoal toothpaste, fluoride-free! Whitening after just a few uses.
                </p>
              </div>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg mt-auto transition duration-300">
                LEARN MORE
              </button>
            </div>

            {/* Card 5 */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-green-800 p-6 rounded-lg text-center shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/COLOURCORRECTOR-removebg-preview.png?v=1705600089"
                alt="Coco Crush Toothpaste"
                className="w-24 h-auto mx-auto mb-4 transition duration-500 transform hover:scale-110"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-white">
                  COCO CRUSH TOOTHPASTE
                </h3>
                <p className="text-gray-300 mb-4">
                  Bring the exotic taste of Coco Crush home and treat yourself!
                </p>
              </div>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg mt-auto transition duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
