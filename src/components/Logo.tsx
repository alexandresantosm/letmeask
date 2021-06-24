import logoImg from "../assets/images/logo.svg";
import { Image } from "./Image";

import "../styles/components/logo.scss";

export function Logo() {
  return <Image src={logoImg} alt="Letmeask" />;
}
