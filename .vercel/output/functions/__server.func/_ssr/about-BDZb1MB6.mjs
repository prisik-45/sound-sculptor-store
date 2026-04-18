import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Lightbulb, f as ShieldCheck, g as Cog } from "../_libs/lucide-react.mjs";
const REASONS = [{
  icon: Lightbulb,
  title: "Expert Consultation",
  body: "On-site measurement and tailored design from certified acoustic engineers."
}, {
  icon: ShieldCheck,
  title: "Certified Fireproof",
  body: "Every panel and barrier meets Class A / A1 fire safety standards."
}, {
  icon: Cog,
  title: "Precision Engineering",
  body: "Materials cut and finished to your project's exact specification."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "About Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 max-w-3xl text-3xl font-bold leading-[1.05] text-ink md:text-6xl", children: [
        "We don't just sell materials. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "We sculpt silence." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-ink-soft", children: "At Tarkshy Acoustic, we bridge the gap between industrial science and aesthetic interior design. Our mission is to provide professional-grade insulation for creators and collectors alike." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page grid gap-10 py-16 md:py-24 md:grid-cols-3", children: REASONS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-background p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold text-ink", children: r.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-soft", children: r.body })
    ] }, r.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-10 md:grid-cols-3", children: [{
      k: "10+",
      v: "Years engineering acoustic environments"
    }, {
      k: "500+",
      v: "Projects across India and the Middle East"
    }, {
      k: "16",
      v: "Designer fabric finishes in stock"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl font-bold text-ink", children: s.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-soft", children: s.v })
    ] }, s.k)) }) })
  ] });
}
export {
  AboutPage as component
};
