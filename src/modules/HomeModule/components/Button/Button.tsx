import React from 'react';
import './Button.scss';

const Button = ({ dataType = '', text }: any) => {
  // dataType: 'primary', 'secondary', 'play', 'moreInfo'

  switch (dataType) {
    case 'primary':
      return (
        <a href="#" className="button-link">
          <button className="button button-primary">{text}</button>;
        </a>
      );
    case 'secondary':
      return (
        <a href="#" className="button-link">
          <button className="button button-secondary">{text}</button>
        </a>
      );
    case 'play':
      return (
        <a href="#" className="button-link">
          <button className="button button-primary play">
            <img src="assets/images/icons/play.png" alt="play-info" />
            Odtwórz
          </button>
        </a>
      );
    case 'moreInfo':
      return (
        <a href="#" className="button-link">
          <button className="button button-secondary moreInfo">
            <img src="assets/images/icons/info-circle.png" alt="more-info" />
            Więcej informacji
          </button>
        </a>
      );
    default:
      return (
        <a href="#" className="button-link">
          <button className="button button-primary">{text}</button>
        </a>
      );
  }
};

export default Button;
