const MAP: Record<string, { key: string; label: string }> = {
  "is-delta-8-legal": { key: "delta8", label: "Delta-8 THC" },
  "thca-loophole-explained": { key: "thca", label: "THCA" },
  "cbd-vs-delta-8": { key: "cbd", label: "CBD" },
  "hemp-derived-delta-9": { key: "delta9Hemp", label: "Delta-9 THC" },
  "2026-hemp-ban-consumers": { key: "cbd", label: "CBD" },
};

export function blogCompound(slug: string): { key: string; label: string } | null {
  return MAP[slug] ?? null;
}

export function splitHtmlForCta(html: string): { before: string; after: string } | null {
  const idxs: number[] = [];
  const re = /<\/p>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) idxs.push(m.index + m[0].length);
  if (idxs.length < 5) return null;
  const target = html.length / 2;
  const cut = idxs.reduce((a, b) => (Math.abs(b - target) < Math.abs(a - target) ? b : a));
  return { before: html.slice(0, cut), after: html.slice(cut) };
}
