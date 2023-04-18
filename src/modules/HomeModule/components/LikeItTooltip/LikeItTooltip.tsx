import React from 'react';
import ActionButton from '../ActionButton/ActionButton';

import './LikeItTooltip.scss';

interface Props {
  isvisible: boolean;
  onMouseLeave: any;
}

const LikeItTooltip = ({ isvisible, onMouseLeave }: Props) => {
  return (
    <div
      className={`like-it-tooltip ${isvisible ? 'visible' : 'not-visible'}`}
      onMouseLeave={onMouseLeave}
    >
      <ActionButton tooltip="To nie dla mnie" ariaLabel="Not like it">
        <img
          src="src/assets/images/icons/not-like.png"
          alt=""
          width="14"
          height="14"
        />
      </ActionButton>
      <ActionButton tooltip="Podoba mi się" ariaLabel="Like it">
        <img
          src="src/assets/images/icons/like.png"
          alt=""
          width="14"
          height="14"
        />
      </ActionButton>
      <ActionButton tooltip="Uwielbiam to" ariaLabel="I love it">
        <img
          src="src/assets/images/icons/heart.png"
          alt=""
          width="14"
          height="14"
        />
      </ActionButton>
    </div>
  );
};

export default LikeItTooltip;
