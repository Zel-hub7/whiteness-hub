"use client";

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Using react-icons for arrows

const StepByStepSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Beratung Vor Ort',
      description:
        'Zusammen mit einem WEISS-Experten finden Sie das passende Bleaching-Paket für Ihre Zane.',
      icon: '🖥️',
    },
    {
      id: 2,
      title: 'Bestimmung des Zahnfarbtons',
      description:
        'Wir bestimmen Ihren Zahnfarbton, um sicherzustellen, dass die Bleaching-Behandlung Ihren Bedürfnissen entspricht.',
      icon: '🦷',
    },
    {
      id: 3,
      title: 'Zahnaufhellung (Bleaching)',
      description:
        'Wir führen die Bleaching-Behandlung durch, um Ihnen ein strahlenderes Lächeln zu verleihen.',
      icon: '🦷',
    },
    {
      id: 4,
      title: 'Ergebnisprüfung',
      description:
        'Wir überprüfen die Ergebnisse Ihrer Behandlung, um sicherzustellen, dass Sie zufrieden sind.',
      icon: '✅',
    },
    {
      id: 5,
      title: 'Auffrischungskarte',
      description:
        'Nach 3 Monaten kommen Sie für eine Auffrischung zurück, um Ihr neues Lächeln zu erhalten.',
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
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-5xl font-bold text-white mb-8">
          Schritt für Schritt zu Ihrem KONZEPT WEISS Lächeln
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          In nur 5 Schritten zu einem strahlend weißen Lächeln – so einfach ist es, Ihren Traum von weißen Zähnen mit uns zu erfüllen.
        </p>

        {/* Arrows and Step Content */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-gray-700 text-white ${
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
                } bg-gradient-to-br from-gray-800 via-gray-700 to-black p-8 rounded-lg shadow-lg text-white w-full max-w-lg transform transition-transform hover:scale-105`}
              >
                <p className="text-4xl font-bold text-green-400">{`0${step.id}`}</p>
                <p className="text-2xl font-semibold my-4">{step.title}</p>
                <p className="text-lg mb-6">{step.description}</p>
                <span className="text-green-500 text-3xl">{step.icon}</span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-gray-700 text-white ${
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
                step.id === activeStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <p className="text-xl">{`0${step.id}`}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-green-500 text-white px-8 py-4 font-semibold rounded-lg hover:bg-green-600 transition duration-300">
            Termin buchen
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepByStepSection;
