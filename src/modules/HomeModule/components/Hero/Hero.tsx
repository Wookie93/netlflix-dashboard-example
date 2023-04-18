import React from 'react';
import Button from '../Button/Button';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__markers">
          <span className="top-ten">
            <span>top</span>
            <span className="ten">10</span>
          </span>
          <span className="today-popular">Nr 5 wśród seriali dzisiaj</span>
        </div>
        <div className="hero__title">
          <picture>
            <source
              srcSet="src/assets/images/hero/wen-title.png"
              media="(max-width: 680px)"
            />
            <source
              srcSet="src/assets/images/hero/wen-title-tablet.png"
              media="(max-width: 960px)"
            />
            <img
              src="src/assets/images/hero/wen-title-desktop.png"
              alt="hero image"
              className="radius"
            />
          </picture>
        </div>
        <div className="hero__description">
          Makabrycznie bystra i sarkastyczna Wednesday Addams prowadzi śledztwo
          w sprawie serii zabójstw, przysparzając sobie nowych przyjaciół i
          wrogów w Akademii Nevermore.
        </div>
        <div className="hero__btn-wrap">
          <Button dataType="play" />
          <Button dataType="moreInfo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
