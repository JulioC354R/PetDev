import React from 'react';
import Modal from 'react-modal';
import styles from './Resolucao.css';

const Resolucao = ({ isOpen, onClose, correctAnswersCount }) => {
  let resultMessage = "Ops, parece que você precisa rever o conteúdo! Você marcou:";
  let resultColor;
  let resultMessageText = "Tenho certeza que na próxima tentativa você irá gabaritar todo o quiz! 💪🎮";

  if (correctAnswersCount === 6) {
    resultMessage = 'Parabéns pela sua pontuação incrível! Você marcou:';
    resultColor = '#24FF00';
    resultMessageText = "mostrando sua habilidade e dedicação. Continue assim e conquiste novos recordes! 💪🎮";
  } else if (correctAnswersCount >= 3) {
    resultColor = 'yellow';
  } else {
    resultColor = 'red';
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Resultado do Quiz"
      ariaHideApp={false}
      className="configModal"
    >
      <div className="modalContent">
        <img
          src="/images/logo_pet_dev.png"
          alt="O logo do PetDev"
          data-testid="navbar-item-logo"
          className={styles.logo}
        />
        <div className="modalText">
          <h2>{resultMessage}</h2>
          <p style={{ color: resultColor }}>{correctAnswersCount}/6 pontos!</p>
          <h2>{resultMessageText}</h2>
        </div>
      </div>
      <button className="modalButton" onClick={onClose}>X</button>
    </Modal>
  );
};

export default Resolucao;
