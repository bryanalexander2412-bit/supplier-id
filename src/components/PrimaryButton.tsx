import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export default function PrimaryButton({ label, href, onClick }: Props) {
  const className =
    "inline-flex h-[46px] items-center gap-3 rounded-[7px] bg-green px-[19px] text-[14px] font-semibold text-white transition-colors hover:bg-green-dark";

  const content = (
    <>
      {label}
      <Image src="/assets/arrow-right.svg" alt="" width={22} height={22} aria-hidden />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
}
