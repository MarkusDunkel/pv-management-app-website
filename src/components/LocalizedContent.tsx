'use client';

import { SectionHeading } from '@/components/SectionHeading';
import { buttonVariants } from '@/components/ui/button';
import { useTranslations } from '@/hooks/useTranslations';
import { cn } from '@/lib/utils';

export default function LocalizedContent() {
  const t = useTranslations();

  return (
    <div className="space-y-24 pt-6 lg:pt-16">
      <SectionHeading
        id="about"
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">{t.hero.body}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#features"
                className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'shadow-xl shadow-accent/30')}
              >
                {t.hero.ctas.primary}
              </a>
              <a
                href="#infrastructure"
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'border-dashed')}
              >
                {t.hero.ctas.secondary}
              </a>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {t.hero.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-sm text-muted-foreground">{metric.label}</dt>
                  <dd className="text-2xl font-semibold">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="relative">
            <img
              src="/images/hero-solar-array.svg"
              alt={t.hero.imageAlt}
              className="w-full"
              loading="lazy"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">{t.hero.caption}</figcaption>
          </figure>
        </div>
      </SectionHeading>

      <SectionHeading
        id="features"
        eyebrow={t.features.eyebrow}
        title={t.features.title}
        description={t.features.description}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {t.features.cards.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-background/80 p-6 shadow-card backdrop-blur"
            >
              <img src={feature.image} alt={feature.alt} className="h-32 w-full object-cover" loading="lazy" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionHeading>

      <SectionHeading
        id="infrastructure"
        eyebrow={t.infrastructure.eyebrow}
        title={t.infrastructure.title}
        description={t.infrastructure.description}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <figure className="order-last lg:order-first">
            <img
              src="/images/infra-diagram.svg"
              alt={t.infrastructure.imageAlt}
              className="w-full"
              loading="lazy"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">{t.infrastructure.imageCaption}</figcaption>
          </figure>
          <div className="space-y-5">
            {t.infrastructure.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <a href="https://github.com/example/pv-analytics" className={cn(buttonVariants({ variant: 'outline' }), 'w-fit')}>
              {t.infrastructure.githubLabel}
            </a>
          </div>
        </div>
      </SectionHeading>

      <SectionHeading
        id="challenges"
        eyebrow={t.challenges.eyebrow}
        title={t.challenges.title}
        description={t.challenges.description}
      >
        <div className="space-y-8">
          {t.challenges.items.map((challenge) => (
            <article key={challenge.title} className="rounded-xl border border-border bg-background/70 p-6 shadow-card">
              <h3 className="text-2xl font-semibold">{challenge.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{challenge.description}</p>
              <p className="mt-3 rounded-lg bg-muted/60 p-4 text-sm text-muted-foreground">{challenge.detail}</p>
            </article>
          ))}
        </div>
      </SectionHeading>

      <SectionHeading
        id="developer"
        eyebrow={t.developer.eyebrow}
        title={t.developer.title}
        description={t.developer.description}
      >
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-start">
          <img
            src="/images/developer-avatar.svg"
            alt={t.developer.avatarAlt}
            className="mx-auto h-40 w-40 rounded-full border border-border bg-muted object-cover"
            loading="lazy"
          />
          <div className="space-y-4">
            {t.developer.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              {t.developer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  rel="noreferrer"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  aria-label={link.aria}
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'border border-border px-4 py-2 text-sm font-medium hover:border-accent'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </SectionHeading>
    </div>
  );
}
