import { useEffect, useState, useCallback } from "react";

export interface CartItem {
  slug: string;
  title: string;
  image: string;
  price: number;
  qty: number;
  variant?: string;
}

type Listener = (items: CartItem[], open: boolean) => void;

let items: CartItem[] = [];
let open = false;
const listeners = new Set<Listener>();

const emit = () => listeners.forEach((l) => l(items, open));

export const cart = {
  add(item: Omit<CartItem, "qty"> & { qty?: number }) {
    const qty = item.qty ?? 1;
    const existing = items.find((i) => i.slug === item.slug && i.variant === item.variant);
    if (existing) existing.qty += qty;
    else items = [...items, { ...item, qty }];
    open = true;
    emit();
  },
  remove(slug: string, variant?: string) {
    items = items.filter((i) => !(i.slug === slug && i.variant === variant));
    emit();
  },
  setQty(slug: string, qty: number, variant?: string) {
    items = items.map((i) =>
      i.slug === slug && i.variant === variant ? { ...i, qty: Math.max(1, qty) } : i,
    );
    emit();
  },
  setOpen(v: boolean) {
    open = v;
    emit();
  },
  getItems() {
    return items;
  },
  getOpen() {
    return open;
  },
};

export function useCart() {
  const [state, setState] = useState({ items, open });
  useEffect(() => {
    const l: Listener = (i, o) => setState({ items: [...i], open: o });
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);
  const setOpen = useCallback((v: boolean) => cart.setOpen(v), []);
  return { ...state, setOpen };
}
