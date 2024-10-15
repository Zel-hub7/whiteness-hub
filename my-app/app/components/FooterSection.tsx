"use client";

import React, { useState } from 'react';

const FooterSection: React.FC = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <div className="bg-gray-900 pt-16 pb-8">
      {/* Newsletter Subscription Section */}
      <div className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center space-y-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Immer aktuell dabei!</h2>
            <p className="text-gray-300">
              Trage Dich jetzt für unseren Newsletter ein und verpasse keine Angebote mehr.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-sm">
            <input
              type="email"
              className="px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="E-Mail eingeben"
            />
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all">
              ABONNIEREN
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-4 text-center text-sm text-gray-400">
          Mit der Anmeldung zum Newsletter stimmst du den{' '}
          <a href="#" className="text-green-500 underline hover:text-green-400">Datenschutzbestimmungen</a> zu.
        </div>
      </div>

      {/* Footer Links with Conditional Display */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row sm:justify-between">
        {/* Shop Section */}
        <div className="w-full sm:w-auto">
          {/* Mobile View (dropdown) */}
          <button
            className="w-full flex justify-between items-center text-white font-bold py-4 sm:hidden"
            onClick={() => setIsShopOpen(!isShopOpen)}
          >
            <span>SHOP</span>
            <span>{isShopOpen ? '▲' : '▼'}</span>
          </button>
          {isShopOpen && (
            <ul className="text-gray-400 space-y-2 sm:hidden">
              <li><a href="#" className="hover:text-white">Bestseller</a></li>
              <li><a href="#" className="hover:text-white">Bundles & Sets</a></li>
              <li><a href="#" className="hover:text-white">Geschenkkarten</a></li>
              <li><a href="#" className="hover:text-white">Alle Produkte</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Hilfe & Kontakt</a></li>
            </ul>
          )}
          {/* Larger Screens (static list) */}
          <div className="hidden sm:block">
            <h3 className="text-white font-bold mb-4">SHOP</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Bestseller</a></li>
              <li><a href="#" className="hover:text-white">Bundles & Sets</a></li>
              <li><a href="#" className="hover:text-white">Geschenkkarten</a></li>
              <li><a href="#" className="hover:text-white">Alle Produkte</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Hilfe & Kontakt</a></li>
            </ul>
          </div>
        </div>

        {/* Store Section */}
        <div className="w-full sm:w-auto">
          {/* Mobile View (dropdown) */}
          <button
            className="w-full flex justify-between items-center text-white font-bold py-4 sm:hidden"
            onClick={() => setIsStoreOpen(!isStoreOpen)}
          >
            <span>STORE</span>
            <span>{isStoreOpen ? '▲' : '▼'}</span>
          </button>
          {isStoreOpen && (
            <ul className="text-gray-400 space-y-2 sm:hidden">
              <li><a href="#" className="hover:text-white">Standorte</a></li>
              <li><a href="#" className="hover:text-white">Behandlungsprozess</a></li>
              <li><a href="#" className="hover:text-white">Kunden & Ergebnisse</a></li>
              <li><a href="#" className="hover:text-white">Hilfe & Kontakt</a></li>
              <li><a href="#" className="hover:text-white">Offene Stellen</a></li>
            </ul>
          )}
          {/* Larger Screens (static list) */}
          <div className="hidden sm:block">
            <h3 className="text-white font-bold mb-4">STORE</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Standorte</a></li>
              <li><a href="#" className="hover:text-white">Behandlungsprozess</a></li>
              <li><a href="#" className="hover:text-white">Kunden & Ergebnisse</a></li>
              <li><a href="#" className="hover:text-white">Hilfe & Kontakt</a></li>
              <li><a href="#" className="hover:text-white">Offene Stellen</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Section */}
        <div className="w-full sm:w-auto">
          {/* Mobile View (dropdown) */}
          <button
            className="w-full flex justify-between items-center text-white font-bold py-4 sm:hidden"
            onClick={() => setIsLegalOpen(!isLegalOpen)}
          >
            <span>RECHTLICHES</span>
            <span>{isLegalOpen ? '▲' : '▼'}</span>
          </button>
          {isLegalOpen && (
            <ul className="text-gray-400 space-y-2 sm:hidden">
              <li><a href="#" className="hover:text-white">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white">Impressum</a></li>
              <li><a href="#" className="hover:text-white">Widerrufsbelehrung</a></li>
              <li><a href="#" className="hover:text-white">Geld-zurück-Garantie</a></li>
              <li><a href="#" className="hover:text-white">AGB Shop</a></li>
              <li><a href="#" className="hover:text-white">AGB Store</a></li>
            </ul>
          )}
          {/* Larger Screens (static list) */}
          <div className="hidden sm:block">
            <h3 className="text-white font-bold mb-4">RECHTLICHES</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white">Impressum</a></li>
              <li><a href="#" className="hover:text-white">Widerrufsbelehrung</a></li>
              <li><a href="#" className="hover:text-white">Geld-zurück-Garantie</a></li>
              <li><a href="#" className="hover:text-white">AGB Shop</a></li>
              <li><a href="#" className="hover:text-white">AGB Store</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media & Payment Methods */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-4 items-center text-gray-400">
        <div>
          <p>&copy; 2024 Konzept Weiss. Alle Rechte vorbehalten.</p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <img src="https://cdn.shopify.com/s/files/1/0592/1384/0583/files/Zahlungsmethoden.png?v=1698228258" alt="PayPal" className="w-12 h-auto" />
          <img src="https://cdn.shopify.com/s/files/1/0592/1384/0583/files/Zahlungsmethoden.png?v=1698228258" alt="Visa" className="w-12 h-auto" />
          <img src="https://cdn.shopify.com/s/files/1/0592/1384/0583/files/Zahlungsmethoden.png?v=1698228258" alt="MasterCard" className="w-12 h-auto" />
          <img src="https://cdn.shopify.com/s/files/1/0592/1384/0583/files/Zahlungsmethoden.png?v=1698228258" alt="American Express" className="w-12 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
