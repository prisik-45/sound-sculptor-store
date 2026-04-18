import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button, P as PRODUCTS } from "./router-BN26U3pf.mjs";
import { P as ProductCard } from "./ProductCard-CEiWPL7j.mjs";
import { A as ArrowRight, f as ShieldCheck, h as Award, W as Wrench } from "../_libs/lucide-react.mjs";
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
const heroImg = "/assets/hero-theater-BkPCdUSy.jpg";
function HomePage() {
  const featured = PRODUCTS.slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Premium acoustically-treated home theater", width: 1920, height: 1080, className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/30" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative flex min-h-[78vh] flex-col justify-center py-24 text-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow text-primary/90", children: "Studio Professional · Since 2014" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl", children: [
          "Master Your Sound",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " Environment."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base text-background/75 md:text-lg", children: "Engineered acoustic treatment and soundproofing barriers for the world's most demanding listening environments." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products", children: [
            "Shop Solutions ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-background/30 bg-background/5 text-background hover:bg-background/15 hover:text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "Book a Consultation" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page grid gap-6 py-10 md:grid-cols-3", children: [{
      icon: ShieldCheck,
      title: "Certified Fireproof",
      body: "Class A / A1 rated materials engineered for safety."
    }, {
      icon: Award,
      title: "Studio-Grade Spec",
      body: "NRC, STC and SAA tested across our catalog."
    }, {
      icon: Wrench,
      title: "Precision Engineering",
      body: "Custom panel sizes and on-site installation."
    }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "mt-0.5 h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-ink", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-soft", children: f.body })
      ] })
    ] }, f.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Bestsellers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl font-bold text-ink md:text-4xl", children: "Top Rated Solutions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hidden text-sm font-medium text-ink-soft hover:text-primary md:inline-flex", children: "View all products →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4", children: featured.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid gap-10 py-20 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Design Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl font-bold text-ink md:text-4xl", children: "From blueprint to perfect silence." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-ink-soft", children: "Our acoustic engineers design end-to-end treatments for home theaters, recording studios, multiplexes and corporate boardrooms." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: "Explore Services" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-3 sm:grid-cols-2", children: ["Home Theater", "Recording Studio", "Multiplex", "Corporate Room"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-lg border border-border bg-background p-5 text-sm font-medium text-ink", children: s }, s)) })
    ] }) })
  ] });
}
export {
  HomePage as component
};
