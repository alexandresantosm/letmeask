import { Link } from "react-router-dom";

import { AsideIllustration } from "../components/AsideIllustration";
import { Button } from "../components/inputs/Button";
import { TextInput } from "../components/inputs/TextInput";
import { Logo } from "../components/Logo";
import { MainContainer } from "../components/MainContainer";
import { MainContent } from "../components/MainContent";

import "../styles/pages/auth.scss";
import "../styles/components/new-room.scss";

export function NewRoom() {
  return (
    <div id="page-auth">
      <AsideIllustration />

      <MainContainer>
        <MainContent>
          <Logo />

          <h2>Crie uma nova sala</h2>

          <form>
            <TextInput type="text" placeholder="Nome da sala" />

            <Button type="submit">Criar sala</Button>
          </form>

          <p>
            Quer entrar em uma sala já existente?{" "}
            <Link to="/">Clique aqui</Link>
          </p>
        </MainContent>
      </MainContainer>
    </div>
  );
}
