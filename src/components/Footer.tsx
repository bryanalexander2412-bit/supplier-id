import Link from "next/link";
import { categories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border-token bg-white">
      <div className="container-page grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-[22px] font-bold text-navy">Supplier.id</p>
          <p className="mt-3 max-w-[260px] text-[13px] leading-relaxed text-muted">
            Better sourcing. Stronger business. Connect with trusted suppliers across Indonesia.
          </p>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-navy">Marketplace</p>
          <ul className="mt-4 space-y-2 text-[13px] text-muted">
            <li><Link href="/products" className="hover:text-green">All products</Link></li>
            <li><Link href="/suppliers" className="hover:text-green">All suppliers</Link></li>
            <li><Link href="/products" className="hover:text-green">Featured deals</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-navy">Categories</p>
          <ul className="mt-4 space-y-2 text-[13px] text-muted">
            {categories.slice(0, 4).map((c) => (
              <li key={c}>
                <Link href={`/products?category=${encodeURIComponent(c)}`} className="hover:text-green">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-semibold text-navy">Company</p>
          <ul className="mt-4 space-y-2 text-[13px] text-muted">
            <li><span className="cursor-default hover:text-green">About us</span></li>
            <li><span className="cursor-default hover:text-green">Contact</span></li>
            <li><span className="cursor-default hover:text-green">Help center</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-token">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-[12px] text-muted sm:flex-row">
          <span>© 2026 Supplier.id. All rights reserved.</span>
          <span>Trusted connections. Better business.</span>
        </div>
      </div>
    </footer>
  );
}
