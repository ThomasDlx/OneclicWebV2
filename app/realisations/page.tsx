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
      title: 'A.M.I PRO',
      category: 'Site Vitrine',
      description: 'Site vitrine avec espace d\'administration pour la gestion des contenus et des services proposés, ainsi que la demande de devis en ligne.',
      tags: ['Next.js', 'Tailwind', 'PHP', 'MySQL', 'Symfony'],
      color: 'from-purple-500/10 to-pink-500/10',
      link: 'https://amipro.com',
    },
    {
      title: 'Codev Conseil',
      category: 'Site Vitrine',
      description: 'Site vitrine pour un agent commercial, mettant en valeur ses services.',
      tags: ['React', 'Tailwind', 'SEO', 'Next.js', 'API',],
      color: 'from-blue-500/10 to-cyan-500/10',
      link: 'https://codevconseil.com',

    },
    {
      title: 'Darcque Mickael',
      category: 'Site Vitrine',
      description: 'Site vitrine pour un artisan professionnel, mettant en avant son portfolio et ses services.',
      tags: ['React', 'Tailwind', 'SEO', 'Next.js', 'API',],
      color: 'from-orange-500/10 to-red-500/10',
      link: 'https://darcquemickael.fr/',
    },
    {
      title: 'Installation d\'un CRM complet pour AMI PRO',
      category: 'CRM sur mesure',
      description: 'Mise en place d\'un système CRM personnalisé pour gérer les clients, les devis, et les projets de manière efficace.',
      tags: ['ORC', 'PostgreSQL', 'Comptabilité', 'Automatisations'],
      color: 'from-green-500/10 to-emerald-500/10',

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
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 leading-tight"
            >
              Des solutions web
              <br />
              <span className="text-primary">font la différence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 dark:text-white leading-relaxed"
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
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 dark:text-white mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-white text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-blue-700 hover:text-white hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg group"
                  >
                    <span>Visiter le site</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </Card>
            ))}
          </div>
        </Section>

        {/* Stats Section */}
        <Section background="gray" padding="lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '50+', label: 'Projets réalisés' },
              { value: '100%', label: 'Clients satisfaits' },
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
                <div className="text-5xl font-bold text-black dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 dark:text-white">{stat.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Votre projet sera le prochain
            </h2>
            <p className="text-lg text-gray-400 dark:text-white mb-8 leading-relaxed">
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
