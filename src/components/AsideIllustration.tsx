import illustrationImg from "../assets/images/illustration.svg";

import { Image } from "./Image";

import "../styles/components/aside-illustration.scss";

export function AsideIllustration() {
  return (
    <aside>
      <Image
        src={illustrationImg}
        alt="Ilustração simbolizando perguntas e respostas"
      />

      <strong>Toda pergunta tem uma resposta</strong>

      <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
    </aside>
  );
}
