import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { cart, useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/products";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { items, open, setOpen } = useCart();
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-elev transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-base font-semibold text-ink">Your Cart</h2>
          <button onClick={() => setOpen(false)} aria-label="Close cart" className="rounded-full p-2 hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-ink-soft/50" />
            <p className="text-sm text-ink-soft">Your cart is empty.</p>
            <Button variant="outline" onClick={() => setOpen(false)}>Continue browsing</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {items.map((it) => (
                <div key={it.slug + (it.variant ?? "")} className="flex gap-4 py-5">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-surface">
                    <img src={it.image} alt={it.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium leading-tight text-ink">{it.title}</p>
                        {it.variant && <p className="mt-0.5 text-xs text-ink-soft">{it.variant}</p>}
                      </div>
                      <button
                        onClick={() => cart.remove(it.slug, it.variant)}
                        className="text-xs text-ink-soft hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-md border border-border">
                        <button
                          onClick={() => cart.setQty(it.slug, it.qty - 1, it.variant)}
                          className="p-1.5 text-ink-soft hover:text-ink"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{it.qty}</span>
                        <button
                          onClick={() => cart.setQty(it.slug, it.qty + 1, it.variant)}
                          className="p-1.5 text-ink-soft hover:text-ink"
                          aria-label="Increase"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-ink">{formatPrice(it.price * it.qty)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-border px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-soft">Subtotal</span>
                <span className="font-semibold text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-ink-soft">Shipping and taxes calculated at checkout.</p>
              <Button className="w-full" size="lg">Checkout</Button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
