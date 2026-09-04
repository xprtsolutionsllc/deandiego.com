import Image from "next/image";

type ServiceHeroImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function ServiceHeroImage({
  src,
  alt,
  priority = true,
}: ServiceHeroImageProps) {
  return (
    <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 1152px) 100vw, 1152px"
      />
    </div>
  );
}
