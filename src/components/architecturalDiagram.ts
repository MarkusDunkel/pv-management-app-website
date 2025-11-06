export const chart = `%%{init: { "theme": "base",
  "flowchart": { "curve": "basis", "htmlLabels": true },
  "themeVariables": {
    "primaryColor": "transparent",
    "lineColor": "hsl(var(--background))",
    "fontSize": "14px",
    "fontFamily": "Inter, sans-serif",
    "textColor": "hsl(var(--foreground))"}}}%%
graph TD

  B["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground))'><b>Browser</b></div>"]

  RP["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));margin-bottom:5px'><b>Reverse Proxy</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>Traefik<br/>TLS termination<br/>Routing</div>"]

  FE["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));height:0px;margin-bottom:-12px'><b>Frontend</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>React · TypeScript · Tailwind<br/>nginx serves static SPA<br/>nginx proxies <code>/api/**</code> → <code>backend:8080</code></div>"]

  BE["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));margin-bottom:5px'><b>Backend</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>Spring Boot API<br/>Spring Security · JPA · JWT</div>"]

  WRK["<div style='text-align:center;font-size:17px;color:hsl(var(--foreground));margin-bottom:5px'><b>Collector / Worker</b></div>
  <div style='text-align:left;color:hsl(var(--foreground))'>Spring Boot (non-web)<br/>scheduled jobs</div>"]

  EX["<div style='text-align:center;font-size:14px;color:hsl(var(--foreground))'><b>External SEMS API</b></div>"]

  DB[("<div style='text-align:center;font-size:14px;color:hsl(var(--foreground))'><b>PostgreSQL</b></div>")]

  %% --- FLOWS ---
  B <-->|HTTPS| RP
  RP -->|"/" static assets| FE
  FE -->|proxy /api/**| BE
  BE -->|JPA| DB
  WRK -->|WebClient| EX
  WRK --> DB

  %% --- CLASS DEFINITIONS ---
  classDef rounded fill:transparent,stroke:#555,stroke-width:1px,rx:5,ry:5
  class FE,BE,WRK,EX,RP,B rounded
  classDef db fill:transparent,stroke:#555,stroke-width:1px
  class DB db

  %% --- STYLING ALL ARROWS ---
  linkStyle default stroke-width:1.5px,fill:none
`;