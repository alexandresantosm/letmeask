import { Link, useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";

import { AsideIllustration } from "../components/AsideIllustration";
import { Button } from "../components/inputs/Button";
import { TextInput } from "../components/inputs/TextInput";
import { Logo } from "../components/Logo";
import { MainContainer } from "../components/MainContainer";
import { MainContent } from "../components/MainContent";

import { useAuth } from "../hooks/useAuth";

import "../styles/pages/auth.scss";
import "../styles/components/new-room.scss";
import { database } from "../services/firebase";

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    const idRoom = firebaseRoom.key;

    history.push(`/rooms/${idRoom}`);
  }

  return (
    <div id="page-auth">
      <AsideIllustration />

      <MainContainer>
        <MainContent>
          <Logo />

          <h2>Crie uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <TextInput
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />

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
