'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({ id, eyebrow, title, description, children, className }: SectionHeadingProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 space-y-4', className)}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-base text-muted-foreground">{description}</p>}
      {children}
    </section>
  );
}
