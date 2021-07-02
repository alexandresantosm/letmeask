import Modal from "react-modal";
import { useHistory } from "react-router";

import closeImg from "../../assets/images/close.svg";
import { database } from "../../services/firebase";

import "./styles.scss";

type RoomModalProps = {
  roomId: string;
  isOpen: boolean;
  onRequestClose: () => void;
};

export function RoomModal({ roomId, isOpen, onRequestClose }: RoomModalProps) {
  const history = useHistory();

  async function handleCloseRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    history.push("/");
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <header>
        <img src={closeImg} alt="Encerrar sala" />
      </header>

      <main>
        <h2>Encerrar sala</h2>
        <p>Tem certeza que você deseja encerrar esta sala?</p>
      </main>

      <footer>
        <button className="cancel" onClick={onRequestClose}>
          Cancelar
        </button>
        <button onClick={handleCloseRoom}>Sim, encerrar</button>
      </footer>
    </Modal>
  );
}
