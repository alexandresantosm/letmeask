import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

export function Home() {
  return (
    <div>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />

        <strong>Toda pergunta tem uma resposta</strong>

        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>

      <main>
        <img src={logoImg} alt="Letmeask" />

        <button>
          <img src={googleIconImg} alt="Logo da Google" />
          Crie sua sala com o Google
        </button>

        <div>ou entre em uma sala</div>

        <form>
          <input type="text" placeholder="Digite o código da sala" />

          <button type="submit">Entrar na sala</button>
        </form>
      </main>
    </div>
  );
}
