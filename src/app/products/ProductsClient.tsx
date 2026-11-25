"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/data";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();
  const activeCategory = searchParams.get("category") ?? "";

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return products.filter((p) => {
      const matchesCategory = activeCategory ? p.category === activeCategory : true;
      const matchesQuery = q
        ? [p.name, p.supplier, p.category, p.description]
            .join(" ")
            .toLowerCase()
            .includes(q)
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  function categoryHref(category: string) {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category) params.set("category", category);
    const qs = params.toString();
    return qs ? `/products?${qs}` : "/products";
  }

  return (
    <div className="container-page py-[36px]">
      {/* Page heading */}
      <div className="flex flex-col gap-[6px]">
        <h1 className="text-[22px] font-semibold leading-[1.4] text-navy">
          {query ? `Results for “${query}”` : activeCategory || "All products"}
        </h1>
        <p className="text-[12px] leading-[1.4] text-muted">
          {filtered.length} {filtered.length === 1 ? "product" : "products"}
          {activeCategory ? ` in ${activeCategory}` : ""}
          {query ? ` matching your search` : ""}.
        </p>
      </div>

      {/* Category filter row */}
      <div className="mt-[18px] flex flex-wrap gap-[10px]">
        <Link
          href={categoryHref("")}
          className={`flex h-[36px] items-center rounded-[7px] border px-[14px] text-[13px] font-medium transition-colors ${
            activeCategory === ""
              ? "border-green bg-green text-white"
              : "border-border-token bg-white text-navy hover:border-green hover:text-green"
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            href={categoryHref(c)}
            className={`flex h-[36px] items-center rounded-[7px] border px-[14px] text-[13px] font-medium transition-colors ${
              activeCategory === c
                ? "border-green bg-green text-white"
                : "border-border-token bg-white text-navy hover:border-green hover:text-green"
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      {/* Product grid */}
      {filtered.length > 0 ? (
        <div className="mt-[24px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-[40px] rounded-[9px] border border-border-token bg-white px-6 py-16 text-center">
          <p className="text-[15px] font-semibold text-navy">No products found</p>
          <p className="mt-[6px] text-[13px] text-muted">
            Try a different search term or category.
          </p>
          <Link
            href="/products"
            className="mt-[16px] inline-flex h-[42px] items-center rounded-[7px] bg-green px-[18px] text-[14px] font-semibold text-white transition-colors hover:bg-green-dark"
          >
            View all products
          </Link>
        </div>
      )}
    </div>
  );
}
