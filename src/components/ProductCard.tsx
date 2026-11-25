"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[9px] border border-border-token bg-white transition-shadow hover:shadow-md">
      <div className="relative h-[106px] w-full">
        <Link href={`/products/${product.slug}`} className="block h-full w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="310px"
            className="object-cover"
          />
        </Link>
        <button
          type="button"
          aria-label={saved ? "Remove from saved" : "Save product"}
          aria-pressed={saved}
          onClick={() => setSaved((s) => !s)}
          className="absolute right-[11px] top-[11px] flex size-[30px] items-center justify-center rounded-full bg-white shadow-sm transition-transform hover:scale-105"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden
            fill={saved ? "#087e62" : "none"}
            stroke={saved ? "#087e62" : "#64748b"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-1 flex-col px-[15px] pb-[15px] pt-[10px]">
        <Link href={`/products/${product.slug}`}
          className="text-[14px] font-semibold leading-[1.4] text-navy hover:text-green">
          {product.name}
        </Link>
        <Link href={`/suppliers/${product.supplierSlug}`}
          className="mt-[3px] text-[12px] leading-[1.4] text-muted hover:text-green">
          {product.supplier}
        </Link>
        <div className="mt-auto flex items-baseline gap-1 pt-[12px]">
          <span className="text-[16px] font-semibold leading-[1.4] text-navy">{product.price}</span>
          <span className="text-[11px] leading-[1.4] text-muted">{product.unit}</span>
        </div>
        <span className="mt-[6px] text-[10px] leading-[1.4] text-muted">{product.minOrder}</span>
      </div>
    </div>
  );
}
