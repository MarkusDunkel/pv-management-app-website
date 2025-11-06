import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import LanguageToggle from '@/components/navigation/LanguageToggle';
import ThemeToggle from '@/components/navigation/ThemeToggle';
import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/navigation';
import { useTranslations } from '@/hooks/useTranslations';

export default function MobileTopbar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!open) return;
      const container = containerRef.current;
      if (!container) return;

      const path = (e.composedPath && e.composedPath()) || [];
      const clickedInside = path.includes(container) || container.contains(e.target as Node);

      if (!clickedInside) setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown, { capture: true as any });

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown, true);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-0.5">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t.layout.productLabel}
          </span>
          <p className="text-sm font-medium text-muted-foreground">{t.layout.mobileSubtitle}</p>
        </div>
        <div ref={containerRef} className="relative flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.layout.closeMenuLabel : t.layout.openMenuLabel}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>

          {open && (
            <div
              id="mobile-nav"
              className=" absolute top-8 right-0 mt-3 flex flex-col gap-2 rounded-lg border border-border bg-background/95 p-4 shadow-card"
              role="menu"
              aria-label={t.layout.primaryNavLabel}
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
        </div>
      </div>
    </header>
  );
}
