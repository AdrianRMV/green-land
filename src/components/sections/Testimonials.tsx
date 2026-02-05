'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
          className="text-sun text-lg"
        >
          {i < count ? '★' : '☆'}
        </motion.span>
      ))}
    </div>
  );
}

export function Testimonials() {
  const { t, tObj } = useLanguage();
  const testimonials = tObj('testimonials');
  const items = testimonials.items;
  const [index, setIndex] = useState(0);
  const current = items[index];

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-green-dark mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-neutral-600">
            {t('testimonials.subtitle')}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl p-8 sm:p-10 shadow-card border border-white/40"
              >
                <Stars count={5} />
                <blockquote className="text-neutral-700 text-lg leading-relaxed mb-6">
                  &ldquo;{current.text}&rdquo;
                </blockquote>
                <div>
                  <p className="font-heading font-semibold text-brand-green-dark">{current.name}</p>
                  <p className="text-neutral-500 text-sm">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-8">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`View testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    i === index ? 'bg-brand-green-dark w-8' : 'bg-neutral-300 hover:bg-brand-green-light'
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
