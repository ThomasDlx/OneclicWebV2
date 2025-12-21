import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Sites Vitrines', href: '/services#vitrines' },
      { name: 'E-commerce', href: '/services#ecommerce' },
      { name: 'Applications Web', href: '/services#applications' },
      { name: 'Hébergement', href: '/services#hebergement' },
    ],
    entreprise: [
      { name: 'À propos', href: '/about' },
      { name: 'Réalisations', href: '/realisations' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Mentions Légales', href: '/mentions-legales' },
      { name: 'Politique de Confidentialité', href: '/confidentialite' },
      { name: 'CGV', href: '/cgv' },
    ],
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-[#0d2137] border-t border-gray-200/50 dark:border-blue-900/30 overflow-hidden">
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Colonne 1 : Logo et description */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-black dark:text-white">
              OneClickWeb
            </Link>
            <p className="mt-4 text-sm text-gray-400 dark:text-white leading-relaxed">
              Agence de développement web premium. Création de sites vitrines, e-commerce et applications sur mesure.
            </p>
          </div>

          {/* Colonne 2 : Services */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 dark:text-white hover:text-black dark:hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Entreprise */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 dark:text-white hover:text-black dark:hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400 dark:text-white">
                <a href="mailto:contact@oneclickweb.fr" className="hover:text-black dark:hover:text-white transition-colors">
                  contact@oneclickweb.fr
                </a>
              </li>
              <li className="text-sm text-gray-400 dark:text-white">
                <a href="tel:+33123456789" className="hover:text-black dark:hover:text-white transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-200/50 dark:border-blue-900/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-400 dark:text-white">
              © {currentYear} OneClickWeb. Tous droits réservés.
            </p>

            {/* Liens légaux */}
            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-gray-400 dark:text-white hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
