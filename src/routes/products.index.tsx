import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CATEGORIES, PRODUCTS, type ProductCategory } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Acoustic Panels, Bass Traps & Soundproofing | Tarkshy Acoustic" },
      { name: "description", content: "Browse acoustic panels, bass traps, diffusers, MLV barriers and insulation materials engineered for studios and theaters." },
      { property: "og:title", content: "Acoustic Products — Tarkshy Acoustic" },
      { property: "og:description", content: "Studio-grade acoustic treatment and soundproofing materials." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<ProductCategory | "all">("all");
  const filtered = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <div className="container-page py-14 md:py-20">
      <div className="mb-10 max-w-2xl">
        <span className="eyebrow">Catalog</span>
        <h1 className="mt-2 text-3xl font-bold text-ink md:text-5xl">Acoustic Solutions</h1>
        <p className="mt-3 text-ink-soft">
          Professional materials curated by category. Every product is spec-tested for performance.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Categories</h3>
          <ul className="mt-4 space-y-1">
            <li>
              <button
                onClick={() => setActive("all")}
                className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  active === "all" ? "bg-ink text-background" : "text-ink hover:bg-secondary"
                }`}
              >
                All Products
              </button>
            </li>
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => setActive(c.id)}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    active === c.id ? "bg-ink text-background" : "text-ink hover:bg-secondary"
                  }`}
                >
                  {c.label}
                </button>
                {active === c.id && (
                  <ul className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                    {c.sub.map((s) => (
                      <li key={s} className="py-1 text-xs text-ink-soft">{s}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <p className="mb-6 text-sm text-ink-soft">{filtered.length} products</p>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
