import Link from "next/link";

export default function CategoryChip({ label }: { label: string }) {
  const href = `/products?category=${encodeURIComponent(label)}`;
  return (
    <Link
      href={href}
      className="flex h-[42px] min-w-[160px] flex-1 items-center justify-between rounded-[7px] border border-border-token bg-white px-[15px] text-[13px] font-medium text-navy transition-colors hover:border-green hover:text-green"
    >
      <span>{label}</span>
      <span aria-hidden className="text-[16px] text-muted">↗</span>
    </Link>
  );
}
