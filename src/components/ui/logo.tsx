import Link from "next/link";
import Image from "next/image";

type Props = {
  size: number;
  className?: string;
  style?: React.CSSProperties;
};

export const Logo = ({ size, className, style }: Props) => (
  <Link href="/">
    <Image
      src="/twitter-z-line.png"
      alt="z"
      width={size}
      height={size}
      quality={100}
      className={className}
      style={style}
    />
  </Link>
);
