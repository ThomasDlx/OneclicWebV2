'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function RealisationsPage() {
  const projects = [
    {
      title: 'Boutique Mode Luxe',
      category: 'E-commerce',
      description: 'Site e-commerce haut de gamme avec plus de 500 produits, paiement sécurisé et interface d\'administration complète.',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      color: 'from-purple-500/10 to-pink-500/10',
    },
    {
      title: 'Cabinet d\'Architecture',
      category: 'Site Vitrine',
      description: 'Site vitrine minimaliste mettant en valeur un portfolio de projets architecturaux avec galerie interactive.',
      tags: ['React', 'Framer Motion', 'SEO'],
      color: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      title: 'Restaurant Gastronomique',
      category: 'Site Vitrine',
      description: 'Site avec menu interactif, réservation en ligne et intégration Instagram pour partager les créations culinaires.',
      tags: ['Next.js', 'API', 'Design'],
      color: 'from-orange-500/10 to-red-500/10',
    },
    {
      title: 'Plateforme SaaS',
      category: 'Application Web',
      description: 'Application web complexe avec tableau de bord, gestion multi-utilisateurs et facturation automatique.',
      tags: ['TypeScript', 'PostgreSQL', 'API REST'],
      color: 'from-green-500/10 to-emerald-500/10',
    },
    {
      title: 'Studio Créatif',
      category: 'Site Vitrine',
      description: 'Portfolio créatif avec animations personnalisées et présentation de cas clients en format storytelling.',
      tags: ['Animation', 'Design', 'UX'],
      color: 'from-indigo-500/10 to-purple-500/10',
    },
    {
      title: 'Marketplace Artisanale',
      category: 'E-commerce',
      description: 'Plateforme multi-vendeurs permettant aux artisans de vendre leurs créations avec système de commission.',
      tags: ['Multi-vendor', 'Stripe', 'Dashboard'],
      color: 'from-yellow-500/10 to-orange-500/10',
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
              Nos Réalisations
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6"
            >
              Des projets qui
              <br />
              <span className="text-primary">font la différence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed"
            >
              Découvrez une sélection de nos projets récents et plongez dans nos réussites clients.
            </motion.p>
          </div>
        </Section>

        {/* Projets Grid */}
        <Section background="white" padding="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} delay={index * 0.1}>
                <div
                  className={`aspect-video rounded-xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center`}
                >
                  <div className="text-6xl opacity-50">🎨</div>
                </div>

                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Stats Section */}
        <Section background="gray" padding="lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '50+', label: 'Projets réalisés' },
              { value: '98%', label: 'Clients satisfaits' },
              { value: '5 ans', label: "D'expérience" },
              { value: '24/7', label: 'Support disponible' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="white" padding="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Votre projet sera le prochain
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Prêt à créer quelque chose d&apos;exceptionnel ensemble ? Contactez-nous pour discuter de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Démarrer un projet
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Voir nos services
              </Button>
            </div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
