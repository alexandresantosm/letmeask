import googleIconImg from "../assets/images/google-icon.svg";

import { Image } from "./Image";

import "../styles/components/create-room-button.scss";

export function CreateRoomButton() {
  return (
    <button className="create-room">
      <Image src={googleIconImg} alt="Logo da Google" />
      Crie sua sala com o Google
    </button>
  );
}
