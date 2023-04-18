import React from 'react';
import './BigVideoBox.scss';

interface Props {
  title: string;
  position: number;
  imageDesktop: string;
  imageMobile: string;
  onMouseEnter: any;
  onMouseLeave: any;
}

const BigVideoBox = ({
  title,
  position,
  imageDesktop,
  imageMobile,
  ...props
}: Props) => {
  const getPositionClass = (position: number) => {
    switch (position) {
      case 0:
        return 'outline outline-first';
      case 1:
        return 'outline outline-second';
      case 2:
        return 'outline outline-third';
      default:
        return 'outline outline-white';
    }
  };

  const colorOfNumber = getPositionClass(position);

  return (
    <div className="top-ten-box">
      <p className={`top-ten-box__number ${colorOfNumber}`}>{position + 1}</p>
      <div className="top-ten-box__image" {...props}>
        <picture>
          <source srcSet={imageMobile} media="(max-width: 680px)" />
          <img src={imageDesktop} alt={title} className="radius" />
        </picture>
      </div>
    </div>
  );
};

export default BigVideoBox;
