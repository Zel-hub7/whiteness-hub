import React from 'react';

const SmileSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">✨</span> {/* Replace with actual icon */}
            <h3 className="text-xl font-bold mt-4">Bright Smile</h3>
            <p className="text-gray-600 mt-2">
              Whitening up to 10 shades in just one session.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">🦷</span> {/* Replace with actual icon */}
            <h3 className="text-xl font-bold mt-4">One Treatment</h3>
            <p className="text-gray-600 mt-2">
              You only need one treatment for your white smile.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">❌</span> {/* Replace with actual icon */}
            <h3 className="text-xl font-bold mt-4">No Side Effects</h3>
            <p className="text-gray-600 mt-2">
              Your teeth won’t be damaged, and the treatment is painless.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">📅</span> {/* Replace with actual icon */}
            <h3 className="text-xl font-bold mt-4">Long-Lasting</h3>
            <p className="text-gray-600 mt-2">
              Our whitening lasts up to 12 months.
            </p>
          </div>
        </div>

        {/* Image and Text Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img
              src="https://konzept-weiss.de/cdn/shop/files/konzept_weiss-website_laechelnde_Frau_488xpng.webp?v=1711024996"
              alt="Smiling Woman"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-green-600 font-bold uppercase mb-4">Unique Konzept Weiss Method</h3>
            <h2 className="text-3xl font-bold mb-6">Please Smile! 😄</h2>
            <p className="text-lg leading-relaxed mb-6">
              A beautiful, white smile – and all without painful treatment? We want to make that possible for you. KONZEPT WEISS®
              forgoes the use of hydrogen peroxide in its tooth-whitening method, thus avoiding pain and side effects. Our tried and
              tested method brightens your teeth gently, ensuring long-lasting results. So, you can relax and leave your worries behind
              as our experts help you achieve the smile of your dreams.
            </p>
            <p className="text-lg leading-relaxed">
              If you still have further questions or concerns, please contact our support team or visit one of our stores. Our staff
              will gladly answer all your personal questions on-site. You can also find additional information on our website in the FAQ
              section, where frequently asked questions are addressed and any uncertainties are clarified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmileSection;
