import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href={"/"}>
    <Image width={150} height={50} src={"/icons/logo.svg"} alt="Logo" />
  </Link>
);
