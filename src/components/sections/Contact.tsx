'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = t('contact.nameRequired');
    if (!form.email.trim()) next.email = t('contact.emailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t('contact.emailInvalid');
    if (!form.message.trim()) next.message = t('contact.messageRequired');
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-green-dark mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-neutral-600">
            {t('contact.subtitle')}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollReveal direction="right">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl bg-brand-green-light/20 border border-brand-green-light p-8 text-center"
              >
                <p className="text-brand-green-dark font-heading font-semibold text-lg mb-2">
                  {t('contact.successTitle')}
                </p>
                <p className="text-neutral-600 text-sm">
                  {t('contact.successMessage')}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.name')} *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition"
                    placeholder={t('contact.name')}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.email')} *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition"
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block font-body text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.phone')}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition"
                    placeholder="+1 ..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-neutral-700 mb-1">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition resize-none"
                    placeholder={t('contact.message')}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>
                <Button type="submit" variant="primary" size="lg">
                  {t('contact.submit')}
                </Button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-brand-green-dark mb-4">
                  {t('contact.contactInfo')}
                </h3>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex items-center gap-3">
                    <span className="text-brand-green-dark text-xl">📍</span>
                    {t('contact.addressPlaceholder')}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-green-dark text-xl">📞</span>
                    +1 (XXX) XXX-XXXX
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-green-dark text-xl">✉️</span>
                    contact@greenlandsolutions.com
                  </li>
                </ul>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 shadow-card">
                <iframe
                  title="Green Land Solutions - Chilliwack, BC, Canada"
                  src="https://www.google.com/maps?q=Chilliwack,+BC,+Canada&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[280px]"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-20 text-center">
          <div className="rounded-2xl bg-brand-green-dark text-white p-10 sm:p-12">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4">
              {t('contact.ctaTitle')}
            </h3>
            <p className="text-brand-green-light/90 mb-6 max-w-xl mx-auto">
              {t('contact.ctaSubtitle')}
            </p>
            <Button href="#contacto" variant="secondary" size="lg" className="!bg-sun !text-brand-green-dark hover:!bg-white">
              {t('contact.ctaButton')}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
