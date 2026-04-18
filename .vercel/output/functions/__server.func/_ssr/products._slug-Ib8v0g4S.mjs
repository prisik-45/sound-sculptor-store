import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route, f as formatPrice, B as Button, a as cart, P as PRODUCTS } from "./router-BN26U3pf.mjs";
import { i as Star, C as Check, a as ShoppingBag, T as Truck, f as ShieldCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const TABS = ["Description", "Additional Info", "Installation", "Reviews"];
function ProductDetail() {
  const {
    product
  } = Route.useLoaderData();
  const [img, setImg] = reactExports.useState(product.image);
  const [thickness, setThickness] = reactExports.useState(product.thicknessOptions?.[0] ?? "");
  const [size, setSize] = reactExports.useState(product.sizeOptions?.[0] ?? "");
  const [addon, setAddon] = reactExports.useState("None");
  const [tab, setTab] = reactExports.useState("Description");
  const variant = [thickness, size].filter(Boolean).join(" · ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-10 md:py-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mb-6 text-xs text-ink-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-ink", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-ink", children: "Products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink", children: product.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-lg bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: product.title, width: 800, height: 800, className: "aspect-square w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-3", children: product.gallery.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setImg(g), className: `h-20 w-20 overflow-hidden rounded-md border-2 transition-colors ${img === g ? "border-primary" : "border-border"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g, alt: "", className: "h-full w-full object-cover", loading: "lazy" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-sm bg-ink px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-background", children: product.badge }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-3xl font-bold leading-tight text-ink md:text-4xl", children: product.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-4 w-4 ${i < Math.round(product.rating) ? "fill-primary text-primary" : "text-border"}` }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-ink-soft", children: [
            product.rating,
            " · ",
            product.reviews,
            " reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-2xl font-semibold text-ink", children: [
          formatPrice(product.priceFrom),
          product.priceTo && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-ink-soft", children: [
            " – ",
            formatPrice(product.priceTo)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: product.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-ink", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 text-primary" }),
          b
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4", children: [
          product.thicknessOptions && /* @__PURE__ */ jsxRuntimeExports.jsx(Selector, { label: "Thickness", value: thickness, onChange: setThickness, options: product.thicknessOptions }),
          product.sizeOptions && /* @__PURE__ */ jsxRuntimeExports.jsx(Selector, { label: "Size", value: size, onChange: setSize, options: product.sizeOptions }),
          product.addons && /* @__PURE__ */ jsxRuntimeExports.jsx(Selector, { label: "Add-ons", value: addon, onChange: setAddon, options: ["None", ...product.addons] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "flex-1", onClick: () => cart.add({
            slug: product.slug,
            title: product.title,
            image: product.image,
            price: product.priceFrom,
            variant: variant || void 0
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "mr-2 h-4 w-4" }),
            " Add to Cart"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", variant: "outline", children: "Buy Now" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6 text-xs text-ink-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-4 w-4 text-primary" }),
            " Pan-India shipping"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-primary" }),
            " Spec-certified materials"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-b border-border", children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `-mb-px border-b-2 px-4 py-3 text-sm font-medium transition-colors ${tab === t ? "border-primary text-ink" : "border-transparent text-ink-soft hover:text-ink"}`, children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 text-sm leading-relaxed text-ink-soft", children: [
        tab === "Description" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Acoustic performance follows the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-ink", children: "Mass Law" }),
            ": doubling the surface mass yields roughly 6 dB additional transmission loss. Combine this product with decoupling and damping for maximum noise reduction (NRC / STC) in your build."
          ] })
        ] }),
        tab === "Additional Info" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-left text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-1/3 py-3 font-medium text-ink", children: "Weight" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3", children: product.weight })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 font-medium text-ink", children: "Dimensions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3", children: product.dimensions })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 font-medium text-ink", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3", children: product.categoryLabel })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 align-top font-medium text-ink", children: "Color options" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: product.colors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-ink", children: c }, c)) }) })
          ] })
        ] }) }) }),
        tab === "Installation" && /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "max-w-2xl space-y-5", children: product.installSteps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pt-1 text-ink", children: s })
        ] }, i)) }),
        tab === "Reviews" && /* @__PURE__ */ jsxRuntimeExports.jsx(Reviews, { rating: product.rating, count: product.reviews })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-ink", children: "You may also like" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4", children: PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/$slug", params: {
        slug: p.slug
      }, className: "group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden rounded-lg bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, className: "h-full w-full object-cover transition-transform group-hover:scale-105", loading: "lazy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-medium text-ink", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-ink-soft", children: [
          "From ",
          formatPrice(p.priceFrom)
        ] })
      ] }, p.slug)) })
    ] })
  ] }) });
}
function Selector({
  label,
  value,
  onChange,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-xs font-medium uppercase tracking-wider text-ink-soft", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onChange(o), className: `rounded-md border px-4 py-2 text-sm transition-colors ${value === o ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-ink hover:border-ink-soft"}`, children: o }, o)) })
  ] });
}
function Reviews({
  rating,
  count
}) {
  const items = [{
    name: "Aarav S.",
    text: "Crystal clear difference in my home theater. Worth every rupee."
  }, {
    name: "Priya M.",
    text: "Installation guide was easy to follow. Studio sounds tighter immediately."
  }, {
    name: "Karan T.",
    text: "Premium build quality and fast shipping. Recommended."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-[260px_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-surface p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-bold text-ink", children: rating.toFixed(1) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex", children: Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-4 w-4 ${i < Math.round(rating) ? "fill-primary text-primary" : "text-border"}` }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-ink-soft", children: [
        "Based on ",
        count,
        " reviews"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: items.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-primary text-primary" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-ink", children: r.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-soft", children: r.text })
    ] }, r.name)) })
  ] });
}
export {
  ProductDetail as component
};
