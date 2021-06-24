import { ImgHTMLAttributes } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function Image(props: ImageProps) {
  // eslint-disable-next-line
  return <img {...props} />;
}
