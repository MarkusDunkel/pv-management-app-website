'use client';

import { useLanguage } from '@/context/LanguageContext';

const OPTIONS = [
  { value: 'en', label: 'EN', title: 'Switch to English' },
  { value: 'de', label: 'DE', title: 'Auf Deutsch wechseln' }
] as const;

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/70 p-1 text-xs font-semibold"
      role="group"
      aria-label="Language selection"
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
