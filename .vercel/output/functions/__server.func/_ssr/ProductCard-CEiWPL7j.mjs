import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as cart, f as formatPrice } from "./router-BN26U3pf.mjs";
import { E as Eye, P as Plus } from "../_libs/lucide-react.mjs";
function ProductCard({ product }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/products/$slug",
        params: { slug: product.slug },
        className: "relative block overflow-hidden rounded-lg bg-surface",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: product.title,
              width: 800,
              height: 800,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            }
          ) }),
          product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-3 rounded-sm bg-ink px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-background", children: product.badge }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-3 bottom-3 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-background/95 px-3 py-2 text-xs font-medium text-ink shadow-card backdrop-blur", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
              " Quick View"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: (e) => {
                  e.preventDefault();
                  cart.add({ slug: product.slug, title: product.title, image: product.image, price: product.priceFrom });
                },
                className: "inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground shadow-card transition-colors hover:bg-primary/90",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                  " Add to Cart"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-wider text-ink-soft", children: product.categoryLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/products/$slug",
          params: { slug: product.slug },
          className: "text-sm font-medium text-ink hover:text-primary",
          children: product.title
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-ink-soft", children: [
        "Starting from ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-ink", children: formatPrice(product.priceFrom) })
      ] })
    ] })
  ] });
}
export {
  ProductCard as P
};
