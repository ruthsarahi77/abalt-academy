import Image from "next/image";
import type { ContentType } from "@/data/content-types";

export function ContentVisual({
  image,
  alt,
  type = "publication",
  className = "",
}: {
  image?: string;
  alt: string;
  type?: ContentType;
  className?: string;
}) {
  return (
    <div className={`content-visual content-visual-${type} ${className}`}>
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <>
          <span className="content-visual-mark">A</span>
          <span className="content-visual-label">ABALT / {type}</span>
        </>
      )}
    </div>
  );
}
