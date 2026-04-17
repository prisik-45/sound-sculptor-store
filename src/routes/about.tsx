import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, ShieldCheck, Cog } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tarkshy Acoustic" },
      { name: "description", content: "We sculpt silence. Bridging industrial acoustic science with aesthetic interior design." },
      { property: "og:title", content: "About Tarkshy Acoustic" },
      { property: "og:description", content: "Sculpting silence — premium acoustic materials and design services." },
    ],
  }),
  component: AboutPage,
});

const REASONS = [
  { icon: Lightbulb, title: "Expert Consultation", body: "On-site measurement and tailored design from certified acoustic engineers." },
  { icon: ShieldCheck, title: "Certified Fireproof", body: "Every panel and barrier meets Class A / A1 fire safety standards." },
  { icon: Cog, title: "Precision Engineering", body: "Materials cut and finished to your project's exact specification." },
];

function AboutPage() {
  return (
    <div>
      <section className="container-page py-16 md:py-24">
        <span className="eyebrow">About Us</span>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-[1.05] text-ink md:text-6xl">
          We don't just sell materials. <span className="text-primary">We sculpt silence.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          At Tarkshy Acoustic, we bridge the gap between industrial science and aesthetic interior design.
          Our mission is to provide professional-grade insulation for creators and collectors alike.
        </p>
      </section>

      <section className="bg-surface">
        <div className="container-page grid gap-10 py-16 md:py-24 md:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.title} className="rounded-xl border border-border bg-background p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{r.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { k: "10+", v: "Years engineering acoustic environments" },
            { k: "500+", v: "Projects across India and the Middle East" },
            { k: "16", v: "Designer fabric finishes in stock" },
          ].map((s) => (
            <div key={s.k}>
              <p className="text-5xl font-bold text-ink">{s.k}</p>
              <p className="mt-2 text-sm text-ink-soft">{s.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
