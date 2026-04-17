import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Award, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-theater.jpg";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tarkshy Acoustic — Master Your Sound Environment" },
      { name: "description", content: "Premium soundproofing materials and acoustic design for theaters, studios and corporate spaces." },
      { property: "og:title", content: "Tarkshy Acoustic — Master Your Sound Environment" },
      { property: "og:description", content: "Premium soundproofing materials and acoustic design services." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Premium acoustically-treated home theater"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/30" />
        </div>
        <div className="container-page relative flex min-h-[78vh] flex-col justify-center py-24 text-background">
          <span className="eyebrow text-primary/90">Studio Professional · Since 2014</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Master Your Sound<br /> Environment.
          </h1>
          <p className="mt-6 max-w-xl text-base text-background/75 md:text-lg">
            Engineered acoustic treatment and soundproofing barriers for the world's most demanding listening environments.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/products">Shop Solutions <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-background/30 bg-background/5 text-background hover:bg-background/15 hover:text-background">
              <Link to="/services">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-page grid gap-6 py-10 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Certified Fireproof", body: "Class A / A1 rated materials engineered for safety." },
            { icon: Award, title: "Studio-Grade Spec", body: "NRC, STC and SAA tested across our catalog." },
            { icon: Wrench, title: "Precision Engineering", body: "Custom panel sizes and on-site installation." },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <f.icon className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold text-ink">{f.title}</p>
                <p className="text-sm text-ink-soft">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Bestsellers</span>
            <h2 className="mt-2 text-2xl font-bold text-ink md:text-4xl">Top Rated Solutions</h2>
          </div>
          <Link to="/products" className="hidden text-sm font-medium text-ink-soft hover:text-primary md:inline-flex">
            View all products →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">Design Services</span>
            <h2 className="mt-2 text-2xl font-bold text-ink md:text-4xl">From blueprint to perfect silence.</h2>
            <p className="mt-4 max-w-md text-ink-soft">
              Our acoustic engineers design end-to-end treatments for home theaters, recording studios, multiplexes and corporate boardrooms.
            </p>
            <Button asChild className="mt-8">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {["Home Theater", "Recording Studio", "Multiplex", "Corporate Room"].map((s) => (
              <li key={s} className="rounded-lg border border-border bg-background p-5 text-sm font-medium text-ink">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
