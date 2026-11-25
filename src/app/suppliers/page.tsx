import SupplierCard from "@/components/SupplierCard";
import SectionHeader from "@/components/SectionHeader";
import { suppliers } from "@/lib/data";

export const metadata = {
  title: "Suppliers — Supplier.id",
  description: "Browse verified suppliers and build lasting partnerships.",
};

export default function SuppliersPage() {
  return (
    <div className="container-page py-[36px]">
      <SectionHeader
        title="Recommended suppliers"
        subtitle="Build lasting partnerships with verified businesses."
      />
      <div className="mt-[24px] grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3">
        {suppliers.map((s) => (
          <SupplierCard key={s.slug} supplier={s} />
        ))}
      </div>
    </div>
  );
}
