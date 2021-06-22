type ButtonProps = {
  text?: string | number | Array<string>;
  children?: string;
};

export function Button({ text, children }: ButtonProps) {
  return <button>{text || "Clique aqui!" || children}</button>;
}
