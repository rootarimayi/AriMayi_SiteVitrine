"use client";
import React, { useState } from 'react';
import { IoArrowForward, IoCheckmarkCircle, IoClose } from 'react-icons/io5';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Une erreur est survenue');
      }

      setShowPopup(true);
      setEmail('');
      // Fermer le popup après 5 secondes
      setTimeout(() => setShowPopup(false), 5000);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <h3 className="text-xl font-semibold">S&apos;abonner à la newsletter</h3>
      
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="SAISIR UNE ADRESSE E-MAIL"
          className="flex-grow p-3 text-black rounded-l-lg"
          required
        />
        <button
          type="submit"
          className="bg-[#F48C72] p-3 rounded-r-lg transition-all duration-300 hover:bg-[#e67a5f] disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <IoArrowForward size={20} color="white" />
          )}
        </button>
      </form>

      {/* Popup de confirmation */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-4 relative animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center gap-3">
              <IoCheckmarkCircle className="h-6 w-6 text-green-500" />
              <h4 className="text-lg font-semibold text-black">Inscription réussie !</h4>
            </div>
            
            <p className="mt-2 text-gray-600 text-black">
              Merci de vous être inscrit à notre newsletter. Vous recevrez bientôt nos dernières actualités.
            </p>
            
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <IoClose size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;