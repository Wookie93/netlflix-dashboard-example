import React from 'react';
import './ActionButton.scss';

interface ActionButtonProps {
  children: React.ReactNode;
  tooltip?: string;
  ariaLabel: string;
}

const ActionButton = ({ children, tooltip, ariaLabel }: ActionButtonProps) => {
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  const showTooltip = () => {
    const tooltipElement = tooltipRef.current;
    const buttonElement = buttonRef.current;

    if (tooltipElement && buttonElement) {
      const tooltipHalfWidth = Math.floor(
        tooltipElement.getBoundingClientRect().width / 2
      );
      const left = buttonElement.offsetLeft;
      const middle = buttonElement.getBoundingClientRect().width / 2;

      const positionX: number = tooltipHalfWidth - (left + middle);

      tooltipElement.style.left =
        positionX > 0 ? `-${positionX}px` : `${-positionX}px`;
      tooltipElement.classList.add('visible');
    }
  };

  const hideTooltip = () => {
    const tooltipElement = tooltipRef.current;
    if (tooltipElement) {
      tooltipElement.classList.remove('visible');
    }
  };

  return (
    <div
      className="action-btn"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      aria-label={ariaLabel}
    >
      {tooltip ? (
        <div className="action-btn__tooltip" ref={tooltipRef}>
          {tooltip}
        </div>
      ) : null}
      <button className="action-btn__innerwrap" ref={buttonRef}>
        {children}
      </button>
    </div>
  );
};

export default ActionButton;
