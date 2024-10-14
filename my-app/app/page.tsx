import React from 'react';
import UniqueTreatmentSection from './components/UniqueTreatmentSection';
import StepByStepSection from './components/StepByStepSection';
import SmileSection from './components/SmileSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <div>
      <UniqueTreatmentSection /> 
      <StepByStepSection />
      <SmileSection />
      <FAQSection />
      <FooterSection />
    
    </div>
  );
}
