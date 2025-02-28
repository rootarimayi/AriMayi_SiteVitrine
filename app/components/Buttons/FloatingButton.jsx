"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FloatingButton({ buttonText }) {
  const buttonRef = useRef(null);
  const [buttonPosition, setButtonPosition] = useState('2rem');
  
  useEffect(() => {
    const footerElement = document.querySelector('footer');
    
    if (!footerElement) return;
    
    const updateButtonPosition = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const footerHeight = entry.target.offsetHeight;
        setButtonPosition(`calc(${footerHeight}px + 2rem)`);
      } else {
        setButtonPosition('2rem');
      }
    };
    
    const observer = new IntersectionObserver(
      updateButtonPosition,
      {
        root: null,
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
    
    observer.observe(footerElement);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <Link href="/saisie-cv">
      <button
        ref={buttonRef}
        style={{
          position: 'fixed',
          bottom: buttonPosition,
          right: '2rem',
          zIndex: 50,
          transition: 'bottom 0.3s ease',
          background: 'linear-gradient(130.45deg, #54E0E9 5.48%, #816CFF 60.63%, #B163FF 104.96%)',
        }}
        className="text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        <span role="img" aria-label="rocket">🚀</span> {buttonText}
      </button>
    </Link>
  );
}