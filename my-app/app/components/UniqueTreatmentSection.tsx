import React from "react";

const UniqueTreatmentSection: React.FC = () => {
  return (
    <div>
      {/* Concept Weiss Section (Keep this unchanged) */}
      <div className="bg-white text-black py-16 m-6 rounded-lg shadow-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50 rounded-lg shadow-lg p-10">
          {/* Title */}
          <h2 className="text-5xl k font-extrabold mb-8">
            CONCEPT WEISS
          </h2>

          {/* Paragraph */}
          <p className="text-lg leading-relaxed text-black font-medium tracking-wide">
            Jede Behandlung beginnt mit einer individuellen Beratung, bei der
            Sie über jeden Schritt informiert werden und all Ihre Fragen
            beantwortet werden. Die von Zahnärzten empfohlene Bleaching-Methode
            ist sanft, schmerzfrei und langanhaltend. Der Grund dafür? Das
            CONCEPT WEISS® Master Gel enthält kein Wasserstoffperoxid oder
            andere schädliche Inhaltsstoffe. Das wirksame Ergebnis wurde von 95
            % der Anwender bestätigt, die eine Zahnaufhellung um bis zu 10
            Farbstufen ohne Schmerzen oder Nebenwirkungen erreicht haben.
          </p>
        </div>
      </div>


      <div className="bg-gradient-to-br from-black via-gray-800 to-gray-900 text-white py-16 m-6">
        {/* Common Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-90 rounded-xl shadow-lg p-10">
          {/* Flex Layout for Content */}
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            {/* Left Section: Text */}
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-5xl font-extrabold mb-4 text-white">
                Unique Treatment
              </h2>
              <p className="text-lg mb-6 text-gray-300">
                We will give you a bright white smile in just one session.
              </p>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition duration-300 transform hover:scale-105">
                Book an Appointment
              </button>
            </div>

            {/* Right Section: Image */}
            <div className="flex space-x-5 justify-center">
              <div className="relative transform hover:scale-110 transition duration-300">
                <img
                  src="https://konzept-weiss.de/cdn/shop/files/konzept_weiss-website_vorher_nachher_bilder_791x_84612202-60af-426e-b894-96c74802b2a8_1.webp?v=1711024848"
                  alt="Before & After Treatment"
                  className="rounded-lg shadow-xl w-62 h-auto border-2 border-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueTreatmentSection;
