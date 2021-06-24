import { InputHTMLAttributes } from "react";

import "../../styles/components/inputs/text-input.scss";

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export function TextInput(props: TextInputProps) {
  return <input type="text" {...props} />;
}
