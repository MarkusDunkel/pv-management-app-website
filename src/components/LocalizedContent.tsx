'use client';

import { SectionHeading } from '@/components/SectionHeading';
import { buttonVariants } from '@/components/ui/button';
import { useTranslations } from '@/hooks/useTranslations';
import { cn } from '@/lib/utils';
import Mermaid from "./ui/Mermaid";

const chart = `%%{init: { "theme": "base",
  "flowchart": { "curve": "basis", "htmlLabels": true },
  "themeVariables": {
    "primaryColor": "transparent",
    "lineColor": "#555",
    "fontSize": "14px",
    "fontFamily": "Inter, sans-serif",
    "textColor": "hsl(var(--foreground))"}}%%
graph TD
  FE["<div style='text-align:center;font-size:17px;padding-bottom:5px;color:hsl(var(--foreground))'><b>Frontend</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>- React<br/>- TypeScript<br/>- Vite<br/>- Tailwind</div>"]

  FE <-->|HTTPS/REST| BE["<div style='text-align:center;font-size:17px;padding-bottom:5px;color:hsl(var(--foreground))'><b>Backend</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>- Spring<br/>- Spring Web<br/>- Spring Security<br/>- JPA + Flyway</div>"]

  BE <-->|JPA| DB
  EX["<div style='text-align:center;font-size:14px;color:hsl(var(--foreground))'><b>External SEMS API</b></div>"] -->|WebClient| CTRL
  CTRL["<div style='text-align:center;font-size:17px;padding-bottom:5px;color:hsl(var(--foreground))'><b>Controller</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>Spring Boot non-web <br/> with scheduled jobs</div>"] --> DB[("<div style='text-align:center;font-size:14px;color:hsl(var(--foreground))'><b>PostgreSQL</b></div>")]

  %% --- CLASS DEFINITIONS ---
  classDef rounded fill:transparent,stroke:#555,stroke-width:1px,rx:5,ry:5
  class FE,BE,CTRL,EX rounded
  classDef db fill:transparent,stroke:#555,stroke-width:1px
  class DB db
  
  %% --- STYLING ALL ARROWS ---
  linkStyle default stroke-width:1.5px,fill:none

%% --- INDIVIDUAL LINK LABEL STYLES ---
  linkStyle 0 font-size:13px,font-style:italic
  linkStyle 1 font-size:13px,font-style:italic
  linkStyle 2 font-size:13px,font-style:italic
  linkStyle 3 font-size:13px,font-style:italic
`;

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
        <div className="gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">{t.hero.body}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="http://104.155.37.67/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'shadow-xl shadow-accent/30')}
              >
                {t.hero.ctas.primary}
              </a>
              <a
                href="https://github.com/MarkusDunkel/pv-management-app"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'border-dashed')}
              >
                {t.hero.ctas.secondary}
              </a>
            </div>
          </div>
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
        <div className="grid gap-8 lg:grid-cols-[1fr_0fr] lg:items-center">
          <Mermaid chart={chart}  />
        </div>
         <div className="space-y-5">
            {t.infrastructure.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <a  target="_blank"
                rel="noopener noreferrer" href="https://github.com/MarkusDunkel/pv-management-app" className={cn(buttonVariants({ variant: 'outline' }), 'w-fit')}>
              {t.infrastructure.githubLabel}
            </a>
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
            src="/images/avatar.jpg"
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
