import React from "react";

const UniqueTreatmentSection: React.FC = () => {
  return (
    <div>
      {/* Unique Treatment Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16 m-6 rounded-lg shadow-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:justify-between">
          {/* Left Section: Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Unique Treatment
            </h2>
            <p className="text-lg mb-6">
              We will give you a bright white smile in just one session.
            </p>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition duration-300 transform hover:scale-105">
              Book an Appointment
            </button>
          </div>

          {/* Right Section: Images */}
          <div className="flex space-x-4">
            {/* Polaroid-style images */}
            <div className="relative transform hover:scale-105 transition duration-300">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/BehandlungsgutscheinBannerBlackDeals_370x230@2x.png?v=1728557218"
                alt="Before Treatment"
                className="rounded-lg shadow-2xl w-48 h-auto border-2 border-white"
              />
              <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded-lg shadow-lg">
                Before
              </p>
            </div>
            <div className="relative transform hover:scale-105 transition duration-300">
              <img
                src="https://konzept-weiss.de/cdn/shop/files/BehandlungsgutscheinBannerBlackDeals_370x230@2x.png?v=1728557218"
                alt="After Treatment"
                className="rounded-lg shadow-2xl w-48 h-auto border-2 border-white"
              />
              <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded-lg shadow-lg">
                After
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Concept Weiss Section */}
      <div className="bg-white text-black py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-6">CONCEPT WEISS</h2>

          {/* Paragraph */}
          <p className="text-lg leading-relaxed">
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
    </div>
  );
};

export default UniqueTreatmentSection;
