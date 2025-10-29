'use client';

import LanguageToggle from '@/components/navigation/LanguageToggle';
import ThemeToggle from '@/components/navigation/ThemeToggle';
import { navItems } from '@/lib/navigation';
import { useTranslations } from '@/hooks/useTranslations';

export default function Sidebar() {
  const t = useTranslations();

  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72 lg:flex-col lg:justify-between lg:border-r lg:border-border lg:bg-background/80 lg:px-8 lg:py-12 lg:backdrop-blur">
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{t.layout.productLabel}</span>
          <h1 className="text-2xl font-bold leading-tight">{t.hero.title}</h1>
          <p className="text-sm text-muted-foreground">{t.layout.sidebarIntro}</p>
        </div>

        <nav aria-label="Primary" className="flex-1 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col text-xs text-muted-foreground">
          <span>{t.layout.languageLabel}</span>
          <span>{t.layout.themeLabel}</span>
        </div>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
