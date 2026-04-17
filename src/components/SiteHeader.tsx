import { Link } from "@tanstack/react-router";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { cart, useCart } from "@/lib/cart-store";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const { items } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-ink md:text-xl">
            Tarkshy<span className="text-primary">.</span>Acoustic
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button aria-label="Search" className="rounded-full p-2 text-ink-soft hover:bg-secondary hover:text-ink">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="rounded-full p-2 text-ink-soft hover:bg-secondary hover:text-ink">
            <User className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={() => cart.setOpen(true)}
            className="relative rounded-full p-2 text-ink-soft hover:bg-secondary hover:text-ink"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="ml-1 rounded-full p-2 text-ink-soft hover:bg-secondary hover:text-ink md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col py-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-medium text-ink-soft"
                activeProps={{ className: "text-ink" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
