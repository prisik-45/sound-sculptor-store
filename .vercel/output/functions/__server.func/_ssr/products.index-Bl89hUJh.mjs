import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PRODUCTS, C as CATEGORIES } from "./router-BN26U3pf.mjs";
import { P as ProductCard } from "./ProductCard-CEiWPL7j.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/lucide-react.mjs";
function ProductsPage() {
  const [active, setActive] = reactExports.useState("all");
  const filtered = active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-14 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Catalog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-3xl font-bold text-ink md:text-5xl", children: "Acoustic Solutions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-ink-soft", children: "Professional materials curated by category. Every product is spec-tested for performance." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[260px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-24 lg:self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold uppercase tracking-wider text-ink-soft", children: "Categories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive("all"), className: `w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${active === "all" ? "bg-ink text-background" : "text-ink hover:bg-secondary"}`, children: "All Products" }) }),
          CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(c.id), className: `w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${active === c.id ? "bg-ink text-background" : "text-ink hover:bg-secondary"}`, children: c.label }),
            active === c.id && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "ml-3 mt-1 space-y-1 border-l border-border pl-3", children: c.sub.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "py-1 text-xs text-ink-soft", children: s }, s)) })
          ] }, c.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-6 text-sm text-ink-soft", children: [
          filtered.length,
          " products"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3", children: filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.slug)) })
      ] })
    ] })
  ] });
}
export {
  ProductsPage as component
};
