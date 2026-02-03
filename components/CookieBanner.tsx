'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Marquer le composant comme monté
    setMounted(true);

    // Vérifier si l'utilisateur a déjà fait un choix (uniquement côté client)
    if (typeof window !== 'undefined') {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (!cookieConsent) {
        // Afficher le bandeau après un court délai pour une meilleure UX
        setTimeout(() => setShowBanner(true), 1000);
      }
    }
  }, []);

  // Ne rien afficher côté serveur
  if (!mounted) {
    return null;
  }

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'accepted');
      localStorage.setItem('cookieConsentDate', new Date().toISOString());
    }
    setShowBanner(false);
  };

  const handleDecline = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsent', 'declined');
      localStorage.setItem('cookieConsentDate', new Date().toISOString());
    }
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Overlay pour bloquer les interactions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            onClick={handleDecline}
          />

          {/* Bandeau de cookies */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[70] p-4 md:p-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto">
              <div className="bg-white dark:bg-[#0a1929] rounded-2xl shadow-2xl border border-gray-200 dark:border-blue-900/50 p-4 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  {/* Icône et texte */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl md:text-2xl">
                        🍪
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                          Respect de votre vie privée
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          Nous utilisons des cookies strictement nécessaires au fonctionnement du site.
                          Aucun cookie publicitaire ou de suivi n'est utilisé sans votre consentement.
                          En continuant votre navigation, vous acceptez l'utilisation de ces cookies techniques.
                        </p>
                        <Link
                          href="/confidentialite"
                          className="inline-block mt-2 text-sm text-primary hover:underline font-medium"
                        >
                          En savoir plus sur notre politique de confidentialité
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                    <button
                      onClick={handleDecline}
                      className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                    >
                      Refuser
                    </button>
                    <button
                      onClick={handleAccept}
                      className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      Accepter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
