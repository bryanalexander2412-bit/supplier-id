// Central content store. Values transcribed verbatim from the Figma homepage frame
// so cards render identical copy across every page.

export type Product = {
  slug: string;
  name: string;
  supplierSlug: string;
  supplier: string;
  price: string;
  unit: string;
  minOrder: string;
  image: string;
  category: string;
  description: string;
};

export type Supplier = {
  slug: string;
  name: string;
  location: string;
  established: string;
  rating: string;
  reviews: string;
  verified: boolean;
  image: string;
  about: string;
};

export const categories = [
  "Food & beverage",
  "Packaging & printing",
  "Textiles & apparel",
  "Industrial supplies",
  "Home & living",
  "Agriculture",
];

export const products: Product[] = [
  {
    slug: "premium-arabica-coffee-beans",
    name: "Premium Arabica coffee beans",
    supplierSlug: "nusantara-coffee-co",
    supplier: "Nusantara Coffee Co.",
    price: "$6.50 – $8.00",
    unit: "/ kg",
    minOrder: "Min. order: 100 kg",
    image: "/assets/supplier-products.png",
    category: "Food & beverage",
    description:
      "Single-origin Arabica green beans sourced from highland estates. Consistent grading, moisture-controlled storage, and export-ready documentation.",
  },
  {
    slug: "eco-friendly-kraft-packaging",
    name: "Eco-friendly kraft packaging",
    supplierSlug: "greenpack-indonesia",
    supplier: "GreenPack Indonesia",
    price: "$0.25 – $0.80",
    unit: "/ piece",
    minOrder: "Min. order: 1,000 pieces",
    image: "/assets/product-2.png",
    category: "Packaging & printing",
    description:
      "Recyclable kraft boxes and mailers in custom sizes. FSC-certified board with optional printing and die-cut inserts.",
  },
  {
    slug: "organic-cotton-fabric",
    name: "100% organic cotton fabric",
    supplierSlug: "java-textile-industries",
    supplier: "Java Textile Industries",
    price: "$3.20 – $4.50",
    unit: "/ meter",
    minOrder: "Min. order: 500 meters",
    image: "/assets/product-3.png",
    category: "Textiles & apparel",
    description:
      "GOTS-certified organic cotton woven fabric. Available in multiple weights and natural dye options for apparel and home goods.",
  },
  {
    slug: "stainless-steel-hex-bolts",
    name: "Stainless steel hex bolts",
    supplierSlug: "precision-metalworks",
    supplier: "Precision Metalworks",
    price: "$0.08 – $0.35",
    unit: "/ piece",
    minOrder: "Min. order: 5,000 pieces",
    image: "/assets/product-4.png",
    category: "Industrial supplies",
    description:
      "A2/A4 grade stainless hex bolts in metric and imperial threads. Batch-tested for tensile strength with full material certs.",
  },
];

export const suppliers: Supplier[] = [
  {
    slug: "nusantara-coffee-co",
    name: "Nusantara Coffee Co.",
    location: "Bandung, Indonesia · Est. 2012",
    established: "2012",
    rating: "4.9",
    reviews: "(128 reviews)",
    verified: true,
    image: "/assets/supplier-products.png",
    about:
      "A specialty coffee exporter working directly with highland farmer cooperatives across Indonesia. Focused on traceable, consistently graded green beans for roasters worldwide.",
  },
  {
    slug: "greenpack-indonesia",
    name: "GreenPack Indonesia",
    location: "Surabaya, Indonesia · Est. 2015",
    established: "2015",
    rating: "4.8",
    reviews: "(96 reviews)",
    verified: true,
    image: "/assets/product-2.png",
    about:
      "Sustainable packaging manufacturer producing recyclable kraft and molded-fibre solutions. Custom sizing, printing and short lead times for growing brands.",
  },
  {
    slug: "java-textile-industries",
    name: "Java Textile Industries",
    location: "Semarang, Indonesia · Est. 2008",
    established: "2008",
    rating: "4.9",
    reviews: "(204 reviews)",
    verified: true,
    image: "/assets/product-3.png",
    about:
      "Vertically integrated textile mill spinning, weaving and finishing organic and conventional cotton. Serves apparel and home-goods buyers at scale.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getSupplier(slug: string) {
  return suppliers.find((s) => s.slug === slug);
}

export function productsBySupplier(supplierSlug: string) {
  return products.filter((p) => p.supplierSlug === supplierSlug);
}
