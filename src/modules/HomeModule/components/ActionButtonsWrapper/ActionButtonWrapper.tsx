import React from 'react';
import ActionButton from '../ActionButton/ActionButton';
import LikeItTooltip from '../LikeItTooltip/LikeItTooltip';

import './ActionButtonWrapper.scss';

const ActionButtonsWrapper = () => {
  const [isVisible, setVisibility] = React.useState(false);
  return (
    <>
      <div className="actions">
        <ActionButton ariaLabel="play">
          <img
            src="src/assets/images/icons/play-small.png"
            width="32"
            height="32"
            alt=""
          />
        </ActionButton>
        <ActionButton tooltip="Dodaj do mojej listy" ariaLabel="add to list">
          <img
            src="src/assets/images/icons/add.png"
            alt=""
            width="32"
            height="32"
          />
        </ActionButton>
        <div
          className="like-it-wrapper"
          onMouseEnter={() => setVisibility(true)}
        >
          <ActionButton ariaLabel="Like it">
            <img
              src="src/assets/images/icons/like-btn.png"
              alt=""
              width="32"
              height="32"
            />
          </ActionButton>
          <LikeItTooltip
            isvisible={isVisible}
            onMouseLeave={() => setVisibility(false)}
          />
        </div>
      </div>
      <div className="more">
        <img
          src="src/assets/images/icons/arrow-down-small.png"
          alt=""
          width="32"
          height="32"
        />
      </div>
    </>
  );
};

export default ActionButtonsWrapper;
