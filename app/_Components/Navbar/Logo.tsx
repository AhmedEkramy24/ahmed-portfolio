import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="text-white text-2xl font-bold">
        Ahmed<span className="text-[#5227FF]">Dev</span>
      </h1>
    </Link>
  );
}
