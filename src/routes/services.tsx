import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Acoustic Design Services — Tarkshy Acoustic" },
      { name: "description", content: "End-to-end acoustic design for home theaters, multiplexes, recording studios and corporate spaces." },
      { property: "og:title", content: "Acoustic Services — Tarkshy Acoustic" },
      { property: "og:description", content: "Custom acoustic design and installation services." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    headline: "Transform Your Home Theater with Premium Acoustic Solutions.",
    body: "Our home theater treatments ensure crystal clear audio and balanced sound distribution — so every whisper, every explosion lands exactly where the director intended.",
    features: ["Sleek Design", "Custom Fit", "Professional Results"],
    tag: "Home Theater",
  },
  {
    headline: "Cinema-Grade Acoustics for Multiplex Auditoriums.",
    body: "Calibrated absorption and diffusion across rows ensures consistent sound for every seat in the house, with full compliance to Dolby and DTS room specifications.",
    features: ["Reverberation Control", "Seat-to-Seat Consistency", "Code Compliant"],
    tag: "Multiplex Acoustics",
  },
  {
    headline: "Boardroom & Conference Room Speech Clarity.",
    body: "Reduce echo and improve intelligibility in meetings and video calls. Our solutions blend invisibly into modern corporate interiors.",
    features: ["Speech Intelligibility", "Architectural Integration", "Hybrid-Meeting Ready"],
    tag: "Corporate Acoustics",
  },
  {
    headline: "Reference-Grade Recording & Mixing Studios.",
    body: "From tracking rooms to mastering suites, we design rooms with neutral frequency response and tight bass control trusted by working engineers.",
    features: ["Modal Bass Control", "Symmetric Imaging", "Iso-Booth Construction"],
    tag: "Recording Studios",
  },
];

function ServicesPage() {
  return (
    <div className="container-page py-14 md:py-20">
      <div className="max-w-2xl">
        <span className="eyebrow">Design Services</span>
        <h1 className="mt-2 text-3xl font-bold text-ink md:text-5xl">Acoustic engineering, end to end.</h1>
        <p className="mt-3 text-ink-soft">
          Consultation, measurement, design, fabrication and installation — delivered by certified acoustic engineers.
        </p>
      </div>

      <div className="mt-14 space-y-8">
        {SERVICES.map((s, i) => (
          <article
            key={s.tag}
            className="grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-card md:grid-cols-[1fr_2fr] md:p-12"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">0{i + 1} · {s.tag}</p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-ink">{s.headline}</h2>
            </div>
            <div>
              <p className="text-ink-soft">{s.body}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-medium text-ink">
                    <Check className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
              >
                Discuss your project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
