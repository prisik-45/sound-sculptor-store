import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as notFound } from "../_libs/tanstack__router-core.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Search, U as User, a as ShoppingBag, X, M as Menu, b as Minus, P as Plus } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/radix-ui__react-compose-refs.mjs";
const appCss = "/assets/styles-_TnSb70E.css";
let items = [];
let open = false;
const listeners = /* @__PURE__ */ new Set();
const emit = () => listeners.forEach((l) => l(items, open));
const cart = {
  add(item) {
    const qty = item.qty ?? 1;
    const existing = items.find((i) => i.slug === item.slug && i.variant === item.variant);
    if (existing) existing.qty += qty;
    else items = [...items, { ...item, qty }];
    open = true;
    emit();
  },
  remove(slug, variant) {
    items = items.filter((i) => !(i.slug === slug && i.variant === variant));
    emit();
  },
  setQty(slug, qty, variant) {
    items = items.map(
      (i) => i.slug === slug && i.variant === variant ? { ...i, qty: Math.max(1, qty) } : i
    );
    emit();
  },
  setOpen(v) {
    open = v;
    emit();
  },
  getItems() {
    return items;
  },
  getOpen() {
    return open;
  }
};
function useCart() {
  const [state, setState] = reactExports.useState({ items, open });
  reactExports.useEffect(() => {
    const l = (i, o) => setState({ items: [...i], open: o });
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);
  const setOpen = reactExports.useCallback((v) => cart.setOpen(v), []);
  return { ...state, setOpen };
}
const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" }
];
function SiteHeader() {
  const { items: items2 } = useCart();
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const count = items2.reduce((s, i) => s + i.qty, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex h-16 items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            "aria-hidden": "true",
            className: "relative flex h-9 w-9 items-center justify-center rounded-md bg-ink text-background shadow-sm ring-1 ring-ink/10 transition-transform group-hover:-rotate-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-[18px] font-bold leading-none tracking-tight", children: "T" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-primary" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-semibold uppercase tracking-[0.22em] text-ink md:text-base", children: "Tarkshy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-1 text-[10px] font-medium uppercase tracking-[0.32em] text-ink-soft", children: [
            "Acoustic",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: " · " }),
            "Studio"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 md:flex", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          className: "text-sm font-medium text-ink-soft transition-colors hover:text-ink",
          activeProps: { className: "text-ink" },
          activeOptions: { exact: n.to === "/" },
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Search", className: "rounded-full p-2 text-ink-soft hover:bg-secondary hover:text-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Account", className: "rounded-full p-2 text-ink-soft hover:bg-secondary hover:text-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            "aria-label": "Cart",
            onClick: () => cart.setOpen(true),
            className: "relative rounded-full p-2 text-ink-soft hover:bg-secondary hover:text-ink",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }),
              count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground", children: count })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            "aria-label": "Menu",
            onClick: () => setMobileOpen((v) => !v),
            className: "ml-1 rounded-full p-2 text-ink-soft hover:bg-secondary hover:text-ink md:hidden",
            children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "border-t border-border bg-background md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page flex flex-col py-2", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: n.to,
        onClick: () => setMobileOpen(false),
        className: "py-3 text-sm font-medium text-ink-soft",
        activeProps: { className: "text-ink" },
        activeOptions: { exact: n.to === "/" },
        children: n.label
      },
      n.to
    )) }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 border-t border-border bg-surface", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid gap-10 py-14 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              "aria-hidden": "true",
              className: "relative flex h-10 w-10 items-center justify-center rounded-md bg-ink text-background ring-1 ring-ink/10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-[20px] font-bold leading-none tracking-tight", children: "T" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-primary" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold uppercase tracking-[0.22em] text-ink", children: "Tarkshy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-1 text-[10px] font-medium uppercase tracking-[0.32em] text-ink-soft", children: [
              "Acoustic",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: " · " }),
              "Studio"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-sm text-ink-soft", children: "Professional-grade soundproofing materials and acoustic design services for studios, theaters and corporate spaces." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-ink", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-ink-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", className: "hover:text-ink", children: "Products" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-ink", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-ink", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-ink", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-ink", children: "Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-ink-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+91 98765 43210" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "contact@tarkshyacoustic.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "GIFT City, Gandhinagar" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-ink-soft md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Tarkshy Acoustic. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Sculpting silence since day one." })
    ] }) })
  ] });
}
const panel = "/assets/product-acoustic-panel-BJ__GQyX.jpg";
const mlv = "/assets/product-mlv-C7qmNQuv.jpg";
const diffuser = "/assets/product-diffuser-BtnT7MEp.jpg";
const bassTrap = "/assets/product-bass-trap-BGYAFLhx.jpg";
const skyline = "/assets/product-skyline-B7QzmxLw.jpg";
const rockwool = "/assets/product-rockwool-C1A0vOfw.jpg";
const fabric = "/assets/product-fabric-CrmnNJ0R.jpg";
const CATEGORIES = [
  { id: "panels", label: "Acoustic Panels", sub: ["Ultra Series", "Rockwool-based", "DIY Kits"] },
  { id: "bass-diffusers", label: "Bass Traps & Diffusers", sub: ["Corner Traps", "QRD Diffusers", "Skyline Diffusers"] },
  { id: "materials", label: "Materials", sub: ["Mass Loaded Vinyl", "Insulation Boards", "Acoustic Fabrics"] }
];
const COLOR_LIST = [
  "Black",
  "Slate Grey",
  "Midnight",
  "Charcoal",
  "Ivory",
  "Sand",
  "Mocha",
  "Forest",
  "Teal",
  "Ocean",
  "Brick",
  "Burgundy",
  "Mustard",
  "Cream",
  "Pearl",
  "Walnut"
];
const PRODUCTS = [
  {
    slug: "ultra-acoustic-panel",
    title: "Ultra Series Acoustic Panel",
    category: "panels",
    categoryLabel: "Acoustic Panels",
    image: panel,
    gallery: [panel, fabric, rockwool],
    priceFrom: 2490,
    priceTo: 6890,
    badge: "Bestseller",
    rating: 4.8,
    reviews: 214,
    bullets: ["NRC 0.95 absorption", "Fabric-wrapped finish", "Class A fire rated"],
    description: "Engineered for studios and home theaters, our Ultra Series panels deliver broadband absorption with a finished aesthetic suitable for any premium space.",
    thicknessOptions: ["25 mm", "50 mm", "75 mm"],
    sizeOptions: ["600 × 600 mm", "1200 × 600 mm"],
    addons: ["Z-clip mounts", "Adhesive tape"],
    weight: "3.2 kg",
    dimensions: "1200 × 600 × 50 mm",
    colors: COLOR_LIST,
    installSteps: [
      "Mark mounting points level on the wall.",
      "Attach Z-clips or apply adhesive tape to the panel back.",
      "Press firmly to wall and hold for 30 seconds."
    ]
  },
  {
    slug: "mass-loaded-vinyl",
    title: "Mass Loaded Vinyl (MLV) Sound Barrier",
    category: "materials",
    categoryLabel: "Materials",
    image: mlv,
    gallery: [mlv, panel, rockwool],
    priceFrom: 13540,
    priceTo: 28540,
    badge: "15% Off",
    rating: 4.9,
    reviews: 318,
    bullets: ["Airborne Sound Block", "Flexible & Tear Resistant", "Eco-Friendly Formulation"],
    description: "Following the Mass Law of acoustics, MLV adds dense, limp mass that significantly reduces airborne sound transmission through walls, floors, and ceilings — STC ratings up to 27 in standalone applications.",
    thicknessOptions: ["2 mm", "3 mm", "4 mm"],
    sizeOptions: ["1.2 m × 5 m roll", "1.2 m × 10 m roll", "1.2 m × 20 m roll"],
    addons: ["Acoustic adhesive tape", "Pine wood frames", "Seam sealant"],
    weight: "15 kg",
    dimensions: "1.2 m × 10 m × 3 mm",
    colors: COLOR_LIST,
    installSteps: [
      "Cut MLV to required panel dimensions with a sharp utility knife.",
      "Mount directly to studs or substrate using cap nails or screws.",
      "Seal seams with acoustic tape to maintain barrier integrity."
    ]
  },
  {
    slug: "qrd-diffuser",
    title: "QRD Wood Diffuser",
    category: "bass-diffusers",
    categoryLabel: "Bass Traps & Diffusers",
    image: diffuser,
    gallery: [diffuser, skyline, panel],
    priceFrom: 5890,
    priceTo: 9890,
    rating: 4.7,
    reviews: 96,
    bullets: ["Quadratic Residue design", "Solid pine construction", "Diffuses 500 Hz – 5 kHz"],
    description: "Mathematically designed wells scatter mid and high frequencies evenly across your room, eliminating flutter echo while preserving liveness.",
    sizeOptions: ["595 × 595 mm", "595 × 1190 mm"],
    addons: ["Wall mount kit"],
    weight: "8 kg",
    dimensions: "595 × 595 × 110 mm",
    colors: ["Natural Pine", "Walnut", "Oak", "Black Stain"],
    installSteps: [
      "Locate at the rear wall or first reflection points.",
      "Use the included French cleat or wall mount kit.",
      "Level and secure to wall studs."
    ]
  },
  {
    slug: "corner-bass-trap",
    title: "Corner Bass Trap",
    category: "bass-diffusers",
    categoryLabel: "Bass Traps & Diffusers",
    image: bassTrap,
    gallery: [bassTrap, panel, fabric],
    priceFrom: 1890,
    priceTo: 3490,
    badge: "Sale",
    rating: 4.6,
    reviews: 142,
    bullets: ["Tames low-end buildup", "High-density foam core", "Fabric-wrapped finish"],
    description: "Corner-loaded bass traps absorb problematic low frequencies (50–300 Hz) at room boundaries, tightening your monitoring and listening environment.",
    sizeOptions: ["300 × 300 × 600 mm", "300 × 300 × 1200 mm"],
    addons: ["Mounting brackets"],
    weight: "2.4 kg",
    dimensions: "300 × 300 × 600 mm",
    colors: COLOR_LIST,
    installSteps: [
      "Install vertically into floor-to-ceiling corners.",
      "Use construction adhesive or supplied brackets.",
      "Repeat in all four vertical room corners for best result."
    ]
  },
  {
    slug: "skyline-diffuser",
    title: "Skyline Diffuser",
    category: "bass-diffusers",
    categoryLabel: "Bass Traps & Diffusers",
    image: skyline,
    gallery: [skyline, diffuser, panel],
    priceFrom: 4790,
    priceTo: 7990,
    rating: 4.7,
    reviews: 73,
    bullets: ["2D omnidirectional scatter", "Solid hardwood blocks", "Studio reference grade"],
    description: "Two-dimensional primitive root diffusers scatter sound evenly in all directions, ideal for control rooms and reference listening spaces.",
    sizeOptions: ["595 × 595 mm"],
    weight: "9 kg",
    dimensions: "595 × 595 × 100 mm",
    colors: ["Natural Pine", "Walnut", "Oak"],
    installSteps: [
      "Mount on rear walls or ceiling cloud.",
      "Use the integrated keyhole hangers.",
      "Combine with absorbers for balanced room treatment."
    ]
  },
  {
    slug: "rockwool-insulation",
    title: "Rockwool Insulation Board",
    category: "materials",
    categoryLabel: "Materials",
    image: rockwool,
    gallery: [rockwool, panel, mlv],
    priceFrom: 1290,
    priceTo: 2890,
    rating: 4.8,
    reviews: 201,
    bullets: ["High-density 60 kg/m³", "Non-combustible A1 rated", "Excellent low-mid absorption"],
    description: "Mineral wool boards engineered for acoustic insulation. Use behind drywall, inside panels, or for stud cavity damping.",
    thicknessOptions: ["25 mm", "50 mm", "100 mm"],
    sizeOptions: ["1200 × 600 mm"],
    weight: "5 kg",
    dimensions: "1200 × 600 × 50 mm",
    colors: ["Natural"],
    installSteps: [
      "Wear gloves and a mask when handling.",
      "Friction-fit between studs or inside DIY panel frames.",
      "Cover with breathable acoustic fabric."
    ]
  },
  {
    slug: "acoustic-fabric",
    title: "Premium Acoustic Fabric",
    category: "materials",
    categoryLabel: "Materials",
    image: fabric,
    gallery: [fabric, panel, diffuser],
    priceFrom: 690,
    priceTo: 1990,
    rating: 4.7,
    reviews: 88,
    bullets: ["Acoustically transparent", "Premium polyester weave", "16 designer colors"],
    description: "Breathable, fade-resistant fabric designed to wrap acoustic panels and speaker grilles without colouring the sound.",
    sizeOptions: ["1.5 m wide / per metre", "1.5 m × 10 m roll"],
    weight: "0.3 kg / m",
    dimensions: "1500 mm width",
    colors: COLOR_LIST,
    installSteps: [
      "Lay fabric flat over the panel face.",
      "Wrap around frame and staple to the back.",
      "Trim excess flush to the frame edge."
    ]
  }
];
const formatPrice = (n) => `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function CartDrawer() {
  const { items: items2, open: open2, setOpen } = useCart();
  const subtotal = items2.reduce((s, i) => s + i.price * i.qty, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        onClick: () => setOpen(false),
        className: `fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity ${open2 ? "opacity-100" : "pointer-events-none opacity-0"}`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: `fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-elev transition-transform duration-300 ${open2 ? "translate-x-0" : "translate-x-full"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-6 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-ink", children: "Your Cart" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), "aria-label": "Close cart", className: "rounded-full p-2 hover:bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
          ] }),
          items2.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-10 w-10 text-ink-soft/50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-soft", children: "Your cart is empty." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Continue browsing" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 divide-y divide-border overflow-y-auto px-6", children: items2.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 py-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 shrink-0 overflow-hidden rounded-md bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.image, alt: it.title, className: "h-full w-full object-cover", loading: "lazy" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium leading-tight text-ink", children: it.title }),
                    it.variant && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-ink-soft", children: it.variant })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => cart.remove(it.slug, it.variant),
                      className: "text-xs text-ink-soft hover:text-ink",
                      children: "Remove"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-md border border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => cart.setQty(it.slug, it.qty - 1, it.variant),
                        className: "p-1.5 text-ink-soft hover:text-ink",
                        "aria-label": "Decrease",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm", children: it.qty }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => cart.setQty(it.slug, it.qty + 1, it.variant),
                        className: "p-1.5 text-ink-soft hover:text-ink",
                        "aria-label": "Increase",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-ink", children: formatPrice(it.price * it.qty) })
                ] })
              ] })
            ] }, it.slug + (it.variant ?? ""))) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 border-t border-border px-6 py-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ink-soft", children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-ink", children: formatPrice(subtotal) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-soft", children: "Shipping and taxes calculated at checkout." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", size: "lg", children: "Checkout" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[70vh] items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-ink", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-ink", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ink-soft", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$6 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tarkshy Acoustic" },
      {
        name: "description",
        content: "Studio-grade acoustic panels, bass traps, diffusers and MLV soundproofing materials. Engineered for theaters, studios and corporate spaces."
      },
      { property: "og:title", content: "Tarkshy Acoustic" },
      { property: "og:description", content: "Online store and service portal for professional soundproofing solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tarkshy Acoustic" },
      { name: "description", content: "Online store and service portal for professional soundproofing solutions." },
      { name: "twitter:description", content: "Online store and service portal for professional soundproofing solutions." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8947b1ba-b361-4429-89a2-2bbfb8c66879/id-preview-e63c34c1--f09b77f0-bcf7-4c43-97ba-b78c49fe5155.lovable.app-1776450277751.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8947b1ba-b361-4429-89a2-2bbfb8c66879/id-preview-e63c34c1--f09b77f0-bcf7-4c43-97ba-b78c49fe5155.lovable.app-1776450277751.png" }
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {})
  ] });
}
const $$splitComponentImporter$5 = () => import("./services-DGQTZfr_.mjs");
const Route$5 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Acoustic Design Services — Tarkshy Acoustic"
    }, {
      name: "description",
      content: "End-to-end acoustic design for home theaters, multiplexes, recording studios and corporate spaces."
    }, {
      property: "og:title",
      content: "Acoustic Services — Tarkshy Acoustic"
    }, {
      property: "og:description",
      content: "Custom acoustic design and installation services."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-Cn6y6B0-.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Tarkshy Acoustic"
    }, {
      name: "description",
      content: "Get in touch with our acoustic engineers for consultation, quotes and bulk orders."
    }, {
      property: "og:title",
      content: "Contact Tarkshy Acoustic"
    }, {
      property: "og:description",
      content: "Discuss your acoustic project with our team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-BDZb1MB6.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Tarkshy Acoustic"
    }, {
      name: "description",
      content: "We sculpt silence. Bridging industrial acoustic science with aesthetic interior design."
    }, {
      property: "og:title",
      content: "About Tarkshy Acoustic"
    }, {
      property: "og:description",
      content: "Sculpting silence — premium acoustic materials and design services."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-B3wvOTp-.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Tarkshy Acoustic — Master Your Sound Environment"
    }, {
      name: "description",
      content: "Premium soundproofing materials and acoustic design for theaters, studios and corporate spaces."
    }, {
      property: "og:title",
      content: "Tarkshy Acoustic — Master Your Sound Environment"
    }, {
      property: "og:description",
      content: "Premium soundproofing materials and acoustic design services."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./products.index-Bl89hUJh.mjs");
const Route$1 = createFileRoute("/products/")({
  head: () => ({
    meta: [{
      title: "Products — Acoustic Panels, Bass Traps & Soundproofing | Tarkshy Acoustic"
    }, {
      name: "description",
      content: "Browse acoustic panels, bass traps, diffusers, MLV barriers and insulation materials engineered for studios and theaters."
    }, {
      property: "og:title",
      content: "Acoustic Products — Tarkshy Acoustic"
    }, {
      property: "og:description",
      content: "Studio-grade acoustic treatment and soundproofing materials."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./products._slug-Ib8v0g4S.mjs");
const $$splitNotFoundComponentImporter = () => import("./products._slug-B1BiXt6O.mjs");
const Route = createFileRoute("/products/$slug")({
  loader: ({
    params
  }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return {
      product
    };
  },
  head: ({
    loaderData
  }) => {
    const p = loaderData?.product;
    return {
      meta: p ? [{
        title: `${p.title} — Tarkshy Acoustic`
      }, {
        name: "description",
        content: p.description.slice(0, 155)
      }, {
        property: "og:title",
        content: `${p.title} — Tarkshy Acoustic`
      }, {
        property: "og:description",
        content: p.description.slice(0, 155)
      }, {
        property: "og:image",
        content: p.image
      }, {
        name: "twitter:image",
        content: p.image
      }] : [{
        title: "Product not found"
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$5.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const ProductsIndexRoute = Route$1.update({
  id: "/products/",
  path: "/products/",
  getParentRoute: () => Route$6
});
const ProductsSlugRoute = Route.update({
  id: "/products/$slug",
  path: "/products/$slug",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ServicesRoute,
  ProductsSlugRoute,
  ProductsIndexRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  CATEGORIES as C,
  PRODUCTS as P,
  Route as R,
  cart as a,
  cn as c,
  formatPrice as f,
  router as r
};
