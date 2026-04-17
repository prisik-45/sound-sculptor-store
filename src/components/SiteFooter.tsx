import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="text-lg font-bold tracking-tight text-ink">
            Tarkshy<span className="text-primary">.</span>Acoustic
          </span>
          <p className="mt-3 max-w-sm text-sm text-ink-soft">
            Professional-grade soundproofing materials and acoustic design services for studios, theaters and corporate spaces.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-ink">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li><Link to="/products" className="hover:text-ink">Products</Link></li>
            <li><Link to="/services" className="hover:text-ink">Services</Link></li>
            <li><Link to="/about" className="hover:text-ink">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-ink">Reach Us</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>+91 98765 43210</li>
            <li>contact@tarkshyacoustic.com</li>
            <li>GIFT City, Gandhinagar</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-soft md:flex-row">
          <p>© {new Date().getFullYear()} Tarkshy Acoustic. All rights reserved.</p>
          <p>Sculpting silence since day one.</p>
        </div>
      </div>
    </footer>
  );
}
