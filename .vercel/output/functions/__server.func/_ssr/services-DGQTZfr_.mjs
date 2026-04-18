import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as Check, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const SERVICES = [{
  headline: "Transform Your Home Theater with Premium Acoustic Solutions.",
  body: "Our home theater treatments ensure crystal clear audio and balanced sound distribution — so every whisper, every explosion lands exactly where the director intended.",
  features: ["Sleek Design", "Custom Fit", "Professional Results"],
  tag: "Home Theater"
}, {
  headline: "Cinema-Grade Acoustics for Multiplex Auditoriums.",
  body: "Calibrated absorption and diffusion across rows ensures consistent sound for every seat in the house, with full compliance to Dolby and DTS room specifications.",
  features: ["Reverberation Control", "Seat-to-Seat Consistency", "Code Compliant"],
  tag: "Multiplex Acoustics"
}, {
  headline: "Boardroom & Conference Room Speech Clarity.",
  body: "Reduce echo and improve intelligibility in meetings and video calls. Our solutions blend invisibly into modern corporate interiors.",
  features: ["Speech Intelligibility", "Architectural Integration", "Hybrid-Meeting Ready"],
  tag: "Corporate Acoustics"
}, {
  headline: "Reference-Grade Recording & Mixing Studios.",
  body: "From tracking rooms to mastering suites, we design rooms with neutral frequency response and tight bass control trusted by working engineers.",
  features: ["Modal Bass Control", "Symmetric Imaging", "Iso-Booth Construction"],
  tag: "Recording Studios"
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-14 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Design Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-3xl font-bold text-ink md:text-5xl", children: "Acoustic engineering, end to end." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-ink-soft", children: "Consultation, measurement, design, fabrication and installation — delivered by certified acoustic engineers." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 space-y-8", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-card md:grid-cols-[1fr_2fr] md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: [
          "0",
          i + 1,
          " · ",
          s.tag
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-2xl font-bold leading-tight text-ink", children: s.headline })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-soft", children: s.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid gap-2 sm:grid-cols-3", children: s.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm font-medium text-ink", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary" }),
          f
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all", children: [
          "Discuss your project ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }, s.tag)) })
  ] });
}
export {
  ServicesPage as component
};
