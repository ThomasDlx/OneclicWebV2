'use client';

import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <Section background="white" padding="xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-[#0a1929] dark:via-[#0d2137] dark:to-[#0a1929] p-12 lg:p-20 overflow-hidden"
      >
        {/* Grille de fond */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Dégradé radial */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />

        <div className="relative text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Prêt à lancer
            <br />
            votre projet ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Discutons de votre projet et transformons vos idées en réalité digitale.
            Devis gratuit et sans engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              href="/contact"
              size="lg"
              className="!bg-white !text-black hover:!bg-gray-50 !font-semibold !shadow-md"
            >
              Démarrer maintenant
            </Button>
            <Button
              href="/realisations"
              size="lg"
              className="!border-2 !border-white !bg-transparent !text-white hover:!bg-white hover:!text-black !font-semibold !shadow-none"
            >
              Voir nos réalisations
            </Button>
          </motion.div>

          {/* Indicateurs de confiance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-white/50 text-sm mb-1">Réponse sous</div>
                <div className="text-white text-xl font-semibold">24 heures</div>
              </div>
              <div className="text-center">
                <div className="text-white/50 text-sm mb-1">Garantie</div>
                <div className="text-white text-xl font-semibold">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-white/50 text-sm mb-1">Support</div>
                <div className="text-white text-xl font-semibold">Continu</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
