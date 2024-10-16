"use client"; // Add this at the top of the file

import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Schließen, wenn bereits geöffnet
    } else {
      setOpenIndex(index); // Klicken, um zu öffnen
    }
  };

  const faqs = [
    {
      question: "Gibt es Nebenwirkungen?",
      answer: "Nein, es sind keine bekannten Nebenwirkungen bekannt.",
    },
    {
      question: "Ist eine professionelle Zahnaufhellung notwendig?",
      answer:
        "Ja, professionelle Zahnaufhellung liefert bessere Ergebnisse als DIY-Produkte.",
    },
    {
      question: "Können Kronen, Brücken, Füllungen oder Veneers aufgehellt werden?",
      answer: "Nein, diese Materialien können durch Bleichmittel nicht aufgehellt werden.",
    },
    {
      question: "Wie weiß können meine Zähne werden?",
      answer:
        "Die Zähne können je nach aktueller Zahnfarbe um mehrere Farbtöne aufgehellt werden.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ-Titel */}
        <h2 className="text-3xl font-bold mb-8 text-center">
          Ihre Fragen. Unsere Antworten.
        </h2>

        {/* FAQ-Elemente */}
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

        {/* Produktsektion mit Bildern */}
        <div className="mt-16 text-center">
          {/* Titel */}
          <h2 className="text-4xl font-bold mb-2">
            Verlängern Sie Ihre Aufhellungsergebnisse
          </h2>
          <p className="text-lg mb-8">Entdecken Sie unsere Pflegeprodukte</p>

          {/* Produktkarten */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Karte 1 (Bild getauscht mit Karte 4) */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-green-800 p-6 rounded-lg text-center shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/image_2022_04_27T14_08_11_984Z.png?v=1651068788"
                alt="Elektrische Zahnbürste"
                className="w-8 h-auto mx-auto mb-4 transition duration-500 transform hover:scale-110"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-white">
                  SONIC+ ELEKTRISCHE SCHALLZAHNBÜRSTE 2.0
                </h3>
                <p className="text-gray-300 mb-4">
                  Die Sonic+ Schallzahnbürste 2.0 bietet Ihnen 5 Modi für eine sanfte und effektive Reinigung Ihrer Zähne.
                </p>
              </div>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg mt-auto transition duration-300">
                MEHR ERFAHREN
              </button>
            </div>

            {/* Karte 2 (Bild getauscht mit Karte 5) */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-green-800 p-6 rounded-lg text-center shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/Premium_Care_Bundle.png?v=1718298656"
                alt="Premium-Pflegepaket"
                className="w-24 h-auto mx-auto mb-4 transition duration-500 transform hover:scale-110"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-white">
                  PREMIUM CARE BUNDLE+
                </h3>
                <p className="text-gray-300 mb-4">
                  Entdecken Sie unser PREMIUM CARE BUNDLE+ mit fortschrittlicher Schallzahnbürste und Aufhellungsprodukten.
                </p>
              </div>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg mt-auto transition duration-300">
                MEHR ERFAHREN
              </button>
            </div>

            {/* Karte 3 (Keine Änderung) */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-green-800 p-6 rounded-lg text-center shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/COLOURCORRECTOR-removebg-preview.png?v=1705600089"
                alt="Farbkorrektur"
                className="w-24 h-auto mx-auto mb-4 transition duration-500 transform hover:scale-110"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-white">
                  CC+ FARBKORREKTUR
                </h3>
                <p className="text-gray-300 mb-4">
                  Der CC+ Farbkorrektor neutralisiert Verfärbungen Ihrer Zähne und bringt neuen Glanz.
                </p>
              </div>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg mt-auto transition duration-300">
                MEHR ERFAHREN
              </button>
            </div>

            {/* Karte 4 (Bild getauscht mit Karte 1) */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-green-800 p-6 rounded-lg text-center shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/ZAHNPASTA_NEU_8bbffb13-be30-42ce-b4ed-82940d019114.png?v=1666893600"
                alt="Premium Whitening Zahnpasta"
                className="w-24 h-auto mx-auto mb-4 transition duration-500 transform hover:scale-110"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-white">
                  PREMIUM WHITENING ZAHNPASTA+
                </h3>
                <p className="text-gray-300 mb-4">
                  Unsere Zahnpasta mit Aktivkohle, ohne Fluorid! Aufhellung nach nur wenigen Anwendungen.
                </p>
              </div>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg mt-auto transition duration-300">
                MEHR ERFAHREN
              </button>
            </div>

            {/* Karte 5 (Bild getauscht mit Karte 2) */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-green-800 p-6 rounded-lg text-center shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/file.png?v=1718298472"
                alt="Coco Crush Zahnpasta"
                className="w-24 h-auto mx-auto mb-4 transition duration-500 transform hover:scale-110"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-white">
                  COCO CRUSH ZAHNPASTA
                </h3>
                <p className="text-gray-300 mb-4">
                  Bringen Sie den exotischen Geschmack von Coco Crush nach Hause und gönnen Sie sich etwas Besonderes!
                </p>
              </div>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg mt-auto transition duration-300">
                MEHR ERFAHREN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
