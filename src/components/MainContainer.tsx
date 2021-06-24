import { ReactNode } from "react";
import "../styles/components/main-container.scss";

type MainContainerProps = {
  children: ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return <main>{children}</main>;
}
