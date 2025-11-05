/**
 * Adds the demo access key as the sole query parameter for the given URL.
 */
export function buildDemoLink(url: string, demoAccessKey: string | null | undefined) {
  if (!demoAccessKey) return url;

 return url + '/demo-access/' +  demoAccessKey;
}
