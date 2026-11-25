import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";
import VerifiedBadge from "@/components/VerifiedBadge";
import ProductCard from "@/components/ProductCard";
import {
  getProduct,
  getSupplier,
  productsBySupplier,
  products,
} from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found — Supplier.id" };
  return {
    title: `${product.name} — Supplier.id`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const supplier = getSupplier(product.supplierSlug);
  const related = productsBySupplier(product.supplierSlug).filter(
    (p) => p.slug !== product.slug,
  );

  return (
    <div className="container-page py-[36px]">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[12px] text-muted">
        <Link href="/products" className="hover:text-green">
          Products
        </Link>
        <span aria-hidden>/</span>
        <span className="text-navy">{product.name}</span>
      </nav>

      <div className="mt-[20px] grid grid-cols-1 gap-[32px] lg:grid-cols-2">
        {/* Product image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-border-token bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover"
            priority
          />
        </div>

        {/* Product info */}
        <div className="flex flex-col">
          <span className="text-[12px] font-medium text-muted">
            {product.category}
          </span>
          <h1 className="mt-[8px] text-[28px] font-semibold leading-[1.2] text-navy">
            {product.name}
          </h1>

          <Link
            href={`/suppliers/${product.supplierSlug}`}
            className="mt-[10px] inline-flex w-fit items-center gap-2 text-[14px] text-muted hover:text-green"
          >
            {product.supplier}
            {supplier?.verified && <VerifiedBadge />}
          </Link>

          <div className="mt-[20px] flex items-baseline gap-2">
            <span className="text-[26px] font-semibold text-navy">
              {product.price}
            </span>
            <span className="text-[13px] text-muted">{product.unit}</span>
          </div>
          <span className="mt-[6px] text-[12px] text-muted">
            {product.minOrder}
          </span>

          <p className="mt-[20px] max-w-[520px] text-[14px] leading-[1.6] text-navy/80">
            {product.description}
          </p>

          <div className="mt-[28px] flex flex-wrap items-center gap-4">
            <PrimaryButton label="Request a quote" />
            {supplier && (
              <Link
                href={`/suppliers/${supplier.slug}`}
                className="text-[14px] font-semibold text-green hover:text-green-dark"
              >
                View supplier&nbsp;&nbsp;→
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Related products from same supplier */}
      {related.length > 0 && (
        <section className="mt-[48px]">
          <h2 className="text-[22px] font-semibold leading-[1.4] text-navy">
            More from {product.supplier}
          </h2>
          <div className="mt-[18px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
