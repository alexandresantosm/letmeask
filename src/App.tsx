import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { Routes } from "./routers/Routes";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Routes />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
