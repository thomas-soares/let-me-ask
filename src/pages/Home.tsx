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
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Let me ask" />
          <button>
            <img src={googleIconImg} alt="Logo do Google" />
          </button>
        </div>
      </main>
    </div>
  );
}
