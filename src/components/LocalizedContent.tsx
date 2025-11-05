'use client';

import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react';

import { SectionHeading } from '@/components/SectionHeading';
import { buttonVariants } from '@/components/ui/button';
import { useTranslations } from '@/hooks/useTranslations';
import { buildDemoLink } from '@/lib/url';
import { cn } from '@/lib/utils';
import Mermaid from './ui/Mermaid';

const chart = `%%{init: { "theme": "base",
  "flowchart": { "curve": "basis", "htmlLabels": true },
  "themeVariables": {
    "primaryColor": "transparent",
    "lineColor": "hsl(var(--background))",
    "fontSize": "14px",
    "fontFamily": "Inter, sans-serif",
    "textColor": "hsl(var(--foreground))"}}}%%
graph TD

  B["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground))'><b>Browser</b></div>"]

  RP["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));margin-bottom:5px'><b>Reverse Proxy</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>Traefik<br/>TLS termination<br/>Routing</div>"]

  FE["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));height:0px;margin-bottom:-12px'><b>Frontend</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>React · TypeScript · Tailwind<br/>nginx serves static SPA<br/>nginx proxies <code>/api/**</code> → <code>backend:8080</code></div>"]

  BE["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));margin-bottom:5px'><b>Backend</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>Spring Boot API<br/>Spring Security · JPA · JWT</div>"]

  WRK["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));margin-bottom:5px'><b>Collector / Worker</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>Spring Boot (non-web)<br/>scheduled jobs</div>"]

  EX["<div style='text-align:center;font-size:14px;color:hsl(var(--foreground))'><b>External SEMS API</b></div>"]

  DB[("<div style='text-align:center;font-size:14px;color:hsl(var(--foreground))'><b>PostgreSQL</b></div>")]

  %% --- FLOWS ---
  B <-->|HTTPS| RP
  RP -->|"/" static assets| FE
  FE -->|proxy /api/**| BE
  BE -->|JPA| DB
  WRK -->|WebClient| EX
  WRK --> DB

  %% --- CLASS DEFINITIONS ---
  classDef rounded fill:transparent,stroke:#555,stroke-width:1px,rx:5,ry:5
  class FE,BE,WRK,EX,RP,B rounded
  classDef db fill:transparent,stroke:#555,stroke-width:1px
  class DB db

  %% --- STYLING ALL ARROWS ---
  linkStyle default stroke-width:1.5px,fill:none
`;

export default function LocalizedContent() {
  const t = useTranslations();
  const [demoAccessKey, setDemoAccessKey] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [demoAccessInput, setDemoAccessInput] = useState('');

  const baseDemoUrl = useMemo(
    () => (import.meta.env.DEV ? 'https://localhost:5173' : 'https://app.homewatts.xyz'),
    []
  );

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setDemoAccessInput('');
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const key = params.get('demo-access-key');

    const nextParams = new URLSearchParams();
    if (key) {
      nextParams.set('demo-access-key', key);
    }

    const nextSearch = nextParams.toString();
    const formattedSearch = nextSearch ? `?${nextSearch}` : '';
    if (window.location.search !== formattedSearch) {
      const nextUrl = `${window.location.pathname}${formattedSearch}${window.location.hash}`;
      window.history.replaceState(null, '', nextUrl);
    }

    setDemoAccessKey(key);
  }, []);

  const handleOpenDemo = (key: string | null) => {
    const targetUrl = buildDemoLink(baseDemoUrl, key);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDemoClick = () => {
    if (demoAccessKey) {
      handleOpenDemo(demoAccessKey);
      return;
    }

    setDemoAccessInput('');
    setIsModalOpen(true);
  };

  const handleConfirmAccessKey = () => {
    const trimmedValue = demoAccessInput.trim();
    if (!trimmedValue) return;

    setDemoAccessKey(trimmedValue);
    handleModalClose();
    handleOpenDemo(trimmedValue);
  };

  const handleModalSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleConfirmAccessKey();
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleModalClose, isModalOpen]);

  return (
    <>
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
                <button
                  type="button"
                  onClick={handleDemoClick}
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'shadow-xl shadow-accent/30'
                  )}
                >
                  {t.hero.ctas.primary}
                </button>
                <a
                  href="https://github.com/MarkusDunkel/pv-management-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'border-dashed')}
                >
                  {t.hero.ctas.secondary}
                </a>
                {demoAccessKey && <div className="text-sm text-muted-foreground">{'demo-access-key: '+ demoAccessKey}</div>}
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
            <Mermaid chart={chart} />
          </div>
          <div className="space-y-5">
            {t.infrastructure.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-base text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MarkusDunkel/pv-management-app"
              className={cn(buttonVariants({ variant: 'outline' }), 'w-fit')}
            >
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
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-access-modal-title"
          onClick={handleModalClose}
        >
          <div
            className="w-full max-w-sm rounded-lg border border-border bg-background p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <form className="space-y-4" onSubmit={handleModalSubmit}>
              <div className="space-y-2">
                <h2 id="demo-access-modal-title" className="text-xl font-semibold">
                  {t.hero.demoModal.title}
                </h2>
                <p className="text-sm text-muted-foreground">{t.hero.demoModal.description}</p>
                 <p className="text-sm font-bold">{t.hero.demoModal.descriptionTwo}</p>
              </div>
              <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
                {t.hero.demoModal.inputLabel}
                <input
                  type="text"
                  value={demoAccessInput}
                  onChange={(event) => setDemoAccessInput(event.target.value)}
                  placeholder={t.hero.demoModal.inputPlaceholder}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  autoFocus
                />
              </label>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className={cn(buttonVariants({ variant: 'ghost' }), 'px-4')}
                >
                  {t.hero.demoModal.cancel}
                </button>
                <button
                  type="submit"
                  className={cn(buttonVariants({ variant: 'default' }), 'px-4')}
                  disabled={!demoAccessInput.trim()}
                >
                  {t.hero.demoModal.confirm}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
