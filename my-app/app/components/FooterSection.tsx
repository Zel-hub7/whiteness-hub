import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <div className="bg-gray-100 pt-16 pb-8">
      {/* Newsletter Subscription Section */}
      <div className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-3xl font-bold">Immer aktuell dabei!</h2>
            <p className="text-gray-300">Trage Dich jetzt für unseren Newsletter ein und verpasse keine Angebote mehr.</p>
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              className="px-4 py-2 w-full sm:w-auto rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="E-Mail eingeben"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
              ABONNIEREN
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-4 text-sm text-gray-400">
          Mit der Anmeldung zum Newsletter stimmst du den <a href="#" className="text-green-500 underline">Datenschutzbestimmungen</a> zu.
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-gray-700 font-bold mb-4">SHOP</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:underline">Bestseller</a></li>
            <li><a href="#" className="hover:underline">Bundle & Sets</a></li>
            <li><a href="#" className="hover:underline">Gutschein</a></li>
            <li><a href="#" className="hover:underline">Alle Produkte</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Hilfe & Kontakt</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-700 font-bold mb-4">STORE</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:underline">Standorte</a></li>
            <li><a href="#" className="hover:underline">Behandlungsablauf</a></li>
            <li><a href="#" className="hover:underline">Kunden & Ergebnisse</a></li>
            <li><a href="#" className="hover:underline">Hilfe & Kontakt</a></li>
            <li><a href="#" className="hover:underline">Offene Stellen</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-700 font-bold mb-4">RECHTLICHES</h3>
          <ul className="text-gray-600 space-y-2">
            <li><a href="#" className="hover:underline">Datenschutz</a></li>
            <li><a href="#" className="hover:underline">Impressum</a></li>
            <li><a href="#" className="hover:underline">Widerrufsbelehrung</a></li>
            <li><a href="#" className="hover:underline">Geld-zurück-Garantie</a></li>
            <li><a href="#" className="hover:underline">Shop AGB</a></li>
            <li><a href="#" className="hover:underline">Store AGB</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-gray-600">
        <div>
          <p>&copy; 2024 Konzept Weiss. Alle Rechte vorbehalten.</p>
        </div>
        {/* <div className="flex space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
        </div> */}
      </div>

      {/* Payment Methods */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center space-x-4">
        <img src="https://cdn.shopify.com/s/files/1/0592/1384/0583/files/Zahlungsmethoden.png?v=1698228258" alt="PayPal" className="w-12 h-auto"/>
        <img src="https://cdn.shopify.com/s/files/1/0592/1384/0583/files/Zahlungsmethoden.png?v=1698228258" alt="Visa" className="w-12 h-auto"/>
        <img src="https://cdn.shopify.com/s/files/1/0592/1384/0583/files/Zahlungsmethoden.png?v=1698228258" alt="MasterCard" className="w-12 h-auto"/>
        <img src="https://cdn.shopify.com/s/files/1/0592/1384/0583/files/Zahlungsmethoden.png?v=1698228258" alt="American Express" className="w-12 h-auto"/>
      </div>
    </div>
  );
};

export default FooterSection;
