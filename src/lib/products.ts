import panel from "@/assets/product-acoustic-panel.jpg";
import mlv from "@/assets/product-mlv.jpg";
import diffuser from "@/assets/product-diffuser.jpg";
import bassTrap from "@/assets/product-bass-trap.jpg";
import skyline from "@/assets/product-skyline.jpg";
import rockwool from "@/assets/product-rockwool.jpg";
import fabric from "@/assets/product-fabric.jpg";

export type ProductCategory = "panels" | "bass-diffusers" | "materials";

export interface Product {
  slug: string;
  title: string;
  category: ProductCategory;
  categoryLabel: string;
  image: string;
  gallery: string[];
  priceFrom: number;
  priceTo?: number;
  badge?: string;
  rating: number;
  reviews: number;
  bullets: string[];
  description: string;
  thicknessOptions?: string[];
  sizeOptions?: string[];
  addons?: string[];
  weight: string;
  dimensions: string;
  colors: string[];
  installSteps: string[];
}

export const CATEGORIES: { id: ProductCategory; label: string; sub: string[] }[] = [
  { id: "panels", label: "Acoustic Panels", sub: ["Ultra Series", "Rockwool-based", "DIY Kits"] },
  { id: "bass-diffusers", label: "Bass Traps & Diffusers", sub: ["Corner Traps", "QRD Diffusers", "Skyline Diffusers"] },
  { id: "materials", label: "Materials", sub: ["Mass Loaded Vinyl", "Insulation Boards", "Acoustic Fabrics"] },
];

const COLOR_LIST = [
  "Black", "Slate Grey", "Midnight", "Charcoal", "Ivory", "Sand", "Mocha",
  "Forest", "Teal", "Ocean", "Brick", "Burgundy", "Mustard", "Cream", "Pearl",
  "Walnut",
];

export const PRODUCTS: Product[] = [
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
    description:
      "Engineered for studios and home theaters, our Ultra Series panels deliver broadband absorption with a finished aesthetic suitable for any premium space.",
    thicknessOptions: ["25 mm", "50 mm", "75 mm"],
    sizeOptions: ["600 × 600 mm", "1200 × 600 mm"],
    addons: ["Z-clip mounts", "Adhesive tape"],
    weight: "3.2 kg",
    dimensions: "1200 × 600 × 50 mm",
    colors: COLOR_LIST,
    installSteps: [
      "Mark mounting points level on the wall.",
      "Attach Z-clips or apply adhesive tape to the panel back.",
      "Press firmly to wall and hold for 30 seconds.",
    ],
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
    description:
      "Following the Mass Law of acoustics, MLV adds dense, limp mass that significantly reduces airborne sound transmission through walls, floors, and ceilings — STC ratings up to 27 in standalone applications.",
    thicknessOptions: ["2 mm", "3 mm", "4 mm"],
    sizeOptions: ["1.2 m × 5 m roll", "1.2 m × 10 m roll", "1.2 m × 20 m roll"],
    addons: ["Acoustic adhesive tape", "Pine wood frames", "Seam sealant"],
    weight: "15 kg",
    dimensions: "1.2 m × 10 m × 3 mm",
    colors: COLOR_LIST,
    installSteps: [
      "Cut MLV to required panel dimensions with a sharp utility knife.",
      "Mount directly to studs or substrate using cap nails or screws.",
      "Seal seams with acoustic tape to maintain barrier integrity.",
    ],
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
    description:
      "Mathematically designed wells scatter mid and high frequencies evenly across your room, eliminating flutter echo while preserving liveness.",
    sizeOptions: ["595 × 595 mm", "595 × 1190 mm"],
    addons: ["Wall mount kit"],
    weight: "8 kg",
    dimensions: "595 × 595 × 110 mm",
    colors: ["Natural Pine", "Walnut", "Oak", "Black Stain"],
    installSteps: [
      "Locate at the rear wall or first reflection points.",
      "Use the included French cleat or wall mount kit.",
      "Level and secure to wall studs.",
    ],
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
    description:
      "Corner-loaded bass traps absorb problematic low frequencies (50–300 Hz) at room boundaries, tightening your monitoring and listening environment.",
    sizeOptions: ["300 × 300 × 600 mm", "300 × 300 × 1200 mm"],
    addons: ["Mounting brackets"],
    weight: "2.4 kg",
    dimensions: "300 × 300 × 600 mm",
    colors: COLOR_LIST,
    installSteps: [
      "Install vertically into floor-to-ceiling corners.",
      "Use construction adhesive or supplied brackets.",
      "Repeat in all four vertical room corners for best result.",
    ],
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
    description:
      "Two-dimensional primitive root diffusers scatter sound evenly in all directions, ideal for control rooms and reference listening spaces.",
    sizeOptions: ["595 × 595 mm"],
    weight: "9 kg",
    dimensions: "595 × 595 × 100 mm",
    colors: ["Natural Pine", "Walnut", "Oak"],
    installSteps: [
      "Mount on rear walls or ceiling cloud.",
      "Use the integrated keyhole hangers.",
      "Combine with absorbers for balanced room treatment.",
    ],
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
    description:
      "Mineral wool boards engineered for acoustic insulation. Use behind drywall, inside panels, or for stud cavity damping.",
    thicknessOptions: ["25 mm", "50 mm", "100 mm"],
    sizeOptions: ["1200 × 600 mm"],
    weight: "5 kg",
    dimensions: "1200 × 600 × 50 mm",
    colors: ["Natural"],
    installSteps: [
      "Wear gloves and a mask when handling.",
      "Friction-fit between studs or inside DIY panel frames.",
      "Cover with breathable acoustic fabric.",
    ],
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
    description:
      "Breathable, fade-resistant fabric designed to wrap acoustic panels and speaker grilles without colouring the sound.",
    sizeOptions: ["1.5 m wide / per metre", "1.5 m × 10 m roll"],
    weight: "0.3 kg / m",
    dimensions: "1500 mm width",
    colors: COLOR_LIST,
    installSteps: [
      "Lay fabric flat over the panel face.",
      "Wrap around frame and staple to the back.",
      "Trim excess flush to the frame edge.",
    ],
  },
];

export const formatPrice = (n: number) =>
  `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
