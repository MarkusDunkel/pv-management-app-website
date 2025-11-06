import { useEffect, useId, useRef } from "react";
import mermaid from "mermaid";
import type { MermaidConfig } from "mermaid";

type Props = {
  chart: string;                 // the Mermaid definition
  className?: string;            // optional wrapper class
  config?: MermaidConfig;       // optional per-instance config overrides
};

export const Mermaid=({ chart, className, config }: Props) =>{
  const id = useId().replace(/:/g, "_"); // ensure a valid DOM id
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
        ? "dark"
        : "default",
      ...config,
    });

    let cancelled = false;

    (async () => {
      try {
        const { svg } = await mermaid.render(`mmd_${id}`, chart);
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      } catch (e) {
        if (ref.current) {
          ref.current.innerHTML = `<pre style="color:red">Mermaid error:\n${String(
            e
          )}</pre>`;
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, id, config]);

  return <div ref={ref} className={className} />;
}
