import React from "react";

const UniqueTreatmentSection: React.FC = () => {
  return (
    <div>
      {/* Concept Weiss Section with cool gradient and style */}
      <div className="bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 text-gray-900 py-16 m-6 rounded-lg shadow-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Title */}
          <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400">
            CONCEPT WEISS
          </h2>

          {/* Paragraph */}
          <p className="text-lg leading-relaxed text-gray-800 font-medium tracking-wide">
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

      {/* Unique Treatment Section */}
      <div className="bg-white text-black py-16">
        <div className="bg-gradient-to-br m-7 from-gray-800 via-gray-700 to-gray-900 text-white py-16 rounded-xl shadow-2xl">
          {/* Common Container */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 bg-opacity-90 rounded-xl shadow-2xl p-10">
            {/* Flex Layout for Content */}
            <div className="flex flex-col md:flex-row items-center md:justify-between">
              {/* Left Section: Text */}
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-5xl font-extrabold mb-4 text-white">
                  Unique Treatment
                </h2>
                <p className="text-lg mb-6 text-gray-200">
                  We will give you a bright white smile in just one session.
                </p>
                <button className="bg-gradient-to-r from-purple-500 via-blue-600 to-green-400 text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:from-blue-500 hover:to-green-500 transition duration-300 transform hover:scale-110">
                  Book an Appointment
                </button>
              </div>

              {/* Right Section: Image */}
              <div className="flex space-x-5 justify-center">
                <div className="relative transform hover:scale-105 transition duration-300">
                  <img
                    src="https://konzept-weiss.de/cdn/shop/files/konzept_weiss-website_vorher_nachher_bilder_791x_84612202-60af-426e-b894-96c74802b2a8_1.webp?v=1711024848"
                    alt="Before & After Treatment"
                    className="rounded-lg shadow-xl w-62 h-auto border-4 border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueTreatmentSection;
