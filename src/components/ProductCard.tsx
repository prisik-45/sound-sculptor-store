import { Link } from "@tanstack/react-router";
import { Eye, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { cart } from "@/lib/cart-store";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="relative block overflow-hidden rounded-lg bg-surface"
      >
        <div className="aspect-square w-full">
          <img
            src={product.image}
            alt={product.title}
            width={800}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-sm bg-ink px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
            {product.badge}
          </span>
        )}

        {/* Hover actions */}
        <div className="absolute inset-x-3 bottom-3 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-background/95 px-3 py-2 text-xs font-medium text-ink shadow-card backdrop-blur">
            <Eye className="h-3.5 w-3.5" /> Quick View
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              cart.add({ slug: product.slug, title: product.title, image: product.image, price: product.priceFrom });
            }}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-card transition-colors hover:bg-primary/90"
          >
            <Plus className="h-3.5 w-3.5" /> Add to Cart
          </button>
        </div>
      </Link>

      <div className="mt-4 flex flex-col gap-1">
        <p className="text-[11px] uppercase tracking-wider text-ink-soft">{product.categoryLabel}</p>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="text-sm font-medium text-ink hover:text-primary"
        >
          {product.title}
        </Link>
        <p className="text-sm text-ink-soft">Starting from <span className="font-semibold text-ink">{formatPrice(product.priceFrom)}</span></p>
      </div>
    </div>
  );
}
