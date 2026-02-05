'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import clsx from 'clsx';
import { useLanguage } from '@/contexts/LanguageContext';

type Category = 'all' | 'residential' | 'commercial' | 'gardens' | 'hardscaping';

const categoryKeys: { id: Category; key: string }[] = [
  { id: 'all', key: 'all' },
  { id: 'residential', key: 'residential' },
  { id: 'commercial', key: 'commercial' },
  { id: 'gardens', key: 'gardens' },
  { id: 'hardscaping', key: 'hardscaping' },
];

const projectCategories: Category[] = ['residential', 'commercial', 'gardens', 'hardscaping', 'residential', 'commercial'];

export function Gallery() {
  const { t, tObj } = useLanguage();
  const gallery = tObj('gallery');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxId, setLightboxId] = useState<number | null>(null);

  const projects = gallery.projects.map((title, i) => ({
    id: i,
    category: projectCategories[i],
    title,
  }));

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-20 lg:py-28 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-green-dark mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-neutral-600">
            {t('gallery.subtitle')}
          </p>
        </ScrollReveal>

        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryKeys.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={clsx(
                'px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200',
                activeCategory === cat.id
                  ? 'bg-brand-green-dark text-white'
                  : 'bg-white text-neutral-600 hover:bg-brand-green-light/30 hover:text-brand-green-dark'
              )}
            >
              {t(`gallery.${cat.key}`)}
            </button>
          ))}
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card cursor-pointer"
              onClick={() => setLightboxId(project.id)}
            >
              {/* Background + title: visible by default, hidden on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green-mid to-brand-green-dark flex items-center justify-center text-white/90 font-body text-sm p-4 text-center transition-opacity duration-200 group-hover:opacity-0">
                {project.title}
              </div>
              {/* Hover overlay: only "View more" on a dark layer, no previous text showing */}
              <div className="absolute inset-0 flex items-center justify-center bg-brand-green-dark/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="text-white font-body text-sm font-medium">
                  {t('gallery.viewMore')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setLightboxId(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full aspect-video rounded-2xl bg-gradient-to-br from-brand-green-mid to-brand-green-dark flex items-center justify-center text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {t('gallery.lightboxPlaceholder')}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
