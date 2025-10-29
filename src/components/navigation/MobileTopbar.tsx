'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import LanguageToggle from '@/components/navigation/LanguageToggle';
import ThemeToggle from '@/components/navigation/ThemeToggle';
import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/navigation';
import { useTranslations } from '@/hooks/useTranslations';

export default function MobileTopbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    function onClick(event: MouseEvent) {
      if (!menuRef.current || !open) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('click', onClick);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-0.5">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.layout.productLabel}</span>
          <p className="text-sm font-medium text-muted-foreground">{t.layout.mobileSubtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {open && (
        <div
          ref={menuRef}
          id="mobile-nav"
          className="mt-3 flex flex-col gap-2 rounded-lg border border-border bg-background/95 p-4 shadow-card"
          role="menu"
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              role="menuitem"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setOpen(false)}
            >
              {t.nav[item.key]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
