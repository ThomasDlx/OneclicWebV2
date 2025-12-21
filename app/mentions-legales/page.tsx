'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';

export default function MentionsLegalesPage() {
  useEffect(() => {
    document.title = 'Mentions Légales | OneClickWeb';
  }, []);
  const sections = [
    {
      title: "1. Informations légales",
      content: `
        <p class="mb-4">Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site les informations suivantes :</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Éditeur du site</h3>
        <ul class="space-y-2 mb-4">
          <li><strong>Raison sociale :</strong> OneClickWeb</li>
          <li><strong>Forme juridique :</strong> SARL (Société à Responsabilité Limitée)</li>
          <li><strong>Capital social :</strong> 1 000€</li>
          <li><strong>Siège social :</strong> 48 Allée du Chateau Blanc, 59130 Lambersart, France</li>
          <li><strong>SIRET :</strong> 943 925 677 00016</li>
          <li><strong>TVA intracommunautaire :</strong> FR74943925677</li>
          <li><strong>Email :</strong> <a href="mailto:oneclick.web59@gmail.com" class="text-primary hover:underline">oneclick.web59@gmail.com</a></li>
          <li><strong>Téléphone :</strong> <a href="tel:+33606463072" class="text-primary hover:underline">06 06 46 30 72</a></li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Direction de la publication</h3>
        <ul class="space-y-2 mb-4">
          <li><strong>Président :</strong> Delcroix Thomas</li>
          <li><strong>Directeur Général :</strong> Lardemelle Clément</li>
          <li><strong>Directeur de la publication :</strong> Delcroix Thomas</li>
        </ul>
      `
    },
    {
      title: "2. Hébergement",
      content: `
        <p class="mb-4">Le site est hébergé par :</p>
        <ul class="space-y-2 mb-4">
          <li><strong>Hébergeur :</strong> Hostinger International Ltd.</li>
          <li><strong>Type d'hébergement :</strong> VPS (Serveur Privé Virtuel)</li>
          <li><strong>Adresse :</strong> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
          <li><strong>Site web :</strong> <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">www.hostinger.fr</a></li>
        </ul>
        <p class="text-sm text-gray-500 dark:text-gray-400 italic">
          Note : L'hébergeur peut être modifié à tout moment. Les informations actualisées seront disponibles sur cette page.
        </p>
      `
    },
    {
      title: "3. Propriété intellectuelle",
      content: `
        <p class="mb-4">L'ensemble du contenu de ce site (textes, images, logos, vidéos, éléments graphiques, code source, structure, mise en page, etc.) est la propriété exclusive de OneClickWeb ou de ses partenaires, sauf mention contraire.</p>

        <p class="mb-4">Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de OneClickWeb.</p>

        <p class="mb-4">Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>

        <p class="mb-4">Les marques et logos figurant sur le site sont des marques déposées. Toute reproduction totale ou partielle de ces marques ou logos sans autorisation préalable et écrite de OneClickWeb est interdite.</p>
      `
    },
    {
      title: "4. Responsabilité et limitation de garantie",
      content: `
        <p class="mb-4">OneClickWeb s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.</p>

        <p class="mb-4">Toutefois, OneClickWeb ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.</p>

        <p class="mb-4">En conséquence, OneClickWeb décline toute responsabilité :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
          <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site</li>
          <li>Pour tous dommages directs ou indirects, quelles qu'en soient les causes, origines, natures ou conséquences, provoqués à raison de l'accès de quiconque au site ou de l'impossibilité d'y accéder</li>
          <li>De manière générale, pour tout dommage, quelle qu'en soit la nature, résultant du contenu ou de l'utilisation du site</li>
        </ul>

        <p class="mb-4">OneClickWeb se réserve le droit de suspendre, d'interrompre ou de limiter sans préavis l'accès à tout ou partie du site, notamment pour des raisons de maintenance.</p>
      `
    },
    {
      title: "5. Liens hypertextes",
      content: `
        <p class="mb-4">Ce site peut contenir des liens hypertextes vers d'autres sites. OneClickWeb ne contrôle pas ces sites externes et n'assume aucune responsabilité quant à leur contenu, leurs pratiques de confidentialité ou leurs conditions d'utilisation.</p>

        <p class="mb-4">La création de liens hypertextes vers ce site nécessite l'autorisation préalable et écrite de OneClickWeb. Cette autorisation peut être retirée à tout moment.</p>
      `
    },
    {
      title: "6. Données personnelles et cookies",
      content: `
        <p class="mb-4">Pour toute information concernant la collecte, le traitement et la protection de vos données personnelles, veuillez consulter notre <a href="/confidentialite" class="text-primary hover:underline font-semibold">Politique de Confidentialité</a>.</p>

        <p class="mb-4">Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données personnelles.</p>

        <p class="mb-4">Pour exercer ces droits, vous pouvez nous contacter à l'adresse : <a href="mailto:oneclick.web59@gmail.com" class="text-primary hover:underline">oneclick.web59@gmail.com</a></p>
      `
    },
    {
      title: "7. Droit applicable et juridiction compétente",
      content: `
        <p class="mb-4">Les présentes mentions légales sont régies par le droit français.</p>

        <p class="mb-4">En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.</p>

        <p class="mb-4">Pour les consommateurs au sens du Code de la consommation, les juridictions compétentes sont celles du lieu de domicile du consommateur ou du lieu de signature du contrat.</p>
      `
    },
    {
      title: "8. Médiation et règlement des litiges",
      content: `
        <p class="mb-4">Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, nous proposons un dispositif de médiation de la consommation.</p>

        <p class="mb-4">En cas de litige, vous pouvez déposer votre réclamation sur la plateforme de résolution des litiges mise en ligne par la Commission Européenne à l'adresse suivante : <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">ec.europa.eu/consumers/odr/</a></p>

        <p class="mb-4">Vous pouvez également vous adresser à un médiateur de la consommation dans les conditions prévues à l'article L.612-1 du Code de la consommation.</p>
      `
    },
    {
      title: "9. Crédits et mentions diverses",
      content: `
        <p class="mb-4">Les photographies, illustrations et visuels utilisés sur ce site sont soit la propriété de OneClickWeb, soit utilisés avec l'autorisation des ayants droit, soit issus de banques d'images libres de droits.</p>

        <p class="mb-4">Conception, développement et maintenance du site : OneClickWeb</p>

        <p class="mb-4"><strong>Dernière mise à jour :</strong> ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      `
    }
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
              Informations légales
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6"
            >
              Mentions
              <br />
              <span className="text-primary">Légales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 dark:text-white leading-relaxed"
            >
              Informations légales et réglementaires concernant OneClickWeb
            </motion.p>
          </div>
        </Section>

        {/* Content Section */}
        <Section background="white" padding="xl">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                    {section.title}
                  </h2>
                  <div
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Contact rapide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                Une question ?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Email :</strong>{' '}
                  <a href="mailto:oneclick.web59@gmail.com" className="text-primary hover:underline">
                    oneclick.web59@gmail.com
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Téléphone :</strong>{' '}
                  <a href="tel:+33606463072" className="text-primary hover:underline">
                    06 06 46 30 72
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
