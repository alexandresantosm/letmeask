import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import { AdminRoom } from "../pages/AdminRoom";
import { Home } from "../pages/Home";
import { NewRoom } from "../pages/NewRoom";
import { Room } from "../pages/Room";

import settingsImg from "../assets/images/settings.svg";

export function Routes() {
  const { toogleTheme } = useTheme();

  return (
    <>
      <img
        className="settings"
        src={settingsImg}
        alt="Alterna tema da aplicação"
        onClick={toogleTheme}
      />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
