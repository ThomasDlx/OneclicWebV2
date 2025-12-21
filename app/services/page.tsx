'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const services = [
    {
      id: 'vitrines',
      icon: '🌐',
      title: 'Sites Vitrines',
      tagline: 'Votre vitrine digitale premium',
      description:
        'Un site vitrine est bien plus qu\'une simple présence en ligne. C\'est votre carte de visite digitale, votre première impression auprès de vos clients. Nous créons des sites élégants, rapides et optimisés pour convertir vos visiteurs en clients.',
      features: [
        'Design sur mesure et responsive',
        'Optimisation SEO avancée',
        'Performance et rapidité maximale',
        'Interface d\'administration intuitive',
        'Formulaires de contact avancés',
        'Intégration réseaux sociaux',
      ],
      price: 'À partir de 1 500€',
    },
    {
      id: 'ecommerce',
      icon: '🛍️',
      title: 'E-commerce',
      tagline: 'Vendez en ligne avec succès',
      description:
        'Lancez votre boutique en ligne avec une plateforme e-commerce complète et performante. Gestion de catalogue, paiements sécurisés, suivi des commandes et analytics intégrés pour développer votre business.',
      features: [
        'Catalogue produits illimité',
        'Panier et tunnel d\'achat optimisé',
        'Paiements sécurisés (Stripe, PayPal)',
        'Gestion des stocks et commandes',
        'Espace client personnalisé',
        'Analytics et reporting avancés',
      ],
      price: 'À partir de 3 500€',
    },
    {
      id: 'applications',
      icon: '⚙️',
      title: 'Applications Web',
      tagline: 'Solutions sur mesure pour votre business',
      description:
        'Besoin d\'une solution spécifique ? Nous développons des applications web complexes avec espaces administrateurs, dashboards, API et fonctionnalités avancées adaptées à vos besoins métier.',
      features: [
        'Interface d\'administration complète',
        'API REST sécurisée',
        'Authentification multi-niveaux',
        'Base de données optimisée',
        'Tableaux de bord et analytics',
        'Intégrations tierces (CRM, ERP)',
      ],
      price: 'Sur devis',
    },
    {
      id: 'hebergement',
      icon: '🚀',
      title: 'Hébergement & Maintenance',
      tagline: 'Votre site entre de bonnes mains',
      description:
        'Un hébergement professionnel avec SSL, backups automatiques et support technique. Nous nous occupons de tout : sécurité, mises à jour, monitoring et optimisations pour que vous puissiez vous concentrer sur votre business.',
      features: [
        'Certificat SSL gratuit',
        'Backups quotidiens automatiques',
        'Support technique 24/7',
        'Monitoring et alertes',
        'Mises à jour de sécurité',
        'Optimisations performance',
      ],
      price: 'À partir de 50€/mois',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <Section background="gray" padding="xl">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Nos Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6"
            >
              Des solutions web
              <br />
              <span className="text-primary">sur mesure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 dark:text-gray-300 leading-relaxed"
            >
              Nous accompagnons votre projet du design à la mise en ligne,
              avec des technologies modernes et un service premium.
            </motion.p>
          </div>
        </Section>

        {/* Services détaillés */}
        <Section background="white" padding="xl">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-primary font-semibold mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-lg text-gray-400 dark:text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-block px-6 py-3 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-8">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {service.price}
                    </span>
                  </div>
                  <div className="mt-8">
                    <Button href="/contact" size="lg">
                      Demander un devis
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card hover={false} className="bg-gray-50 dark:bg-gray-800/50">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-6">
                      Fonctionnalités incluses
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gray" padding="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Un projet en tête ?
            </h2>
            <p className="text-lg text-gray-400 dark:text-gray-300 mb-8">
              Discutons de vos besoins et trouvons ensemble la solution idéale pour votre projet.
            </p>
            <Button href="/contact" size="lg">
              Contactez-nous
            </Button>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
