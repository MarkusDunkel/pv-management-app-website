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
    demoModal: {
      title: string;
      description: string;
      descriptionTwo: string;
      inputLabel: string;
      inputPlaceholder: string;
      confirm: string;
      cancel: string;
    };
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
      demoModal: {
        title: 'Enter your demo access key',
        description:
          'Request demo key and paste it below to open the live application.',
            descriptionTwo:
          'Was a link to this website shared with you? Then you will often find the demo key embedded in it!',
        inputLabel: 'Demo access key',
        inputPlaceholder: 'e.g. HW-DEMO-1234',
        confirm: 'Continue to demo',
        cancel: 'Cancel'
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
        'The browser communicates with the application exclusively over HTTPS, with Traefik acting as the public entrypoint that handles TLS termination and routing. Traefik serves the frontend’s static files, which are hosted by an nginx container that delivers the built React SPA. All API calls from the SPA use the same origin (/api/**) and are internally proxied by nginx to the Spring Boot backend running on port 8080. The backend exposes the REST API, performs authentication, and persists data in PostgreSQL. A separate worker service runs scheduled jobs, fetches data from the external SEMS API, and writes results to the same database.'
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
        { href: 'https://github.com/MarkusDunkel', label: 'GitHub', aria: "Open Markus Dunkel's GitHub profile" },
        { href: 'https://linkedin.com/in/mdunkel/', label: 'LinkedIn', aria: "Open Markus Dunkel's LinkedIn profile" },
        { href: 'mailto:me@markusdunkel.at', label: 'Email', aria: 'Send an email to Markus Dunkel' }
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
      demoModal: {
        title: 'Demo-Zugangsschlüssel eingeben',
        description:
          'Fordern Sie einen Demo-Schlüssel an und fügen Sie ihn hier ein, um die Anwendung zu öffnen.',
        descriptionTwo:
          'Wurde ein Link zu dieser Webseite mit Ihnen geteilt? Dann finden sie den Demo-Schlüssel häufig darin eingebunden!',
        inputLabel: 'Demo-Zugangsschlüssel',
        inputPlaceholder: 'z. B. HW-DEMO-1234',
        confirm: 'Zur Demo wechseln',
        cancel: 'Abbrechen'
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
        'Der Browser kommuniziert ausschließlich über HTTPS mit der Anwendung, wobei Traefik als öffentlicher Einstiegspunkt dient und sowohl die TLS-Beendigung als auch das Routing übernimmt. Traefik liefert die statischen Dateien des Frontends aus, die in einem nginx-Container liegen, der die gebaute React-SPA bereitstellt. Alle API-Aufrufe der SPA verwenden denselben Origin (/api/**) und werden intern von nginx an das Spring-Boot-Backend auf Port 8080 weitergeleitet. Das Backend stellt die REST-API bereit, führt die Authentifizierung durch und speichert Daten in PostgreSQL. Ein separater Worker-Dienst führt geplante Jobs aus, ruft Daten von der externen SEMS-API ab und schreibt die Ergebnisse in dieselbe Datenbank.'
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
        { href: 'https://github.com/MarkusDunkel', label: 'GitHub', aria: 'GitHub-Profil von Markus Dunkel öffnen' },
        { href: 'https://linkedin.com/in/mdunkel/', label: 'LinkedIn', aria: 'LinkedIn-Profil von Markus Dunkel öffnen' },
        { href: 'mailto:me@markusdunkel.at', label: 'E-Mail', aria: 'E-Mail an Markus Dunkel' }
      ],
      avatarAlt: 'Markus Dunkel'
    }
  }
};

export const navOrder: NavKey[] = ['about', 'features', 'infrastructure', 'challenges', 'developer'];
