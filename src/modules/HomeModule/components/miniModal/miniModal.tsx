import React from 'react';
import ReactModal from 'react-modal';
import ActionButtonWrapper from '../ActionButtonsWrapper/ActionButtonWrapper';

import './miniModal.scss';

interface MiniModalProps {
  isOpen: boolean;
  trailerSrc: string;
  modalPosition: {
    middleY: number;
    middleX: number;
  };
  handleCloseModal: any;
}

const MiniModal = ({
  isOpen,
  trailerSrc,
  modalPosition,
  handleCloseModal,
}: MiniModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      appElement={document.getElementById('root')!}
      style={{
        overlay: {
          top: `${modalPosition.middleY}px`,
          left: `${modalPosition.middleX}px`,
          width: '360px',
        },
        content: {
          top: `0`,
          left: `0`,
        },
      }}
      className={`videoModal ${isOpen ? 'open' : 'closed'}`}
    >
      <div onMouseLeave={handleCloseModal}>
        <div className="videoModal__top only-mobile">
          <button className="videoModal__closeBtn" onClick={handleCloseModal}>
            X
          </button>
        </div>
        <div className="videoModal__image">
          <iframe
            width="360"
            height="190"
            src={trailerSrc}
            frameBorder="0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="videoModal__content">
          <div className="videoModal__btn-wrapper">
            <ActionButtonWrapper />
          </div>
          <div className="videoModal__episodeInfo">
            <div className="currnet-episode">
              <div className="title">W róg</div>
              <div className="time">24 z 58min</div>
            </div>
            <div className="videoModal__progressBar"></div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default MiniModal;
