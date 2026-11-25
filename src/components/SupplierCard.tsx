import Link from "next/link";
import Image from "next/image";
import type { Supplier } from "@/lib/data";
import VerifiedBadge from "./VerifiedBadge";

export default function SupplierCard({ supplier }: { supplier: Supplier }) {
  return (
    <div className="flex flex-col rounded-[9px] border border-border-token bg-white p-[15px] transition-shadow hover:shadow-md">
      <div className="flex gap-[16px]">
        <div className="relative size-[62px] shrink-0 overflow-hidden rounded-[6px]">
          <Image src={supplier.image} alt={supplier.name} fill sizes="62px" className="object-cover" />
        </div>
        <div className="flex flex-col gap-[6px]">
          <Link href={`/suppliers/${supplier.slug}`}
            className="text-[14px] font-semibold leading-[1.4] text-navy hover:text-green">
            {supplier.name}
          </Link>
          {supplier.verified && <VerifiedBadge />}
          <span className="text-[11px] leading-[1.4] text-muted">{supplier.location}</span>
        </div>
      </div>

      <div className="mt-[14px] border-t border-border-token pt-[11px]">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-[6px] text-[11px] text-muted">
            <span aria-hidden className="text-[12px] text-star">★</span>
            {supplier.rating}&nbsp;&nbsp;{supplier.reviews}
          </span>
          <Link href={`/suppliers/${supplier.slug}`}
            className="text-[11px] font-semibold text-green hover:text-green-dark">
            View supplier&nbsp;&nbsp;→
          </Link>
        </div>
      </div>
    </div>
  );
}
