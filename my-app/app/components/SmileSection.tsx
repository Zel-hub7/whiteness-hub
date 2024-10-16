import React from "react";
import Image from 'next/image'; // Import Next.js Image component
import SmilingWoman from '../assets/images/smiling-woman.jpg'; // Import the image

const SmileSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">✨</span>
            <h3 className="text-xl font-bold mt-4">Strahlendes Lächeln</h3>
            <p className="text-gray-600 mt-2">
              Aufhellung um bis zu 10 Farbstufen in nur einer Sitzung.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">🦷</span>
            <h3 className="text-xl font-bold mt-4">Eine Behandlung</h3>
            <p className="text-gray-600 mt-2">
              Sie benötigen nur eine Behandlung für Ihr weißes Lächeln.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">❌</span>
            <h3 className="text-xl font-bold mt-4">Keine Nebenwirkungen</h3>
            <p className="text-gray-600 mt-2">
              Ihre Zähne werden nicht beschädigt, und die Behandlung ist schmerzfrei.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <span className="text-4xl">📅</span>
            <h3 className="text-xl font-bold mt-4">Lang anhaltend</h3>
            <p className="text-gray-600 mt-2">
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
              width={370} 
              height={400}
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
