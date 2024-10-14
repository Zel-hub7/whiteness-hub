"use client"; // Add this at the top of the file

import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  // State to track which FAQ is currently expanded
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle FAQ items
  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  // List of FAQs
  const faqs = [
    { question: 'Gibt es Nebenwirkungen?', answer: 'Nein, es gibt keine bekannten Nebenwirkungen.' },
    { question: 'Ist eine professionelle Zahnaufhellung notwendig?', answer: 'Ja, professionelle Zahnaufhellung liefert bessere Ergebnisse als DIY-Produkte.' },
    { question: 'Können Kronen, Brücken, Füllungen oder Veneers aufgehellt werden?', answer: 'Nein, diese Materialien können durch Bleaching nicht aufgehellt werden.' },
    { question: 'Wie hell können meine Zähne werden?', answer: 'Die Zähne können um mehrere Nuancen aufgehellt werden, abhängig von der aktuellen Zahnfarbe.' },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Title */}
        <h2 className="text-3xl font-bold mb-8 text-center">Deine Fragen. Unsere Antworten.</h2>

        {/* FAQ Items */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b last:border-none">
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
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
          <h2 className="text-4xl font-bold mb-2">Verlängere Dein Bleachingergebnis</h2>
          <p className="text-lg mb-8">Entdecke unsere Pflegeprodukte</p>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Card 1 */}
            <div className="bg-green-100 p-6 rounded-lg text-center shadow-md flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/COLOURCORRECTOR-removebg-preview.png?v=1705600089"
                alt="Sonic Zahnbürste"
                className="w-24 h-auto mx-auto mb-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4">SONIC+ ELEKTRISCHE SCHALLZAHNBÜRSTE 2.0</h3>
                <p className="text-gray-600 mb-4">
                  Die Sonic Schallzahnbürste 2.0 bietet Dir 5 Modi zur schonenden und effektiven Reinigung Deiner Zähne.
                </p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-auto">MEHR ERFAHREN</button>
            </div>

            {/* Card 2 */}
            <div className="bg-green-100 p-6 rounded-lg text-center shadow-md flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/COLOURCORRECTOR-removebg-preview.png?v=1705600089"
                alt="Premium Care Bundle"
                className="w-24 h-auto mx-auto mb-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4">PREMIUM CARE BUNDLE+</h3>
                <p className="text-gray-600 mb-4">
                  Entdecke unser PREMIUM CARE BUNDLE+ mit hochmoderner Schallzahnbürste und Whitening-Produkten.
                </p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-auto">MEHR ERFAHREN</button>
            </div>

            {/* Card 3 */}
            <div className="bg-green-100 p-6 rounded-lg text-center shadow-md flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/COLOURCORRECTOR-removebg-preview.png?v=1705600089"
                alt="Colour Corrector"
                className="w-24 h-auto mx-auto mb-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4">CC+ COLOUR CORRECTOR</h3>
                <p className="text-gray-600 mb-4">
                  Der CC+ Colour Corrector neutralisiert Verfärbungen auf Deinen Zähnen und bringt neuen Glanz.
                </p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-auto">MEHR ERFAHREN</button>
            </div>

            {/* Card 4 */}
            <div className="bg-green-100 p-6 rounded-lg text-center shadow-md flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/COLOURCORRECTOR-removebg-preview.png?v=1705600089"
                alt="Premium Whitening"
                className="w-24 h-auto mx-auto mb-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4">PREMIUM WHITENING ZAHNCREME+</h3>
                <p className="text-gray-600 mb-4">
                  Unsere Aktivkohle Zahnpasta, ganz ohne Fluorid! Aufhellung nach wenigen Anwendungen.
                </p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-auto">MEHR ERFAHREN</button>
            </div>

            {/* Card 5 */}
            <div className="bg-green-100 p-6 rounded-lg text-center shadow-md flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/COLOURCORRECTOR-removebg-preview.png?v=1705600089"
                alt="Coco Crush Zahnpasta"
                className="w-24 h-auto mx-auto mb-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4">COCO CRUSH ZAHNCREME</h3>
                <p className="text-gray-600 mb-4">
                  Hol Dir jetzt den exotischen Geschmack von Coco Crush nach Hause und lass Dich verwöhnen!
                </p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-auto">MEHR ERFAHREN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
