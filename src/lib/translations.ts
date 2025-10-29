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

interface ChallengeItem {
  title: string;
  description: string;
  detail: string;
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
  challenges: SectionCopy & {
    items: ChallengeItem[];
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
          image: '/images/feature-visualization.svg',
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
          title: 'Remote Monitoring',
          description:
            'Secure remote commands trigger diagnostics, calibrations, and firmware checks across distributed sites without truck rolls.',
          image: '/images/feature-remote.svg',
          alt: 'Engineer triggering a remote diagnostic routine.'
        },
        {
          title: 'Trend Analytics',
          description:
            'Rolling 30-day regressions surface performance drift and panel degradation to feed maintenance planning.',
          image: '/images/feature-trend.svg',
          alt: 'Dashboard presenting comparative production trends.'
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
    challenges: {
      eyebrow: 'Key Challenges',
      title: 'Key Challenges',
      description: 'Hard-won lessons from scaling a data-intensive solar monitoring platform.',
      items: [
        {
          title: 'Unifying Heterogeneous Telemetry',
          description:
            'Vendors expose metrics via Modbus, proprietary TCP payloads, and REST bridges. We normalise payloads into a shared time-series schema and reconcile missing datapoints with Kalman smoothing to keep dashboards coherent.',
          detail:
            'Edge collectors publish raw frames to a Kafka topic; a wasm-based parser hydrates them into structured JSON across 12 protocols.'
        },
        {
          title: 'Scaling Geospatial Queries',
          description:
            'Operators filter by irradiance, asset health, and location in milliseconds even with thousands of rooftops. We tile data using H3 indexes, shard queries per region, and cache map overlays in Cloud Storage.',
          detail: 'Daily pre-computed tiles keep interactive latency under 250ms for 95th percentile requests.'
        },
        {
          title: 'Guarding Against False Positives',
          description:
            'Anomaly bursts can overwhelm teams. We calibrate detectors with seasonal baselines and apply quorum logic before paging, reducing noisy alerts by 63% without hiding real failures.',
          detail:
            'Alert policies blend statistical confidence and time-in-state windows to prioritise critical outages.'
        }
      ]
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
      developer: 'Über die Entwickler:in'
    },
    layout: {
      productLabel: 'PV-Plattform',
      sidebarIntro: 'Erkunden Sie Überblick, Architektur und Einblicke in die Entwicklung der Plattform.',
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
      title: 'Photovoltaik-Überwachung und Analytics',
      description:
        'Betriebsintelligenz für verteilte Solaranlagen – Kennzahlen sichtbar machen, Anlagenzustand bewerten und Gegenmaßnahmen aus einer Oberfläche anstoßen.',
      body:
        'Nutzen Sie eine Observability-Schicht, die speziell für Photovoltaik entwickelt wurde. Erkennen Sie leistungsschwache Strings, analysieren Sie Wechselrichterfehler in Sekunden und vergleichen Sie Erträge mit Einstrahlungsprognosen – ganz ohne Tabellenchaos.',
      ctas: {
        primary: 'Demo starten',
        secondary: 'Architektur entdecken'
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
      description: 'Alles, was Einsatzteams brauchen, um Solarperformance zu erfassen, zu analysieren und darauf zu reagieren.',
      cards: [
        {
          title: 'Echtzeit-Visualisierung',
          description:
            'Streaming-Dashboards zeigen Modulwerte im Sekundentakt, damit Operatoren eingreifen, bevor der Ertrag sinkt.',
          image: '/images/feature-visualization.svg',
          alt: 'Liniendiagramm mit Leistungsverlauf der Solarmodule.'
        },
        {
          title: 'Anomalie-Erkennung',
          description:
            'ML-gestützte Basislinien markieren Wechselrichterfehler, Verschattung oder Spannungseinbrüche mit adaptiven Schwellen pro Array.',
          image: '/images/feature-anomaly.svg',
          alt: 'Heatmap-Ansicht mit hervorgehobener Anomalie in einem Solarstring.'
        },
        {
          title: 'Remote Monitoring',
          description:
            'Gesicherte Fernzugriffe starten Diagnosen, Kalibrierungen und Firmware-Checks – ganz ohne Vor-Ort-Einsatz.',
          image: '/images/feature-remote.svg',
          alt: 'Ingenieur:in, die aus der Ferne eine Diagnose auslöst.'
        },
        {
          title: 'Trend-Analysen',
          description:
            'Rollierende 30-Tage-Regressionsmodelle decken Performance-Drift und Moduldegradation für die Wartungsplanung auf.',
          image: '/images/feature-trend.svg',
          alt: 'Dashboard mit Vergleich der Produktions-Trends.'
        }
      ]
    },
    infrastructure: {
      eyebrow: 'Infrastruktur',
      title: 'Infrastruktur',
      description:
        'Eine cloud-native Steuerzentrale nimmt Telemetrie auf, orchestriert Analysen und liefert Insights weltweit aus.',
      paragraphs: [
        'Robuste Edge-Collector übertragen detaillierte Telemetrie in regionale Ingestion-Cluster. Ein Kafka-Rückgrat repliziert Events nach BigQuery für Historienanalysen, während Flink-Jobs die Live-Dashboards speisen. Rollenbasierte APIs stellen Aktionen sicher für Web- und Mobile-Clients bereit.',
        'Automatisierte Deployments auf Google Cloud sorgen für konsistente Releases. GitOps-Pipelines prüfen Architekturdiagramme, Schema-Änderungen und Golden Dashboards vor dem Gang in die Produktion.'
      ],
      githubLabel: 'Auf GitHub ansehen',
      imageAlt: 'Diagramm mit Collectors, Streaming-Pipeline, Analytics-Layer und Operator-Console.',
      imageCaption: 'Telemetrie fließt durch resilient aufgebaute Pipelines in eine skalierbare Analytics-Schicht.'
    },
    challenges: {
      eyebrow: 'Herausforderungen',
      title: 'Zentrale Herausforderungen',
      description:
        'Erkenntnisse aus dem Skalieren einer datenintensiven Solar-Monitoring-Plattform.',
      items: [
        {
          title: 'Heterogene Telemetrie vereinheitlichen',
          description:
            'Hersteller liefern Kennzahlen per Modbus, proprietären TCP-Payloads oder REST-Bridges. Wir normalisieren alles in ein gemeinsames Zeitreihen-Schema und gleichen Lücken via Kalman-Glättung aus, damit Dashboards konsistent bleiben.',
          detail:
            'Edge-Collector senden Rohdaten in ein Kafka-Topic; ein WASM-Parser überführt sie protokollübergreifend in strukturiertes JSON.'
        },
        {
          title: 'Geodaten-Abfragen skalieren',
          description:
            'Operatoren filtern nach Einstrahlung, Asset-Health und Standort in Millisekunden – selbst bei tausenden Dächern. Wir kacheln Daten mit H3-Indizes, sharden Anfragen pro Region und cachen Karten-Overlays in Cloud Storage.',
          detail:
            'Vorkomputierte Tiles halten die Interaktionslatenz für 95 % der Requests unter 250 ms.'
        },
        {
          title: 'Fehlalarme eindämmen',
          description:
            'Anomalie-Wellen können Teams überfordern. Wir kalibrieren Detektoren mit saisonalen Basislinien und setzen Quorum-Logik vor Benachrichtigungen ein – so reduzieren wir Rauschen um 63 %, ohne echte Ausfälle zu verbergen.',
          detail:
            'Alarm-Regeln verknüpfen statistische Konfidenz und Zeitkorridore, um kritische Ausfälle zu priorisieren.'
        }
      ]
    },
    developer: {
      eyebrow: 'Team',
      title: 'Über die Entwickler:in',
      description:
        'Erstellt von einer Systems Engineer mit Fokus auf verlässliche Erneuerbare und intuitive Operator-Tools.',
      paragraphs: [
        'Hallo, ich bin Alex – eine Spezialistin für Renewables, die elektrotechnisches Know-how mit cloud-nativen Daten-Stacks verbindet. Ich gestalte Leitstände, die Außenteams Sicherheit geben, Operatoren informieren und Nachhaltigkeitsziele unterstützen.',
        'Aktuelle Projekte reichen von Wechselrichter-Analytik über DER-Forecasting bis hin zu XR-Trainings für Dach-Teams. Ich übersetze chaotische Telemetrie in klare, menschzentrierte Experiences.'
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
