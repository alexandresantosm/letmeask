import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import deleteImg from "../assets/images/delete.svg";
import checkImg from "../assets/images/check.svg";
import answerImg from "../assets/images/answer.svg";

import { Button } from "../components/inputs/Button";
import { RoomCode } from "../components/RoomCode";
import { Question } from "../components/Question";
import { RoomModal } from "../components/RoomModal";
import { database } from "../services/firebase";

import { useRoom } from "../hooks/useRoom";
import { useTheme } from "../hooks/useTheme";

import "../styles/pages/room.scss";
import { QuestionModal } from "../components/QuestionModal";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);
  const { theme } = useTheme();

  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);

  function handleOpenRoomModal() {
    setIsRoomModalOpen(true);
  }

  function handleCloseRoomModal() {
    setIsRoomModalOpen(false);
  }

  function handleOpenQuestionModal() {
    setIsQuestionModalOpen(true);
  }

  function handleCloseQuestionModal() {
    setIsQuestionModalOpen(false);
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <div id="page-room" className={theme}>
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleOpenRoomModal}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length === 1
                ? "1 pergunta"
                : `${questions.length} perguntas`}
            </span>
          )}
        </div>

        <div className="question-list">
          {questions.map((question) => (
            <Fragment key={question.id}>
              <Question
                author={question.author}
                content={question.content}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      aria-label="Marcar pergunta"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      aria-label="Responder pergunta"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  aria-label="Remover pergunta"
                  onClick={handleOpenQuestionModal}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
              <QuestionModal
                roomId={roomId}
                questionId={question.id}
                isOpen={isQuestionModalOpen}
                onRequestClose={handleCloseQuestionModal}
              />
            </Fragment>
          ))}
        </div>

        <RoomModal
          roomId={roomId}
          isOpen={isRoomModalOpen}
          onRequestClose={handleCloseRoomModal}
        />
      </main>
    </div>
  );
}
