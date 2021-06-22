import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button text="Botão 1" /> {/* texto */}
      <Button text={1} /> {/* numero */}
      <Button text={["1", "2", "3"]} /> {/* array */}
      <Button>Children</Button> {/* conteudo */}
    </div>
  );
}

export default App;
