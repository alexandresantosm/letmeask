import { Button } from "../components/inputs/Button";
import { TextInput } from "../components/inputs/TextInput";
import { AsideIllustration } from "../components/AsideIllustration";
import { Logo } from "../components/Logo";
import { Separator } from "../components/Separator";
import { MainContainer } from "../components/MainContainer";
import { MainContent } from "../components/MainContent";
import { CreateRoomButton } from "../components/CreateRoomButton";

import "../styles/pages/auth.scss";

export function Home() {
  return (
    <div id="page-auth">
      <AsideIllustration />

      <MainContainer>
        <MainContent>
          <Logo />

          <CreateRoomButton />

          <Separator />

          <form>
            <TextInput type="text" placeholder="Digite o código da sala" />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContent>
      </MainContainer>
    </div>
  );
}
