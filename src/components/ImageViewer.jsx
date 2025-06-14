import React from "react";
import { Image } from "@imagekit/react";

const ImageViewer = ({ src, alt, className, w, h }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      width={w}
      height={h}
      transformation={[{ width: w, height: h }]}
    />
  );
};

export default ImageViewer;
