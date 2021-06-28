import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../components/inputs/Button";
import { TextInput } from "../components/inputs/TextInput";
import { AsideIllustration } from "../components/AsideIllustration";
import { Logo } from "../components/Logo";
import { Separator } from "../components/Separator";
import { MainContainer } from "../components/MainContainer";
import { MainContent } from "../components/MainContent";
import { CreateRoomButton } from "../components/CreateRoomButton";

import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

import "../styles/pages/auth.scss";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function navigateToNewRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists.");
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <div id="page-auth">
      <AsideIllustration />

      <MainContainer>
        <MainContent>
          <Logo />
          <CreateRoomButton onClick={navigateToNewRoom} />

          <Separator />

          <form onSubmit={handleJoinRoom}>
            <TextInput
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContent>
      </MainContainer>
    </div>
  );
}
