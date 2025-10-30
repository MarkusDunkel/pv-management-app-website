export type Language = 'en' | 'de';

export type NavKey = 'about' | 'features' | 'infrastructure' | 'challenges' | 'developer';

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface DeveloperLink {
  href: string;
  label: string;
  aria: string;
}

interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

interface LayoutCopy {
  productLabel: string;
  sidebarIntro: string;
  sidebarTitle: string;
  themeLabel: string;
  languageLabel: string;
  mobileSubtitle: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  languageToggleAria: string;
  themeToggleAria: string;
  primaryNavLabel: string;
}

export interface TranslationShape {
  nav: Record<NavKey, string>;
  layout: LayoutCopy;
  hero: SectionCopy & {
    ctas: { primary: string; secondary: string };
    body: string;
  };
  features: SectionCopy & {
    cards: FeatureCard[];
  };
  infrastructure: SectionCopy & {
    paragraphs: string[];
    githubLabel: string;
    imageAlt: string;
    imageCaption: string;
  };
  developer: SectionCopy & {
    paragraphs: string[];
    links: DeveloperLink[];
    avatarAlt: string;
  };
}

export const translations: Record<Language, TranslationShape> = {
  en: {
    nav: {
      about: 'Overview',
      features: 'Features',
      infrastructure: 'Infrastructure',
      challenges: 'Key Challenges',
      developer: 'About Me'
    },
    layout: {
      productLabel: 'PV Platform',
      sidebarIntro: "Overview, architecture, and insights into the platform's development.",
      sidebarTitle: 'HomeWatts\nPhotovoltaic Monitoring and Analytics',
      themeLabel: 'Theme',
      languageLabel: 'Language',
      mobileSubtitle: 'Photovoltaik Surveillance & Analytics',
      openMenuLabel: 'Open navigation menu',
      closeMenuLabel: 'Close navigation menu',
      languageToggleAria: 'Select language',
      themeToggleAria: 'Toggle color mode',
      primaryNavLabel: 'Primary navigation'
    },
    hero: {
      eyebrow: 'Overview',
      title: 'HomeWatts – Photovoltaic Monitoring and Analytics',
      description:
        'Smart energy analytics for your home: monitor, understand and optimise your photovoltaic system with battery storage.',
      body:
        'This platform, built specifically for photovoltaics, makes your energy data transparent: monitor performance and efficiency in real time, detect faults instantly, and uncover new opportunities for optimisation and investment.',
      ctas: {
        primary: 'Try the Demo',
        secondary: 'View on GitHub'
      },
    },
    features: {
      eyebrow: 'Features',
      title: 'Platform Features',
      description: 'Capture. Analyse. Act. Everything PV owners need to get the most from their solar system.',
      cards: [
        {
          title: 'Real-time Visualisation',
          description:
            'Dashboards visualise module values in real time, allowing you to adjust your energy consumption intelligently.',
          image: '/images/hero-solar-array.svg',
          alt: 'Line chart with the performance history of solar modules.'
        },
        {
          title: 'Remote Monitoring',
          description:
            'Stay informed on the go and detect faults in real time.',
          image: '/images/feature-anomaly.svg',
          alt: 'Heatmap view with an anomalous solar string highlighted.'
        },
        {
          title: 'Analysis and Optimisation',
          description:
            'Our analytics platform provides precise recommendations so you can plan investments in a targeted, effective way.',
          image: '/images/feature-visualization.svg',
          alt: 'Engineer initiating a remote diagnostic.'
        }
      ]
    },
    infrastructure: {
      eyebrow: 'Infrastructure',
      title: 'Infrastructure',
      description:
        'A cloud-native control centre captures telemetry, orchestrates analytics, and delivers insights in real time.',
      paragraphs: [
        'User requests are sent from the React single-page app to the backend API over HTTPS. The backend supplies UI state, authenticates users, and reads or writes operational data via PostgreSQL.',
        'In parallel, a collector worker runs on its own Spring profile: it is triggered on a schedule, authenticates with the SEMS portal, fetches current performance and asset data, and stores it in the same backend schema.',
        'These updates make the latest telemetry and synchronisation status immediately available for subsequent frontend calls.'
      ],
      githubLabel: 'View on GitHub',
      imageAlt: 'Diagram showing collectors, streaming pipeline, analytics layer, and operator console.',
      imageCaption: 'Architecture overview / system overview'
    },
    developer: {
      eyebrow: 'Person',
      title: 'About Me',
      description: 'Passion for data-driven process automation.',
      paragraphs: [
        "Hi, I'm Markus—a software engineer with a keen interest in digitising business processes. I love translating complex business logic into clean, maintainable, and user-centred software.",
        "I see the interplay between data structure, business logic, and user experience as the key to sustainable digital transformation, and I want to help shape that progress. I combine analytical skills from studying climate physics with the systems thinking of an IT specialist."
      ],
      links: [
        { href: 'https://github.com/example', label: 'GitHub', aria: "Open the developer's GitHub profile" },
        { href: 'https://www.linkedin.com/in/example', label: 'LinkedIn', aria: "Open the developer's LinkedIn profile" },
        { href: 'mailto:developer@example.com', label: 'Email', aria: 'Send an email to the developer' }
      ],
      avatarAlt: 'Markus Dunkel'
    }
  },
  de: {
    nav: {
      about: 'Überblick',
      features: 'Funktionen',
      infrastructure: 'Infrastruktur',
      challenges: 'Zentrale Herausforderungen',
      developer: 'Über mich'
    },
    layout: {
      productLabel: 'PV-Plattform',
      sidebarIntro: 'Überblick, Architektur und Einblicke in die Entwicklung der Plattform.',
      sidebarTitle: 'HomeWatts\nPhotovoltaik-Überwachung und Analytics',
      themeLabel: 'Darstellung',
      languageLabel: 'Sprache',
      mobileSubtitle: 'Photovoltaik Surveillance & Analytics',
      openMenuLabel: 'Navigationsmenü öffnen',
      closeMenuLabel: 'Navigationsmenü schließen',
      languageToggleAria: 'Sprache auswählen',
      themeToggleAria: 'Darstellung umschalten',
      primaryNavLabel: 'Hauptnavigation'
    },
    hero: {
      eyebrow: 'Überblick',
      title: 'HomeWatts – Photovoltaik-Überwachung und Analytics',
      description:
        'Intelligente Energieanalyse für dein Zuhause – überwache, verstehe und optimiere deine Photovoltaikanlage mit Batteriespeicher.',
      body:
        'Die speziell für Photovoltaik entwickelte Plattform macht Ihre Energie transparent: Überwachen Sie Leistung und Effizienz in Echtzeit, erkennen Sie Störungen sofort und entdecken Sie neue Potenziale für Optimierung und Investitionen.',
      ctas: {
        primary: 'Demo starten',
        secondary: 'Auf Github ansehen'
      },
    },
    features: {
      eyebrow: 'Funktionen',
      title: 'Plattform-Funktionen',
      description: 'Erfassen. Analysieren. Handeln. Alles, was PV-Besitzer brauchen, um das Maximum aus ihrer Solaranlage herauszuholen.',
      cards: [
        {
          title: 'Echtzeit-Visualisierung',
          description:
            'Dashboards visualisieren Modulwerte in Echtzeit, sodass Sie Ihren Stromverbrauch intelligent anpassen können.',
          image: '/images/hero-solar-array.svg',
          alt: 'Liniendiagramm mit Leistungsverlauf der Solarmodule.'
        },
        {
          title: 'Remote Monitoring',
          description:
            'Bleiben Sie auch unterwegs informiert und erkennen Sie Störungen in Echtzeit.',
          image: '/images/feature-anomaly.svg',
          alt: 'Heatmap-Ansicht mit hervorgehobener Anomalie in einem Solarstring.'
        },
        {
          title: 'Analyse und Optimierung',
          description:
            'Unsere Analyseplattform liefert präzise Handlungsempfehlungen, damit Sie Investitionen gezielt und wirkungsvoll planen können.',
          image: '/images/feature-visualization.svg',
          alt: 'Ingenieur:in, die aus der Ferne eine Diagnose auslöst.'
        },
      ]
    },
    infrastructure: {
      eyebrow: 'Infrastruktur',
      title: 'Infrastruktur',
      description:
        'Eine cloud-native Steuerzentrale erfasst Telemetriedaten, orchestriert Analysen und liefert Erkenntnisse in Echtzeit aus.',
      paragraphs: [
        'Benutzeranfragen werden von der React-Single-Page-App über HTTPS an die Backend-API gesendet. Das Backend stellt den UI-Status bereit, authentifiziert Benutzer und liest bzw. schreibt Betriebsdaten über PostgreSQL.',
        'Parallel dazu läuft ein Collector-Worker auf einem eigenen Spring-Profil: Er wird nach einem Zeitplan aktiviert, authentifiziert sich beim SEMS-Portal, ruft aktuelle Leistungs- und Anlagendaten ab und speichert sie im selben Backendschema.',
        'Diese Aktualisierungen machen die neuesten Telemetriedaten und den Synchronisationsstatus unmittelbar für nachfolgende Frontend-Aufrufe verfügbar.'
      ],
      githubLabel: 'Auf GitHub ansehen',
      imageAlt: 'Diagramm mit Collectors, Streaming-Pipeline, Analytics-Layer und Operator-Console.',
      imageCaption: 'Architekturübersicht / Systemübersicht'
    },
    developer: {
      eyebrow: 'Person',
      title: 'Über mich',
      description:
        'Leidenschaft für datengetriebene Prozessautomatisierung',
      paragraphs: [
        'Hallo, ich bin Markus – ein Softwareentwickler mit einem besonderen Interesse an der Digitalisierung geschäftlicher Prozesse. Mich begeistert, wie sich komplexe Geschäftslogik in klar strukturierte, wartbare und zugleich nutzerorientierte Software übersetzen lässt.',
        'Die Verbindung von Datenstruktur, Geschäftslogik und Nutzererlebnis betrachte ich als Schlüssel zu nachhaltiger digitaler Transformation und möchte diesen Fortschritt aktiv mitgestalten. Dabei verbinde ich meine analytischen Fähigkeiten aus dem Studium der Klimaphysik mit dem systemischen Denken eines Informationstechnologen.'
      ],
      links: [
        { href: 'https://github.com/example', label: 'GitHub', aria: 'GitHub-Profil der Entwickler:in öffnen' },
        { href: 'https://www.linkedin.com/in/example', label: 'LinkedIn', aria: 'LinkedIn-Profil der Entwickler:in öffnen' },
        { href: 'mailto:developer@example.com', label: 'E-Mail', aria: 'E-Mail an die Entwickler:in senden' }
      ],
      avatarAlt: 'Markus Dunkel'
    }
  }
};

export const navOrder: NavKey[] = ['about', 'features', 'infrastructure', 'challenges', 'developer'];
