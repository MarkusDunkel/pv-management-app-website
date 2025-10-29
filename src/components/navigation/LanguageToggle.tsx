'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTranslations } from '@/hooks/useTranslations';

const OPTIONS = [
  { value: 'en' as const, label: 'EN', title: 'English' },
  { value: 'de' as const, label: 'DE', title: 'Deutsch' }
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/70 p-1 text-xs font-semibold"
      role="group"
      aria-label={t.layout.languageToggleAria}
    >
      {OPTIONS.map((option) => {
        const active = language === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLanguage(option.value)}
            className={`rounded-full px-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              active ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
            aria-pressed={active}
            title={option.title}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
