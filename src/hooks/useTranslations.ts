'use client';

import { useMemo } from 'react';

import { translations } from '@/lib/translations';
import { useLanguage } from '@/context/LanguageContext';

export function useTranslations() {
  const { language } = useLanguage();
  return useMemo(() => translations[language], [language]);
}
