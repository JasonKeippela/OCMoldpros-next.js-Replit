'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroCTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isMobileWidth = window.innerWidth < 768;
      setIsMobile(isMobileUA || isMobileWidth);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a href="tel:9493715934" className="px-8 py-4 bg-ocean-600 text-white rounded-lg hover:bg-ocean-700 transition-colors font-semibold text-lg shadow-lg text-center">
        Call for a free 20-min consultation
      </a>
      {isMobile ? (
        <a 
          href="sms:9493715934?body=Hi, I'd like to set up a free 20 min consultation!" 
          className="px-8 py-4 bg-white text-gray-900 border-2 border-white rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg shadow-lg text-center"
        >
          Text to set up free 20 min consultation
        </a>
      ) : (
        <Link 
          href="/contact" 
          className="px-8 py-4 bg-white text-gray-900 border-2 border-white rounded-lg hover:bg-ocean-50 transition-colors font-semibold text-lg shadow-lg text-center"
        >
          Book your free consultation
        </Link>
      )}
    </div>
  );
}
