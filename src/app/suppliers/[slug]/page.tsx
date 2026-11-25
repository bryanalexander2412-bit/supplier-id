import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import VerifiedBadge from "@/components/VerifiedBadge";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { getSupplier, productsBySupplier, suppliers } from "@/lib/data";

export function generateStaticParams() {
  return suppliers.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supplier = getSupplier(slug);
  if (!supplier) return { title: "Supplier not found — Supplier.id" };
  return {
    title: `${supplier.name} — Supplier.id`,
    description: supplier.about,
  };
}

export default async function SupplierDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supplier = getSupplier(slug);
  if (!supplier) notFound();

  const catalog = productsBySupplier(supplier.slug);

  return (
    <div className="container-page py-[36px]">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[12px] text-muted">
        <Link href="/suppliers" className="hover:text-green">
          Suppliers
        </Link>
        <span aria-hidden>/</span>
        <span className="text-navy">{supplier.name}</span>
      </nav>

      {/* Supplier header */}
      <div className="mt-[20px] flex flex-col gap-[20px] rounded-[12px] border border-border-token bg-white p-[24px] sm:flex-row sm:items-center">
        <div className="relative size-[96px] shrink-0 overflow-hidden rounded-[10px]">
          <Image
            src={supplier.image}
            alt={supplier.name}
            fill
            sizes="96px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-[26px] font-semibold leading-[1.2] text-navy">
              {supplier.name}
            </h1>
            {supplier.verified && <VerifiedBadge />}
          </div>
          <p className="text-[13px] text-muted">{supplier.location}</p>
          <p className="flex items-center gap-[6px] text-[13px] text-muted">
            <span aria-hidden className="text-star">
              ★
            </span>
            {supplier.rating}&nbsp;&nbsp;{supplier.reviews}
          </p>
        </div>
      </div>

      {/* About */}
      <section className="mt-[28px] max-w-[760px]">
        <h2 className="text-[16px] font-semibold text-navy">About</h2>
        <p className="mt-[8px] text-[14px] leading-[1.6] text-navy/80">
          {supplier.about}
        </p>
      </section>

      {/* Supplier catalog */}
      {catalog.length > 0 && (
        <section className="mt-[40px]">
          <SectionHeader
            title="Products from this supplier"
            subtitle="Sourced and shipped directly by the supplier."
          />
          <div className="mt-[18px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
            {catalog.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
