export type Language = 'en' | 'de';

export type NavKey = 'about' | 'features' | 'infrastructure' | 'challenges' | 'developer';

interface Metric {
  label: string;
  value: string;
}

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
    metrics: Metric[];
    imageAlt: string;
    caption: string;
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
      about: 'About',
      features: 'Features',
      infrastructure: 'Infrastructure',
      challenges: 'Key Challenges',
      developer: 'About the Developer'
    },
    layout: {
      productLabel: 'PV Platform',
      sidebarIntro: 'Navigate through the platform overview, architecture, and development insights.',
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
      eyebrow: 'About',
      title: 'Photovoltaik Surveillance and Analytics',
      description:
        'Operational intelligence for distributed solar fleets—surface insights, visualise health, and automate remediation from a single control surface.',
      body:
        'Harness an observability layer purpose-built for photovoltaic assets. Spotlight underperforming strings, triage inverter faults instantly, and benchmark output against irradiance forecasts—all without stitching spreadsheets together.',
      ctas: {
        primary: 'Try the Demo',
        secondary: 'Explore Architecture'
      },
      metrics: [
        { label: 'Arrays Observed', value: '12,500+' },
        { label: 'Alert Latency', value: '< 30s' },
        { label: 'Energy Managed', value: '4.2 GWp' }
      ],
      imageAlt: 'Aerial illustration of solar arrays sending data to an analytics dashboard.',
      caption: 'Illustrative overview tying live production data to actionable insights.'
    },
    features: {
      eyebrow: 'Features',
      title: 'Platform Features',
      description: 'Everything operations teams need to sense, analyse, and respond to solar performance in one view.',
      cards: [
        {
          title: 'Real-time Visualisation',
          description:
            'Streaming dashboards render module-level performance in sub-second intervals so operators can intervene before yield drops.',
          image: '/images/current-state.png',
          alt: 'Line chart showing solar panel output trends.'
        },
        {
          title: 'Anomaly Detection',
          description:
            'ML-assisted baselines flag inverter faults, shading, and sudden voltage sag using adaptive thresholds tuned to each array.',
          image: '/images/feature-anomaly.svg',
          alt: 'Heatmap view highlighting an anomalous solar string.'
        },
        {
          title: 'Analytics and Optimization',
          description:
            'Secure remote commands trigger diagnostics, calibrations, and firmware checks across distributed sites without truck rolls.',
          image: '/images/feature-visualization.svg',
          alt: 'Engineer triggering a remote diagnostic routine.'
        },
        {
          title: 'Trend Analytics',
          description:
            'Rolling 30-day regressions surface performance drift and panel degradation to feed maintenance planning.',
          image: '/images/trend.png',
          alt: 'Gaussian curve showing variance bands for photovoltaic output.'
        }
      ]
    },
    infrastructure: {
      eyebrow: 'Infrastructure',
      title: 'Infrastructure',
      description: 'A cloud-native control plane ingests telemetry, orchestrates analytics, and serves insights globally.',
      paragraphs: [
        'Resilient edge collectors publish granular telemetry into regional ingestion clusters. A Kafka backbone replicates events into BigQuery for historical analysis while a Flink jobs layer powers live dashboards. Role-based APIs expose actions back to field teams through secure web and mobile clients.',
        'Automated deploys on Google Cloud ensure consistent rollouts. GitOps pipelines verify infrastructure diagrams, schema migrations, and golden dashboards before shipping to production.'
      ],
      githubLabel: 'View on GitHub',
      imageAlt: 'Diagram showing collectors, streaming pipeline, analytics layer, and operator console.',
      imageCaption: 'Telemetry flows through resilient pipelines and lands in a scalable analytics fabric.'
    },
    developer: {
      eyebrow: 'Team',
      title: 'About the Developer',
      description: 'Crafted by a systems engineer focused on reliable renewables and intuitive operator tooling.',
      paragraphs: [
        'Hey, I am Alex—a renewable tech specialist who pairs electrical engineering roots with cloud-native data stacks. I design control rooms that keep field teams confident, operators informed, and sustainability goals on track.',
        'Recent projects span inverter fleet analytics, DER forecasting, and XR training overlays for rooftop crews. I love translating messy telemetry into decisive, human-friendly experiences.'
      ],
      links: [
        { href: 'https://github.com/example', label: 'GitHub', aria: 'Visit developer GitHub profile' },
        { href: 'https://www.linkedin.com/in/example', label: 'LinkedIn', aria: 'Visit developer LinkedIn profile' },
        { href: 'mailto:developer@example.com', label: 'Email', aria: 'Email the developer' }
      ],
      avatarAlt: 'Illustrated portrait of the developer.'
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
      metrics: [
        { label: 'Überwachte Arrays', value: '12.500+' },
        { label: 'Alarm-Latenz', value: '< 30 s' },
        { label: 'Verwaltete Leistung', value: '4,2 GWp' }
      ],
      imageAlt: 'Illustration einer Solarfeld-Landschaft mit angebundenem Analytics-Dashboard.',
      caption: 'Visualisierung der Datenströme von der Anlage bis zu den betrieblichen Insights.'
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
          image: '/images/current-state.png',
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
      avatarAlt: 'Illustrierte Darstellung der Entwickler:in.'
    }
  }
};

export const navOrder: NavKey[] = ['about', 'features', 'infrastructure', 'challenges', 'developer'];
