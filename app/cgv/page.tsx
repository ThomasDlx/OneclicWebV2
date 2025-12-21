'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';

export default function CGVPage() {
  useEffect(() => {
    document.title = 'Conditions Générales de Vente | OneClickWeb';
  }, []);

  const sections = [
    {
      title: "1. Identité du prestataire",
      content: `
        <ul class="space-y-2 mb-4">
          <li><strong>Raison sociale :</strong> OneClickWeb</li>
          <li><strong>Siège social :</strong> 48 Allée du Château Blanc, 59130 Lambersart</li>
          <li><strong>Contact :</strong> Delcroix Thomas</li>
          <li><strong>Téléphone :</strong> <a href="tel:+33606463072" class="text-primary hover:underline">06 06 46 30 72</a></li>
          <li><strong>Email :</strong> <a href="mailto:oneclick.web59@gmail.com" class="text-primary hover:underline">oneclick.web59@gmail.com</a></li>
          <li><strong>RCS :</strong> 943 925 677 R.C.S. Lille Métropole</li>
          <li><strong>SIRET :</strong> 943 925 677 00016</li>
          <li><strong>Numéro de TVA :</strong> FR74943925677</li>
        </ul>
      `
    },
    {
      title: "2. Objet des CGV",
      content: `
        <p class="mb-4">Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre OneClickWeb et ses clients pour l'ensemble des services proposés, notamment :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Développement de sites internet (vitrines, e-commerce, applications web)</li>
          <li>Hébergement web</li>
          <li>Services de sécurité (pentest, audits)</li>
          <li>Maintenance et support technique</li>
          <li>Services annexes (SEO, design, rédaction, etc.)</li>
        </ul>
        <p class="mb-4">La signature du devis ou la validation de la commande implique l'acceptation pleine et entière des présentes CGV.</p>
      `
    },
    {
      title: "3. Description des services",
      content: `
        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Création de sites internet</h3>
        <p class="mb-4">OneClickWeb propose la création de différents types de sites web sur mesure :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Sites vitrines professionnels</li>
          <li>Boutiques e-commerce</li>
          <li>Applications web personnalisées</li>
          <li>Sites institutionnels</li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Hébergement</h3>
        <p class="mb-4">Services d'hébergement web sécurisés avec certificats SSL, sauvegardes quotidiennes et support technique. L'hébergement peut être inclus dans l'offre ou proposé en option selon les besoins du client.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Nom de domaine</h3>
        <p class="mb-4">OneClickWeb peut prendre en charge la réservation et la gestion du nom de domaine de votre site internet.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Maintenance et support</h3>
        <p class="mb-4">Services de maintenance préventive et corrective, mises à jour de sécurité, support technique et assistance.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Services complémentaires</h3>
        <p class="mb-4">Optimisation SEO, création graphique, rédaction de contenu, audits de sécurité (pentest), et autres prestations sur demande.</p>
      `
    },
    {
      title: "4. Modalités de commande",
      content: `
        <p class="mb-4">Toute commande se formalise obligatoirement par la signature d'un devis établi par OneClickWeb.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Conditions de paiement</h3>
        <p class="mb-4">En cas de signature du devis, les conditions de paiement suivantes s'appliquent :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li><strong>Acompte de 30%</strong> à la signature du devis</li>
          <li><strong>Solde de 70%</strong> à la livraison du projet</li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Développement de site web</h3>
        <p class="mb-4">Durant la phase de développement :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Des points de suivi réguliers sont organisés pour assurer le respect du cahier des charges</li>
          <li>Le client s'engage à fournir l'ensemble des contenus nécessaires (textes, images, logo, charte graphique)</li>
          <li>Le client dispose d'un espace de prévisualisation pour valider l'avancement du projet</li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Services de pentest</h3>
        <p class="mb-4">Pour toute prestation de test d'intrusion, le client s'engage à fournir une <strong>attestation de droits</strong> autorisant explicitement OneClickWeb à réaliser les tests de sécurité sur les systèmes et applications concernés.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Hébergement</h3>
        <p class="mb-4">L'hébergement constitue un engagement annuel. En cas de non-paiement, le service peut être suspendu après mise en demeure restée sans réponse pendant 15 jours.</p>
      `
    },
    {
      title: "5. Droit de rétractation",
      content: `
        <p class="mb-4">Conformément à l'article L221-18 du Code de la consommation, le client <strong>consommateur</strong> (non professionnel) dispose d'un délai de <strong>quatorze (14) jours</strong> pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.</p>

        <p class="mb-4">Le délai court à compter de la signature du devis ou de la validation de la commande.</p>

        <p class="mb-4"><strong>Important :</strong> Durant ce délai, OneClickWeb peut déjà avoir engagé des travaux sur le projet (analyse, maquettage, développement initial). En cas d'exercice du droit de rétractation :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>L'acompte de 30% ne pourra pas être remboursé en raison des prestations déjà réalisées</li>
          <li>Seul le solde non encore facturé sera annulé</li>
        </ul>

        <p class="mb-4">Ce droit de rétractation ne s'applique pas aux clients professionnels (entreprises, auto-entrepreneurs, associations, etc.).</p>
      `
    },
    {
      title: "6. Tarifs et paiement",
      content: `
        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Tarification</h3>
        <p class="mb-4">Les tarifs de OneClickWeb sont disponibles sur le site : <a href="https://oneclickweb.fr/services" class="text-primary hover:underline font-semibold">https://oneclickweb.fr/services</a></p>
        <p class="mb-4">Tous les tarifs sont indiqués hors taxes (HT). La TVA applicable sera ajoutée selon la législation en vigueur.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Moyens de paiement acceptés</h3>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Virement bancaire</li>
          <li>Chèque</li>
          <li>Espèces (dans la limite légale)</li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Facilités de paiement</h3>
        <p class="mb-4">Pour les projets d'envergure, OneClickWeb peut proposer un échéancier de paiement personnalisé. Les modalités seront définies lors d'un entretien et formalisées par écrit.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Retard de paiement</h3>
        <p class="mb-4">En cas de retard de paiement, OneClickWeb se réserve le droit :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>D'appliquer des pénalités de retard au taux d'intérêt appliqué par la Banque centrale européenne à son opération de refinancement la plus récente majoré de 10 points de pourcentage</li>
          <li>D'exiger le paiement d'une indemnité forfaitaire de 40€ pour frais de recouvrement</li>
          <li>De suspendre temporairement ou définitivement l'accès aux services (hébergement, maintenance, etc.)</li>
          <li>D'exiger le paiement immédiat de toutes les sommes dues, quelle que soit leur échéance</li>
        </ul>
        <p class="mb-4">Un arrangement amiable reste toujours privilégié avant toute mesure coercitive.</p>
      `
    },
    {
      title: "7. Propriété intellectuelle",
      content: `
        <p class="mb-4">OneClickWeb conserve la <strong>pleine propriété</strong> de l'ensemble des éléments livrés dans le cadre de ses prestations, notamment :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Le code source</li>
          <li>Les designs et maquettes</li>
          <li>Les plugins et modules développés</li>
          <li>Les solutions techniques personnalisées</li>
          <li>Les bases de données et structures</li>
        </ul>

        <p class="mb-4">Le client dispose d'un <strong>droit d'usage non exclusif et non cessible</strong> sur le site et les services livrés, sous réserve que :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>L'hébergement soit actif et les paiements à jour</li>
          <li>L'utilisation reste conforme à l'usage prévu dans le devis</li>
          <li>Aucune modification du code source ne soit effectuée sans accord écrit de OneClickWeb</li>
        </ul>

        <p class="mb-4"><strong>Transfert de propriété intellectuelle :</strong></p>
        <p class="mb-4">Toute cession de propriété intellectuelle (transfert du code source, droit de modification, droit de revente, etc.) doit faire l'objet d'un contrat distinct et d'une rémunération spécifique.</p>

        <p class="mb-4"><strong>Contenus fournis par le client :</strong></p>
        <p class="mb-4">Le client garantit qu'il dispose de tous les droits nécessaires sur les contenus qu'il fournit (textes, images, vidéos, logos) et dégage OneClickWeb de toute responsabilité en cas de litige relatif à ces contenus.</p>
      `
    },
    {
      title: "8. Conditions d'hébergement",
      content: `
        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Infrastructure</h3>
        <p class="mb-4">OneClickWeb héberge ses services sur un serveur KVM4 fourni par <strong>Hostinger International Ltd.</strong></p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Sécurité</h3>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Certificats SSL inclus pour garantir le chiffrement des données</li>
          <li>Sauvegardes quotidiennes automatiques pour prévenir toute perte de données</li>
          <li>Surveillance proactive des serveurs</li>
          <li>Mesures de protection contre les attaques DDoS</li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Données personnelles</h3>
        <p class="mb-4">OneClickWeb respecte le RGPD (Règlement Général sur la Protection des Données). Les données collectées le sont uniquement dans le but de garantir la sécurité et le bon fonctionnement des services.</p>
        <p class="mb-4">Pour plus d'informations, consultez notre <a href="/confidentialite" class="text-primary hover:underline font-semibold">Politique de Confidentialité</a>.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Suspension du service</h3>
        <p class="mb-4">En cas de non-paiement de l'hébergement après mise en demeure, OneClickWeb se réserve le droit de suspendre le service jusqu'à régularisation de la situation.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Disponibilité</h3>
        <p class="mb-4">OneClickWeb s'engage à faire ses meilleurs efforts pour assurer une disponibilité maximale des services. Toutefois, la disponibilité peut être affectée par des opérations de maintenance, des problèmes techniques imprévus ou des cas de force majeure.</p>
      `
    },
    {
      title: "9. Maintenance et support",
      content: `
        <p class="mb-4">OneClickWeb propose des services de maintenance et de support technique adaptés aux besoins de chaque client.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Maintenance incluse</h3>
        <p class="mb-4">Selon les formules, la maintenance peut inclure :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Mises à jour de sécurité</li>
          <li>Corrections de bugs</li>
          <li>Surveillance du bon fonctionnement</li>
          <li>Support technique par email</li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Interventions hors forfait</h3>
        <p class="mb-4">Pour les interventions non incluses dans le contrat de maintenance ou pour les clients sans contrat de support :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li><strong>Tarif :</strong> 49 € HT par heure d'intervention</li>
          <li>Devis préalable pour les interventions supérieures à 2 heures</li>
          <li>Facturation par tranche de 30 minutes commencée</li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Délai d'intervention</h3>
        <p class="mb-4">Les délais d'intervention varient selon la nature de la demande et le contrat de maintenance souscrit. OneClickWeb s'engage à traiter les demandes dans les meilleurs délais.</p>
      `
    },
    {
      title: "10. Durée et résiliation",
      content: `
        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Hébergement annuel</h3>
        <p class="mb-4">Les contrats d'hébergement sont conclus pour une durée d'un an, renouvelable par tacite reconduction sauf dénonciation par l'une des parties avec un préavis de 30 jours avant l'échéance.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Résiliation</h3>
        <p class="mb-4">En cas de résiliation du contrat d'hébergement :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Aucun remboursement au prorata temporis n'est possible</li>
          <li>Le service reste actif jusqu'à la fin de la période payée</li>
          <li>Les données peuvent être exportées sur demande (voir ci-dessous)</li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Export et rachat de propriété intellectuelle</h3>
        <p class="mb-4">À la résiliation du contrat, le client peut demander l'export de son service et de ses données moyennant le rachat de la propriété intellectuelle :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li><strong>Tarif :</strong> 299 € HT</li>
          <li>Livraison de l'ensemble du code source</li>
          <li>Export complet de toutes les données (base de données, fichiers, médias)</li>
          <li>Fichier README fourni avec instructions d'installation et de déploiement</li>
          <li>Support basique pour la migration (1 heure incluse)</li>
        </ul>

        <p class="mb-4">Sans rachat de la propriété intellectuelle, seules les données du client (contenus, médias, base de données) peuvent être exportées gratuitement.</p>
      `
    },
    {
      title: "11. Responsabilités",
      content: `
        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Responsabilité du client</h3>
        <p class="mb-4">Le client est seul responsable :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>De l'usage qu'il fait de son site et des services fournis</li>
          <li>Des contenus qu'il publie ou diffuse via son site</li>
          <li>Du respect des lois et règlements en vigueur</li>
          <li>De la confidentialité de ses accès (identifiants, mots de passe)</li>
        </ul>
        <p class="mb-4">OneClickWeb ne saurait être tenu responsable des actes du client ou de l'usage qu'il fait de son site.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Responsabilité de OneClickWeb</h3>
        <p class="mb-4">OneClickWeb s'engage à mettre en œuvre tous les moyens nécessaires pour assurer la bonne exécution de ses prestations.</p>

        <p class="mb-4">Toutefois, OneClickWeb ne peut être tenu responsable :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Des dommages indirects tels que perte de chiffre d'affaires, perte de clientèle, perte de données non sauvegardées, ou tout préjudice commercial</li>
          <li>Des interruptions de service causées par un tiers (hébergeur, registrar, FAI, etc.)</li>
          <li>Des actes de piratage, intrusions malveillantes, ou attaques informatiques</li>
          <li>Des défaillances du réseau Internet ou des infrastructures tierces</li>
          <li>De l'utilisation frauduleuse ou abusive des services par le client ou des tiers</li>
        </ul>

        <p class="mb-4">En tout état de cause, la responsabilité de OneClickWeb est limitée au montant total payé par le client pour la prestation concernée.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Force majeure</h3>
        <p class="mb-4">OneClickWeb ne pourra être tenu responsable de tout retard ou inexécution de ses obligations résultant d'un cas de force majeure tel que défini par la jurisprudence française, notamment :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Catastrophes naturelles</li>
          <li>Incendies, inondations</li>
          <li>Pannes majeures d'infrastructure (électricité, télécommunications)</li>
          <li>Actes de guerre, terrorisme, émeutes</li>
          <li>Grèves générales</li>
          <li>Décisions gouvernementales ou réglementaires</li>
          <li>Cyberattaques d'ampleur exceptionnelle</li>
        </ul>
        <p class="mb-4">En cas de force majeure, les obligations de OneClickWeb seront suspendues pendant toute la durée de l'événement.</p>
      `
    },
    {
      title: "12. Protection des données personnelles (RGPD)",
      content: `
        <p class="mb-4">OneClickWeb accorde une importance primordiale à la protection des données personnelles et au respect de la vie privée de ses clients.</p>

        <p class="mb-4">Toutes les informations concernant la collecte, le traitement, la conservation et vos droits relatifs à vos données personnelles sont détaillées dans notre <a href="/confidentialite" class="text-primary hover:underline font-semibold">Politique de Confidentialité</a>.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Vos droits</h3>
        <p class="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Droit d'accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit d'opposition</li>
          <li>Droit à la portabilité</li>
        </ul>

        <p class="mb-4">Pour exercer ces droits, contactez-nous à : <a href="mailto:oneclick.web59@gmail.com" class="text-primary hover:underline">oneclick.web59@gmail.com</a></p>
      `
    },
    {
      title: "13. Médiation et règlement des litiges",
      content: `
        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Règlement amiable</h3>
        <p class="mb-4">En cas de litige, les parties s'engagent à rechercher prioritairement une solution amiable avant toute action judiciaire.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Médiation de la consommation</h3>
        <p class="mb-4">Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, OneClickWeb propose un dispositif de médiation de la consommation.</p>

        <p class="mb-4">En cas de litige non résolu à l'amiable, les clients consommateurs peuvent recourir gratuitement à un médiateur de la consommation :</p>
        <ul class="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Via la plateforme européenne de règlement des litiges : <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">ec.europa.eu/consumers/odr/</a></li>
          <li>En contactant directement un médiateur agréé</li>
        </ul>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Loi applicable et juridiction compétente</h3>
        <p class="mb-4">Les présentes CGV sont régies par le droit français.</p>

        <p class="mb-4">En cas de litige et à défaut d'accord amiable ou de médiation, la compétence est attribuée aux tribunaux du ressort du siège social de OneClickWeb, sauf dispositions d'ordre public contraires.</p>

        <p class="mb-4">Pour les clients consommateurs, conformément au Code de la consommation, les tribunaux compétents sont ceux du lieu de domicile du consommateur ou du lieu de signature du contrat.</p>
      `
    },
    {
      title: "14. Modification des CGV",
      content: `
        <p class="mb-4">OneClickWeb se réserve le droit de modifier les présentes CGV à tout moment afin de les adapter aux évolutions légales, techniques ou commerciales.</p>

        <p class="mb-4">Les CGV applicables sont celles en vigueur à la date de signature du devis ou de passation de la commande.</p>

        <p class="mb-4">Pour les contrats en cours (notamment les contrats d'hébergement annuels), toute modification substantielle des CGV sera communiquée aux clients avec un préavis de 30 jours. Les clients auront alors la possibilité de résilier leur contrat sans pénalité s'ils refusent les nouvelles conditions.</p>

        <p class="mb-4">La version à jour des CGV est toujours consultable sur notre site : <a href="https://oneclickweb.fr/cgv" class="text-primary hover:underline">https://oneclickweb.fr/cgv</a></p>
      `
    },
    {
      title: "15. Dispositions diverses",
      content: `
        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Intégralité du contrat</h3>
        <p class="mb-4">Les présentes CGV, associées au devis signé et aux éventuels documents contractuels complémentaires, constituent l'intégralité de l'accord entre OneClickWeb et le client.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Nullité partielle</h3>
        <p class="mb-4">Si une ou plusieurs stipulations des présentes CGV sont tenues pour non valides ou déclarées telles en application d'une loi, d'un règlement ou à la suite d'une décision définitive d'une juridiction compétente, les autres stipulations garderont toute leur force et leur portée.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Non-renonciation</h3>
        <p class="mb-4">Le fait pour OneClickWeb de ne pas se prévaloir à un moment donné de l'une quelconque des présentes conditions ne peut être interprété comme valant renonciation à se prévaloir ultérieurement de l'une quelconque desdites conditions.</p>

        <h3 class="text-xl font-semibold text-black dark:text-white mt-6 mb-3">Contact</h3>
        <p class="mb-4">Pour toute question concernant les présentes CGV, vous pouvez nous contacter :</p>
        <ul class="space-y-2 mb-4">
          <li><strong>Email :</strong> <a href="mailto:oneclick.web59@gmail.com" class="text-primary hover:underline">oneclick.web59@gmail.com</a></li>
          <li><strong>Téléphone :</strong> <a href="tel:+33606463072" class="text-primary hover:underline">06 06 46 30 72</a></li>
          <li><strong>Adresse :</strong> 48 Allée du Château Blanc, 59130 Lambersart</li>
        </ul>

        <p class="mb-4 text-sm text-gray-500 dark:text-gray-400 italic mt-8">
          <strong>Dernière mise à jour :</strong> ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
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
              Conditions contractuelles
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6"
            >
              Conditions Générales
              <br />
              <span className="text-primary">de Vente</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 dark:text-white leading-relaxed"
            >
              Conditions régissant les prestations de services de OneClickWeb
            </motion.p>
          </div>
        </Section>

        {/* Content Section */}
        <Section background="white" padding="xl">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary rounded-r-lg"
            >
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) définissent les droits et obligations
                de OneClickWeb et de ses clients dans le cadre de la fourniture de services de développement web,
                d'hébergement, de maintenance et de prestations connexes. Nous vous invitons à les lire attentivement
                avant toute commande.
              </p>
            </motion.div>

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
                Une question sur nos CGV ?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Notre équipe est à votre disposition pour répondre à toutes vos questions concernant
                nos conditions générales de vente.
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
