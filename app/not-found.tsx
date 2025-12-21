import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-[#0a1929]">
        <div className="text-center max-w-2xl mx-auto">
          {/* Code 404 */}
          <h1 className="text-9xl font-bold text-black dark:text-white mb-4">
            404
          </h1>

          {/* Message d'erreur */}
          <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-6">
            Page introuvable
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 dark:text-gray-300 mb-12 max-w-md mx-auto">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>

          {/* Bouton retour */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              href="/"
              variant="primary"
              size="lg"
              className="min-w-[200px]"
            >
              Retour à l&apos;accueil
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="min-w-[200px]"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
