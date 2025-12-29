export const chart = `%%{init: { "theme": "base",
  "flowchart": { "curve": "basis", "htmlLabels": true },
  "themeVariables": {
    "primaryColor": "transparent",
    "lineColor": "hsl(var(--background))",
    "fontSize": "14px",
    "fontFamily": "Inter, sans-serif",
    "textColor": "hsl(var(--foreground))"
    }}}%%
graph TD

  B["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground))'><b>Browser</b></div>"]

  RP["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));margin-bottom:5px'><b>Reverse Proxy</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>Traefik<br/>TLS termination<br/>Routing</div>"]

  subgraph PR["<div style='padding-left:142px;color:hsl(var(--foreground));font-weight:700'>PROD, STAGING</div>"]

  FE["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));margin-bottom:5px'><b>Frontend</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>React · TypeScript · Tailwind<br/>nginx serves static SPA<br/>nginx proxies <code>/api/**</code> →<br/>
  <code>backend:8080</code></div>"]

  BE["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));margin-bottom:5px'><b>Backend</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>Spring Boot API<br/>Spring Security · JPA · JWT</div>"]
  
  DB[("<div style='text-align:center;font-size:14px;color:hsl(var(--foreground))'><b>Postgres DB</b></div>")]
  end
  
  WRK["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));margin-bottom:5px'><b>Collector / Worker</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>Spring Boot (non-web)<br/>scheduled jobs</div>"]
  
  DBC[("<div style='text-align:center;font-size:14px;color:hsl(var(--foreground))'><b>Postgres DB <br/>(shared cache)</b></div>")]
  
  EX["<div style='text-align:center;font-size:14px;color:hsl(var(--foreground))'><b>External SEMS API</b></div>"]
  
  %% --- FLOWS ---
  WRK --> DBC
  B <-->|HTTPS| RP
  RP -->|"/" static assets| FE
  FE -->|proxy /api/**| BE
  BE -->|JPA| DB
  WRK -->|WebClient| EX
  BE --> |JDBC| DBC
  

  %% --- CLASS DEFINITIONS ---
  classDef rounded fill:transparent,stroke:#555,stroke-width:1px,rx:5,ry:5
  class FE,BE,WRK,RP,B,EX rounded
  classDef db fill:transparent,stroke:#555,stroke-width:1px

  class DBC db
  class DB db

  style PR fill:transparent,stroke:#888,stroke-width:3px,stroke-dasharray:6 4

  %% --- STYLING ALL ARROWS ---
  linkStyle default stroke-width:2px,fill:none
`;
