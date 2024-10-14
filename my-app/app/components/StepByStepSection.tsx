"use client"; // Add this line at the top

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Using react-icons for arrows

const StepByStepSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Consultation On-Site',
      description:
        'Together with one of our WEISS experts, you will find out which package best suits you and your teeth. The consultation is tailored individually to you, and based on the current tooth color, you can decide which bleaching package meets your expectations and desires. All your personal questions will be answered here.',
      icon: '🖥️',
    },
    {
      id: 2,
      title: 'Determination of Tooth Shade',
      description:
        'We determine your tooth shade to ensure the bleaching treatment meets your needs.',
      icon: '🦷',
    },
    {
      id: 3,
      title: 'Tooth Whitening (Bleaching)',
      description:
        'We carry out the bleaching treatment to give you a brighter smile.',
      icon: '🦷',
    },
    {
      id: 4,
      title: 'Result Check',
      description:
        'We review the results of your treatment to ensure satisfaction.',
      icon: '✅',
    },
    {
      id: 5,
      title: 'Refresh Card',
      description:
        'After 3 months, come back for a refresh to maintain your new smile.',
      icon: '💳',
    },
  ];

  const handlePrevious = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">Step By Step to Your KONZEPT WEISS Smile</h2>
        <p className="text-lg mb-12">
          In just 5 steps to a bright white smile – it’s that easy to fulfill your dream of whiter teeth with us.
        </p>

        {/* Arrows and Step Content */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black text-white ${
              activeStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={activeStep === 1}
          >
            <FaChevronLeft />
          </button>

          {/* Step Content */}
          <div className="flex justify-center space-x-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`${
                  step.id === activeStep ? 'block' : 'hidden'
                } bg-black p-6 rounded-lg shadow-md text-white w-full max-w-md`}
              >
                <p className="text-3xl font-bold text-gray-200">{`0${step.id}`}</p>
                <p className="text-lg font-semibold my-2">{step.title}</p>
                <p className="text-md my-2">{step.description}</p>
                <span className="text-green-500 text-2xl">{step.icon}</span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black text-white ${
              activeStep === steps.length ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={activeStep === steps.length}
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center space-x-4 mt-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`p-4 rounded-lg shadow-md cursor-pointer ${
                step.id === activeStep ? 'bg-white text-black' : 'bg-gray-200 text-gray-500'
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <p className="text-lg">{`0${step.id}`}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-black text-white px-6 py-3 font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepByStepSection;
