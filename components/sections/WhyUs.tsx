'use client';

import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';

export default function WhyUs() {
  const reasons = [
    {
      icon: '⚡',
      title: 'Performance Optimale',
      description: 'Sites ultra-rapides optimisés pour le SEO et l\'expérience utilisateur. Technologies modernes et best practices garanties.',
    },
    {
      icon: '🎨',
      title: 'Design Premium',
      description: 'Interfaces élégantes et intuitives inspirées des meilleurs standards du web. Chaque détail compte.',
    },
    {
      icon: '🤝',
      title: 'Accompagnement Complet',
      description: 'De la conception au déploiement, nous sommes à vos côtés. Support réactif et maintenance assurée.',
    },
  ];

  return (
    <Section background="gray" padding="xl" id="why-us">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Colonne gauche : Texte */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Pourquoi OneClickWeb
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6"
          >
            L&apos;excellence au service
            <br />de votre projet
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 dark:text-gray-300 mb-12 leading-relaxed"
          >
            Nous combinons expertise technique et sens du design pour créer des expériences web
            qui marquent les esprits et génèrent des résultats concrets.
          </motion.p>

          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white dark:bg-[#0d2137] flex items-center justify-center text-3xl shadow-sm mr-6">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400 dark:text-gray-300 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Colonne droite : Visuel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 lg:p-12 overflow-hidden">
            {/* Grille de fond */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0071e320_1px,transparent_1px),linear-gradient(to_bottom,#0071e320_1px,transparent_1px)] bg-[size:3rem_3rem]" />

            {/* Éléments décoratifs */}
            <div className="relative h-full flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-full h-full rounded-2xl bg-white dark:bg-[#0d2137] shadow-2xl flex items-center justify-center border border-gray-200/50 dark:border-blue-900/30"
              >
                <div className="text-center px-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="text-2xl font-bold text-black dark:text-white mb-2">Sites Web Premium</div>
                  <div className="text-gray-400 dark:text-gray-300">Design · Performance · Fiabilité</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
