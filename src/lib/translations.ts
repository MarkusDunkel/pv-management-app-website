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
      developer: 'About Me',
    },
    layout: {
      productLabel: 'PV Platform',
      sidebarIntro: "Overview, architecture, and insights into the platform's development.",
      sidebarTitle: 'Homewatts\nPhotovoltaic Monitoring and Analytics',
      themeLabel: 'Theme',
      languageLabel: 'Language',
      mobileSubtitle: 'Photovoltaik Surveillance & Analytics',
      openMenuLabel: 'Open navigation menu',
      closeMenuLabel: 'Close navigation menu',
      languageToggleAria: 'Select language',
      themeToggleAria: 'Toggle color mode',
      primaryNavLabel: 'Primary navigation',
    },
    hero: {
      eyebrow: 'Overview',
      title: 'Homewatts – Photovoltaic Monitoring and Analytics',
      description:
        'Smart energy analytics for your home: monitor, understand and optimise your photovoltaic system with battery storage.',
      body: 'This platform, built specifically for photovoltaics, makes your energy data transparent: monitor performance and efficiency in real time, detect faults instantly, and uncover new opportunities for optimisation and investment.',
      ctas: {
        primary: 'Try the Demo',
        secondary: 'View on GitHub',
      },
      demoModal: {
        title: 'Enter your demo access key',
        description: 'Request demo key and paste it below to open the live application.',
        descriptionTwo:
          'Was a link to this website shared with you? Then you will often find the demo key embedded in it!',
        inputLabel: 'Demo access key',
        inputPlaceholder: 'e.g. HW-DEMO-1234',
        confirm: 'Continue to demo',
        cancel: 'Cancel',
      },
    },
    features: {
      eyebrow: 'Features',
      title: 'Platform Features',
      description:
        'Capture. Analyse. Optimize. Everything PV owners need to get the most from their solar system.',
      cards: [
        {
          title: 'Real-time Visualisation',
          description:
            'Dashboards visualise module values in real time, allowing you to adjust your energy consumption intelligently.',
          image: '/images/hero-solar-array.svg',
          alt: 'Line chart with the performance history of solar modules.',
        },
        {
          title: 'Remote Monitoring',
          description: 'Stay informed on the go and detect faults in real time.',
          image: '/images/feature-anomaly.svg',
          alt: 'Heatmap view with an anomalous solar string highlighted.',
        },
        {
          title: 'Panel Size Optimization',
          description: `
Maximizing the benefits of a photovoltaic (PV) system requires selecting an optimal panel capacity. 
Depending on household consumption patterns, PV production characteristics, and financial 
parameters—including investment costs, electricity selling prices, and panel purchase costs—it 
is possible to identify the panel size that maximizes overall energy savings.

**The objective is to express total saving potential as a function of PV capacity.** 
The following section describes the energy and cost balances used for this calculation. 

The daily PV production and consumption balances (in kWh/day) are:

$$
E_{\\text{pv}} = E_{\\text{fit}} + E_{\\text{excess}}, 
$$
$$
E_{\\text{demand}} = E_{\\text{fit}} + E_{\\text{lack}}. 
$$

where $E_{\\text{fit}}$ is the solar energy that is immediately consumed by the household, 
$E_{\\text{excess}}$ is the solar energy that surpasses consumption and must be sold, 
and $E_{\\text{lack}}$ is the consumption that cannot be met by production of solar energy.
\\
To maintain consistent units, all monetary terms are expressed in €/day, and all energy terms in kWh/day.
Thus, the daily electricity costs become:

$$
C_{\\text{total}} = C_{\\text{fit}} + C_{\\text{excess}} + C_{\\text{grid}}.
$$

## Cost Components

### Self-Consumed PV Electricity

Self-consumed PV electricity is assigned the investment-derived cost per kWh produced:

$$
C_{\\text{fit}} = E_{\\text{fit}} \\cdot
 c_{\\text{panel}} \\cdot η^{-1} \\cdot r.
$$

Here:
- $c_{\\text{panel}} \\cdot η^{-1} \\cdot r$ is the effective panel cost per kWh produced,
    - where $c_{\\text{panel}}$ [€/kWp] is the panel purchase cost per kilowatt-peak,
    - $η$ [1] an efficiency factor (see below) and
    - $r$ [1/h] is the reciprocal of the reinvestment (or amortization) time $T_{\\text{h}}$, e.g. $r=(T_{\\text{h}})^{-1}$.

### Excess PV Electricity (Exported)

Electricity exported to the grid yields income at the selling price:

$$
C_{\\text{excess}} = E_{\\text{excess}} \\cdot
\\bigl(c_{\\text{panel}} \\cdot η^{-1} \\cdot r - c_{\\text{sell}}\\bigr).
$$

where $c_{\\text{sell}}$ [€/kWh] is the electricity selling price

### Purchased Electricity (Grid Consumption)

Any remaining demand must be covered by grid electricity and is treated as a cost:

$$
C_{\\text{grid}} = E_{\\text{lack}} \\cdot c_{\\text{grid}}.
$$

where $c_{\\text{grid}}$ [€/kWh] is the electricity purchase price

## Efficiency Factor

The efficiency factor $η$ compares the actual daily PV production at the specific location and climate to the theoretical daily production under idealized laboratory conditions (e.g. constant maximal radiation over the whole day):

$$
η =
\\frac{\\int_{0}^{24\\,\\mathrm{h}} P_{\\text{mean}}(t) \\, \\mathrm{d}t}{P_{\\text{lab}} \\cdot 24\\,\\mathrm{h}},
$$

where
- $P_{\\text{mean}}(t)$ [kW]: actual average power output over the day and
- $P_{\\text{lab}}$ [kWp]: nominal panel power under lab conditions,
`,
          image: '/images/feature-visualization.svg',
          alt: 'Engineer initiating a remote diagnostic.',
        },
      ],
    },
    infrastructure: {
      eyebrow: 'Infrastructure',
      title: 'Infrastructure',
      description:
        'A cloud-native control centre captures telemetry, orchestrates analytics, and delivers insights in real time.',
      paragraphs: [
        `The diagram shows a modern web application architecture for PROD and STAGING. A reverse proxy (Traefik) handles 
        TLS termination and routing. The browser accesses a React/TypeScript SPA via HTTPS, which is delivered as 
        a static application by nginx. API requests (/api/**) are forwarded from the frontend to a Spring Boot 
        backend API, which encapsulates authentication (JWT), business logic, and persistence via JPA on a 
        PostgreSQL database.`,
        `Both the production and staging data storage as well as the database shown as a cache are technically 
        based on the same PostgreSQL database instance, which is operated within a single Docker container. These 
        are not separate databases, but rather one shared database that is used differently on a logical level.`,
        `The visual separation in the diagram serves exclusively as a matter of emphasis: the data for PROD and STAGING 
        is treated and managed as distinct functional environments, while the caching usage is independent of them. 
        A separate Spring Boot worker executes scheduled jobs, calls the external SEMS API, and writes the results into 
        this shared database.`,
        `This architectural decision pursues two goals: first, the SEMS API only allows retrieval of the current values. 
        Since the worker runs as an independent service, no data gaps occur when the rest of the application 
        is updated or restarted. Second, the SEMS API is unstable under a high number of concurrent requests. 
        By centrally collecting and bundling requests, all environments are supplied efficiently while reducing 
        load on the external interface.`,
      ],
      githubLabel: 'View on GitHub',
      imageAlt:
        'Diagram showing collectors, streaming pipeline, analytics layer, and operator console.',
      imageCaption: 'Architecture overview / system overview',
    },
    developer: {
      eyebrow: 'Person',
      title: 'About Me',
      description: 'Passion for data-driven process automation.',
      paragraphs: [
        "Hi, I'm Markus—a software engineer with a keen interest in digitising business processes. I love translating complex business logic into clean, maintainable, and user-centred software.",
        'I see the interplay between data structure, business logic, and user experience as the key to sustainable digital transformation, and I want to help shape that progress. I combine analytical skills from studying climate physics with the systems thinking of an IT specialist.',
      ],
      links: [
        {
          href: 'https://github.com/MarkusDunkel',
          label: 'GitHub',
          aria: "Open Markus Dunkel's GitHub profile",
        },
        {
          href: 'https://linkedin.com/in/mdunkel/',
          label: 'LinkedIn',
          aria: "Open Markus Dunkel's LinkedIn profile",
        },
        {
          href: 'mailto:me@markusdunkel.at',
          label: 'Email',
          aria: 'Send an email to Markus Dunkel',
        },
      ],
      avatarAlt: 'Markus Dunkel',
    },
  },
  de: {
    nav: {
      about: 'Überblick',
      features: 'Funktionen',
      infrastructure: 'Infrastruktur',
      challenges: 'Zentrale Herausforderungen',
      developer: 'Über mich',
    },
    layout: {
      productLabel: 'PV-Plattform',
      sidebarIntro: 'Überblick, Architektur und Einblicke in die Entwicklung der Plattform.',
      sidebarTitle: 'Homewatts\nPhotovoltaik-Überwachung und Analytics',
      themeLabel: 'Darstellung',
      languageLabel: 'Sprache',
      mobileSubtitle: 'Photovoltaik Surveillance & Analytics',
      openMenuLabel: 'Navigationsmenü öffnen',
      closeMenuLabel: 'Navigationsmenü schließen',
      languageToggleAria: 'Sprache auswählen',
      themeToggleAria: 'Darstellung umschalten',
      primaryNavLabel: 'Hauptnavigation',
    },
    hero: {
      eyebrow: 'Überblick',
      title: 'Homewatts – Photovoltaik-Überwachung und Analytics',
      description:
        'Intelligente Energieanalyse für dein Zuhause – überwache, verstehe und optimiere deine Photovoltaikanlage mit Batteriespeicher.',
      body: 'Die speziell für Photovoltaik entwickelte Plattform macht Ihre Energie transparent: Überwachen Sie Leistung und Effizienz in Echtzeit, erkennen Sie Störungen sofort und entdecken Sie neue Potenziale für Optimierung und Investitionen.',
      ctas: {
        primary: 'Demo starten',
        secondary: 'Auf Github ansehen',
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
        cancel: 'Abbrechen',
      },
    },
    features: {
      eyebrow: 'Funktionen',
      title: 'Plattform-Funktionen',
      description:
        'Erfassen. Analysieren. Optimiere. Alles, was PV-Besitzer brauchen, um das Maximum aus ihrer Solaranlage herauszuholen.',
      cards: [
        {
          title: 'Echtzeit-Visualisierung',
          description:
            'Dashboards visualisieren Modulwerte in Echtzeit, sodass Sie Ihren Stromverbrauch intelligent anpassen können.',
          image: '/images/hero-solar-array.svg',
          alt: 'Liniendiagramm mit Leistungsverlauf der Solarmodule.',
        },
        {
          title: 'Remote Monitoring',
          description:
            'Bleiben Sie auch unterwegs informiert und erkennen Sie Störungen in Echtzeit.',
          image: '/images/feature-anomaly.svg',
          alt: 'Heatmap-Ansicht mit hervorgehobener Anomalie in einem Solarstring.',
        },
        {
          title: 'Analyse und Optimierung',
          description: `
Die Maximierung des Nutzens einer Photovoltaikanlage (PV) erfordert die Wahl einer optimalen Modulgröße. 
Abhängig von den Verbrauchsmustern des Haushalts, den Produktionscharakteristika der PV-Anlage sowie finanziellen 
Parametern – einschließlich Investitionskosten, Einspeisevergütungen und Anschaffungskosten der Module – 
ist es möglich, die Modulgröße zu bestimmen, die die gesamten Energieeinsparungen maximiert.

**Ziel ist es, das Einsparungspotenzial als Funktion der Größe der PV-Anlage auszudrücken.** 
Der folgende Abschnitt beschreibt die Energie- und Kostenbilanzen, die für diese Berechnung verwendet werden. 

Die täglichen PV-Produktions- und Verbrauchsbilanzen (in kWh/Tag) lauten:

$$
E_{\\text{pv}} = E_{\\text{fit}} + E_{\\text{excess}}, 
$$
$$
E_{\\text{demand}} = E_{\\text{fit}} + E_{\\text{lack}}. 
$$

wobei $E_{\\text{fit}}$ die Solarenergie ist, die unmittelbar vom Haushalt verbraucht wird, 
$E_{\\text{excess}}$ die Solarenergie ist, die den Verbrauch übersteigt und verkauft werden muss, 
und $E_{\\text{lack}}$ der Verbrauch ist, der nicht durch die Erzeugung von Solarenergie gedeckt werden kann.

Um konsistente Einheiten zu gewährleisten, werden alle monetären Größen in €/Tag und alle Energiegrößen in kWh/Tag angegeben.
Damit ergeben sich die täglichen Stromkosten zu:

$$
C_{\\text{total}} = C_{\\text{fit}} + C_{\\text{excess}} + C_{\\text{grid}}.
$$

## Kostenkomponenten

### Eigenverbrauchter PV-Strom

Eigenverbrauchter PV-Strom wird mit den aus der Investition abgeleiteten Kosten pro erzeugter kWh bewertet:

$$
C_{\\text{fit}} = E_{\\text{fit}} \\cdot
 c_{\\text{panel}} \\cdot η^{-1} \\cdot r.
$$

Hierbei gilt:
- $c_{\\text{panel}} \\cdot η^{-1} \\cdot r$ sind die effektiven Modulkosten pro erzeugter kWh,
    - wobei $c_{\\text{panel}}$ [€/kWp] die Anschaffungskosten der Module pro Kilowatt-Peak sind,
    - $η$ [1] ein Effizienzfaktor (siehe unten) und
    - $r$ [1/h] der Kehrwert der Reinvestitions- (oder Amortisations-)zeit $T_{\\text{h}}$ ist, z. B. $r=(T_{\\text{h}})^{-1}$.

### Überschüssiger PV-Strom (Einspeisung)

Ins Netz eingespeister Strom erzielt Einnahmen zum Verkaufspreis:

$$
C_{\\text{excess}} = E_{\\text{excess}} \\cdot
\\bigl(c_{\\text{panel}} \\cdot η^{-1} \\cdot r - c_{\\text{sell}}\\bigr).
$$

wobei $c_{\\text{sell}}$ [€/kWh] der Stromverkaufspreis ist

### Zugekaufter Strom (Netzbezug)

Der verbleibende Bedarf muss durch Netzstrom gedeckt werden und wird als Kosten behandelt:

$$
C_{\\text{grid}} = E_{\\text{lack}} \\cdot c_{\\text{grid}}.
$$

wobei $c_{\\text{grid}}$ [€/kWh] der Strombezugspreis ist

## Effizienzfaktor

Der Effizienzfaktor $η$ vergleicht die tatsächliche tägliche PV-Produktion am jeweiligen Standort 
und unter den gegebenen klimatischen Bedingungen mit der theoretischen täglichen Produktion unter 
idealisierten Laborbedingungen (z. B. konstante maximale Einstrahlung über den gesamten Tag):

$$
η =
\\frac{\\int_{0}^{24\\,\\mathrm{h}} P_{\\text{mean}}(t) \\, \\mathrm{d}t}{P_{\\text{lab}} \\cdot 24\\,\\mathrm{h}},
$$

wobei
- $P_{\\text{mean}}(t)$ [kW]: die tatsächliche mittlere Leistungsabgabe über den Tag und
- $P_{\\text{lab}}$ [kWp]: die Nennleistung des Moduls unter Laborbedingungen,`,
          image: '/images/feature-visualization.svg',
          alt: 'Ingenieur:in, die aus der Ferne eine Diagnose auslöst.',
        },
      ],
    },
    infrastructure: {
      eyebrow: 'Infrastruktur',
      title: 'Infrastruktur',
      description:
        'Eine cloud-native Steuerzentrale erfasst Telemetriedaten, orchestriert Analysen und liefert Erkenntnisse in Echtzeit aus.',
      paragraphs: [
        `Das Diagramm zeigt eine moderne Web-Anwendungsarchitektur für PROD und STAGING. Ein Reverse Proxy (Traefik) übernimmt 
        TLS-Terminierung und Routing. Der Browser greift per HTTPS auf eine React/TypeScript SPA zu, die als statische Anwendung 
        von nginx ausgeliefert wird. API-Requests (/api/**) werden vom Frontend an eine Spring-Boot-Backend-API weitergeleitet,  
        die Authentifizierung (JWT), Geschäftslogik und Persistenz via JPA auf einer PostgreSQL-Datenbank kapselt.`,
        `Sowohl die Produktiv- und Staging-Datenhaltung als auch die als Cache dargestellte Datenbank basieren technisch auf derselben 
        PostgreSQL-Datenbankinstanz, die in einem einzigen Docker-Container betrieben wird. Es handelt sich dabei nicht um 
        getrennte Datenbanken, sondern um eine gemeinsame Datenbank, die logisch unterschiedlich genutzt wird.`,
        `Die visuelle Trennung im Diagramm dient ausschließlich der Schwerpunktsetzung: Die Daten für PROD und STAGING werden
        als eigenständige fachliche Environments betrachtet und verwaltet, während die Caching-Nutzung davon unabhängig erfolgt. 
        Ein separater Spring-Boot-Worker führt zeitgesteuerte Jobs aus, ruft die externe SEMS-API ab und schreibt 
        die Ergebnisse in diese gemeinsame Datenbank.`,
        `Diese Architekturentscheidung verfolgt zwei Ziele:
        Zum einen erlaubt die SEMS API ausschließlich das Abrufen aktueller Werte. Da der Worker als eigenständiger Service läuft, 
        entstehen beim Aktualisieren oder Neustarten der restlichen Applikation keine Datenlücken. Zum anderen reagiert die SEMS API 
        instabil auf viele gleichzeitige Anfragen. Durch die zentrale Erfassung und Bündelung der Abfragen werden alle Environments 
        effizient versorgt und die externe Schnittstelle geschont.`,
      ],
      githubLabel: 'Auf GitHub ansehen',
      imageAlt:
        'Diagramm mit Collectors, Streaming-Pipeline, Analytics-Layer und Operator-Console.',
      imageCaption: 'Architekturübersicht / Systemübersicht',
    },
    developer: {
      eyebrow: 'Person',
      title: 'Über mich',
      description: 'Leidenschaft für datengetriebene Prozessautomatisierung',
      paragraphs: [
        'Hallo, ich bin Markus – ein Softwareentwickler mit einem besonderen Interesse an der Digitalisierung geschäftlicher Prozesse. Mich begeistert, wie sich komplexe Geschäftslogik in klar strukturierte, wartbare und zugleich nutzerorientierte Software übersetzen lässt.',
        'Die Verbindung von Datenstruktur, Geschäftslogik und Nutzererlebnis betrachte ich als Schlüssel zu nachhaltiger digitaler Transformation und möchte diesen Fortschritt aktiv mitgestalten. Dabei verbinde ich meine analytischen Fähigkeiten aus dem Studium der Klimaphysik mit dem systemischen Denken eines Informationstechnologen.',
      ],
      links: [
        {
          href: 'https://github.com/MarkusDunkel',
          label: 'GitHub',
          aria: 'GitHub-Profil von Markus Dunkel öffnen',
        },
        {
          href: 'https://linkedin.com/in/mdunkel/',
          label: 'LinkedIn',
          aria: 'LinkedIn-Profil von Markus Dunkel öffnen',
        },
        { href: 'mailto:me@markusdunkel.at', label: 'E-Mail', aria: 'E-Mail an Markus Dunkel' },
      ],
      avatarAlt: 'Markus Dunkel',
    },
  },
};

export const navOrder: NavKey[] = [
  'about',
  'features',
  'infrastructure',
  'challenges',
  'developer',
];
