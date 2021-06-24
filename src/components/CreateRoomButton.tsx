import { ButtonHTMLAttributes } from "react";

import googleIconImg from "../assets/images/google-icon.svg";

import { Image } from "./Image";

import "../styles/components/create-room-button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function CreateRoomButton(props: ButtonProps) {
  return (
    <button className="create-room" {...props}>
      <Image src={googleIconImg} alt="Logo da Google" />
      Crie sua sala com o Google
    </button>
  );
}
