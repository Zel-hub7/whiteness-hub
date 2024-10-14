import React from 'react';

const UniqueTreatmentSection: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 m-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:justify-between">
        {/* Left Section: Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Unique Treatment</h2>
          <p className="text-lg mb-6">
            We will give you a bright white smile in just one session.
          </p>
          <button className="bg-white text-black px-6 py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            Book an Appointment
          </button>
        </div>

        {/* Right Section: Images */}
        <div className="flex space-x-4">
          {/* Polaroid-style images */}
          <div className="relative">
            <img
              src="https://konzept-weiss.de/cdn/shop/files/BehandlungsgutscheinBannerBlackDeals_370x230@2x.png?v=1728557218"
              alt="Before Treatment"
              className="rounded-lg shadow-lg w-48 h-auto"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded-lg">
              Vorher
            </p>
          </div>
          <div className="relative">
            <img
              src="https://konzept-weiss.de/cdn/shop/files/BehandlungsgutscheinBannerBlackDeals_370x230@2x.png?v=1728557218"
              alt="After Treatment"
              className="rounded-lg shadow-lg w-48 h-auto"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 rounded-lg">
              Nachher
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueTreatmentSection;
