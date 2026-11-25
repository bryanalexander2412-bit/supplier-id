import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export const metadata = {
  title: "Products — Supplier.id",
  description: "Browse quality products sourced from trusted suppliers.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container-page py-10 text-muted">Loading products…</div>}>
      <ProductsClient />
    </Suspense>
  );
}
