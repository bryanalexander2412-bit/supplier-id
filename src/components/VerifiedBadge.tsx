export default function VerifiedBadge({ label = "Verified" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-[4px] bg-mint-light px-2 py-[3px] text-[11px] font-semibold leading-[1.4] text-green">
      <span aria-hidden className="font-bold">✓</span>
      {label}
    </span>
  );
}
