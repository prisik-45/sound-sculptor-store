import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Check, ShoppingBag, Truck, ShieldCheck } from "lucide-react";
import { getProduct, formatPrice, PRODUCTS, type Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { cart } from "@/lib/cart-store";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: p
        ? [
            { title: `${p.title} — Tarkshy Acoustic` },
            { name: "description", content: p.description.slice(0, 155) },
            { property: "og:title", content: `${p.title} — Tarkshy Acoustic` },
            { property: "og:description", content: p.description.slice(0, 155) },
            { property: "og:image", content: p.image },
            { name: "twitter:image", content: p.image },
          ]
        : [{ title: "Product not found" }],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-semibold">Product not found</h1>
      <Link to="/products" className="mt-4 inline-block text-primary">Back to products</Link>
    </div>
  ),
  component: ProductDetail,
});

const TABS = ["Description", "Additional Info", "Installation", "Reviews"] as const;

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [img, setImg] = useState(product.image);
  const [thickness, setThickness] = useState(product.thicknessOptions?.[0] ?? "");
  const [size, setSize] = useState(product.sizeOptions?.[0] ?? "");
  const [addon, setAddon] = useState("None");
  const [tab, setTab] = useState<(typeof TABS)[number]>("Description");

  const variant = [thickness, size].filter(Boolean).join(" · ");

  return (
    <div>
      <div className="container-page py-10 md:py-14">
        {/* breadcrumbs */}
        <nav className="mb-6 text-xs text-ink-soft">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-ink">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.title}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* GALLERY */}
          <div>
            <div className="overflow-hidden rounded-lg bg-surface">
              <img src={img} alt={product.title} width={800} height={800} className="aspect-square w-full object-cover" />
            </div>
            <div className="mt-4 flex gap-3">
              {product.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setImg(g)}
                  className={`h-20 w-20 overflow-hidden rounded-md border-2 transition-colors ${
                    img === g ? "border-primary" : "border-border"
                  }`}
                >
                  <img src={g} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div>
            {product.badge && (
              <span className="inline-block rounded-sm bg-ink px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
                {product.badge}
              </span>
            )}
            <h1 className="mt-3 text-3xl font-bold leading-tight text-ink md:text-4xl">{product.title}</h1>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-primary text-primary" : "text-border"}`} />
                ))}
              </div>
              <span className="text-sm text-ink-soft">{product.rating} · {product.reviews} reviews</span>
            </div>

            <p className="mt-5 text-2xl font-semibold text-ink">
              {formatPrice(product.priceFrom)}
              {product.priceTo && <span className="text-ink-soft"> – {formatPrice(product.priceTo)}</span>}
            </p>

            <ul className="mt-6 space-y-2">
              {product.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4">
              {product.thicknessOptions && (
                <Selector label="Thickness" value={thickness} onChange={setThickness} options={product.thicknessOptions} />
              )}
              {product.sizeOptions && (
                <Selector label="Size" value={size} onChange={setSize} options={product.sizeOptions} />
              )}
              {product.addons && (
                <Selector label="Add-ons" value={addon} onChange={setAddon} options={["None", ...product.addons]} />
              )}
            </div>

            <div className="mt-8 flex gap-3">
              <Button
                size="lg"
                className="flex-1"
                onClick={() =>
                  cart.add({
                    slug: product.slug,
                    title: product.title,
                    image: product.image,
                    price: product.priceFrom,
                    variant: variant || undefined,
                  })
                }
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline">Buy Now</Button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6 text-xs text-ink-soft">
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Pan-India shipping</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Spec-certified materials</div>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-20">
          <div className="flex flex-wrap gap-2 border-b border-border">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`-mb-px border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  tab === t ? "border-primary text-ink" : "border-transparent text-ink-soft hover:text-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="py-8 text-sm leading-relaxed text-ink-soft">
            {tab === "Description" && (
              <div className="max-w-3xl space-y-4">
                <p>{product.description}</p>
                <p>
                  Acoustic performance follows the <strong className="text-ink">Mass Law</strong>: doubling the surface mass
                  yields roughly 6 dB additional transmission loss. Combine this product with decoupling and damping for
                  maximum noise reduction (NRC / STC) in your build.
                </p>
              </div>
            )}
            {tab === "Additional Info" && (
              <div className="max-w-2xl">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-border">
                    <tr><th className="w-1/3 py-3 font-medium text-ink">Weight</th><td className="py-3">{product.weight}</td></tr>
                    <tr><th className="py-3 font-medium text-ink">Dimensions</th><td className="py-3">{product.dimensions}</td></tr>
                    <tr><th className="py-3 font-medium text-ink">Category</th><td className="py-3">{product.categoryLabel}</td></tr>
                    <tr>
                      <th className="py-3 align-top font-medium text-ink">Color options</th>
                      <td className="py-3">
                        <div className="flex flex-wrap gap-1.5">
                          {product.colors.map((c) => (
                            <span key={c} className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-ink">{c}</span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {tab === "Installation" && (
              <ol className="max-w-2xl space-y-5">
                {product.installSteps.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-ink">{s}</p>
                  </li>
                ))}
              </ol>
            )}
            {tab === "Reviews" && <Reviews rating={product.rating} count={product.reviews} />}
          </div>
        </div>

        {/* RELATED */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold text-ink">You may also like</h3>
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4).map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group">
                <div className="aspect-square overflow-hidden rounded-lg bg-surface">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                </div>
                <p className="mt-3 text-sm font-medium text-ink">{p.title}</p>
                <p className="text-sm text-ink-soft">From {formatPrice(p.priceFrom)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Selector({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-soft">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-md border px-4 py-2 text-sm transition-colors ${
              value === o ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-ink hover:border-ink-soft"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Reviews({ rating, count }: { rating: number; count: number }) {
  const items = [
    { name: "Aarav S.", text: "Crystal clear difference in my home theater. Worth every rupee." },
    { name: "Priya M.", text: "Installation guide was easy to follow. Studio sounds tighter immediately." },
    { name: "Karan T.", text: "Premium build quality and fast shipping. Recommended." },
  ];
  return (
    <div className="grid gap-8 md:grid-cols-[260px_1fr]">
      <div className="rounded-lg border border-border bg-surface p-6">
        <p className="text-4xl font-bold text-ink">{rating.toFixed(1)}</p>
        <div className="mt-2 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? "fill-primary text-primary" : "text-border"}`} />
          ))}
        </div>
        <p className="mt-2 text-sm text-ink-soft">Based on {count} reviews</p>
      </div>
      <ul className="divide-y divide-border">
        {items.map((r) => (
          <li key={r.name} className="py-5">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium text-ink">{r.name}</span>
            </div>
            <p className="mt-2 text-sm text-ink-soft">{r.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
