'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { BLOG_ARTICLES, BLOG_CATEGORIES } from '@/lib/blog-data';
import { formatDate } from '@/lib/utils';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous les articles');

  const filteredArticles =
    selectedCategory === 'Tous les articles'
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((article) => article.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6"
          >
            Blog & Conseils
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-600 leading-relaxed"
          >
            Découvrez mes articles sur l'ostéopathie, des conseils santé et bien-être
            pour prendre soin de vous au quotidien.
          </motion.p>
        </div>
      </Section>

      {/* Filtres de catégories */}
      <Section background="white" padding="md">
        <div className="flex flex-wrap justify-center gap-3">
          {BLOG_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Liste des articles */}
      <Section background="gray" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${article.slug}`} className="block h-full group">
                <Card hover className="h-full overflow-hidden p-0">
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary-200 to-secondary-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-neutral-400 text-sm">Image article</span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <Badge variant="primary" size="sm" className="mb-3">
                      {article.category}
                    </Badge>

                    <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Métadonnées */}
                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readingTime} min</span>
                      </div>
                    </div>

                    {/* Lien */}
                    <div className="flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                      Lire l'article
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600">Aucun article dans cette catégorie pour le moment.</p>
          </div>
        )}
      </Section>
    </>
  );
}
