import React from "react";

const SmileSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">✨</span>
            <h3 className="text-xl font-bold mt-4">Bright Smile</h3>
            <p className="text-gray-600 mt-2">
              Whitening up to 10 shades in just one session.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">🦷</span>
            <h3 className="text-xl font-bold mt-4">One Treatment</h3>
            <p className="text-gray-600 mt-2">
              You only need one treatment for your white smile.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">❌</span>
            <h3 className="text-xl font-bold mt-4">No Side Effects</h3>
            <p className="text-gray-600 mt-2">
              Your teeth won’t be damaged, and the treatment is painless.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">📅</span>
            <h3 className="text-xl font-bold mt-4">Long-Lasting</h3>
            <p className="text-gray-600 mt-2">
              Our whitening lasts up to 12 months.
            </p>
          </div>
        </div>

        {/* Image and Text Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-b from-white to-gray-100 p-4 lg:p-8 rounded-lg">
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://konzept-weiss.de/cdn/shop/files/konzept_weiss-website_laechelnde_Frau_488xpng.webp?v=1711024996"
              alt="Smiling Woman"
              className="w-[280px] sm:w-[350px] lg:w-[400px] rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl">
            <h3 className="text-green-600 font-bold uppercase mb-4 text-center lg:text-left">
              Unique Konzept Weiss Method
            </h3>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left text-gray-800">
              Please Smile! 😄
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-700">
              A beautiful, white smile – and all without painful treatment? We
              want to make that possible for you. KONZEPT WEISS® forgoes the use
              of hydrogen peroxide in its tooth-whitening method, thus avoiding
              pain and side effects. Our tried and tested method brightens your
              teeth gently, ensuring long-lasting results.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              If you still have further questions or concerns, please contact
              our support team or visit one of our stores. Our staff will gladly
              answer all your personal questions on-site. You can also find
              additional information on our website in the FAQ section.
            </p>
          </div>
        </div>

        {/* New Section - Testimonials and Content */}
        <div className="mt-16 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-2">Hey, not convinced yet?</h2>
          <p className="text-lg mb-8">Check out these amazing results!</p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <img
              src="https://konzept-weiss.de/cdn/shop/files/konzept_weiss-website_Kunde2_291x_5ac920e3-6ae9-4a7f-8dba-1fb05607eb3b.png?v=1666955683"
              alt="Client 1"
              className="rounded-lg shadow-md w-3/4 mx-auto sm:w-full"
            />
            <img
              src="https://konzept-weiss.de/cdn/shop/files/konzept_weiss-website_Kunde2_291x_5ac920e3-6ae9-4a7f-8dba-1fb05607eb3b.png?v=1666955683"
              alt="Client 2"
              className="rounded-lg shadow-md w-3/4 mx-auto sm:w-full"
            />
            <img
              src="https://konzept-weiss.de/cdn/shop/files/konzept_weiss-website_Kunde2_291x_5ac920e3-6ae9-4a7f-8dba-1fb05607eb3b.png?v=1666955683"
              alt="Client 3"
              className="rounded-lg shadow-md w-3/4 mx-auto sm:w-full"
            />
            <img
              src="https://konzept-weiss.de/cdn/shop/files/konzept_weiss-website_Kunde2_291x_5ac920e3-6ae9-4a7f-8dba-1fb05607eb3b.png?v=1666955683"
              alt="Client 4"
              className="rounded-lg shadow-md w-3/4 mx-auto sm:w-full"
            />
          </div>

          {/* Text and Explanation Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-white shadow-md rounded-lg">
            {/* Left side - Big title */}
            <div className="text-left">
              <h3 className="text-3xl font-bold">
                3 WHITENING Packages - You have the choice
              </h3>
              <p className="text-green-600 mt-4">
                Find the right treatment for your new, white smile!
              </p>
            </div>

            {/* Right side - Explanation */}
            <div className="text-left border-l-2 border-green-500 pl-8">
              <p className="text-lg leading-relaxed">
                Every smile is different – and so is every whitening treatment.
                To achieve the best possible result for you, you will always
                receive a personalized consultation from our experts during your
                visit to our stores. This allows the selection of the ideal
                treatment package for you and answers to your questions. On our
                FAQ page, you can find some preliminary questions and answers
                about the treatment and teeth whitening.
              </p>

              <a href="#" className="text-green-600 font-semibold mt-4 block">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmileSection;
