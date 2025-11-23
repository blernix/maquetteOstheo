import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { BLOG_ARTICLES } from '@/lib/blog-data';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = BLOG_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft size={20} />
            Retour au blog
          </Link>

          <Badge variant="primary" size="md" className="mb-4">
            {article.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{article.readingTime} min de lecture</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Contenu de l'article */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 mb-4 mt-8">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl md:text-2xl font-serif font-semibold text-neutral-900 mb-3 mt-6">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="font-semibold text-neutral-900 mb-2">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              } else if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-neutral-700 ml-6">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              } else if (paragraph.startsWith('> ')) {
                return (
                  <blockquote key={index} className="border-l-4 border-primary-400 pl-4 italic my-6 text-neutral-700">
                    {paragraph.replace('> ', '')}
                  </blockquote>
                );
              } else if (paragraph.trim() === '') {
                return <br key={index} />;
              } else {
                return (
                  <p key={index} className="text-neutral-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
            Besoin d'une consultation ?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            N'hésitez pas à me contacter pour prendre rendez-vous ou pour toute question.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Prendre rendez-vous
            </Button>
            <Button href="/blog" variant="outline" size="lg">
              Lire plus d'articles
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
