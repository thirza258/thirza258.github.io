import { useEffect, useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  imgClassName?: string;
  fallbackClassName?: string;
  fallbackLabel?: string;
};

const isRenderableSource = (src: string) =>
  /^(https?:\/\/|\/|data:)/i.test(src.trim());

const SafeImage = ({
  src,
  alt,
  imgClassName = "",
  fallbackClassName = "",
  fallbackLabel = "Preview unavailable",
}: SafeImageProps) => {
  const [hasError, setHasError] = useState(!isRenderableSource(src));

  useEffect(() => {
    setHasError(!isRenderableSource(src));
  }, [src]);

  if (hasError) {
    return (
      <div className={fallbackClassName} role="img" aria-label={alt}>
        {fallbackLabel}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={imgClassName}
      onError={() => setHasError(true)}
    />
  );
};

export default SafeImage;
