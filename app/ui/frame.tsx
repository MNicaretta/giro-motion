import Image from "next/image";
import Link from "next/link";

export type FrameSource = {
  id: string;
  desc: string;
}

export default function Frame({
  frame
}: Readonly<{
  frame: FrameSource;
}>) {
  return (
    <Link href={`/${frame.id}`} className="frame">
      <Image
        className="animated"
        src={`/${frame.id}.gif`}
        alt={frame.desc}
        width={524}
        height={350}
        unoptimized />
      <Image
        className="static"
        src={`/${frame.id}.png`}
        alt={frame.desc}
        width={524}
        height={350}
        unoptimized />
    </Link>
  )
}