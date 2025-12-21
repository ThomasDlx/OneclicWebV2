'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset après 5 secondes
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'oneclick.web59@gmail.com',
      link: 'mailto:oneclick.web59@gmail.com',
    },
    {
      icon: '📞',
      title: 'Téléphone',
      value: '06 06 46 30 72',
      link: 'tel:+33606463072',
    },
    {
      icon: '📍',
      title: 'Adresse',
      value: '48 Allée du Chateau Blanc, 59130 Lambersart',
      link: null,
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
              Contact
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6"
            >
              Discutons de
              <br />
              <span className="text-primary">votre projet</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 dark:text-white leading-relaxed"
            >
              Nous sommes là pour vous accompagner. Parlez-nous de vos besoins
              et recevez un devis gratuit sous 24 heures.
            </motion.p>
          </div>
        </Section>

        {/* Contact Section */}
        <Section background="white" padding="xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informations de contact */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                  Nos coordonnées
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-2xl mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 dark:text-white mb-1">
                          {info.title}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-black dark:text-white hover:text-primary transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-black dark:text-white font-medium">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                  Horaires d&apos;ouverture
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400 dark:text-white">Lundi - Vendredi</span>
                    <span className="text-black dark:text-white font-medium">9h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 dark:text-white">Weekend</span>
                    <span className="text-black dark:text-white font-medium">Fermé</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                  Délai de réponse
                </h3>
                <p className="text-sm text-gray-400 dark:text-white">
                  Nous nous engageons à vous répondre dans les{' '}
                  <span className="text-primary font-semibold">24 heures</span>{' '}
                  suivant votre demande.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <Card hover={false}>
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-6">✅</div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                      Message envoyé !
                    </h3>
                    <p className="text-gray-400 dark:text-white">
                      Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-black dark:text-white mb-2"
                        >
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-black dark:text-white mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-black dark:text-white mb-2"
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-semibold text-black dark:text-white mb-2"
                        >
                          Service souhaité *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Sélectionner...</option>
                          <option value="vitrine">Site Vitrine</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="application">Application Web</option>
                          <option value="hebergement">Hébergement</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-semibold text-black dark:text-white mb-2"
                      >
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="1000-3000">1 000€ - 3 000€</option>
                        <option value="3000-5000">3 000€ - 5 000€</option>
                        <option value="5000-10000">5 000€ - 10 000€</option>
                        <option value="10000+">Plus de 10 000€</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-black dark:text-white mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="Parlez-nous de votre projet..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </Button>

                    <p className="text-xs text-gray-400 dark:text-white text-center">
                      En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                    </p>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
