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
        className="
          relative rounded-3xl
          bg-white
          dark:bg-gradient-to-br dark:from-[#000011] dark:via-[#001133] dark:to-[#000011]
          p-12 lg:p-20 overflow-hidden
          shadow-[0_20px_50px_rgba(0,0,0,0.15)]
          dark:shadow-[0_0_60px_rgba(0,150,255,0.4)]
        "
      >
        {/* Grille de fond */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
            dark:bg-[linear-gradient(to_right,#00ccff20_1px,transparent_1px),linear-gradient(to_bottom,#00ccff20_1px,transparent_1px)]
            bg-[size:4rem_4rem]
          "
        />

        {/* Dégradé radial */}
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[600px] h-[600px]
            bg-primary/10
            dark:bg-primary/40
            rounded-full blur-3xl
          "
        />

        <div className="relative text-center">
          {/* Titre */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              text-4xl md:text-5xl lg:text-6xl font-bold
              text-gray-900
              dark:text-[#e0f2ff]
              mb-6
            "
          >
            Prêt à lancer
            <br />
            votre projet ?
          </motion.h2>

          {/* Texte */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              text-lg md:text-xl
              text-gray-600
              dark:text-[#b0e0ff]
              mb-12 max-w-2xl mx-auto leading-relaxed
            "
          >
            Discutons de votre projet et transformons vos idées en réalité digitale.
            Devis gratuit et sans engagement.
          </motion.p>

          {/* Boutons */}
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
              className="
                !bg-gray-900 !text-white
                hover:!bg-gray-800
                dark:!bg-[#00ccff] dark:hover:!bg-[#00e0ff]
                !font-semibold !shadow-md
              "
            >
              Démarrer maintenant
            </Button>

            <Button
              href="/realisations"
              size="lg"
              className="
                !border-2 !border-gray-900
                dark:!border-[#00ccff]
                !bg-transparent
                !text-gray-900
                dark:!text-[#00ccff]
                hover:!bg-gray-900 hover:!text-white
                dark:hover:!bg-[#00ccff] dark:hover:!text-[#000011]
                !font-semibold !shadow-none
              "
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
            className="
              mt-16 pt-8
              border-t border-gray-200
              dark:border-[#00ccff]/30
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-gray-500 dark:text-[#00ccff]/60 text-sm mb-1">
                  Réponse sous
                </div>
                <div className="text-gray-900 dark:text-[#e0f2ff] text-xl font-semibold">
                  24 heures
                </div>
              </div>

              <div className="text-center">
                <div className="text-gray-500 dark:text-[#00ccff]/60 text-sm mb-1">
                  Garantie
                </div>
                <div className="text-gray-900 dark:text-[#e0f2ff] text-xl font-semibold">
                  Satisfaction
                </div>
              </div>

              <div className="text-center">
                <div className="text-gray-500 dark:text-[#00ccff]/60 text-sm mb-1">
                  Support
                </div>
                <div className="text-gray-900 dark:text-[#e0f2ff] text-xl font-semibold">
                  Continu
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
