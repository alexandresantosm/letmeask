import { HTMLAttributes } from "react";

import "../styles/components/main-content.scss";

type MaincontainerProps = HTMLAttributes<HTMLDivElement>;

export function MainContent(props: MaincontainerProps) {
  return (
    <div className="main-content" {...props}>
      {props.children}
    </div>
  );
}
