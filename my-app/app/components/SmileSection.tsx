import React from "react";
import Image from 'next/image'; // Import Next.js Image component
import SmilingWoman from '../assets/images/smiling-woman.jpg'; // Import the image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faFaceSmile, faShieldAlt, faCalendar } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons

const SmileSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Each card has a light gradient and hover effect */}
          <div className="bg-gradient-to-br from-white to-gray-200 p-4 rounded-lg text-center shadow-md h-48 w-full flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FontAwesomeIcon icon={faFaceSmile} size="2x" className="text-yellow-500 mb-4" /> 
            <h3 className="text-lg font-bold mt-4">Strahlendes Lächeln</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Aufhellung um bis zu 10 Farbstufen in nur einer Sitzung.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-200 p-4 rounded-lg text-center shadow-md h-48 w-full flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FontAwesomeIcon icon={faTooth} size="2x" className="text-blue-500 mb-4" />
            <h3 className="text-lg font-bold mt-4">Eine Behandlung</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Sie benötigen nur eine Behandlung für Ihr weißes Lächeln.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-200 p-4 rounded-lg text-center shadow-md h-48 w-full flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" className="text-red-500 mb-4" />
            <h3 className="text-lg font-bold mt-4">Keine Nebenwirkungen</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Ihre Zähne werden nicht beschädigt, und die Behandlung ist schmerzfrei.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-200 p-4 rounded-lg text-center shadow-md h-48 w-full flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <FontAwesomeIcon icon={faCalendar} size="2x" className="text-green-500 mb-4" />
            <h3 className="text-lg font-bold mt-4">Lang anhaltend</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Unsere Aufhellung hält bis zu 12 Monate.
            </p>
          </div>
        </div>

        {/* Image and Text Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-b from-white to-gray-100 p-4 lg:p-8 rounded-lg">
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={SmilingWoman}
              alt="Smiling Woman"
              width={300} 
              height={350}
              className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl">
            <h3 className="text-green-600 font-bold uppercase mb-4 text-center lg:text-left">
              Einzigartige Konzept Weiss Methode
            </h3>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left text-gray-800">
              Bitte Lächeln! 😄
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-700">
              Ein schönes, weißes Lächeln – und das ganz ohne schmerzhafte Behandlung? 
              Wir möchten das für Sie möglich machen. KONZEPT WEISS® verzichtet bei 
              seiner Zahnaufhellungsmethode auf die Verwendung von Wasserstoffperoxid 
              und vermeidet dadurch Schmerzen und Nebenwirkungen. Unsere bewährte Methode 
              hellt Ihre Zähne sanft auf und sorgt für langanhaltende Ergebnisse.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Wenn Sie noch weitere Fragen oder Bedenken haben, wenden Sie sich 
              bitte an unser Support-Team oder besuchen Sie eine unserer Filialen. 
              Unser Personal beantwortet Ihnen gerne alle Ihre persönlichen Fragen vor Ort. 
              Sie finden auch zusätzliche Informationen auf unserer Website im FAQ-Bereich, 
              in dem häufig gestellte Fragen beantwortet werden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmileSection;
