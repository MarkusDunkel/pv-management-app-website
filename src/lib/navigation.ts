import type { NavKey } from '@/lib/translations';

export interface NavItem {
  href: string;
  key: NavKey;
}

export const navItems: NavItem[] = [
  { href: '#about', key: 'about' },
  { href: '#features', key: 'features' },
  { href: '#infrastructure', key: 'infrastructure' },
  { href: '#challenges', key: 'challenges' },
  { href: '#developer', key: 'developer' }
];
