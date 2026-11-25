import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  linkLabel?: string;
  linkHref?: string;
};

export default function SectionHeader({ title, subtitle, linkLabel, linkHref }: Props) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-[22px] font-semibold leading-[1.4] text-navy">{title}</h2>
        {subtitle && (
          <p className="mt-[6px] text-[12px] leading-[1.4] text-muted">{subtitle}</p>
        )}
      </div>
      {linkLabel && linkHref && (
        <Link
          href={linkHref}
          className="shrink-0 whitespace-nowrap pt-[6px] text-[13px] font-semibold text-green hover:text-green-dark"
        >
          {linkLabel}&nbsp;&nbsp;→
        </Link>
      )}
    </div>
  );
}
