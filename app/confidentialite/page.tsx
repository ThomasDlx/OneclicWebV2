'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';

export default function ConfidentialitePage() {
  useEffect(() => {
    document.title = 'Politique de Confidentialité | OneClickWeb';
  }, []);
  const sections = [
    {
      title: "1. Responsable du traitement",
      content: `
        <p class="mb-4">Le responsable du traitement des données personnelles collectées sur ce site est :</p>
        <ul class="space-y-2 mb-4">
          <li><strong>Raison sociale :</strong> OneClickWeb</li>
          <li><strong>Forme juridique :</strong> SARL (Société à Responsabilité Limitée)</li>
          <li><strong>Siège social :</strong> 48 Allée du Chateau Blanc, 59130 Lambersart, France</li>
          <li><strong>Président :</strong> Delcroix Thomas</li>
          <li><strong>Directeur Général :</strong> Lardemelle Clément</li>
          <li><strong>Email :</strong> <a href="mailto:oneclick.web59@gmail.com" class="text-primary hover:underline">oneclick.web59@gmail.com</a></li>
          <li><strong>Téléphone :</strong> <a href="tel:+33606463072" class="text-primary hover:underline">06 06 46 30 72</a></li>
          <li><strong>SIRET :</strong> 943 925 677 00016</li>
          <li><strong>TVA intracommunautaire :</strong> FR74943925677</li>
        </ul>
      `
    },
    {
      title: "2. Collecte et traitement des données",
      content: `
        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">2.1. Données collectées via le formulaire de contact</h3>
        <p class="mb-4">Lorsque vous utilisez notre formulaire de contact, nous collectons les informations suivantes :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone (optionnel)</li>
          <li>Service souhaité</li>
          <li>Budget estimé (optionnel)</li>
          <li>Message ou description de votre demande</li>
        </ul>
        <p class="mb-4">Ces informations sont collectées <strong>uniquement pour répondre à votre demande</strong> et établir un contact professionnel avec vous.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">2.2. Données techniques et journalisation</h3>
        <p class="mb-4">Pour assurer la sécurité et la traçabilité de nos services, nous collectons automatiquement certaines données techniques :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Adresses IP des visiteurs</li>
          <li>Journaux de connexion et d'accès au site</li>
          <li>Identifiants de session</li>
          <li>Type de navigateur et système d'exploitation</li>
          <li>Erreurs serveur et anomalies techniques</li>
        </ul>
        <p class="mb-4">Ces données sont utilisées exclusivement à des fins de :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Détection et prévention des incidents de sécurité</li>
          <li>Analyse technique et optimisation des performances</li>
          <li>Prévention d'accès non autorisés ou d'activités malveillantes</li>
        </ul>
        <p class="mb-4">Ces données techniques sont conservées pour une durée maximale de <strong>12 mois</strong> et ne sont accessibles qu'aux administrateurs autorisés.</p>
      `
    },
    {
      title: "3. Base légale du traitement",
      content: `
        <p class="mb-4">Le traitement de vos données personnelles repose sur les bases légales suivantes, conformément à l'article 6 du RGPD :</p>
        <ul class="space-y-4 mb-4">
          <li>
            <strong>Consentement (article 6.1.a du RGPD) :</strong> En soumettant le formulaire de contact, vous consentez expressément au traitement de vos données pour que nous puissions répondre à votre demande.
          </li>
          <li>
            <strong>Intérêt légitime (article 6.1.f du RGPD) :</strong> Le traitement est nécessaire aux fins de nos intérêts légitimes, notamment pour gérer les demandes entrantes, assurer la sécurité de nos systèmes et améliorer nos services.
          </li>
          <li>
            <strong>Obligation contractuelle (article 6.1.b du RGPD) :</strong> Pour les clients, le traitement est nécessaire à l'exécution du contrat de prestation de services.
          </li>
        </ul>
      `
    },
    {
      title: "4. Destinataires des données",
      content: `
        <p class="mb-4">Vos données personnelles sont destinées <strong>uniquement à OneClickWeb</strong> et à ses employés autorisés.</p>
        <p class="mb-4">Nous nous engageons à :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li><strong>Ne jamais vendre</strong> vos données personnelles</li>
          <li><strong>Ne jamais louer</strong> vos données personnelles</li>
          <li><strong>Ne jamais transférer</strong> vos données à des tiers à des fins commerciales</li>
        </ul>
        <p class="mb-4">Dans certains cas exceptionnels, vos données peuvent être partagées avec :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Des prestataires techniques agissant en qualité de sous-traitants (hébergement, sauvegarde) dans le strict respect du RGPD</li>
          <li>Les autorités compétentes sur demande légale ou judiciaire</li>
        </ul>
      `
    },
    {
      title: "5. Durée de conservation",
      content: `
        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">5.1. Données du formulaire de contact</h3>
        <p class="mb-4">Les données issues des formulaires de contact sont conservées pendant un maximum de <strong>3 ans</strong> à compter du dernier contact avec vous.</p>
        <p class="mb-4">Au-delà de cette période, vos données sont automatiquement supprimées, sauf si vous nous avez autorisés à les conserver plus longtemps ou si une obligation légale nous y contraint.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">5.2. Données techniques et journaux</h3>
        <p class="mb-4">Les données techniques (adresses IP, journaux de connexion, etc.) sont conservées pour une durée maximale de <strong>12 mois</strong>.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">5.3. Données clients</h3>
        <p class="mb-4">Pour nos clients (contrats de prestation de services), les données sont conservées pendant la durée contractuelle puis archivées conformément aux obligations légales et comptables (généralement 10 ans pour les documents comptables).</p>
      `
    },
    {
      title: "6. Traitement en tant que sous-traitant",
      content: `
        <p class="mb-4">Dans le cadre de nos prestations techniques (hébergement, développement, maintenance, infogérance), OneClickWeb peut être amenée à traiter des données personnelles pour le compte de ses clients. Dans ce cas, nous agissons en tant que <strong>sous-traitant au sens de l'article 28 du RGPD</strong>.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Nature des traitements</h3>
        <p class="mb-4">Ces traitements incluent notamment :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Gestion et administration de bases de données</li>
          <li>Sauvegarde et restauration de données</li>
          <li>Sécurisation des systèmes et des données</li>
          <li>Surveillance technique des serveurs et applications</li>
          <li>Analyse des journaux applicatifs et systèmes</li>
          <li>Maintenance et support technique</li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Garanties et engagements</h3>
        <p class="mb-4">En qualité de sous-traitant, OneClickWeb s'engage à :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Traiter les données uniquement sur instruction documentée du responsable de traitement (notre client)</li>
          <li>Ne jamais utiliser ces données à d'autres fins que celles prévues contractuellement</li>
          <li>Garantir la confidentialité des données traitées</li>
          <li>Mettre en œuvre des mesures de sécurité techniques et organisationnelles appropriées</li>
          <li>Assister le responsable de traitement dans le respect de ses obligations RGPD</li>
          <li>Supprimer ou restituer les données à l'issue de la prestation</li>
        </ul>

        <p class="mb-4">Ces traitements sont strictement encadrés par contrat conformément aux exigences de l'article 28 du RGPD.</p>
      `
    },
    {
      title: "7. Cookies et traceurs",
      content: `
        <p class="mb-4">Ce site peut utiliser des cookies strictement nécessaires au bon fonctionnement technique du site (cookies de session, sécurité, etc.).</p>

        <p class="mb-4"><strong>Aucun cookie publicitaire ou de suivi comportemental n'est déposé sans votre consentement préalable.</strong></p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Types de cookies utilisés</h3>
        <ul class="space-y-3 mb-4">
          <li>
            <strong>Cookies techniques :</strong> Ces cookies sont essentiels au fonctionnement du site (navigation, sécurité, préférences de langue). Ils ne nécessitent pas de consentement préalable.
          </li>
          <li>
            <strong>Cookies analytiques (si applicable) :</strong> Ces cookies nous permettent de mesurer l'audience et d'améliorer le site. Ils ne sont déposés qu'avec votre consentement.
          </li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Gestion des cookies</h3>
        <p class="mb-4">Vous pouvez à tout moment gérer vos préférences en matière de cookies en configurant les paramètres de votre navigateur :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
          <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies et données de sites</li>
          <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
          <li><strong>Edge :</strong> Paramètres → Confidentialité → Cookies</li>
        </ul>
      `
    },
    {
      title: "8. Sécurité des données",
      content: `
        <p class="mb-4">OneClickWeb met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque, notamment :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Chiffrement des données sensibles (SSL/TLS)</li>
          <li>Authentification sécurisée et gestion des accès</li>
          <li>Sauvegardes régulières et redondantes</li>
          <li>Monitoring et détection des intrusions</li>
          <li>Mises à jour de sécurité régulières</li>
          <li>Formation et sensibilisation du personnel</li>
          <li>Audits de sécurité périodiques</li>
        </ul>
        <p class="mb-4">En cas de violation de données personnelles susceptible d'engendrer un risque élevé pour vos droits et libertés, nous nous engageons à vous en informer dans les meilleurs délais, conformément à l'article 34 du RGPD.</p>
      `
    },
    {
      title: "9. Vos droits",
      content: `
        <p class="mb-4">Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Droits garantis par le RGPD</h3>
        <ul class="space-y-3 mb-6">
          <li>
            <strong>Droit d'accès (article 15) :</strong> Vous pouvez obtenir la confirmation que vos données sont traitées et accéder à vos données personnelles.
          </li>
          <li>
            <strong>Droit de rectification (article 16) :</strong> Vous pouvez demander la correction de vos données inexactes ou incomplètes.
          </li>
          <li>
            <strong>Droit à l'effacement / "droit à l'oubli" (article 17) :</strong> Vous pouvez demander la suppression de vos données dans certaines conditions.
          </li>
          <li>
            <strong>Droit à la limitation du traitement (article 18) :</strong> Vous pouvez demander le gel temporaire de vos données dans certaines situations.
          </li>
          <li>
            <strong>Droit d'opposition (article 21) :</strong> Vous pouvez vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière.
          </li>
          <li>
            <strong>Droit à la portabilité (article 20) :</strong> Vous pouvez recevoir vos données dans un format structuré et couramment utilisé.
          </li>
          <li>
            <strong>Droit de retirer votre consentement :</strong> Lorsque le traitement est fondé sur le consentement, vous pouvez le retirer à tout moment.
          </li>
          <li>
            <strong>Droit de définir des directives post-mortem :</strong> Vous pouvez définir des directives relatives au sort de vos données après votre décès.
          </li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Comment exercer vos droits ?</h3>
        <p class="mb-4">Pour exercer l'un de ces droits, vous pouvez nous contacter :</p>
        <ul class="space-y-2 mb-4">
          <li><strong>Par email :</strong> <a href="mailto:oneclick.web59@gmail.com" class="text-primary hover:underline">oneclick.web59@gmail.com</a></li>
          <li><strong>Par téléphone :</strong> <a href="tel:+33606463072" class="text-primary hover:underline">06 06 46 30 72</a></li>
          <li><strong>Par courrier :</strong> OneClickWeb, 48 Allée du Chateau Blanc, 59130 Lambersart, France</li>
        </ul>

        <p class="mb-4 text-sm text-gray-500 dark:text-gray-400 italic">
          Afin de garantir la sécurité de vos données, nous pourrons vous demander de justifier de votre identité avant de traiter votre demande.
        </p>

        <p class="mb-4">Nous nous engageons à répondre à votre demande dans un délai d'<strong>1 mois</strong> maximum à compter de sa réception. Ce délai peut être prolongé de 2 mois si la complexité de la demande le justifie, auquel cas nous vous en informerons.</p>
      `
    },
    {
      title: "10. Réclamations",
      content: `
        <p class="mb-4">Si vous estimez que vos droits ne sont pas respectés ou que le traitement de vos données n'est pas conforme à la réglementation, vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente :</p>

        <div class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mb-4">
          <p class="font-semibold text-black dark:text-white mb-2">Commission Nationale de l'Informatique et des Libertés (CNIL)</p>
          <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <li><strong>Adresse :</strong> 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</li>
            <li><strong>Téléphone :</strong> 01 53 73 22 22</li>
            <li><strong>Site web :</strong> <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">www.cnil.fr</a></li>
            <li><strong>Formulaire de plainte en ligne :</strong> <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">www.cnil.fr/fr/plaintes</a></li>
          </ul>
        </div>

        <p class="mb-4">Toutefois, nous vous encourageons à nous contacter en premier lieu afin que nous puissions traiter votre demande ou préoccupation de manière amiable.</p>
      `
    },
    {
      title: "11. Transferts de données hors Union Européenne",
      content: `
        <p class="mb-4">Les données collectées via ce site sont hébergées et traitées au sein de l'Union Européenne ou dans des pays offrant un niveau de protection adéquat reconnu par la Commission Européenne.</p>

        <p class="mb-4">Dans le cas où certaines données seraient transférées hors de l'UE (par exemple, pour des services d'hébergement ou d'infrastructure cloud), nous nous assurons que :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Le transfert est encadré par des garanties appropriées (clauses contractuelles types de la Commission Européenne)</li>
          <li>Le pays destinataire bénéficie d'une décision d'adéquation de la Commission Européenne</li>
          <li>Les données bénéficient d'un niveau de protection équivalent à celui garanti par le RGPD</li>
        </ul>
      `
    },
    {
      title: "12. Mineurs",
      content: `
        <p class="mb-4">Ce site et ses services ne sont pas destinés aux mineurs de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles concernant des mineurs.</p>

        <p class="mb-4">Si nous apprenons qu'un mineur nous a fourni des données personnelles sans le consentement de ses parents ou responsables légaux, nous prendrons les mesures nécessaires pour supprimer ces données dans les meilleurs délais.</p>

        <p class="mb-4">Si vous êtes parent ou responsable légal et que vous découvrez que votre enfant nous a fourni des données personnelles, veuillez nous contacter immédiatement.</p>
      `
    },
    {
      title: "13. Modifications de la politique de confidentialité",
      content: `
        <p class="mb-4">OneClickWeb se réserve le droit de modifier cette politique de confidentialité à tout moment, notamment pour se conformer à toute évolution réglementaire, jurisprudentielle, éditoriale ou technique.</p>

        <p class="mb-4">En cas de modification substantielle, nous nous engageons à vous en informer :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Par un message visible sur le site</li>
          <li>Par email si vous êtes client ou si vous nous avez fourni votre adresse email</li>
        </ul>

        <p class="mb-4">Nous vous invitons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.</p>

        <p class="mb-4"><strong>Date de dernière mise à jour :</strong> ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
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
              RGPD
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6"
            >
              Politique de
              <br />
              <span className="text-primary">Confidentialité</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 dark:text-white leading-relaxed"
            >
              Comment nous collectons, utilisons et protégeons vos données personnelles
            </motion.p>
          </div>
        </Section>

        {/* Content Section */}
        <Section background="white" padding="xl">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Votre vie privée est importante pour nous
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                OneClickWeb s'engage à protéger la confidentialité et la sécurité de vos données personnelles.
                Cette politique de confidentialité vous explique quelles données nous collectons, pourquoi nous les collectons,
                comment nous les utilisons et quels sont vos droits en la matière, conformément au Règlement Général sur la Protection
                des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </motion.div>

            {/* Sections de contenu */}
            <div className="prose prose-lg max-w-none">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.03 }}
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
              className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-2xl border border-primary/20"
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Des questions sur vos données ?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Pour toute question concernant le traitement de vos données personnelles, l'exercice de vos droits
                ou cette politique de confidentialité, n'hésitez pas à nous contacter :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <a href="mailto:oneclick.web59@gmail.com" className="text-primary hover:underline font-semibold">
                    oneclick.web59@gmail.com
                  </a>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Téléphone</p>
                  <a href="tel:+33606463072" className="text-primary hover:underline font-semibold">
                    06 06 46 30 72
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 italic">
                Nous nous engageons à répondre à votre demande dans un délai maximum d'1 mois.
              </p>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
