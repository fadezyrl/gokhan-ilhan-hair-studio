import Image from "next/image";
import type { ImageKey } from "@/data/images";
import { IMAGES } from "@/data/images";

type PhotoSlotProps = {
  imageKey: ImageKey;
  alt: string;
  slot: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  reveal?: boolean;
};

export const PhotoSlot = ({
  imageKey,
  alt,
  slot,
  caption,
  className = "",
  priority = false,
  reveal = true,
}: PhotoSlotProps): React.JSX.Element => {
  const src = IMAGES[imageKey];
  const classes = ["ph", className, reveal ? "rv" : ""].filter(Boolean).join(" ");

  return (
    <figure className={classes}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 860px) 100vw, 50vw"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <span className="slot">{slot}</span>
      )}
      {caption ? <figcaption className="cap">{caption}</figcaption> : null}
    </figure>
  );
};
