import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";
import CategoryChip from "@/components/CategoryChip";
import ProductCard from "@/components/ProductCard";
import SupplierCard from "@/components/SupplierCard";
import SectionHeader from "@/components/SectionHeader";
import { categories, products, suppliers } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy">
        <div className="container-page grid grid-cols-1 items-center gap-10 py-[30px] lg:grid-cols-2 lg:py-0 lg:h-[316px]">
          <div className="flex flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-mint-accent">
              Better sourcing. Stronger business.
            </p>
            <h1 className="mt-[16px] text-[34px] font-semibold leading-[1.12] text-white sm:text-[42px]">
              Find the Right Supplier
              <br />
              for Your Business
            </h1>
            <p className="mt-[16px] text-[15px] leading-[1.45] text-hero-sub">
              Discover quality products and connect with trusted suppliers.
              <br className="hidden sm:block" />
              Your next business partnership starts here.
            </p>
            <div className="mt-[25px] flex flex-wrap items-center gap-5">
              <PrimaryButton label="Explore products" href="/products" />
              <Link href="/suppliers" className="text-[14px] font-semibold text-white hover:text-mint-accent">
                Find suppliers&nbsp;&nbsp;→
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[522/268] w-full overflow-hidden rounded-[12px]">
              <Image
                src="/assets/hero-sourcing.png"
                alt="Workers sourcing goods in a warehouse"
                fill
                sizes="(max-width: 1024px) 100vw, 522px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-[-16px] left-[28px] flex items-center gap-3 rounded-[8px] bg-white px-[13px] py-[13px] shadow-md sm:bottom-[16px]">
              <Image src="/assets/verified-check.svg" alt="" width={22} height={22} aria-hidden />
              <span className="text-[11px] font-semibold text-navy">
                Trusted connections. Better business.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-page pt-[13px]">
        <p className="text-[12px] font-medium text-muted">Browse categories</p>
        <div className="mt-[12px] flex flex-wrap gap-[12px]">
          {categories.map((c) => (
            <CategoryChip key={c} label={c} />
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container-page pt-[36px]">
        <SectionHeader
          title="Products for your business"
          subtitle="Quality essentials, sourced from trusted businesses."
          linkLabel="View all products"
          linkHref="/products"
        />
        <div className="mt-[18px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Recommended suppliers */}
      <section className="container-page pt-[40px]">
        <SectionHeader
          title="Recommended suppliers"
          subtitle="Build lasting partnerships with verified businesses."
          linkLabel="View all suppliers"
          linkHref="/suppliers"
        />
        <div className="mt-[18px] grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3">
          {suppliers.map((s) => (
            <SupplierCard key={s.slug} supplier={s} />
          ))}
        </div>
      </section>
    </>
  );
}
