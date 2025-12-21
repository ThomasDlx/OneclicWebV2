'use client';

import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Sites Vitrines',
      description: 'Sites web élégants et performants pour présenter votre entreprise avec style et professionnalisme.',
      features: ['Design sur mesure', 'Responsive', 'SEO optimisé', 'Performance maximale'],
    },
    {
      icon: '🛍️',
      title: 'E-commerce',
      description: "Boutiques en ligne complètes avec gestion de produits, paiements sécurisés et tableau de bord d'administration.",
      features: ['Catalogue produits', 'Paiement sécurisé', 'Gestion stocks', 'Analytics intégré'],
    },
    {
      icon: '⚙️',
      title: 'Applications Web',
      description: 'Solutions web complexes avec espace administrateur, tableaux de bord et fonctionnalités avancées.',
      features: ['Interface admin', 'API REST', 'Authentification', 'Base de données'],
    },
    {
      icon: '🚀',
      title: 'Hébergement',
      description: 'Hébergement web professionnel, rapide et sécurisé avec maintenance et support technique inclus.',
      features: ['SSL gratuit', 'Backups quotidiens', 'Support 24/7', 'Performance optimale'],
    },
  ];

  return (
    <Section background="white" padding="xl" id="services">
      <div className="text-center mb-16 lg:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
        >
          Nos Services
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6"
        >
          Des solutions adaptées
          <br />à vos besoins
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 dark:text-white max-w-2xl mx-auto"
        >
          Du simple site vitrine à l&apos;application web complexe, nous créons des expériences digitales qui vous ressemblent.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {services.map((service, index) => (
          <Card key={index} delay={index * 0.1}>
            <div className="text-5xl mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{service.title}</h3>
            <p className="text-gray-400 dark:text-white mb-6 leading-relaxed">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-500 dark:text-white">
                  <svg
                    className="w-5 h-5 text-primary mr-3 flex-shrink-0"
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
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <Button href="/services" variant="outline" size="lg">
          Découvrir tous nos services
        </Button>
      </motion.div>
    </Section>
  );
}
